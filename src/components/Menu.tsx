import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu as MenuIcon, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Menu = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const menuPages = [
    { src: "/images/menu-page-1.jpg", alt: "Kenny's Menu - Page 1" },
    { src: "/images/menu-page-2.jpg", alt: "Kenny's Menu - Page 2" },
    { src: "/images/menu-page-3.jpg", alt: "Kenny's Menu - Page 3" },
    { src: "/images/menu-page-4.jpg", alt: "Kenny's Menu - Page 4" }
  ];

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % menuPages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + menuPages.length) % menuPages.length);
  };

  return (
    <section id="menu" className="py-24 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1470&q=80"
          alt="Menu background"
          className="absolute top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2 scale-105"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
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
          <p className="text-white/80 font-['Montserrat'] max-w-xl mx-auto text-base md:text-lg mb-12">
            Explore Kenny's carefully curated menu featuring delicious food and craft beverages.
          </p>
        </motion.div>
        
        {/* Menu Gallery */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg p-6 md:p-8">
            {/* Corner decorative elements */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#FF6F1F]/40 rounded-tl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#FF6F1F]/40 rounded-br-2xl"></div>
            
            {/* Menu Navigation */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={prevPage}
                className="bg-[#FF8C42] hover:bg-[#E0601A] text-white p-3 rounded-full transition-colors"
                disabled={menuPages.length <= 1}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <div className="text-white/80 font-medium">
                Page {currentPage + 1} of {menuPages.length}
              </div>
              
              <button
                onClick={nextPage}
                className="bg-[#FF8C42] hover:bg-[#E0601A] text-white p-3 rounded-full transition-colors"
                disabled={menuPages.length <= 1}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            
            {/* Menu Image Display */}
            <div className="relative">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(menuPages[currentPage].src)}
              >
                <img
                  src={menuPages[currentPage].src}
                  alt={menuPages[currentPage].alt}
                  className="w-full h-auto rounded-xl shadow-lg border border-white/10"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-xl flex items-center justify-center">
                  <ZoomIn className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            </div>
            
            {/* Page Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {menuPages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentPage ? 'bg-[#FF8C42]' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Menu Philosophy Section */}
        <div className="max-w-2xl mx-auto mt-16">
          <h3 className="text-[#FF8C42] text-3xl font-bold mb-6 text-center">Our Menu Philosophy</h3>
          <div className="bg-black/40 backdrop-blur-xl border border-[#FF8C42]/30 rounded-xl shadow-md p-6 md:p-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90 text-base md:text-lg list-none pl-0">
              <li className="flex items-center gap-3"><span className="text-[#FF8C42] text-lg">✔</span> Limited Choices: Not overwhelming with too many options.</li>
              <li className="flex items-center gap-3"><span className="text-[#FF8C42] text-lg">✔</span> Familiar Items: Dishes most people recognize and enjoy.</li>
              <li className="flex items-center gap-3"><span className="text-[#FF8C42] text-lg">✔</span> Pub-Friendly: Items that are easy to eat in a casual bar setting.</li>
              <li className="flex items-center gap-3"><span className="text-[#FF8C42] text-lg">✔</span> Pairs with Drinks: Food that complements beer, cocktails, etc.</li>
              <li className="flex items-center gap-3"><span className="text-[#FF8C42] text-lg">✔</span> Clear Descriptions: No overly flowery language.</li>
              <li className="flex items-center gap-3"><span className="text-[#FF8C42] text-lg">✔</span> Dietary Notes: Simple V/NV indicators for quick reference.</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Full Screen Menu Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-6xl p-0 bg-black/90 backdrop-blur-xl border border-[#FF6F1F]/20 rounded-xl overflow-hidden">
          <div className="relative">
            <img 
              src={selectedImage || ''} 
              alt="Full menu view" 
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#FF6F1F]/60 rounded-tl-lg"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#FF6F1F]/60 rounded-br-lg"></div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Menu;
