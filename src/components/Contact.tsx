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

const aboutDescription = `Kenny's, Bengaluru's a true neighbourhood bar, where every visit feels like coming home. We're not just a place to grab a drink; we're your community's favourite hangout, where our bartenders remember your usual and a spot at the bar always feels reserved just for you.\n\nYour Perfect Local Escape; Whether you're unwinding after a long day with our happy hour specials, cheering on your favourite team at our bar, or simply looking for a cozy pub to connect with friends, Kenny's offers the ideal setting. We've curated an exceptional experience with a focus on:\n• Warm & Welcoming Atmosphere: Enjoy the genuine hospitality that makes us Bengaluru's go-to neighbourhood bar, fostering intimate conversations and unforgettable evenings.\n• Classic Spirits: Explore a diverse selection of local and international beers, single malts, gins, and more alongside expertly mixed classic cocktails designed to delight your palate.`;

// Accent bar glow animation
const accentBarGlow = `
  @keyframes accentBarPulse {
    0%, 100% { box-shadow: 0 0 16px 4px #FF8C42AA; }
    50% { box-shadow: 0 0 32px 12px #FF8C42DD; }
  }
`;

const About = () => {
  const [showLocationPopup, setShowLocationPopup] = useState(false);

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
            
            {/* Location Button */}
            <button 
              onClick={() => setShowLocationPopup(true)}
              className="text-white/80 font-sans text-base md:text-lg font-medium mb-1 hover:text-[#FF8C42] transition-colors duration-300 cursor-pointer flex items-center gap-2 bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full px-4 py-2 w-fit"
            >
              <MapPin className="h-5 w-5 text-[#FF8C42]" />
              <span>View Our Locations</span>
            </button>
            
            {/* Contact Buttons: Phone & Email */}
            <div className="flex gap-4 mb-3 mt-4 flex-wrap">
              <a href="tel:+919317417517" className="flex-1 min-w-[140px] flex items-center justify-center gap-2 bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full px-3 py-2 transition-colors duration-300 font-medium text-white">
                <Phone className="h-4 w-4 text-[#FF8C42]" />
                <span className="text-sm">+91 9317 417 517</span>
              </a>
              <a href="mailto:info@kennys.bar" className="flex-1 min-w-[140px] flex items-center justify-center gap-2 bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full px-3 py-2 transition-colors duration-300 font-medium text-white">
                <Mail className="h-6 w-6 text-[#FF8C42]" />
                <span className="text-sm">info@kennys.bar</span>
              </a>
            </div>
            {/* Social Icons: Instagram & Facebook */}
            <div className="flex gap-4 mb-6 flex-wrap">
              <a href="https://www.instagram.com/kenny.sbar?igsh=ajFkamh0dzZueXR6" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full p-3 transition-colors duration-300" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-[#FF8C42]" />
              </a>
              <a href="https://www.facebook.com/people/Kennys-Bar/61576548480813/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full p-3 transition-colors duration-300" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-[#FF8C42]" />
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
      
      {/* Location Popup */}
      {showLocationPopup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
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
                  <div className="bg-[#FF8C42] rounded-full p-2 mt-1">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">Kenny's Bar - Marathahalli</h3>
                    <p className="text-white/80 mb-3">89/1, Monnekollal Village, Varthur Hobli, Outer Ring Road, Marathahalli, Bengaluru, Karnataka 560037</p>
                    <div className="flex gap-3">
                      <a 
                        href="https://maps.google.com/?q=89/1,+Monnekollal+Village,+Varthur+Hobli,+Outer+Ring+Road,+Marathahalli,+Bengaluru,+Karnataka+560037" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#FF8C42] hover:bg-[#E0601A] text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2"
                      >
                        <Navigation className="h-4 w-4" />
                        Get Directions
                      </a>
                      <a 
                        href="tel:+919317417517"
                        className="bg-[#FF8C42]/20 hover:bg-[#FF8C42]/40 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2"
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
    </section>
  );
};

export default About;