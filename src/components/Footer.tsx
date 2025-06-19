import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, Mail, BookOpen, Users, Calendar, Star } from "lucide-react";

// const aboutDescription = `Kenny's Bar is your friendly neighborhood spot for great drinks, good company, and unforgettable nights. Whether you're here for our weekly events or just to unwind, we offer a welcoming atmosphere and top-notch service. Join us and experience the best of Marathahalli's nightlife!`;

const aboutLinks = [
  { icon: <BookOpen className="h-5 w-5 text-[#FF8C42]" />, label: 'Menu', href: '/menu' },
  { icon: <Users className="h-5 w-5 text-[#FF8C42]" />, label: 'Stories', href: '/stories' },
  { icon: <Calendar className="h-5 w-5 text-[#FF8C42]" />, label: 'Events', href: '/events' },
  { icon: <Star className="h-5 w-5 text-[#FF8C42]" />, label: 'Gallery', href: '/gallery' },
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

const Footer = () => {
  return (
    <footer
      className="bg-black text-white font-sans pt-12 pb-6 px-4 border-t border-[#222]"
      style={{ position: 'relative', zIndex: 10 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16 md:pl-[150px] md:pr-[150px]">
        {/* About Section */}
        <div>
          <h2 className="text-[#FF8C42] text-2xl font-bold mb-2 tracking-wide">About Kenny's Bar</h2>
          <p className="text-[#FF8C42] text-sm font-semibold mb-2">NEIGHBOURHOOD BAR</p>
          {/* <p className="text-white/90 text-base mb-4">Kenny's Bar is your friendly neighborhood spot for great drinks, good company, and unforgettable nights. Whether you're here for our weekly events or just to unwind, we offer a welcoming atmosphere and top-notch service.</p> */}
          <p className="text-white/80 text-sm mb-2">89/1, Monnekollal Village, Varthur Hobli, Outer Ring Road, Marathahalli, Bangalore</p>
          <div className="flex flex-col gap-2 mb-3 mt-4">
            {/* <a href="tel:+919317417517" className="flex items-center gap-2 bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full px-3 py-2 transition-colors font-medium text-white w-max">
              <Phone className="h-5 w-5 text-[#FF8C42]" />
              <span className="text-sm">+91 9317417517</span>
            </a>
            <a href="mailto:info@kennys.bar" className="flex items-center gap-2 bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full px-3 py-2 transition-colors font-medium text-white w-max">
              <Mail className="h-5 w-5 text-[#FF8C42]" />
              <span className="text-sm">info@kennys.bar</span>
            </a> */}
          </div>
          <div className="flex gap-3 mb-2 mt-2">
            <a href="https://www.instagram.com/kenny.sbar?igsh=ajFkamh0dzZueXR6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full px-3 py-2 transition-colors font-medium text-white w-max">
              <Instagram className="h-5 w-5 text-[#FF8C42]" />
              <span className="text-sm">Instagram</span>
            </a>
            <a href="https://www.facebook.com/people/Kennys-Bar/61576548480813/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full px-3 py-2 transition-colors font-medium text-white w-max">
              <Facebook className="h-5 w-5 text-[#FF8C42]" />
              <span className="text-sm">Facebook</span>
            </a>
          </div>
        </div>
        {/* Explore Section */}
        <div>
          <h3 className="text-[#FF8C42] text-xl font-bold mb-4 tracking-wide">Explore</h3>
          <ul className="flex flex-col gap-3">
            {aboutLinks.map((link) => (
              <li key={link.label} className="flex items-center gap-3">
                {link.icon}
                <Link to={link.href} className="text-white/90 hover:text-[#FF8C42] font-medium text-base transition-colors duration-300">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* This Week at Kenny's Section */}
        <div>
          <h3 className="text-[#FF8C42] text-xl font-bold mb-4 tracking-wide">This Week at Kenny's</h3>
          <ul className="flex flex-col gap-2">
            {weekEvents.map((event) => (
              <li key={event.text} className="flex items-center gap-2 text-white/90 text-base">
                <span className="text-xl">{event.icon}</span>
                {event.text}
              </li>
            ))}
          </ul>
        </div>
        {/* Hours Section */}
        <div>
          <h3 className="text-[#FF8C42] text-xl font-bold mb-4 tracking-wide">Hours</h3>
          <ul className="divide-y divide-white/10">
            {hours.map((h) => (
              <li key={h.day} className="flex justify-between items-center py-1 text-white/90 text-base">
                <span>{h.day}</span>
                <span className="font-semibold">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Copyright and Credits */}
      <div className="mt-10 pt-8 border-t border-gray-800 text-center text-sm">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Kenny's Bar. All rights reserved.
        </p>
        <p className="text-gray-400 mt-2">
          Designed and developed by{' '}
          <a
            href="https://cognitimax.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF8C42] hover:text-[#FF6F1F] transition-colors font-semibold"
          >
            Cognitimax
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
