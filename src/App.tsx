import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MenuPage from "./pages/MenuPage";
import GalleryPage from "./pages/GalleryPage";
import BookTablePage from "./pages/BookTablePage";
import StoriesPage from "./pages/StoriesPage";
import EventsPage from "./pages/EventsPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

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
            <ScrollToTop />
            <div className="page-content flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/book-table" element={<BookTablePage />} />
                <Route path="/stories" element={<StoriesPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
          <ScrollButtons />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
