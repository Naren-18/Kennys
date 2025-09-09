import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { GalleryHorizontal, Image, Utensils, Camera, Wine, Star, Instagram } from 'lucide-react';
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
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover"
            />
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

// Image arrays for different categories
const ambianceImages = [
  { src: "/images/6.jpg", alt: "Kenny's Bar Interior Ambiance" },
  { src: "/images/7.jpg", alt: "Kenny's Neighborhood Bar Atmosphere" },
  { src: "/images/8.jpg", alt: "Kenny's Bar Seating Area" },
  { src: "/images/11.jpg", alt: "Kenny's Drinks and Beverages" },
  { src: "/images/13.jpg", alt: "Kenny's Bar Atmosphere" },
  { src: "/images/14.jpg", alt: "Kenny's Interior Vibes" }
];

const foodAndDrinksImages = [
  { src: "/images/9.jpg", alt: "Kenny's Interior Design" },
  { src: "/images/10.jpg", alt: "Kenny's Food Specialties" },
  { src: "/images/12.jpg", alt: "Kenny's Culinary Offerings" },
  { src: "/images/15.jpg", alt: "Kenny's Food & Drinks" },
  { src: "/images/16.jpg", alt: "Kenny's Beverages" }
];

const eventsImages = [
  { src: "/images/17.jpg", alt: "Kenny's Events & Celebrations" },
  { src: "/images/18.jpg", alt: "Kenny's Special Events" }
];

const allImages = [...ambianceImages, ...foodAndDrinksImages, ...eventsImages];
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
        
        <GlassCard className="p-6 sm:p-8 w-full max-w-6xl mx-auto">
          {/* Corner decorative elements */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#FF6F1F]/40 rounded-tl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#FF6F1F]/40 rounded-br-2xl"></div>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-black/40 border border-[#FF6F1F]/20">
              <TabsTrigger 
                value="all" 
                className="data-[state=active]:bg-[#FF8C42] data-[state=active]:text-white text-white/70 hover:text-white transition-colors"
              >
                <GalleryHorizontal className="h-4 w-4 mr-2" />
                All
              </TabsTrigger>
              <TabsTrigger 
                value="ambiance" 
                className="data-[state=active]:bg-[#FF8C42] data-[state=active]:text-white text-white/70 hover:text-white transition-colors"
              >
                <Image className="h-4 w-4 mr-2" />
                Ambiance
              </TabsTrigger>
              <TabsTrigger 
                value="food" 
                className="data-[state=active]:bg-[#FF8C42] data-[state=active]:text-white text-white/70 hover:text-white transition-colors"
              >
                <Utensils className="h-4 w-4 mr-2" />
                Food & Drinks
              </TabsTrigger>
              <TabsTrigger 
                value="events" 
                className="data-[state=active]:bg-[#FF8C42] data-[state=active]:text-white text-white/70 hover:text-white transition-colors"
              >
                <Wine className="h-4 w-4 mr-2" />
                Events
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <GalleryGrid images={allImages} />
            </TabsContent>
            
            <TabsContent value="ambiance" className="mt-0">
              <GalleryGrid images={ambianceImages} />
            </TabsContent>
            
            <TabsContent value="food" className="mt-0">
              <GalleryGrid images={foodAndDrinksImages} />
            </TabsContent>
            
            <TabsContent value="events" className="mt-0">
              <GalleryGrid images={eventsImages} />
            </TabsContent>
          </Tabs>
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
          <GlassCard className="inline-block px-8 py-6">
            <p className="text-white/70 font-['Montserrat'] italic text-center mb-4">
              Follow us on Instagram
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a 
                href="https://www.instagram.com/kennysbar.blr?igsh=bWt1b2thb3U0cDRx" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#FF8C42] text-white px-6 py-3 rounded-full hover:bg-[#E0601A] transition-colors flex items-center gap-2 text-sm font-medium min-w-[180px] justify-center"
              >
                <Instagram className="h-4 w-4" />
                @kennysbar.blr
              </a>
              <a 
                href="https://www.instagram.com/kennysbar.hyd" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#FF8C42] text-white px-6 py-3 rounded-full hover:bg-[#E0601A] transition-colors flex items-center gap-2 text-sm font-medium min-w-[180px] justify-center"
              >
                <Instagram className="h-4 w-4" />
                @kennysbar.hyd
              </a>
            </div>
            <p className="text-white/60 font-['Montserrat'] italic text-sm mt-4 text-center">
              for more photos and behind-the-scenes moments.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
