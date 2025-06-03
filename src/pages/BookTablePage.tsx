
import React from 'react';
import Navbar from '@/components/Navbar';
import BookTable from '@/components/BookTable';
import Footer from '@/components/Footer';

const BookTablePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="">
        <BookTable />
      </div>
    </div>
  );
};

export default BookTablePage;
