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
  { day: 'Monday - Friday', time: '4pm - 1am' },
  { day: 'Saturday', time: '2pm - 1am' },
  { day: 'Sunday', time: '2pm - 1pm' },
];

const Footer = () => {
  const [showLocationPopup, setShowLocationPopup] = useState(false);
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
        ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smoother animation
        type: "tween"
      }}
      style={{
        paddingLeft: '1rem',
        paddingRight: '1rem',
        paddingTop: '3rem',
        paddingBottom: '2rem'
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 lg:gap-16 w-full">
        {/* Location Section - Simplified to just the button */}
        <motion.div 
          className="text-left location-section hover:scale-105"
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
          <h2 className="text-[#FF8C42] text-2xl font-bold mb-6 tracking-wide">
            Location
          </h2>
          
          {/* Our Locations Button - Made smaller to match other buttons */}
          <button 
            onClick={() => setShowLocationPopup(true)}
            className="flex items-center gap-2 bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full px-3 py-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:translate-x-1 font-medium text-white w-max mb-4"
          >
            <MapPin className="h-4 w-4 text-[#FF8C42] transition-transform duration-200 hover:rotate-12" />
            <span className="text-sm">Our Locations</span>
          </button>
          
          {/* Contact Buttons */}
          <div className="flex flex-col gap-3 mb-4">
            <a href="tel:+919317417517" className="flex items-center gap-2 bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full px-3 py-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:translate-x-1 font-medium text-white w-max">
              <Phone className="h-4 w-4 text-[#FF8C42]" />
              <span className="text-sm">+91 9317 417 517</span>
            </a>
            <a href="mailto:info@kennys.bar" className="flex items-center gap-2 bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full px-3 py-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:translate-x-1 font-medium text-white w-max">
              <Mail className="h-5 w-5 text-[#FF8C42] transition-transform duration-200 hover:rotate-12" />
              <span className="text-sm">info@kennys.bar</span>
            </a>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-4 mb-6 flex-wrap">
            <a href="https://www.instagram.com/kenny.sbar?igsh=ajFkamh0dzZueXR6" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full p-3 transition-all duration-300 transform hover:scale-110 hover:shadow-lg" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-[#FF8C42] transition-transform duration-200 hover:rotate-12" />
            </a>
            <a href="https://www.facebook.com/people/Kennys-Bar/61576548480813/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full p-3 transition-all duration-300 transform hover:scale-110 hover:shadow-lg" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-[#FF8C42] transition-transform duration-200 hover:rotate-12" />
            </a>
          </div>
        </motion.div>
        
        {/* Explore Section */}
        <motion.div 
          className="text-left"
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
          <h3 className="text-[#FF8C42] text-xl font-bold mb-4 tracking-wide">Explore</h3>
          <ul className="flex flex-col gap-3">
            {aboutLinks.map((link) => (
              <li key={link.label} className="flex items-center gap-3">
                {link.icon}
                <Link to={link.href} className="text-white/90 hover:text-[#FF8C42] font-medium text-base transition-colors duration-200">{link.label}</Link>
              </li>
            ))}
          </ul>
        </motion.div>
        
        {/* This Week at Kenny's Section */}
        <motion.div 
          className="text-left"
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
          <h3 className="text-[#FF8C42] text-xl font-bold mb-4 tracking-wide">This Week at Kenny's</h3>
          <ul className="flex flex-col gap-2">
            {weekEvents.map((event) => (
              <li key={event.text} className="flex items-center gap-2 text-white/90 text-base">
                <span className="text-xl">{event.icon}</span>
                {event.text}
              </li>
            ))}
          </ul>
        </motion.div>
        
        {/* Hours Section */}
        <motion.div 
          className="text-left"
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
          <h3 className="text-[#FF8C42] text-xl font-bold mb-4 tracking-wide">Hours</h3>
          <ul className="divide-y divide-white/10">
            {hours.map((h) => (
              <li key={h.day} className="flex justify-between items-center py-1 text-white/90 text-base">
                <span>{h.day}</span>
                <span className="font-semibold">{h.time}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      
      {/* Copyright and Credits */}
      <motion.div 
        className="mt-10 pt-8 border-t border-white/20 text-center text-sm"
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

      {/* Location Popup */}
      {showLocationPopup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ 
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="bg-black/90 border border-[#FF8C42]/30 rounded-2xl p-8 max-w-2xl w-full relative"
          >
            <button
              onClick={() => setShowLocationPopup(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            
            <h2 className="text-2xl font-bold text-[#FF8C42] mb-6 text-center">Our Locations</h2>
            
            <div className="space-y-6">
              {/* Current Location - Marathahalli */}
              <div className="bg-[#FF8C42]/10 rounded-xl p-6 border border-[#FF8C42]/20">
                <div className="flex items-start gap-4">
                  <div className="bg-[#FF8C42]/20 rounded-full p-2 mt-1">
                    <MapPin className="h-5 w-5 text-[#FF8C42]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">Kenny's Bar - Marathahalli</h3>
                    <p className="text-white/80 mb-3">89/1, Monnekollal Village, Varthur Hobli, Outer Ring Road, Marathahalli, Bengaluru, Karnataka 560037</p>
                    <div className="flex gap-3">
                      <a 
                        href="https://maps.google.com/?q=Kenny's+Bar+Marathahalli" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#FF8C42] text-white px-4 py-2 rounded-lg hover:bg-[#E0601A] transition-colors flex items-center gap-2"
                      >
                        <Navigation className="h-4 w-4" />
                        Get Directions
                      </a>
                      <a 
                        href="tel:+919317417517"
                        className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2"
                      >
                        <Phone className="h-4 w-4" />
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Upcoming Location - Hyderabad */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-[#FF8C42] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Coming Soon
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-full p-2 mt-1">
                    <MapPin className="h-5 w-5 text-white/60" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white/80 mb-2">Kenny's Bar - Hyderabad</h3>
                    <p className="text-white/60 mb-3">Location details will be announced soon. Stay tuned for updates!</p>
                    <div className="flex gap-3">
                      <button 
                        disabled
                        className="bg-white/10 text-white/50 px-4 py-2 rounded-lg cursor-not-allowed flex items-center gap-2"
                      >
                        <MapPin className="h-4 w-4" />
                        Location TBA
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-white/60 text-sm">Follow us on social media for updates on our new location!</p>
            </div>
          </motion.div>
        </div>
      )}
    </motion.footer>
  );
};

export default Footer;
