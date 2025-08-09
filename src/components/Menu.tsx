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
            Kenny's Bar
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6F1F] to-transparent"></div>
          </h2>
          
          {/* Kenny's Bar Intro Section */}
          <div className="max-w-3xl mx-auto mb-10">
            <div className="bg-black/70 border-l-8 border-[#FF8C42] rounded-2xl shadow-lg p-8 md:p-10 mb-6 text-left">
              <h3 className="text-[#FF8C42] text-2xl md:text-3xl font-bold mb-3 font-sans">Kenny's</h3>
              <p className="text-white/90 text-lg md:text-xl mb-4 leading-relaxed">
                Kenny's true neighbourhood bar, where every visit feels like coming home. We're not just a place to grab a drink; we're your community's favourite hangout, where our bartenders remember your usual and a spot at the bar always feels reserved just for you.
              </p>
              <p className="text-white/80 text-base md:text-lg mb-2">
                <span className="font-semibold text-[#FF8C42]">Your Perfect Local Escape:</span> Whether you're unwinding after a long day with our happy hour specials, cheering on your favourite team at our bar, or simply looking for a cozy pub to connect with friends, Kenny's offers the ideal setting. We've curated an exceptional experience with a focus on:
              </p>
              <ul className="list-none pl-0 space-y-2 mt-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#FF8C42] text-xl">•</span>
                  <span className="text-white/90"><span className="font-semibold text-[#FF8C42]">Warm & Welcoming Atmosphere:</span> Enjoy the genuine hospitality that makes us Bengaluru's go-to neighbourhood bar, fostering intimate conversations and unforgettable evenings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF8C42] text-xl">•</span>
                  <span className="text-white/90"><span className="font-semibold text-[#FF8C42]">Classic Spirits:</span> Explore a diverse selection of local and international beers, single malts, gins, and more alongside expertly mixed classic cocktails designed to delight your palate.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Menu Philosophy Section */}
          <div className="max-w-2xl mx-auto mb-12">
            <h2 className="text-[#FF8C42] text-3xl font-bold mb-4 text-center">Our Menu Philosophy</h2>
            <div className="bg-[#1a120b]/80 border border-[#FF8C42]/30 rounded-xl shadow-md p-6 md:p-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90 text-base md:text-lg list-none pl-0">
                <li className="flex items-center gap-3"><span className="text-[#FF8C42] text-lg">✔</span> Limited Choices: Not overwhelming with too many options.</li>
                <li className="flex items-center gap-3"><span className="text-[#FF8C42] text-lg">✔</span> Familiar Items: Dishes most people recognize and enjoy.</li>
                <li className="flex items-center gap-3"><span className="text-[#FF8C42] text-lg">✔</span> Pub-Friendly: Items that are easy to eat in a casual bar setting.</li>
                <li className="flex items-center gap-3"><span className="text-[#FF8C42] text-lg">✔</span> Pairs with Drinks: Food that complements beer, cocktails, etc.</li>
                <li className="flex items-center gap-3"><span className="text-[#FF8C42] text-lg">✔</span> Clear Descriptions: No overly flowery language.</li>
                <li className="flex items-center gap-3"><span className="text-[#FF8C42] text-lg">✔</span> Dietary Notes: Simple V/NV indicators for quick reference.</li>
                <li className="flex items-center gap-3"><span className="text-[#FF8C42] text-lg">✔</span> Value: Implies good portions for the price.</li>
              </ul>
            </div>
            <p className="text-[#FF8C42] text-lg font-semibold mt-6 text-center">Discover why so many choose Kenny's as their favourite watering hole. We look forward to welcoming you!</p>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
