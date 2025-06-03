import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, BookOpen, Image, Users, Calendar, Info, UtensilsCrossed, CircleCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
  { name: 'Menu', path: '/menu', icon: <BookOpen className="w-5 h-5" /> },
  { name: 'Gallery', path: '/gallery', icon: <Image className="w-5 h-5" /> },
  { name: 'Stories', path: '/stories', icon: <Users className="w-5 h-5" /> },
  { name: 'Events', path: '/events', icon: <Calendar className="w-5 h-5" /> },
  { name: 'About', path: '/about', icon: <Info className="w-5 h-5" /> },
];

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const expandTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const collapseTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const sidebarRef = React.useRef<HTMLDivElement>(null);

  // Handle desktop sidebar expansion with debounce
  const handleMouseEnter = () => {
    // Clear any pending collapse timeout
    if (collapseTimeoutRef.current) {
      clearTimeout(collapseTimeoutRef.current);
      collapseTimeoutRef.current = null;
    }
    
    // Set expand timeout (small delay to prevent accidental triggers)
    if (!isExpanded && !expandTimeoutRef.current) {
      expandTimeoutRef.current = setTimeout(() => {
        setIsExpanded(true);
        expandTimeoutRef.current = null;
      }, 100);
    }
  };

  const handleMouseLeave = () => {
    // Clear any pending expand timeout
    if (expandTimeoutRef.current) {
      clearTimeout(expandTimeoutRef.current);
      expandTimeoutRef.current = null;
    }
    
    // Set collapse timeout with a longer delay to prevent accidental collapse
    // when mouse briefly moves out of the sidebar
    if (isExpanded && !collapseTimeoutRef.current) {
      collapseTimeoutRef.current = setTimeout(() => {
        // Only collapse if we're not interacting with the sidebar
        if (document.activeElement !== sidebarRef.current) {
          setIsExpanded(false);
        }
        collapseTimeoutRef.current = null;
      }, 800); // Increased from 300ms to 800ms
    }
  };

  // Handle click on sidebar to keep it expanded
  const handleSidebarClick = () => {
    // Always keep sidebar expanded when clicked and clear any pending collapse timeouts
    if (collapseTimeoutRef.current) {
      clearTimeout(collapseTimeoutRef.current);
      collapseTimeoutRef.current = null;
    }
    
    setIsExpanded(true);
  };
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => {
      if (expandTimeoutRef.current) clearTimeout(expandTimeoutRef.current);
      if (collapseTimeoutRef.current) clearTimeout(collapseTimeoutRef.current);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile menu toggle button - only visible on small screens */}
      <button 
        className="fixed top-4 left-4 z-50 p-2 rounded-full bg-black/70 border border-[#FF6F1F]/30 text-white md:hidden flex items-center justify-center"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 text-[#FF6F1F]" />
        ) : (
          <Menu className="w-6 h-6 text-[#FF6F1F]" />
        )}
      </button>

      {/* Mobile menu overlay */}
      <div 
        className={cn(
          'fixed inset-0 bg-black/90 z-40 md:hidden transition-opacity duration-300',
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      />

      {/* Vertical navbar - different styles for mobile and desktop */}
      <aside
        ref={sidebarRef}
        className={cn(
          'fixed z-50 flex flex-col transition-all duration-500',
          // Desktop styles
          'md:top-0 md:left-0 md:h-full md:py-8 md:shadow-xl',
          isExpanded ? 'md:w-64' : 'md:w-20',
          // Mobile styles
          'top-0 left-0 h-full w-[70%] max-w-[300px]',
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        )}
        onClick={handleSidebarClick}
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.95) 0%,
              rgba(20,10,5,0.95) 50%,
              rgba(0,0,0,0.98) 100%
            )
          `,
          borderRight: '1px solid rgba(255,111,31,0.2)',
          borderTopRightRadius: '1.5rem',
          borderBottomRightRadius: '1.5rem',
          boxShadow: '0 0 20px rgba(0,0,0,0.5), 0 0 10px rgba(255,111,31,0.1)',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        tabIndex={0}
        onFocus={handleMouseEnter}
      >
        {/* Fixed height container for the entire sidebar content */}
        <div className="flex flex-col h-full w-full">
          {/* Logo area - fixed height and width to prevent blinking during transitions */}
          <div className="h-[180px] flex items-center justify-center">
            <div 
              className={cn(
                'transition-all duration-500 overflow-visible',
                isExpanded || isMobileMenuOpen ? 'w-[95%] max-w-[300px]' : 'w-16'
              )}
              style={{
                height: isExpanded || isMobileMenuOpen ? '150px' : '70px', // Further enlarge height when expanded
                aspectRatio: isExpanded || isMobileMenuOpen ? 'auto' : '1 / 1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'height 0.5s ease-in-out'
              }}
            >
              <img 
                src="/lovable-uploads/logo.png" 
                alt="Kenny's Bar Logo" 
                className="w-full h-auto object-contain transition-all duration-500"
                aria-label="Kenny's logo"
                style={{
                  maxHeight: '100%',
                  objectPosition: 'center',
                  transform: isExpanded || isMobileMenuOpen ? 'scale(1.32)' : 'scale(1)'
                }}
              />
            </div>
          </div>

          {/* Navigation links - each link has fixed height */}
          {/* Added mt-8 to create more spacing between logo and nav links */}
          <nav className="flex flex-col w-full px-2 mt-8 navbar-scrollbar overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'flex items-center px-4 rounded-xl transition-all duration-300',
                    'text-base uppercase tracking-wider font-medium relative',
                    isActive 
                      ? 'bg-[#FF6F1F]/20 text-[#FF6F1F] font-bold' 
                      : 'text-white hover:bg-black/30 hover:text-[#FF6F1F]',
                    isExpanded || isMobileMenuOpen ? 'justify-start' : 'justify-center',
                    'h-[52px] my-3' // Increased vertical spacing between buttons
                  )}
                >
                  {isActive && (
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-[#FF6F1F] rounded-r-md" />
                  )}
                  <div className={cn(
                    'flex items-center justify-center w-[24px] h-[24px] flex-shrink-0', // Fixed width and height for icon container
                    isActive ? 'text-[#FF6F1F]' : 'text-white'
                  )}>
                    <div className="flex items-center justify-center w-5 h-5">
                      {link.icon}
                    </div>
                  </div>
                  <span 
                    className={cn(
                      'transition-all duration-300 ml-3 whitespace-nowrap overflow-hidden',
                      (isExpanded || isMobileMenuOpen) ? 'opacity-100 max-w-[200px]' : 'opacity-0 max-w-0 md:w-0'
                    )}
                  >
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Book table button - fixed height */}
          <div className={cn(
            'px-4 py-4 mt-auto flex',
            isExpanded || isMobileMenuOpen ? 'justify-start' : 'justify-center'
          )}>
            <Link to="/book-table">
              <Button 
                variant="outline" 
                className={cn(
                  isExpanded || isMobileMenuOpen 
                    ? 'w-full h-[56px] px-4' 
                    : 'w-[56px] h-[56px] p-0 flex items-center justify-center',
                  'border-[#FF6F1F] text-[#FF6F1F] bg-black/30',
                  'hover:bg-[#FF6F1F] hover:text-white transition-all duration-300',
                  'rounded-xl font-bold shadow-lg',
                  'overflow-hidden relative'
                )}
              >
                {/* Glow effect in the background */}
                <div className="absolute -inset-[1px] bg-[#FF6F1F]/10 rounded-xl blur-sm opacity-70" />
                <div className="w-[26px] h-[26px] flex items-center justify-center flex-shrink-0 relative z-10">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6F1F]/20 p-1">
                    <UtensilsCrossed className="w-4 h-4" />
                  </div>
                </div>
                <span 
                  className={cn(
                    'transition-all duration-300 ml-3 whitespace-nowrap overflow-hidden font-bold',
                    (isExpanded || isMobileMenuOpen) ? 'opacity-100 max-w-[200px] block' : 'opacity-0 max-w-0 w-0 h-0 p-0 m-0 block'
                  )}
                  aria-hidden={!(isExpanded || isMobileMenuOpen)}
                >
                  RESERVE NOW
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
