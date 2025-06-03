import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-kenny-dark relative overflow-hidden z-40 transition-all duration-500 ml-16 section-with-sidebar mt-0">
      <div className="container mx-auto px-4 pt-12 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {/* Kenny’s Section */}
          <div>
            <h2 className="text-[#FF6F1F] text-4xl font-bold tracking-widest uppercase font-sans mb-3" style={{ letterSpacing: '0.1em' }}>
              KENNY’S
            </h2>
            <div className="flex items-start text-white">
              <a
                href="https://www.google.com/maps/search/?api=1&query=89%2F1%2C%20Monnekollal%20Village%2C%20Varthur%20Hobli%2C%20Outer%20Ring%20Road%2C%20Marathahalli%2C%20Bangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 inline-flex"
                aria-label="Open in Google Maps"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#FF6F1F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A2 2 0 013 15.382V5.618a2 2 0 011.553-1.948l5.447-1.362a2 2 0 01.894 0l5.447 1.362A2 2 0 0121 5.618v9.764a2 2 0 01-1.553 1.948L15 20m-6 0V4m6 16V4" />
                </svg>
              </a>
              <p className="text-white text-sm md:text-base">
                89/1, Monnekollal Village, Varthur Hobli, Outer Ring Road, Marathahalli, Bangalore
              </p>
            </div>
            {/* Call emoji and number below address */}
            <div className="flex items-center mt-2 text-white text-sm md:text-base">
              <span role="img" aria-label="call" className="mr-2">📞</span>
              <span>+91 9317417517</span>
            </div>
          </div>

          {/* Explore Section */}
          <div>
            <h4 className="text-white text-lg font-medium mb-3">Explore</h4>
            <ul className="text-white/70 space-y-1">
              <li><Link to="/about" className="hover:text-[#FF6F1F] transition-colors">About Us</Link></li>
              <li><Link to="/stories" className="hover:text-[#FF6F1F] transition-colors">Neighborhood Stories</Link></li>
              <li><Link to="/events" className="hover:text-[#FF6F1F] transition-colors">Events Calendar</Link></li>
              <li><Link to="/regulars" className="hover:text-[#FF6F1F] transition-colors">Digital Regulars</Link></li>
            </ul>
          </div>

          {/* This Week at Kenny's Section */}
          <div>
            <h4 className="text-white text-lg font-medium mb-3">This Week at Kenny's</h4>
            <ul className="text-white/70 space-y-2 mt-0">
              <li><span className="text-[#FF6F1F] mr-2">📅</span>Trivia Night – Tuesday, 8pm</li>
              <li><span className="text-[#FF6F1F] mr-2">🎷</span>Live Jazz – Friday, 9pm</li>
              <li><span className="text-[#FF6F1F] mr-2">🥃</span>Whiskey Tasting – Saturday, 7pm</li>
            </ul>
          </div>

          {/* Hours Section */}
          <div>
            <h4 className="text-white text-lg font-medium mb-3">Hours</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <div className="flex justify-between">
                  <span>Monday - Thursday</span>
                  <span>4pm - 12am</span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span>4pm - 2am</span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>2pm - 2am</span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>2pm - 10pm</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Icons */}
        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://instagram.com/kenny.sbar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-[#FF6F1F] flex items-center"
            aria-label="Instagram"
          >
            <FaInstagram className="w-8 h-8" />
          </a>
          <a
            href="https://facebook.com/kenny.sbar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-[#FF6F1F] flex items-center"
            aria-label="Facebook"
          >
            <FaFacebookF className="w-8 h-8" />
          </a>
          <a
            href="mailto:contactkennysbar@gmail.com"
            className="text-white text-2xl hover:text-[#FF6F1F] flex items-center"
            aria-label="Email"
          >
            <FaEnvelope className="w-8 h-8" />
          </a>
        </div>
        
        {/* Footer Bottom */}
        <div className="text-center text-white/70 mt-8 text-sm mb-0">
          <p>© {new Date().getFullYear()} Kenny's Neighbourhood Bar. All rights reserved.</p>
          <p>Please drink responsibly. Must be 21+ to consume alcohol.</p>
          <p className="mt-2 mb-0">Managed by COGNITIMAX</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
