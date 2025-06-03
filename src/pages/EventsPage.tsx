import React from 'react';
import Navbar from '@/components/Navbar';
import Events from '@/components/Events';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const EventsPage = () => {
  // Use our custom scroll animation hook
  useScrollAnimation();

  return (
    <div className="bg-kenny-dark text-white">
      {/* Static backdrop */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-black opacity-95"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-kenny-dark to-transparent opacity-50"></div>
        {/* <img 
          src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2830&q=80" 
          alt="Background" 
          className="h-full w-full object-cover object-center warmth-filter opacity-20"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-kenny-dark via-transparent to-transparent"></div>
      </div>

      <Navbar />
      <div className="pt-3y pb-8 relative z-10">
        {/* <h1 className="text-4xl md:text-5xl font-logo text-kenny-amber text-center mb-8 animate-fade-in">Events</h1> */}
        <div className="section-animate opacity-0 transform translate-y-10 transition-all duration-700 bg-[#3a1c0f] py-3">
          <Events />
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
