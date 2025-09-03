import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Phone, Mail, BookOpen, Users, Calendar, Images, MapPin, Navigation, Home, X } from "lucide-react";
import { useEffect } from 'react';

// Updated GlassCard for better glassmorphism
const GlassCard = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-xl" />
    <div className="relative z-10">{children}</div>
  </div>
);

const aboutLinks = [
  { icon: <Home className="h-5 w-5 text-[#FF8C42]" />, label: 'Home', href: '/' },
  { icon: <Users className="h-5 w-5 text-[#FF8C42]" />, label: 'Stories', href: '/stories' },
  { icon: <Calendar className="h-5 w-5 text-[#FF8C42]" />, label: 'Events', href: '/events' },
  { icon: <Images className="h-5 w-5 text-[#FF8C42]" />, label: 'Gallery', href: '/gallery' },
];

const weekEvents = [
  { icon: '', text: 'Coming Soon' },
];

const hours = [
  { day: 'Monday - Friday', time: '4pm - 1am' },
  { day: 'Saturday', time: '2pm - 1am' },
  { day: 'Sunday', time: '2pm - 1pm' },
];

const aboutDescription = `Kenny's a true neighbourhood bar, where every visit feels like coming home. We're not just a place to grab a drink; we're your community's favourite hangout, where our bartenders remember your usual and a spot at the bar always feels reserved just for you.\n\nYour Perfect Local Escape; Whether you're unwinding after a long day with our happy hour specials, cheering on your favourite team at our bar, or simply looking for a cozy pub to connect with friends, Kenny's offers the ideal setting. We've curated an exceptional experience with a focus on:\n• Warm & Welcoming Atmosphere: Enjoy the genuine hospitality that makes us Bengaluru's go-to neighbourhood bar, fostering intimate conversations and unforgettable evenings.\n• Classic Spirits: Explore a diverse selection of local and international beers, single malts, gins, and more alongside expertly mixed classic cocktails designed to delight your palate.`;

// Accent bar glow animation
const accentBarGlow = `
  @keyframes accentBarPulse {
    0%, 100% { box-shadow: 0 0 16px 4px #FF8C42AA; }
    50% { box-shadow: 0 0 32px 12px #FF8C42DD; }
  }
`;

