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
        <div className="absolute inset-0 bg-gradient-to-b from-kenny-dark to-transparent opacity-50"></div>
        <img 
          src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2830&q=80" 
          alt="Background" 
          className="h-full w-full object-cover object-center warmth-filter opacity-20"
        />
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
