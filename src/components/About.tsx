import React from 'react';
import { motion } from 'framer-motion';
import { Phone, BookOpen, Users, Calendar, Star, Instagram, Facebook, Mail } from 'lucide-react';
import { useEffect } from 'react';

// Updated GlassCard for better glassmorphism
const GlassCard = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-xl" />
    <div className="relative z-10">{children}</div>
  </div>
);

const aboutLinks = [
  { icon: <BookOpen className="h-5 w-5 text-[#FF8C42]" />, label: 'About Us', href: '#' },
  { icon: <Users className="h-5 w-5 text-[#FF8C42]" />, label: 'Neighborhood Stories', href: '#' },
  { icon: <Calendar className="h-5 w-5 text-[#FF8C42]" />, label: 'Events Calendar', href: '#' },
  { icon: <Star className="h-5 w-5 text-[#FF8C42]" />, label: 'Digital Regulars', href: '#' },
];

const weekEvents = [
  { icon: '📅', text: 'Trivia Night – Tuesday, 8pm' },
  { icon: '🎷', text: 'Live Jazz – Friday, 9pm' },
  { icon: '🥃', text: 'Whiskey Tasting – Saturday, 7pm' },
];

const hours = [
  { day: 'Monday - Thursday', time: '4pm - 1am' },
  { day: 'Friday', time: '4pm - 1am' },
  { day: 'Saturday', time: '2pm - 1am' },
  { day: 'Sunday', time: '2pm - 1pm' },
];

const aboutDescription = `Kenny's Bar is your friendly neighborhood spot for great drinks, good company, and unforgettable nights. Whether you're here for our weekly events or just to unwind, we offer a welcoming atmosphere and top-notch service. Join us and experience the best of Marathahalli's nightlife!`;

// Accent bar glow animation
const accentBarGlow = `
  @keyframes accentBarPulse {
    0%, 100% { box-shadow: 0 0 16px 4px #FF8C42AA; }
    50% { box-shadow: 0 0 32px 12px #FF8C42DD; }
  }
`;

const About = () => (
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
      className="relative z-20 w-full max-w-6xl mx-auto px-4 py-10 md:py-16 flex flex-col md:flex-row gap-10 md:gap-0 items-stretch"
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
          <h1 className="text-white font-bold text-4xl md:text-5xl mb-4 leading-tight font-['League_Spartan']" style={{ letterSpacing: '0.04em', fontFamily: 'Anton, sans-serif' }}>About Kenny's Bar</h1>
          <p className="text-[#FF8C42] text-lg font-semibold mb-4">NEIGHBOURHOOD BAR</p>
          <p className="text-white/90 text-base md:text-lg mb-4" style={{ maxWidth: '600px' }}>{aboutDescription}</p>
          <p className="text-white/80 font-['Montserrat'] text-base md:text-lg font-medium mb-1">89/1, Monnekollal Village, Varthur Hobli, Outer Ring Road, Marathahalli, Bangalore</p>
          {/* Contact Buttons: Phone & Email */}
          <div className="flex gap-4 mb-3 mt-4 flex-wrap">
            <a href="tel:+919317417517" className="flex-1 min-w-[140px] flex items-center justify-center gap-2 bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full px-3 py-2 transition-colors duration-300 font-medium text-white">
              <Phone className="h-6 w-6 text-[#FF8C42]" />
              <span className="text-sm">+91 9317417517</span>
            </a>
            <a href="mailto:info@kennys.bar" className="flex-1 min-w-[140px] flex items-center justify-center gap-2 bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full px-3 py-2 transition-colors duration-300 font-medium text-white">
              <Mail className="h-6 w-6 text-[#FF8C42]" />
              <span className="text-sm">info@kennys.bar</span>
            </a>
          </div>
          {/* Social Icons: Instagram & Facebook */}
          <div className="flex gap-4 mb-6 flex-wrap">
            <a href="https://www.instagram.com/kenny.sbar?igsh=ajFkamh0dzZueXR6" target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px] flex items-center justify-center gap-2 bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full px-3 py-2 transition-colors duration-300 font-medium text-white">
              <Instagram className="h-6 w-6 text-[#FF8C42]" />
              <span className="text-sm">Instagram</span>
            </a>
            <a href="https://www.facebook.com/people/Kennys-Bar/61576548480813/" target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px] flex items-center justify-center gap-2 bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full px-3 py-2 transition-colors duration-300 font-medium text-white">
              <Facebook className="h-6 w-6 text-[#FF8C42]" />
              <span className="text-sm">Facebook</span>
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
        {/* <h2 className="text-[#FF8C42] font-bold text-2xl mb-6 text-left">What We Do</h2> */}
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
  </section>
);

export default About; 