const About = () => {
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [showInstagramPopup, setShowInstagramPopup] = useState(false);

  return (
    <section className="pt-4 pb-4 min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1500&q=80"
          alt="Bar background"
          className="absolute top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2 scale-105"
        />
        <div className="absolute inset-0 bg-black/70 z-10" />
      </div>
      {/* Accent bar glow style */}
      <style>{accentBarGlow}</style>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-20 w-full max-w-6xl mx-auto px-4 py-10 md:py-16 flex flex-col md:flex-row gap-10 md:gap-0 items-stretch md:mr-16"
      >
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.18 }}
          className="flex-1 flex flex-col justify-center bg-black/60 rounded-l-3xl p-8 md:p-12 relative"
        >
          {/* Accent Bar */}
          <div className="absolute left-0 top-8 bottom-8 w-2 bg-[#FF8C42] rounded-r-lg accent-bar-glow" style={{ minHeight: '120px', animation: 'accentBarPulse 2.5s infinite' }} />
          <div className="relative z-10 pl-6">
            <h1 className="text-white font-bold text-4xl md:text-5xl mb-4 leading-tight font-sans" style={{ letterSpacing: '0.04em' }}>About Kenny's Bar</h1>
            <p className="text-[#FF8C42] text-lg font-semibold mb-4">NEIGHBOURHOOD BAR</p>
            <p className="text-white/90 text-base md:text-lg mb-4" style={{ maxWidth: '600px' }}>{aboutDescription}</p>
            
            {/* Our Locations Button - Mobile optimized */}
            <button 
              onClick={() => setShowLocationPopup(true)}
              className="flex items-center gap-2 bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full px-4 py-3 sm:px-3 sm:py-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:translate-x-1 font-medium text-white w-full sm:w-max mb-4 justify-center sm:justify-start min-h-[44px] touch-manipulation"
            >
              <MapPin className="h-5 w-5 sm:h-4 sm:w-4 text-[#FF8C42] transition-transform duration-200 hover:rotate-12" />
              <span className="text-sm sm:text-sm">Our Locations</span>
            </button>
            
            {/* Contact Button - Email only */}
            <div className="flex flex-col gap-3 mb-4">
              <a href="mailto:info@kennys.bar" className="flex items-center gap-2 bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full px-3 py-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:translate-x-1 font-medium text-white w-max">
                <Mail className="h-5 w-5 text-[#FF8C42] transition-transform duration-200 hover:rotate-12" />
                <span className="text-sm">info@kennys.bar</span>
              </a>
            </div>
            
            {/* Social Icons: Instagram & Facebook */}
            <div className="flex gap-3 mb-4">
              <button 
                onClick={() => setShowInstagramPopup(true)}
                className="flex items-center justify-center bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full p-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:translate-x-1 min-h-[44px] min-w-[44px] touch-manipulation" 
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-[#FF8C42] transition-transform duration-200 hover:rotate-12" />
              </button>
              <a href="https://www.facebook.com/profile.php?id=61576740711799" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full p-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:translate-x-1 min-h-[44px] min-w-[44px] touch-manipulation" aria-label="Facebook">
                  <Facebook className="h-5 w-5 text-[#FF8C42] transition-transform duration-200 hover:rotate-12" />
                </a>
            </div>
            
            <a href="/book-table">
              <button className="mt-2 py-3 px-8 text-center uppercase font-semibold tracking-wide text-white text-lg bg-[#FF8C42] hover:bg-[#E0601A] rounded-full shadow-lg transition-all duration-300 ease-in-out">
                Book a Table
              </button>
            </a>
          </div>
        </motion.div>
        
        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.18, delay: 0.2 }}
          className="flex-1 flex flex-col justify-center bg-black/50 rounded-r-3xl p-8 md:p-12"
        >
          <div className="mb-8">
            <div className="mb-6">
              <h3 className="text-[#FF8C42] font-semibold text-lg mb-2">Explore</h3>
              <ul className="flex flex-col gap-3">
                {aboutLinks.map((link) => (
                  <li key={link.label} className="flex items-center gap-3">
                    {link.icon}
                    <a href={link.href} className="text-white/90 hover:text-[#FF8C42] font-['Montserrat'] font-medium text-base transition-colors duration-300">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-[#FF8C42] font-semibold text-lg mb-2">This Week at Kenny's</h3>
              <ul className="flex flex-col gap-2">
                {weekEvents.map((event) => (
                  <li key={event.text} className="flex items-center gap-2 text-white/90 font-['Montserrat'] text-base">
                    <span className="text-xl">{event.icon}</span>
                    {event.text}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[#FF8C42] font-semibold text-lg mb-2">Hours</h3>
              <ul className="divide-y divide-white/10">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between items-center py-1 text-white/90 font-['Montserrat'] text-base">
                    <span>{h.day}</span>
                    <span className="font-semibold">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Location Popup - Mobile optimized */}
      {showLocationPopup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ 
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="bg-black/90 border border-[#FF8C42]/30 rounded-2xl p-4 sm:p-6 lg:p-8 max-w-sm sm:max-w-lg lg:max-w-2xl w-full relative max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setShowLocationPopup(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/60 hover:text-white transition-colors z-10 bg-black/50 rounded-full p-2 min-h-[44px] min-w-[44px] touch-manipulation"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            
            <h2 className="text-xl sm:text-2xl font-bold text-[#FF8C42] mb-4 sm:mb-6 text-center pr-12">Our Locations</h2>
            
            <div className="space-y-4 sm:space-y-6">
              {/* Current Location - Bengaluru - Mobile optimized */}
              <div className="bg-[#FF8C42]/10 rounded-xl p-4 sm:p-6 border border-[#FF8C42]/20">
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                  <div className="bg-[#FF8C42]/20 rounded-full p-2 w-fit mx-auto sm:mx-0 sm:mt-1">
                    <MapPin className="h-5 w-5 text-[#FF8C42]" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Kenny's Bar - Bengaluru</h3>
                    <p className="text-white/80 mb-3 text-sm sm:text-base leading-relaxed">4th Floor, NTR Royal Plaza, Home Building, Outer Ring Rd, Marathahalli Village, Marathahalli, Bengaluru, Karnataka 560037</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a 
                        href="https://maps.google.com/?q=Kenny's+Bar+Marathahalli" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#FF8C42] text-white px-4 py-3 sm:px-4 sm:py-2 rounded-lg hover:bg-[#E0601A] transition-colors flex items-center justify-center gap-2 min-h-[44px] touch-manipulation text-sm sm:text-base"
                      >
                        <Navigation className="h-4 w-4" />
                        Get Directions
                      </a>
                      <a 
                        href="tel:+919317417517"
                        className="bg-white/10 text-white px-4 py-3 sm:px-4 sm:py-2 rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2 min-h-[44px] touch-manipulation text-sm sm:text-base"
                      >
                        <Phone className="h-4 w-4" />
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Upcoming Location - Hyderabad - Mobile optimized */}
              <div className="bg-[#FF8C42]/10 rounded-xl p-4 sm:p-6 border border-[#FF8C42]/20">
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                  <div className="bg-[#FF8C42]/20 rounded-full p-2 w-fit mx-auto sm:mx-0 sm:mt-1">
                    <MapPin className="h-5 w-5 text-[#FF8C42]" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Kenny's Bar - Hyderabad</h3>
                    <p className="text-white/80 mb-3 text-sm sm:text-base leading-relaxed">The District, Myscape Rd, Financial District, Nanakramguda, Hyderabad, Telangana 500032</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a 
                        href="https://maps.google.com/?q=The+District,+Myscape+Rd,+Financial+District,+Nanakramguda,+Hyderabad,+Telangana+500032" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#FF8C42] text-white px-4 py-3 sm:px-4 sm:py-2 rounded-lg hover:bg-[#E0601A] transition-colors flex items-center justify-center gap-2 min-h-[44px] touch-manipulation text-sm sm:text-base"
                      >
                        <Navigation className="h-4 w-4" />
                        Get Directions
                      </a>
                      <a 
                        href="tel:+919886343434"
                        className="bg-white/10 text-white px-4 py-3 sm:px-4 sm:py-2 rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2 min-h-[44px] touch-manipulation text-sm sm:text-base"
                      >
                        <Phone className="h-4 w-4" />
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-6 text-center">
              <p className="text-white/60 text-xs sm:text-sm">Follow us on social media for updates on our new location!</p>
            </div>
          </motion.div>
        </div>
      )}
      
      {/* Instagram Popup - Mobile optimized */}
      {showInstagramPopup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ 
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="bg-black/90 backdrop-blur-xl rounded-2xl border border-[#FF8C42]/30 p-4 sm:p-6 max-w-sm sm:max-w-md w-full mx-4 relative"
          >
            <button
              onClick={() => setShowInstagramPopup(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/60 hover:text-white transition-colors z-10 bg-black/50 rounded-full p-2 min-h-[44px] min-w-[44px] touch-manipulation"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            
            <h2 className="text-xl sm:text-2xl font-bold text-[#FF8C42] mb-4 sm:mb-6 text-center pr-12">Follow Us on Instagram</h2>
            
            <div className="space-y-3 sm:space-y-4">
              {/* Bengaluru Instagram - Mobile optimized */}
              <a 
                  href="https://www.instagram.com/kennysbar.blr?igsh=bWt1b2thb3U0cDRx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-[#FF8C42]/10 hover:bg-[#FF8C42]/20 rounded-xl p-4 border border-[#FF8C42]/20 transition-colors"
                >
                <div className="flex items-center gap-3">
                  <Instagram className="h-5 w-5 text-[#FF8C42]" />
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-[#FF8C42] transition-colors text-sm sm:text-base">Kenny's Bar - Bengaluru</h3>
                    <p className="text-xs sm:text-sm text-white/60">@kennysbar.blr</p>
                  </div>
                  <Instagram className="h-4 w-4 ml-auto opacity-60" />
                </div>
              </a>
              
              {/* Hyderabad Instagram - Mobile optimized */}
              <a
                href="https://www.instagram.com/kennysbar.hyd?igsh=MW5zOTh5MGdxdmt1Zg=="
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 sm:p-4 bg-[#FF8C42]/10 hover:bg-[#FF8C42]/20 rounded-xl border border-[#FF8C42]/20 transition-all duration-300 group min-h-[60px] touch-manipulation"
              >
                <div className="flex items-center gap-3">
                  <Instagram className="h-5 w-5 text-[#FF8C42]" />
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-[#FF8C42] transition-colors text-sm sm:text-base">Kenny's Bar - Hyderabad</h3>
                    <p className="text-xs sm:text-sm text-white/60">@kennysbar.hyd</p>
                  </div>
                  <Instagram className="h-4 w-4 ml-auto opacity-60" />
                </div>
              </a>
            </div>
            
            <div className="mt-4 sm:mt-6 text-center">
              <p className="text-white/60 text-xs sm:text-sm">Stay connected with both our locations for the latest updates!</p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default About;