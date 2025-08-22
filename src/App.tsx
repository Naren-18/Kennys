import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import MenuPage from "./pages/MenuPage";
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
  const isHomePage = location.pathname === '/';

  return (
    <NavbarProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <SEO 
                title="Kenny's Bar | Best Bar in India | Premium Neighbourhood Bar Marathahalli Bengaluru"
                description="Kenny's Bar - India's premier neighbourhood bar in Marathahalli, Bengaluru. Award-winning craft cocktails, live music, premium spirits, whiskey tastings. Voted best bar in Karnataka. Experience India's top-rated bar experience."
                keywords="best bar in India, Kenny's Bar, top bar India, premium bar Bengaluru, best bar Karnataka, Marathahalli bar, craft cocktails India, live music bar, whiskey tasting India, neighbourhood bar, award winning bar, top rated bar Bengaluru, best pub India, premium spirits bar, cocktail bar India, live entertainment bar, book table bar India, Outer Ring Road bar, best nightlife Bengaluru, top bar Marathahalli, India's finest bar, luxury bar experience"
              />
              <Index />
            </>
          } />
          <Route path="/menu" element={
            <>
              <SEO 
                title="Menu | Kenny's Bar | Best Bar Menu in India | Craft Cocktails & Premium Spirits"
                description="Explore Kenny's Bar menu - India's best bar menu featuring award-winning craft cocktails, premium spirits, and delicious bar food. Experience the finest cocktail menu in Bengaluru at Marathahalli's top-rated bar."
                keywords="Kenny's Bar menu, best bar menu India, craft cocktails menu, premium spirits menu, bar food menu, cocktail menu Bengaluru, best drinks menu Karnataka, Marathahalli bar menu, top bar menu India, mixology menu, whiskey menu India"
              />
              <MenuPage />
            </>
          } />
          <Route path="/gallery" element={
            <>
              <SEO 
                title="Gallery | Kenny's Bar | Best Bar in India Photos | Marathahalli Bengaluru"
                description="Browse photos from Kenny's Bar - India's best bar experience. See our vibrant atmosphere, events, and happy customers at Marathahalli's premier neighbourhood bar in Bengaluru."
                keywords="Kenny's Bar gallery, best bar India photos, Marathahalli bar photos, Bengaluru bar images, neighbourhood bar atmosphere, bar events photos, India's top bar gallery, premium bar photos"
              />
              <GalleryPage />
            </>
          } />
          <Route path="/book-table" element={
            <>
              <SEO 
                title="Book Table | Kenny's Neighbourhood Bar | Reserve Your Spot in Marathahalli"
                description="Reserve your table at Kenny's Bar, Marathahalli. Book online for live music nights, trivia events, and whiskey tastings. Best neighbourhood bar in Bengaluru."
                keywords="book table Kenny's Bar, reserve table Marathahalli, Bengaluru bar reservation, table booking, Kenny's Bar reservation"
              />
              <BookTablePage />
            </>
          } />
          <Route path="/stories" element={
            <>
              <SEO 
                title="Stories | Kenny's Neighbourhood Bar | Customer Stories from Marathahalli"
                description="Read stories and experiences from Kenny's Bar customers. Discover why we're Marathahalli's favorite neighbourhood bar in Bengaluru."
                keywords="Kenny's Bar stories, customer experiences, Marathahalli bar reviews, neighbourhood bar testimonials, Bengaluru bar stories"
              />
              <StoriesPage />
            </>
          } />
          <Route path="/events" element={
            <>
              <SEO 
                title="Events | Kenny's Neighbourhood Bar | Live Music, Trivia & More in Marathahalli"
                description="Join us for exciting events at Kenny's Bar - live music, trivia nights, whiskey tastings, and more. Check our event calendar for Marathahalli's best neighbourhood bar."
                keywords="Kenny's Bar events, live music Marathahalli, trivia night, whiskey tasting, bar events Bengaluru, neighbourhood bar entertainment"
              />
              <EventsPage />
            </>
          } />
          <Route path="/contact" element={
            <>
              <SEO 
                title="Contact | Kenny's Neighbourhood Bar | Get in Touch | Marathahalli, Bengaluru"
                description="Contact Kenny's Bar in Marathahalli, Bengaluru. Get directions, phone number, and email. Located at Outer Ring Road, we're your friendly neighbourhood bar."
                keywords="Kenny's Bar contact, Marathahalli bar location, Bengaluru bar address, contact Kenny's Bar, Outer Ring Road bar"
              />
              <ContactPage />
            </>
          } />
          <Route path="/about" element={
            <>
              <SEO 
                title="About | Kenny's Neighbourhood Bar | Marathahalli's Premier Bar Experience"
                description="Learn about Kenny's Bar - more than a bar, we're a neighborhood living room where memories are made and stories are shared in Marathahalli, Bengaluru."
                keywords="about Kenny's Bar, Marathahalli neighbourhood bar, Bengaluru bar story, Kenny's Bar history, local bar Marathahalli"
              />
              <AboutPage />
            </>
          } />
          
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
