import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  // Use our custom hook with default settings
  useScrollAnimation();
  
  return (
    <div className="min-h-screen bg-kenny-dark text-white overflow-hidden">
      {/* Static backdrop */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-black opacity-95"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-kenny-dark to-transparent opacity-80"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-center warmth-filter opacity-50"
          poster="/images/hero-poster.jpg"
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Subtle dust particles could be added here */}
        <div className="absolute inset-0 bg-gradient-to-t from-kenny-dark via-transparent to-transparent"></div>
      </div>
      
      <Navbar />
      
      {/* Content with z-index to appear above backdrop - Only Hero section */}
      <div className="relative z-10">
        <Hero />
      </div>
      
    </div>
  );
};

export default Index;
