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
      {visible && (
        <>
          <button
            className="scroll-uiverse-btn"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <svg className="svgIcon" viewBox="0 0 20 20">
              <path
                d="M10 4.167a.833.833 0 0 1 .589.244l5 5a.833.833 0 1 1-1.178 1.178l-3.244-3.244V15a.833.833 0 1 1-1.666 0V7.345L5.255 10.59A.833.833 0 1 1 4.077 9.41l5-5A.833.833 0 0 1 10 4.167z"
                style={{ fill: "#FF6F1F" }}
              />
            </svg>
          </button>
          <button
            className="scroll-uiverse-btn"
            onClick={scrollToBottom}
            aria-label="Scroll to bottom"
          >
            <svg className="svgIcon" viewBox="0 0 20 20">
              <path
                d="M10 15.833a.833.833 0 0 1-.589-.244l-5-5a.833.833 0 1 1 1.178-1.178l3.244 3.244V5a.833.833 0 1 1 1.666 0v7.655l3.244-3.244a.833.833 0 1 1 1.178 1.178l-5 5a.833.833 0 0 1-.589.244z"
                style={{ fill: "#FF6F1F" }}
              />
            </svg>
          </button>
        </>
      )}
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

// Loader component with animated KENNY'S using SVG for border and fluid fill
const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <span className="loader-fadein-text">KENNY'S</span>
      <style>{`
        .loader-fadein-text {
          font-family: 'Anton', sans-serif;
          font-size: 5rem;
          font-weight: 700;
          color: #FF6F1F;
          opacity: 0;
          animation: fadeIn 3s ease-in forwards;
          letter-spacing: 0.12em;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="page-container">
          {/* Static logo in top-left corner */}
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <div className="page-content">
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
          </BrowserRouter>
          <ScrollButtons />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
