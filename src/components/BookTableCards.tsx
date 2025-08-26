import React from 'react';
import { Phone, MapPin } from 'lucide-react';

const BookTableCards = () => {
  return (
    <section className="py-24 bg-kenny-dark relative overflow-hidden section-with-sidebar min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FF8C42] mb-4">Make a Reservation</h2>
          <p className="text-white/80 text-lg">Call us directly to book your table</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 max-w-4xl mx-auto">
          {/* Bengaluru Location */}
          <div className="bg-black/60 backdrop-blur-md border border-[#FF6F1F]/40 rounded-2xl shadow-xl p-8 flex-1">
            <div className="text-center">
              <div className="bg-[#1a120b] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-[#FF8C42] w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-[#FF8C42] mb-2">Kenny's Bar - Bengaluru</h3>
              <p className="text-white/80 text-sm mb-6">4th Floor, NTR Royal Plaza, Home Building, Outer Ring Rd, Marathahalli Village, Marathahalli, Bengaluru, Karnataka 560037</p>
              
              <div className="bg-[#FF6F1F]/10 rounded-xl p-6 border border-[#FF6F1F]/30">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Phone className="text-[#FF8C42] w-6 h-6" />
                  <span className="text-white/90 text-lg font-medium">Call for Reservation</span>
                </div>
                <a 
                  href="tel:+919317417517" 
                  className="text-[#FF8C42] hover:text-white transition-colors text-2xl font-bold block"
                >
                  +91 93174 17517
                </a>
              </div>
            </div>
          </div>
          
          {/* Hyderabad Location */}
          <div className="bg-black/60 backdrop-blur-md border border-[#FF6F1F]/40 rounded-2xl shadow-xl p-8 flex-1">
            <div className="text-center">
              <div className="bg-[#1a120b] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-[#FF8C42] w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-[#FF8C42] mb-2">Kenny's Bar - Hyderabad</h3>
              <p className="text-white/80 text-sm mb-6">The District, Myscape Rd, Financial District, Nanakramguda, Hyderabad, Telangana 500032</p>
              
              <div className="bg-[#FF6F1F]/10 rounded-xl p-6 border border-[#FF6F1F]/30">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Phone className="text-[#FF8C42] w-6 h-6" />
                  <span className="text-white/90 text-lg font-medium">Call for Reservation</span>
                </div>
                <a 
                  href="tel:+919886343434" 
                  className="text-[#FF8C42] hover:text-white transition-colors text-2xl font-bold block"
                >
                  +91 98863 43434
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-white/60 text-sm">Our team will be happy to assist you with your reservation</p>
        </div>
      </div>
    </section>
  );
};

export default BookTableCards;