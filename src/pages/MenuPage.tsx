import React from 'react';
import Navbar from '@/components/Navbar';
import Menu from '@/components/Menu';
import ScrollResponsibleMessage from '@/components/ScrollResponsibleMessage';

const MenuPage = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="">
        <Menu />
      </div>
      <ScrollResponsibleMessage />
    </div>
  );
};

export default MenuPage;
