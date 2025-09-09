import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import GalleryPage from "./pages/GalleryPage";
import BookTablePage from "./pages/BookTablePage";
import StoriesPage from "./pages/StoriesPage";
import EventsPage from "./pages/EventsPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";
import { useEffect, useState } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { NavbarContext } from "@/components/Navbar";
import AgeVerification from "@/components/AgeVerification";

const queryClient = new QueryClient();

const ScrollButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show scroll to top button when user has scrolled down 300px
      setShowScrollTop(scrollTop > 300);
      
      // Show scroll to bottom button when user is not at the bottom
      setShowScrollBottom(scrollTop + windowHeight < documentHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 z-50 p-3 bg-[#FF8C42] hover:bg-[#E0601A] text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
      
      {showScrollBottom && (
        <button
          onClick={scrollToBottom}
          className="fixed bottom-4 right-4 z-50 p-3 bg-[#FF8C42] hover:bg-[#E0601A] text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="Scroll to bottom"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      )}
    </>
  );
};

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-32 h-32 border-4 border-[#FF8C42]/20 rounded-full animate-spin">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-[#FF8C42] rounded-full animate-spin"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/lovable-uploads/logo.png" 
              alt="Kenny's Bar Logo" 
              className="w-16 h-16 object-contain animate-pulse"
            />
          </div>
        </div>
        <p className="text-[#FF8C42] text-xl font-semibold mt-6 animate-pulse">
          Loading Kenny's Bar...
        </p>
        <div className="flex justify-center mt-4 space-x-1">
          <div className="w-2 h-2 bg-[#FF8C42] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-[#FF8C42] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-[#FF8C42] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

// Create a wrapper component that provides navbar state
const NavbarProvider = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <NavbarContext.Provider value={{ isMobileMenuOpen, isExpanded, setIsMobileMenuOpen, setIsExpanded }}>
      {children}
    </NavbarContext.Provider>
  );
};

const AppContent = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <NavbarProvider>
      <ScrollToTop />
      <SEO />
      <div className="page-content flex-1">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/book-table" element={<BookTablePage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {!isHomePage && <Footer />}
    </NavbarProvider>
  );
};

const App = () => {
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [showDeniedMessage, setShowDeniedMessage] = useState(false);

  useEffect(() => {
    // Check if user has already verified their age
    const ageVerified = localStorage.getItem('ageVerified');
    if (ageVerified === 'true') {
      setIsAgeVerified(true);
    }
  }, []);

  const handleAgeVerified = () => {
    setIsAgeVerified(true);
  };

  const handleAgeDenied = () => {
    setShowDeniedMessage(true);
  };

  // If age is denied, show denial message
  if (showDeniedMessage) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Access Denied</h1>
          <p className="text-lg text-gray-700 mb-4">
            You must be 21 or older to access this website.
          </p>
          <p className="text-gray-600">
            Thank you for your understanding.
          </p>
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="page-container min-h-screen flex flex-col">
          <Toaster />
          <Sonner />
          {!isAgeVerified && (
            <AgeVerification 
              onVerified={handleAgeVerified}
              onDenied={handleAgeDenied}
            />
          )}
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
          <ScrollButtons />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
