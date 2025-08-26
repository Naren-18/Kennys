// src/components/Hero.tsx
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Promotions from '@/components/Promotions';
import { Calendar, Home, Utensils, MapPin, Users, ShoppingBag, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import BeerPourLogo from './BeerPourLogo';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [showSpecialOffers, setShowSpecialOffers] = useState(false);
  const [heroShrunk, setHeroShrunk] = useState(false);
  const [showAddress, setShowAddress] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const timer = setTimeout(() => {
      setShowSpecialOffers(true);
      setHeroShrunk(true);
    }, 5000); // 5 seconds delay
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;
      // Show if scrolled to within 40px of bottom
      setShowAddress(scrollY + windowHeight >= bodyHeight - 40);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Background Video Section */}
      {/* TODO: Replace '/videos/bar-ambience.mp4' with your video path in the public folder. */}
      {/* TODO: Replace '/images/bar-poster.jpg' with your poster image path in the public folder. */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
          poster="/images/hero-poster.jpg"
        >
          <source src="/background.MOV" type="video/quicktime" />
          {/* You can add more <source> tags for different video formats if needed, e.g., webm, ogg */}
          Your browser does not support the video tag.
          {/* Fallback: You could place an <img> tag here for browsers that don't support video */}
          {/* e.g., <img src="/images/bar-background.jpg" alt="Ambiance of Kenny's Bar" className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2" /> */}
        </video>
        {/* Dark overlay for better text contrast over the video */}
        <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Tailwind CSS for rgba(0,0,0,0.6) */}
      </div>

      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 md:pt-24 lg:pt-28">
        {/* Content */}
        <div className="container mx-auto px-4 relative z-30 text-center max-w-6xl flex flex-col items-center">
          {/* Glass-style KENNY'S heading */}
          <AnimatePresence>
            <motion.div
              key="hero-main"
              layout
              initial={{ opacity: 1, y: 0, scale: 1 }}
              animate={heroShrunk
                ? { opacity: 1, y: -120, scale: 0.7 }
                : { opacity: 1, y: 0, scale: 1 }
              }
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="w-full flex flex-col items-center mt-6 md:mt-0"
              style={{ height: heroShrunk ? '190px' : '340px', transition: 'height 1.2s cubic-bezier(0.4,0,0.2,1)' }}
            >
              <motion.div
                layout
                className={`mb-4 flex justify-center transition-all duration-700 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: loaded ? '100ms' : '0ms', position: 'relative' }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              >
                <BeerPourLogo/>
              </motion.div>
              {/* Redesigned Subtitle */}
              <motion.div
                layout
                className={
                  `max-w-4xl mx-auto transition-all duration-700 ease-out ` +
                  (loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5') +
                  (heroShrunk ? ' mb-4 sm:mb-4' : ' mb-6')
                }
                style={{ transitionDelay: loaded ? '200ms' : '0ms' }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              >
                <p
                  className={
                    "text-[#FF8C42] font-sans font-medium mx-auto tracking-wider leading-tight " +
                    (heroShrunk
                      ? "text-xl md:text-4xl"
                      : "text-base md:text-3.5xl")
                  }
                  style={{
                    fontSize: heroShrunk ? undefined : undefined,
                    transition: 'font-size 0.8s cubic-bezier(0.4,0,0.2,1)'
                  }}
                >
                  Neighbourhood Bar
                </p>
                {/* Reserve Now, Events, and Menu Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 w-full max-w-xl mx-auto">
                  <Link to="/book-table" className="flex-1">
                    <button className="flex items-center justify-center w-full sm:w-44 whitespace-nowrap py-3 px-8 text-center uppercase font-semibold tracking-wide text-[#FF6F1F] text-lg bg-transparent border-2 border-[#FF6F1F] hover:bg-[#FF6F1F] hover:text-white rounded-full transform hover:scale-105 transition-all duration-300 ease-in-out">
                      Reserve Now
                    </button>
                  </Link>
                  <Link to="/events" className="flex-1">
                    <button className="w-full sm:w-44 whitespace-nowrap py-3 px-8 text-center uppercase font-semibold tracking-wide text-[#FF6F1F] text-lg bg-transparent border-2 border-[#FF6F1F] hover:bg-[#FF6F1F] hover:text-white rounded-full transform hover:scale-105 transition-all duration-300 ease-in-out">
                      Events
                    </button>
                  </Link>
                 
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
          {/* Special Offers section fade/slide in */}
          <AnimatePresence>
            {showSpecialOffers && (
              <motion.div
                key="special-offers"
                layout
                initial={{
                  opacity: 0,
                  y: 120,
                  marginTop: heroShrunk ? 8 : 32 // fallback, will be overridden by style below
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  marginTop: heroShrunk ? 8 : 32 // fallback, will be overridden by style below
                }}
                exit={{ opacity: 0, y: 120 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="w-full"
                style={{
                  marginTop: heroShrunk
                    ? '0rem' // no gap after transition on mobile
                    : '2rem',  // mobile before: larger gap
                  // On md+ screens, the parent div's marginTop (1.5rem/6rem) will take over
                }}
              >
                <div
                  className="transition-all duration-700"
                >
                  <Promotions loaded={loaded} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Info Cards Section - below Promotions */}
        <div className="w-full flex flex-col items-center justify-center mt-12 gap-10 z-30">
          <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
            {/* Commented out cards remain the same */}
          </div>
        </div>
      </section>
      
      {/* Location Cards at the bottom of Hero */}
      <div className="w-full flex justify-center mt-12 mb-8">
        <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto px-4">
          {/* Current Location - Bengaluru */}
          <div className="bg-black/60 backdrop-blur-md border border-[#FF6F1F]/40 rounded-2xl shadow-xl px-8 py-6 flex items-center gap-6 flex-1">
            <div className="bg-[#1a120b] rounded-full w-14 h-14 flex items-center justify-center shadow-md">
              <MapPin className="text-[#FF8C42] w-7 h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-lg md:text-xl font-semibold text-[#FF8C42] mb-1 truncate">Kenny's Bar, Bengaluru</div>
              <div className="text-white/90 text-base md:text-lg leading-snug mb-2">4th Floor, NTR Royal Plaza, Home Building, Outer Ring Rd, Marathahalli Village, Marathahalli, Bengaluru, Karnataka 560037</div>
              <div className="flex items-center gap-2">
                <Phone className="text-[#FF8C42] w-4 h-4" />
                <a href="tel:+919317417517" className="text-[#FF8C42] hover:text-white transition-colors text-sm md:text-base font-medium">
                  +91 93174 17517
                </a>
              </div>
            </div>
          </div>
          
          {/* Hyderabad Location */}
          <div className="bg-black/60 backdrop-blur-md border border-[#FF8C42]/40 rounded-2xl shadow-xl px-8 py-6 flex items-center gap-6 flex-1">
            <div className="bg-[#1a120b] rounded-full w-14 h-14 flex items-center justify-center shadow-md">
              <MapPin className="text-[#FF8C42] w-7 h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-lg md:text-xl font-semibold text-[#FF8C42] mb-1 truncate">Kenny's Bar, Hyderabad</div>
              <div className="text-white/90 text-base md:text-lg leading-snug mb-2">The District, Myscape Rd, Financial District, Nanakramguda, Hyderabad, Telangana 500032</div>
              <div className="flex items-center gap-2">
                <Phone className="text-[#FF8C42] w-4 h-4" />
                <a href="tel:+919886343434" className="text-[#FF8C42] hover:text-white transition-colors text-sm md:text-base font-medium">
                  +91 98863 43434
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;