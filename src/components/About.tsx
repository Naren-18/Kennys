import React from 'react';
import { motion } from 'framer-motion';
import { Menu as MenuIcon } from 'lucide-react';

const About = () => {
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
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-black/70 border-l-8 border-[#FF8C42] rounded-2xl shadow-lg p-8 md:p-10 mb-8 text-left">
              <h3 className="text-[#FF8C42] text-2xl md:text-3xl font-bold mb-6 font-sans">Welcome to Kenny's, Bengaluru</h3>
              
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                Kenny's, Bengaluru's a true neighbourhood bar, where every visit feels like coming home. We're not just a place to grab a drink; we're your community's favourite hangout, where our bartenders remember your usual and a spot at the bar always feels reserved just for you.
              </p>
              
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                <span className="font-semibold text-[#FF8C42]">Your Perfect Local Escape:</span> Whether you're unwinding after a long day with our happy hour specials, cheering on your favourite team at our bar, or simply looking for a cozy pub to connect with friends, Kenny's offers the ideal setting. We've curated an exceptional experience with a focus on:
              </p>
              
              <ul className="list-none pl-0 space-y-4 mt-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#FF8C42] text-xl flex-shrink-0">•</span>
                  <span className="text-white/90 text-lg leading-relaxed">
                    <span className="font-semibold text-[#FF8C42]">Warm & Welcoming Atmosphere:</span> Enjoy the genuine hospitality that makes us Bengaluru's go-to neighbourhood bar, fostering intimate conversations and unforgettable evenings.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF8C42] text-xl flex-shrink-0">•</span>
                  <span className="text-white/90 text-lg leading-relaxed">
                    <span className="font-semibold text-[#FF8C42]">Classic Spirits:</span> Explore a diverse selection of local and international beers, single malts, gins, and more alongside expertly mixed classic cocktails designed to delight your palate.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Menu Philosophy Section */}
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-[#FF8C42] text-2xl md:text-3xl font-bold mb-6 text-center">Our Menu Philosophy</h2>
            <div className="bg-[#1a120b]/80 border border-[#FF8C42]/30 rounded-xl shadow-md p-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/90 text-lg list-none pl-0">
                <li className="flex items-start gap-3 text-left">
                  <span className="text-[#FF8C42] text-xl flex-shrink-0">✔</span> 
                  <span className="leading-relaxed">Limited Choices: Not overwhelming with too many options.</span>
                </li>
                <li className="flex items-start gap-3 text-left">
                  <span className="text-[#FF8C42] text-xl flex-shrink-0">✔</span> 
                  <span className="leading-relaxed">Familiar Items: Dishes most people recognize and enjoy.</span>
                </li>
                <li className="flex items-start gap-3 text-left">
                  <span className="text-[#FF8C42] text-xl flex-shrink-0">✔</span> 
                  <span className="leading-relaxed">Pub-Friendly: Items that are easy to eat in a casual bar setting.</span>
                </li>
                <li className="flex items-start gap-3 text-left">
                  <span className="text-[#FF8C42] text-xl flex-shrink-0">✔</span> 
                  <span className="leading-relaxed">Pairs with Drinks: Food that complements beer, cocktails, etc.</span>
                </li>
                <li className="flex items-start gap-3 text-left">
                  <span className="text-[#FF8C42] text-xl flex-shrink-0">✔</span> 
                  <span className="leading-relaxed">Clear Descriptions: No overly flowery language.</span>
                </li>
                <li className="flex items-start gap-3 text-left">
                  <span className="text-[#FF8C42] text-xl flex-shrink-0">✔</span> 
                  <span className="leading-relaxed">Value: Implies good portions for the price.</span>
                </li>
              </ul>
            </div>
            <p className="text-[#FF8C42] text-lg font-semibold mt-8 text-center leading-relaxed">
              Discover why so many choose Kenny's as their favourite watering hole. We look forward to welcoming you!
            </p>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default About;
