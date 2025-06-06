import React from 'react';
import { Link } from 'react-router-dom';
import { Map, Calendar, Music } from 'lucide-react';
// If you have react-icons installed, you can use these imports instead:
// import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="bg-kenny-dark relative overflow-hidden">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3
                className="font-extrabold tracking-widest uppercase font-sans text-[#FF6F1F] text-3xl md:text-4xl block"
                style={{ letterSpacing: '0.1em' }}
              >
                KENNY’S
              </h3>
              <p className="text-white/70">
                A neighborhood bar where everyone knows your name, and everyone's story matters.
              </p>
              <div className="pt-4">
                <p className="text-white flex items-center">
                  <Map size={16} className="mr-2 text-kenny-amber" />
                  Marathahalli, Bengaluru
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-white text-lg font-medium mb-4">Explore</h4>
              <ul className="space-y-2">
                {[
                  { name: 'About Us', path: '/about' },
                  { name: 'The Playlist', path: '/playlist' },
                  { name: 'Neighborhood Stories', path: '/stories' },
                  { name: 'Events Calendar', path: '/events' },
                  { name: 'Digital Regulars', path: '/regulars' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-kenny-amber transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white text-lg font-medium mb-4">Hours</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex justify-between">
                  <span>Monday - Thursday</span>
                  <span>4pm - 12am</span>
                </li>
                <li className="flex justify-between">
                  <span>Friday</span>
                  <span>4pm - 2am</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>2pm - 2am</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>2pm - 10pm</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white text-lg font-medium mb-4">This Week at Kenny's</h4>
              <ul className="space-y-3">
                <li className="flex">
                  <Calendar size={16} className="mr-2 text-kenny-amber flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white">Trivia Night</p>
                    <p className="text-white/50 text-sm">Tuesday, 8pm</p>
                  </div>
                </li>
                <li className="flex">
                  <Music size={16} className="mr-2 text-kenny-amber flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white">Live Jazz</p>
                    <p className="text-white/50 text-sm">Friday, 9pm</p>
                  </div>
                </li>
                <li className="flex">
                  <Calendar size={16} className="mr-2 text-kenny-amber flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white">Whiskey Tasting</p>
                    <p className="text-white/50 text-sm">Saturday, 7pm</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-8 mt-10">
            <a
              href="https://instagram.com/kennys.bar_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/70 hover:text-kenny-amber transition-colors text-2xl"
            >
              {/* If using react-icons: <FaInstagram /> */}
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.981.981-1.213 2.093-1.272 3.374C2.013 5.668 2 6.077 2 9.336v5.328c0 3.259.013 3.668.072 4.948.059 1.281.291 2.393 1.272 3.374.981.981 2.093 1.213 3.374 1.272 1.28.059 1.689.072 4.948.072s3.668-.013 4.948-.072c1.281-.059 2.393-.291 3.374-1.272.981-.981 1.213-2.093 1.272-3.374.059-1.28.072-1.689.072-4.948V9.336c0-3.259-.013-3.668-.072-4.948-.059-1.281-.291-2.393-1.272-3.374-.981-.981-2.093-1.213-3.374-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
            </a>
            <a
              href="https://facebook.com/kennys.bar_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white/70 hover:text-kenny-amber transition-colors text-2xl"
            >
              {/* If using react-icons: <FaFacebook /> */}
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.592 1.325-1.326V1.326C24 .592 23.405 0 22.675 0"/></svg>
            </a>
            <a
              href="mailto:contact@kennysbar.com"
              aria-label="Email"
              className="text-white/70 hover:text-kenny-amber transition-colors text-2xl"
            >
              {/* If using react-icons: <FaEnvelope /> */}
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.99-7.065v14.13c0 .482.391.87.87.87h21.24c.479 0 .87-.388.87-.87v-14.13l-11.99 7.065zm11.99-9.065c0-.482-.391-.87-.87-.87h-21.24c-.479 0-.87.388-.87.87v.217l12 7.08 12-7.08v-.217z"/></svg>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-white/50">
              © {new Date().getFullYear()} Kenny's Neighbourhood Bar. All rights reserved.
            </p>
            <p className="text-white/30 text-sm mt-2">
              Please drink responsibly. Must be 21+ to consume alcohol.
            </p>
            <p className="text-white/25 text-sm mt-2">
              Managed by Congitimax
            </p>
          </div>
        </div>
      </footer>

      <section className="py-20 bg-kenny-dark">
        <div className="container mx-auto px-4">
          {/* Heading and subtext */}
          <div className="text-center mb-12">
            <h2 className="text-kenny-amber font-handwritten text-4xl mb-3">
              Dine With Us or Order In
            </h2>
            <p className="text-white/80 max-w-xl mx-auto">
              Whether you're planning a cozy night out or craving our flavors at home, Kenny’s has you covered.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            {/* Book A Table Card */}
            <div className="bg-[#3a1c0f] rounded-2xl shadow-lg p-8 flex-1 flex flex-col justify-between max-w-md">
              <h3 className="text-2xl font-title text-kenny-amber mb-4">Book A Table</h3>
              <p className="text-white/80 mb-8">
                Reserve your spot and enjoy a memorable evening at Kenny’s. Perfect for groups, celebrations, or a casual night out.
              </p>
              <a
                href="/book-table"
                className="inline-block"
              >
                <button
                  className="w-full py-3 px-6 bg-gradient-to-b from-[#FF8C42] to-[#FF6F1F] text-white font-extrabold text-lg rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 border-b-4 border-[#c44d00]"
                  style={{ textShadow: '0 1px 4px #0008' }}
                >
                  Book Now
                </button>
              </a>
            </div>
            Order Online Card
            <div className="bg-[#3a1c0f] rounded-2xl shadow-lg p-8 flex-1 flex flex-col justify-between max-w-md">
              <h3 className="text-2xl font-title text-kenny-amber mb-4">Order Online</h3>
              <div className="flex flex-col gap-4 mt-4">
                <a
                  href="https://www.swiggy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <button
                    className="flex items-center justify-center gap-3 w-full py-3 px-6 bg-white text-black font-bold text-lg rounded-xl shadow hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    {/* Swiggy Logo SVG */}
                    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                      <path d="M16.001 2.667c-6.627 0-12 5.373-12 12 0 5.627 4.373 10.373 10 11.627V29.333c0 .368.298.667.667.667h2.666c.369 0 .667-.299.667-.667v-2.706c5.627-1.254 10-6 10-11.627 0-6.627-5.373-12-12-12zm0 22.666c-5.891 0-10.667-4.776-10.667-10.666S10.11 4 16 4s10.667 4.776 10.667 10.666S21.891 25.333 16 25.333z" fill="#FC8019"/>
                      <path d="M16 8.667c-3.682 0-6.667 2.985-6.667 6.666 0 2.985 2.985 5.334 6.667 5.334s6.667-2.349 6.667-5.334c0-3.681-2.985-6.666-6.667-6.666zm0 10.667c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" fill="#FC8019"/>
                    </svg>
                    Swiggy
                  </button>
                </a>
                <a
                  href="https://www.zomato.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <button
                    className="flex items-center justify-center gap-3 w-full py-3 px-6 bg-white text-black font-bold text-lg rounded-xl shadow hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    {/* Zomato Logo SVG */}
                    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="16" fill="#E23744"/>
                      <path d="M10.667 19.333h10.666v2.667H10.667v-2.667zm0-8h10.666v2.667H10.667V11.333z" fill="#fff"/>
                    </svg>
                    Zomato
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;