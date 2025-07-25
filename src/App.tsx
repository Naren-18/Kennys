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

const queryClient = new QueryClient();

const ScrollButtons = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        right: "20px",
        bottom: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        zIndex: 999,
      }}
    >
      
      <style>{`
        .scroll-uiverse-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(#ffb97a, #fff3e5);
          border: none;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0px 0px 0px 4px rgba(255, 111, 31, 0.15);
          cursor: pointer;
          transition-duration: 0.3s;
          overflow: hidden;
          position: relative;
        }
        .svgIcon {
          width: 22px;
          height: 22px;
          transition-duration: 0.3s;
        }
        .svgIcon path {
          fill: #FF6F1F;
          transition: fill 0.3s;
        }
        .scroll-uiverse-btn:hover {
          background-color: #FF6F1F;
        }
        .scroll-uiverse-btn:hover .svgIcon path {
          fill: #fff;
        }
      `}</style>
    </div>
  );
};

const Loader = () => {
  const text = "KENNY'S ";
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black">
      <div className="flex gap-1 funky-loader-text font-sans" aria-label="KENNY'S">
        {text.split("").map((char, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              animation: `letterBounce 4s cubic-bezier(.22,1,.36,1) forwards, funkyGlow 2.5s infinite alternate`,
              animationDelay: `${i * 0.09 + 0.1}s`,
              opacity: 0,
              color: "#FF8C42",
              textShadow: "0 2px 16px #FF8C42aa, 0 0 0 2px #FF8C42, 0 1px 0 #fff, 0 4px 12px rgba(0,40,120,0.10), 0 0 24px rgba(255, 111, 31, 0.10)",
              fontFamily: "Trebuchet MS, sans-serif",
              fontSize: "4.2rem",
              letterSpacing: "0.13em",
            }}
          >
            {char}
          </span>
        ))}
      </div>
      
      <style>{`
        @keyframes letterBounce {
          0% { opacity: 0; transform: translateY(40px) scale(0.7) rotate(-8deg);}
          60% { opacity: 1; transform: translateY(-10px) scale(1.12) rotate(2deg);}
          80% { opacity: 1; transform: translateY(2px) scale(0.98) rotate(-1deg);}
          100% { opacity: 1; transform: translateY(0) scale(1) rotate(0);}
        }
        @keyframes funkyGlow {
          0% { text-shadow: 0 2px 16px #FF8C42aa, 0 0 0 2px #FF8C42, 0 1px 0 #fff, 0 4px 12px rgba(0,40,120,0.10), 0 0 24px rgba(255, 111, 31, 0.10);}
          100% { text-shadow: 0 4px 32px #FF8C42, 0 0 0 4px #FF8C42, 0 2px 0 #fff, 0 8px 24px rgba(0,40,120,0.18), 0 0 48px rgba(255, 111, 31, 0.18);}
        }
        @keyframes typeIn {
          0% { opacity: 0; width: 0; }
          10% { opacity: 1; width: 0; }
          100% { opacity: 1; width: 100%; }
        }
      `}</style>
    </div>
  );
};

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <ScrollToTop />
      <div className="page-content flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <SEO 
                title="Kenny's Neighbourhood Bar | Best Bar in Marathahalli, Bengaluru | Live Music & Events"
                description="Kenny's Bar - Marathahalli's premier neighbourhood bar offering craft cocktails, live music, trivia nights, and whiskey tastings. Book your table today for an unforgettable experience in Bengaluru."
                keywords="Kenny's Bar, Marathahalli bar, Bengaluru bar, neighbourhood bar, craft cocktails, live music, trivia night, whiskey tasting, book table, Outer Ring Road, best bar Bengaluru"
              />
              <Index />
            </>
          } />
          <Route path="/menu" element={
            <>
              <SEO 
                title="Menu | Kenny's Neighbourhood Bar | Craft Cocktails & Bar Food in Marathahalli"
                description="Explore Kenny's Bar menu featuring craft cocktails, classic spirits, and delicious bar food. Limited choices, familiar items, perfect for pairing with drinks in Marathahalli, Bengaluru."
                keywords="Kenny's Bar menu, craft cocktails, bar food, Marathahalli restaurant, Bengaluru bar menu, classic spirits, pub food"
              />
              <MenuPage />
            </>
          } />
          <Route path="/gallery" element={
            <>
              <SEO 
                title="Gallery | Kenny's Neighbourhood Bar | Photos from Marathahalli's Best Bar"
                description="Browse photos from Kenny's Bar - see our vibrant atmosphere, events, and happy customers. Experience the best neighbourhood bar in Marathahalli, Bengaluru."
                keywords="Kenny's Bar gallery, Marathahalli bar photos, Bengaluru bar images, neighbourhood bar atmosphere, bar events photos"
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
    </>
  );
};

const App = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 5000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) return <Loader />;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="page-container min-h-screen flex flex-col">
          <Toaster />
          <Sonner />
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
