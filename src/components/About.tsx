import React from 'react';
import { motion } from 'framer-motion';
import { Phone, BookOpen, Users, Calendar, Star } from 'lucide-react';

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
  { day: 'Monday - Thursday', time: '4pm - 12am' },
  { day: 'Friday', time: '4pm - 2am' },
  { day: 'Saturday', time: '2pm - 2am' },
  { day: 'Sunday', time: '2pm - 10pm' },
];

const About = () => (
  <section className="pt-4 pb-4 min-h-screen relative overflow-hidden flex items-center justify-center">
    {/* Bar-themed background image and overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1500&q=80"
        alt="Bar background"
        className="absolute top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2 scale-105"
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
    </div>
    {/* Unified glassmorphic panel */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative z-20 w-full max-w-3xl mx-auto px-6 py-8 md:py-10 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl flex flex-col gap-0"
      style={{ boxShadow: '0 8px 40px 0 rgba(0,0,0,0.25), 0 1.5px 8px 0 #FF8C42' }}
    >
      {/* Hero Section */}
      <div className="text-center mb-2">
        <h1 className="text-[#FF8C42] font-bold uppercase tracking-wide text-4xl md:text-5xl mb-1" style={{ fontFamily: 'Anton, sans-serif', letterSpacing: '0.04em' }}>KENNY'S</h1>
        <p className="text-white/80 text-base md:text-lg font-medium mb-1">89/1, Monnekollal Village, Varthur Hobli, Outer Ring Road, Marathahalli, Bangalore</p>
      </div>
      {/* Contact */}
      <div className="flex justify-center items-center gap-2 mb-4">
        <Phone className="h-5 w-5 text-[#FF8C42]" />
        <span className="text-white text-base font-semibold">+91 9317417517</span>
      </div>
      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#FF8C42]/40 to-transparent mb-4" />
      {/* Explore */}
      <div className="mb-4">
        <h2 className="text-[#FF8C42] text-xl font-bold mb-2 text-center">Explore</h2>
        <ul className="flex flex-wrap gap-4 justify-center">
          {aboutLinks.map((link, i) => (
            <li key={link.label} className="flex items-center gap-2">
              {link.icon}
              <a href={link.href} className="text-white/90 hover:text-[#FF8C42] font-medium text-base transition-colors duration-300">{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#FF8C42]/40 to-transparent mb-4" />
      {/* This Week at Kenny's */}
      <div className="mb-4">
        <h2 className="text-[#FF8C42] text-xl font-bold mb-2 text-center">This Week at Kenny's</h2>
        <ul className="space-y-2">
          {weekEvents.map((event, i) => (
            <li key={event.text} className="flex items-center gap-2 text-white/90 text-base justify-center">
              <span className="text-xl">{event.icon}</span>
              {event.text}
            </li>
          ))}
        </ul>
      </div>
      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#FF8C42]/40 to-transparent mb-4" />
      {/* Hours */}
      <div>
        <h2 className="text-[#FF8C42] text-xl font-bold mb-2 text-center">Hours</h2>
        <ul className="divide-y divide-white/10">
          {hours.map((h, i) => (
            <li key={h.day} className="flex justify-between items-center py-1 text-white/90 text-base">
              <span>{h.day}</span>
              <span className="font-semibold">{h.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  </section>
);

export default About; 