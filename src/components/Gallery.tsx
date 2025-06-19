import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { GalleryHorizontal, Image, Utensils, Menu, Camera, Wine, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import InstagramEmbed from './InstagramEmbed';

const GlassCard = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg" />
    <div className="relative z-10">{children}</div>
  </div>
);

const GalleryGrid = ({ images }: { images: Array<{src: string, alt: string}> }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-xl aspect-square cursor-pointer group shadow-lg border border-white/5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.07 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedImage(image.src)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6F1F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.85] group-hover:brightness-100"
            />
            {/* Corner decorative elements */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#FF6F1F]/60 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#FF6F1F]/60 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500 flex items-end p-5 z-10">
              <p className="text-white text-sm font-['Montserrat'] font-medium group-hover:text-[#FF8C42] transition-colors duration-300">{image.alt}</p>
            </div>
            <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 z-20">
              <Camera className="h-4 w-4 text-[#FF8C42]" />
            </div>
          </motion.div>
        ))}
      </div>
      
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-black/90 backdrop-blur-xl border border-[#FF6F1F]/20 rounded-xl overflow-hidden">
          <div className="relative">
            <img 
              src={selectedImage || ''} 
              alt="Gallery preview" 
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#FF6F1F]/60 rounded-tl-lg"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#FF6F1F]/60 rounded-br-lg"></div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const instaPosts = [
  "https://www.instagram.com/reel/DK1Lf73PBm7/",
  "https://www.instagram.com/p/DKkCbW5ylpi/",
  // Add more Instagram post URLs here
];

const Gallery = () => {
  return (
    <section id="gallery" className="pt-8 pb-16 min-h-screen relative overflow-hidden">
      {/* Background image and overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1470&q=80"
          alt="Gallery ambiance background"
          className="absolute top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2 scale-105"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#FF6F1F] to-transparent"></div>
          <h2 className="text-[#FF8C42] font-bold font-['League_Spartan'] text-5xl md:text-6xl mb-4 relative inline-block">
            Our Gallery
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6F1F] to-transparent"></div>
          </h2>
          <p className="text-white/80 font-['Montserrat'] max-w-xl mx-auto text-base md:text-lg">
            Take a peek at Kenny's ambiance, our delicious food, and craft drinks that keep our neighborhood coming back.
          </p>
        </motion.div>
        <GlassCard className="p-6 sm:p-8 w-full max-w-5xl mx-auto">
          {/* Corner decorative elements */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#FF6F1F]/40 rounded-tl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#FF6F1F]/40 rounded-br-2xl"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {instaPosts.map((url, idx) => (
              <InstagramEmbed key={idx} url={url} />
            ))}
          </div>
        </GlassCard>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 relative"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 flex items-center justify-center gap-1">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#FF6F1F]/50"></div>
            <Star className="h-4 w-4 text-[#FF8C42]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#FF6F1F]/50"></div>
          </div>
          <GlassCard className="inline-block px-6 py-3">
            <p className="text-white/70 font-['Montserrat'] italic">
              Follow us on Instagram{' '}
              <a
                href="https://instagram.com/kenny.sbar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF8C42] hover:text-[#FF6F1F] font-medium transition-colors duration-300"
              >
                @kenny.sbar
              </a>{' '}
              for more photos and behind-the-scenes moments.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
