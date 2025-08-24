import React from 'react';

const ScrollResponsibleMessage: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-kenny-orange py-3 relative z-10">
      <div className="flex animate-scroll whitespace-nowrap">
        {/* Duplicate content for seamless loop */}
        <div className="flex items-center space-x-8 px-8">
          <span className="text-black font-bold text-lg tracking-wider">DRINK RESPONSIBLY</span>
          <span className="text-black text-xl">★</span>
          <span className="text-black font-bold text-lg tracking-wider">ENJOY KENNY'S RESPONSIBLY</span>
          <span className="text-black text-xl">★</span>
          <span className="text-black font-bold text-lg tracking-wider">DRINK RESPONSIBLY</span>
          <span className="text-black text-xl">★</span>
          <span className="text-black font-bold text-lg tracking-wider">ENJOY KENNY'S RESPONSIBLY</span>
          <span className="text-black text-xl">★</span>
        </div>
        {/* Duplicate for seamless scrolling */}
        <div className="flex items-center space-x-8 px-8">
          <span className="text-black font-bold text-lg tracking-wider">DRINK RESPONSIBLY</span>
          <span className="text-black text-xl">★</span>
          <span className="text-black font-bold text-lg tracking-wider">ENJOY KENNY'S RESPONSIBLY</span>
          <span className="text-black text-xl">★</span>
          <span className="text-black font-bold text-lg tracking-wider">DRINK RESPONSIBLY</span>
          <span className="text-black text-xl">★</span>
          <span className="text-black font-bold text-lg tracking-wider">ENJOY KENNY'S RESPONSIBLY</span>
          <span className="text-black text-xl">★</span>
        </div>
      </div>
    </div>
  );
};

export default ScrollResponsibleMessage;