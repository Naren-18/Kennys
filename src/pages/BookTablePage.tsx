
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const BookTablePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Reserve Your Table | Kenny's Bar | Call for Reservations"
        description="Reserve your table at Kenny's Bar. Call us directly for quick reservations at our Marathahalli and Hyderabad locations."
        keywords="Kenny's Bar reservation, table booking, Marathahalli bar, Hyderabad bar, phone reservation"
      />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-black opacity-95"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-kenny-dark to-transparent opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-kenny-dark via-transparent to-transparent"></div>
      </div>
      <Navbar />
      
      <div className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-[#FF8C42] mb-6">
              Reserve Your Table
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Call us directly for quick and easy table reservations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Marathahalli Location */}
            <div className="bg-gradient-to-br from-[#FF8C42]/20 to-transparent border border-[#FF8C42]/30 rounded-2xl p-8 text-center hover:border-[#FF8C42]/50 transition-all duration-300">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#FF8C42] mb-2">
                  Marathahalli, Bengaluru
                </h2>
                <p className="text-gray-400">
                  Our flagship location
                </p>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-300 mb-4">
                  📍 Marathahalli, Bengaluru, Karnataka
                </p>
                <div className="bg-black/50 rounded-lg p-4 border border-[#FF8C42]/20">
                  <p className="text-sm text-gray-400 mb-2">Call for Reservations</p>
                  <a 
                    href="tel:+919876543210" 
                    className="text-2xl font-bold text-[#FF8C42] hover:text-[#FF8C42]/80 transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>

            {/* Hyderabad Location */}
            <div className="bg-gradient-to-br from-[#FF8C42]/20 to-transparent border border-[#FF8C42]/30 rounded-2xl p-8 text-center hover:border-[#FF8C42]/50 transition-all duration-300">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#FF8C42] mb-2">
                  Hyderabad
                </h2>
                <p className="text-gray-400">
                  Now Open
                </p>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-300 mb-4">
                  📍 The District, Financial District, Hyderabad 
                </p>
                <div className="bg-black/50 rounded-lg p-4 border border-[#FF8C42]/20">
                  <p className="text-sm text-gray-400 mb-2">Call for Reservations</p>
                  <a 
                    href="tel:+919637819999" 
                    className="text-2xl font-bold text-[#FF8C42] hover:text-[#FF8C42]/80 transition-colors"
                  >
                    +91 96378 19999
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our friendly staff will help you find the perfect table for your occasion. 
              Call during business hours for immediate assistance.
            </p>
          </div>
        </div>
      </div>
      
      {/* Remove this line: <Footer /> */}
    </div>
  );
};

export default BookTablePage;
