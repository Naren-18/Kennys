import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, Mail, BookOpen, Users, Calendar, Images, MapPin, Navigation, Home, X } from "lucide-react";
import { motion } from 'framer-motion';
import { NavbarContext } from './Navbar';

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
  { day: 'Monday - Friday', time: '4pm - 12am' },
  { day: 'Saturday', time: '2pm - 12am' },
  { day: 'Sunday', time: '2pm - 12am' },
];

const Footer = () => {
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [showInstagramPopup, setShowInstagramPopup] = useState(false);
  const { isMobileMenuOpen, isExpanded } = useContext(NavbarContext);

  return (
    <motion.footer 
      className="bg-kenny-dark relative overflow-hidden"
      animate={{
        // Mobile: slide right when menu is open
        // Desktop: adjust margin when navbar is expanded
        x: isMobileMenuOpen ? '70%' : 0,
        marginLeft: window.innerWidth >= 768 ? (isExpanded ? '256px' : '80px') : '0',
        opacity: isMobileMenuOpen ? 0.3 : 1
      }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "tween"
      }}
      style={{
        paddingLeft: '1rem',
        paddingRight: '1rem',
        paddingTop: '2rem',
        paddingBottom: '1.5rem'
      }}
    >
      {/* Mobile-optimized grid: 1 column on mobile, 2 on tablet, 4 on desktop */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 w-full">
        {/* Location Section - Mobile optimized */}
        <motion.div 
          className="text-left location-section hover:scale-105 order-1 sm:order-1"
          animate={{
            x: isMobileMenuOpen ? 20 : 0,
            opacity: isMobileMenuOpen ? 0.7 : 1
          }}
          transition={{ 
            delay: 0.05,
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <h2 className="text-[#FF8C42] text-xl sm:text-2xl font-bold mb-4 sm:mb-6 tracking-wide">
            Location
          </h2>
          
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
          
          {/* Social Icons section removed */}
        </motion.div>
        
        {/* Explore Section - Mobile optimized */}
        <motion.div 
          className="text-left order-2 sm:order-2"
          animate={{
            x: isMobileMenuOpen ? 15 : 0,
            opacity: isMobileMenuOpen ? 0.8 : 1
          }}
          transition={{ 
            delay: 0.08,
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <h3 className="text-[#FF8C42] text-lg sm:text-xl font-bold mb-3 sm:mb-4 tracking-wide">Explore</h3>
          <ul className="flex flex-col gap-3">
            {aboutLinks.map((link) => (
              <li key={link.label} className="flex items-center gap-3">
                {link.icon}
                <Link to={link.href} className="text-white/90 hover:text-[#FF8C42] font-medium text-base transition-colors duration-200 min-h-[44px] flex items-center touch-manipulation">{link.label}</Link>
              </li>
            ))}
          </ul>
        </motion.div>
        
        {/* This Week at Kenny's Section - Mobile optimized */}
        <motion.div 
          className="text-left order-4 sm:order-3 lg:order-3"
          animate={{
            x: isMobileMenuOpen ? 10 : 0,
            opacity: isMobileMenuOpen ? 0.8 : 1
          }}
          transition={{ 
            delay: 0.11,
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <h3 className="text-[#FF8C42] text-lg sm:text-xl font-bold mb-3 sm:mb-4 tracking-wide">This Week at Kenny's</h3>
          <ul className="flex flex-col gap-2">
            {weekEvents.map((event) => (
              <li key={event.text} className="flex items-center gap-2 text-white/90 text-base min-h-[44px]">
                <span className="text-xl">{event.icon}</span>
                {event.text}
              </li>
            ))}
          </ul>
        </motion.div>
        
        {/* Hours Section - Mobile optimized */}
        <motion.div 
          className="text-left order-3 sm:order-4 lg:order-4"
          animate={{
            x: isMobileMenuOpen ? 5 : 0,
            opacity: isMobileMenuOpen ? 0.8 : 1
          }}
          transition={{ 
            delay: 0.14,
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <h3 className="text-[#FF8C42] text-lg sm:text-xl font-bold mb-3 sm:mb-4 tracking-wide">Hours</h3>
          <ul className="divide-y divide-white/10">
            {hours.map((h) => (
              <li key={h.day} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 text-white/90 text-sm sm:text-base gap-1 sm:gap-0">
                <span className="font-medium">{h.day}</span>
                <span className="font-semibold text-[#FF8C42] sm:text-white">{h.time}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      
      {/* Copyright and Credits - Mobile optimized */}
      <motion.div 
        className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/20 text-center text-xs sm:text-sm"
        animate={{
          opacity: isMobileMenuOpen ? 0.6 : 1
        }}
        transition={{ 
          delay: 0.17,
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        <p className="text-white/80">
          © {new Date().getFullYear()} Kenny's Bar. All rights reserved.
        </p>
        <p className="text-white/80 mt-2">
          Designed and maintained by{' '}
          <a
            href="https://cognitimax.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF8C42] hover:text-[#FF6F1F] transition-colors font-semibold"
          >
            Cognitimax
          </a>
        </p>
      </motion.div>

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
            className="bg-black/90 border border-[#FF8C42]/30 rounded-2xl p-4 sm:p-6 lg:p-8 max-w-sm sm:max-w-lg lg:max-w-2xl w-full relative max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setShowInstagramPopup(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/60 hover:text-white transition-colors z-10 bg-black/50 rounded-full p-2 min-h-[44px] min-w-[44px] touch-manipulation"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            
            <h2 className="text-xl sm:text-2xl font-bold text-[#FF8C42] mb-4 sm:mb-6 text-center pr-12">Follow Us on Instagram</h2>
            
            <div className="space-y-4 sm:space-y-6">
              {/* Bengaluru Instagram - Mobile optimized */}
              <div className="bg-[#FF8C42]/10 rounded-xl p-4 sm:p-6 border border-[#FF8C42]/20">
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                  <div className="bg-[#FF8C42]/20 rounded-full p-2 w-fit mx-auto sm:mx-0 sm:mt-1">
                    <Instagram className="h-5 w-5 text-[#FF8C42]" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Kenny's Bar - Bengaluru</h3>
                    <p className="text-white/80 mb-3 text-sm sm:text-base">Follow our Bengaluru location for updates, events, and behind-the-scenes content!</p>
                    <a 
                      href="https://www.instagram.com/kennysbar.blr?igsh=bWt1b2thb3U0cDRx" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#FF8C42] text-white px-4 py-3 sm:px-4 sm:py-2 rounded-lg hover:bg-[#E0601A] transition-colors flex items-center justify-center gap-2 min-h-[44px] touch-manipulation text-sm sm:text-base"
                    >
                      <Instagram className="h-4 w-4" />
                      Follow @kennysbar.blr
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Hyderabad Instagram - Mobile optimized */}
              <div className="bg-[#FF8C42]/10 rounded-xl p-4 sm:p-6 border border-[#FF8C42]/20">
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                  <div className="bg-[#FF8C42]/20 rounded-full p-2 w-fit mx-auto sm:mx-0 sm:mt-1">
                    <Instagram className="h-5 w-5 text-[#FF8C42]" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Kenny's Bar - Hyderabad</h3>
                    <p className="text-white/80 mb-3 text-sm sm:text-base">Follow our Hyderabad location for local updates, events, and exclusive content!</p>
                    <a 
                      href="https://www.instagram.com/kennysbar.hyd?igsh=MW5zOTh5MGdxdmt1Zg==" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#FF8C42] text-white px-4 py-3 sm:px-4 sm:py-2 rounded-lg hover:bg-[#E0601A] transition-colors flex items-center justify-center gap-2 min-h-[44px] touch-manipulation text-sm sm:text-base"
                    >
                      <Instagram className="h-4 w-4" />
                      Follow @kennysbar.hyd
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-6 text-center">
              <p className="text-white/60 text-xs sm:text-sm">Stay connected with both our locations for the latest updates!</p>
            </div>
          </motion.div>
        </div>
      )}

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
                        +91 9317 417 517
                      </a>
                    </div>
                    {/* Social Media Buttons for Bengaluru */}
                    <div className="flex gap-3 mt-3 justify-center sm:justify-start">
                      <a 
                        href="https://www.instagram.com/kennysbar.blr?igsh=bWt1b2thb3U0cDRx"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full p-3 transition-all duration-300 transform hover:scale-110 hover:shadow-lg flex items-center justify-center min-h-[44px] min-w-[44px] touch-manipulation"
                        aria-label="Instagram - Bengaluru"
                      >
                        <Instagram className="h-5 w-5 text-[#FF8C42] transition-transform duration-200 hover:rotate-12" />
                      </a>
                      <a 
                        href="https://www.facebook.com/people/Kennys-Bar/61576548480813/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full p-3 transition-all duration-300 transform hover:scale-110 hover:shadow-lg flex items-center justify-center min-h-[44px] min-w-[44px] touch-manipulation"
                        aria-label="Facebook - Hyderabad"
                      >
                        <Facebook className="h-5 w-5 text-[#FF8C42] transition-transform duration-200 hover:rotate-12" />
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
                        href="tel:+919637819999"
                        className="bg-white/10 text-white px-4 py-3 sm:px-4 sm:py-2 rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2 min-h-[44px] touch-manipulation text-sm sm:text-base"
                      >
                        <Phone className="h-4 w-4" />
                        +91 96378 19999
                      </a>
                    </div>
                    {/* Social Media Buttons for Hyderabad */}
                    <div className="flex gap-3 mt-3 justify-center sm:justify-start">
                      <a 
                        href="https://www.instagram.com/kennysbar.hyd?igsh=MW5zOTh5MGdxdmt1Zg==" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full p-3 transition-all duration-300 transform hover:scale-110 hover:shadow-lg flex items-center justify-center min-h-[44px] min-w-[44px] touch-manipulation"
                        aria-label="Instagram - Hyderabad"
                      >
                        <Instagram className="h-5 w-5 text-[#FF8C42] transition-transform duration-200 hover:rotate-12" />
                      </a>
                      <a 
                        href="https://www.facebook.com/people/Kennys-Bar-Hyd/61576740711799/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full p-3 transition-all duration-300 transform hover:scale-110 hover:shadow-lg flex items-center justify-center min-h-[44px] min-w-[44px] touch-manipulation"
                        aria-label="Facebook - Hyderabad"
                      >
                        <Facebook className="h-5 w-5 text-[#FF8C42] transition-transform duration-200 hover:rotate-12" />
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
    </motion.footer>
  );
};

export default Footer;
