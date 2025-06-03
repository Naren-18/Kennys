// src/components/Hero.tsx
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Promotions from '@/components/Promotions';
import { Calendar, Home, Utensils, MapPin, Users, ShoppingBag, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import BeerPourLogo from './BeerPourLogo';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
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
          poster="/images/hero-poster.jpg" // Optional: A poster image shown while the video loads
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
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
          {/* Main logo/heading */}
          <div className={`mb-8 flex justify-center transition-all duration-700 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
               style={{ transitionDelay: loaded ? '100ms' : '0ms', position: 'relative' }}>
            <BeerPourLogo />
          </div>
            
          {/* Redesigned Subtitle */}
          <div className={`mb-10 max-w-4xl mx-auto transition-all duration-700 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
               style={{ transitionDelay: loaded ? '200ms' : '0ms' }}>
            <p className="text-white font-serif text-4xl md:text-5xl lg:text-6xl font-medium mx-auto tracking-wider leading-tight">
              NEIGHBOURHOOD BAR
            </p>
          </div>

          {/* Redesigned Tagline */}
          <p className={`text-gray-300 text-md md:text-lg mb-12 font-normal tracking-widest transition-all duration-700 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
             style={{ transitionDelay: loaded ? '300ms' : '0ms' }}>
            GOOD DRINKS • GOOD TIMES • SINCE 2010
          </p>

          {/* Redesigned Buttons */}
          <div className={`flex flex-col sm:flex-row justify-center gap-6 mt-10 transition-all duration-700 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
               style={{ transitionDelay: loaded ? '400ms' : '0ms' }}>
            <Link to="/about">
              <button className="py-3 px-8 text-center uppercase font-semibold tracking-wide text-white bg-[#FF6F1F] hover:bg-[#E0601A] rounded-full transform hover:scale-105 transition-all duration-300 ease-in-out">
                Our Story
              </button>
            </Link>
            <Link to="/events">
              <button className="py-3 px-8 text-center uppercase font-semibold tracking-wide text-[#FF6F1F] bg-transparent border-2 border-[#FF6F1F] hover:bg-[#FF6F1F] hover:text-white rounded-full transform hover:scale-105 transition-all duration-300 ease-in-out">
                Today's Events
              </button>
            </Link>
          </div>
        </div>

        {/* Promotions section */}
        <div className={`w-full relative z-30 mt-24 transition-all duration-700 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             style={{ transitionDelay: loaded ? '600ms' : '0ms' }}>
          <Promotions loaded={loaded} />
        </div>

        {/* Info Cards Section - below Promotions */}
        <div className="w-full flex flex-col items-center justify-center mt-12 gap-10 z-30">
          <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
            {/* Book a Table */}
            <Card className="flex-1 bg-black/60 border-[#FF6F1F] border rounded-2xl shadow-lg p-0 relative overflow-hidden">
              <div className="p-8 flex flex-col h-full justify-between">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="text-[#FF8C42] w-7 h-7" />
                  <span className="text-2xl font-semibold text-[#FF8C42]">Book A Table</span>
                  <span className="ml-auto bg-black/40 rounded-full p-2"><Calendar className="text-[#FF8C42] w-5 h-5" /></span>
                </div>
                <p className="text-white/90 text-lg mb-6">Reserve your spot at Kenny's and skip the wait. We'll hold your table for 15 minutes past your reservation time.</p>
                <button className="w-full bg-[#FF8C42] hover:bg-[#FF6F1F] text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 text-lg transition-all">
                  <Users className="w-5 h-5" /> Make Reservation
                </button>
              </div>
            </Card>
            {/* Order Online */}
            <Card className="flex-1 bg-black/60 border-[#FF6F1F] border rounded-2xl shadow-lg p-0 relative overflow-hidden">
              <div className="p-8 flex flex-col h-full justify-between">
                <div className="flex items-center gap-3 mb-4">
                  <Utensils className="text-[#FF8C42] w-7 h-7" />
                  <span className="text-2xl font-semibold text-[#FF8C42]">Order Online</span>
                  <span className="ml-auto bg-black/40 rounded-full p-2"><ShoppingBag className="text-[#FF8C42] w-5 h-5" /></span>
                </div>
                <p className="text-white/90 text-lg mb-6">Craving Kenny's at home? Order through our delivery partners for the same great taste, delivered to your door.</p>
                <div className="flex gap-4">
                  <button className="flex-1 bg-[#1a120b] border border-[#FF8C42] rounded-lg py-3 flex items-center justify-center gap-2 text-white text-lg font-semibold hover:bg-[#FF8C42]/20 transition-all">
                    <span className=" w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
                      <img src="/lovable-uploads/swiggy.png" alt="Swiggy" className="w-12 h-12 object-contain" />
                    </span> Swiggy
                  </button>
                  <button className="flex-1 bg-[#1a120b] border border-[#FF8C42] rounded-lg py-3 flex items-center justify-center gap-2 text-white text-lg font-semibold hover:bg-[#FF8C42]/20 transition-all">
                    <span className=" w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
                      <img src="/lovable-uploads/zomato.png" alt="Zomato" className="w-12 h-12 object-contain" />
                    </span> Zomato
                  </button>
                </div>
              </div>
            </Card>
          </div>
          {/* Find Us */}
          <div className="w-full max-w-2xl">
            <Card className="flex items-center bg-black/60 border-[#FF6F1F] border rounded-2xl shadow-lg p-0 overflow-hidden">
              <div className="flex items-center gap-6 p-8 w-full">
                <div className="bg-[#1a120b] rounded-full w-16 h-16 flex items-center justify-center">
                  <MapPin className="text-[#FF8C42] w-8 h-8" />
                </div>
                <div className="flex-1">
                  <span className="text-2xl font-semibold text-[#FF8C42] mb-2 block">Find Us</span>
                  <div className="text-white/90 text-lg mb-2">123 Main Street, Downtown<br />Open daily from 11:00 AM to 1:00 AM</div>
                  <div className="flex gap-4 mt-2">
                    <button className="bg-[#1a120b] border border-[#FF8C42] rounded-lg px-4 py-2 text-white font-semibold hover:bg-[#FF8C42]/20 transition-all">Get Directions</button>
                    <button className="bg-[#1a120b] border border-[#FF8C42] rounded-lg px-4 py-2 text-white font-semibold flex items-center gap-2 hover:bg-[#FF8C42]/20 transition-all"><Phone className="w-5 h-5" />(123) 456-7890</button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Simple scroll indicator
        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-30 opacity-70">
          <div className="animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5L12 19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Hero;