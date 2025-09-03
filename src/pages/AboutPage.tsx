import React from 'react';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import ScrollResponsibleMessage from '@/components/ScrollResponsibleMessage';

const AboutPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-black opacity-95"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-kenny-dark to-transparent opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-kenny-dark via-transparent to-transparent"></div>
      </div>
      <Navbar />
      <About />
      <ScrollResponsibleMessage />
    </div>
  );
};

export default AboutPage;
