import React from 'react';
import { motion } from 'framer-motion';
import { Menu as MenuIcon } from 'lucide-react';

const Menu = () => {
  return (
    <section id="menu" className="py-24 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 z-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-30">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#FF6F1F] to-transparent"></div>
          <h2 className="text-[#FF8C42] font-bold font-sans text-5xl md:text-6xl mb-4 relative inline-block">
            Our Menu
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6F1F] to-transparent"></div>
          </h2>
          <h3 className="text-white font-semibold font-sans text-2xl md:text-3xl mb-6">Coming Soon</h3>
          <p className="text-white/80 font-sans max-w-xl mx-auto text-base md:text-lg">
            We're currently updating our menu with exciting new offerings. Check back soon to see our latest drinks and dishes.
          </p>
          <div className="mt-8 flex justify-center">
            <MenuIcon className="h-12 w-12 text-[#FF8C42] animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
