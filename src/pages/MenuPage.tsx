import React from 'react';
import Navbar from '@/components/Navbar';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';

const MenuPage = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="">
        <Menu />
      </div>
    </div>
  );
};

export default MenuPage;
