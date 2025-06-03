import React from 'react';
import Navbar from '@/components/Navbar';
import Playlist from '@/components/Playlist';
import Footer from '@/components/Footer';

const PlaylistPage = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="">
        <Playlist />
      </div>
    </div>
  );
};

export default PlaylistPage;
