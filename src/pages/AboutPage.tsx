import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import About from '@/components/About';

const AboutPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <About />
    </div>
  );
};

export default AboutPage;
