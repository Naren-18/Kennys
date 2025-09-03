import React from 'react';
import { motion } from 'framer-motion';

const Stories = () => {
  return (
    <section className="pt-8 pb-16 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#FF6F1F] to-transparent"></div>
          <h2 className="text-[#FF8C42] font-bold font-sans text-5xl md:text-6xl mb-4 relative inline-block">
            Neighborhood Stories
          </h2>
          <h3 className="text-white font-semibold font-sans text-2xl md:text-3xl mb-6">Coming Soon</h3>
          <p className="text-white/80 font-sans max-w-2xl mx-auto text-base md:text-lg">
            We're collecting stories from our wonderful community. Check back soon to read about the memories made at Kenny's.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Stories;
