import React from 'react';
import Navbar from '@/components/Navbar';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

const GalleryPage = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div>
        <Gallery />
      </div>
    </div>
  );
};

export default GalleryPage;
