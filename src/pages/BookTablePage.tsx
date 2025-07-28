
import React from 'react';
import Navbar from '@/components/Navbar';
import BookTable from '@/components/BookTable';
import Footer from '@/components/Footer';

const BookTablePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-black opacity-95"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-kenny-dark to-transparent opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-kenny-dark via-transparent to-transparent"></div>
      </div>
      <Navbar />
      <div className="">
        <BookTable />
      </div>
    </div>
  );
};

export default BookTablePage;
