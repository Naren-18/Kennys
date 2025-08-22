import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface AgeVerificationProps {
  onVerified: () => void;
  onDenied: () => void;
}

const AgeVerification: React.FC<AgeVerificationProps> = ({ onVerified, onDenied }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleYes = () => {
    // Removed localStorage - popup will show every time
    setIsVisible(false);
    onVerified();
  };

  const handleNo = () => {
    onDenied();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
      {/* Glass-style card with Kenny's theme */}
      <div className="w-full max-w-lg mx-auto">
        <div className="bg-[#1a120b]/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-[#FF8C42]/30 p-8 md:p-12 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#FF6F1F]/10 blur-[50px] opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-[#FF8C42]/10 blur-[40px]"></div>
          
          {/* Content */}
          <div className="relative z-10">
            {/* Kenny's Real Logo */}
            <div className="text-center mb-8">
              <div className="mb-6 flex justify-center">
                <img 
                  src="/lovable-uploads/logo.png" 
                  alt="Kenny's Neighbourhood Bar Logo" 
                  className="h-24 md:h-32 w-auto object-contain"
                />
              </div>
              <h2 className="text-white text-2xl md:text-3xl font-semibold mb-2">Age Verification</h2>
              <p className="text-white/80 text-lg">
                You must be 25 or older to enter this website.
              </p>
            </div>

            {/* Message */}
            <div className="text-center mb-8">
              <p className="text-white/90 text-lg leading-relaxed mb-4">
                This website contains information about alcoholic beverages and is intended for adults only.
              </p>
              <p className="text-[#FF8C42] text-xl font-semibold">
                Are you at least 25 years of age?
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleYes}
                className="bg-[#FF8C42] hover:bg-[#FF6F1F] text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#FF8C42]/25"
              >
                Yes, I'm 25+
              </Button>
              <Button 
                onClick={handleNo}
                className="bg-transparent border-2 border-white/30 hover:border-red-500 text-white hover:text-red-400 hover:bg-red-500/10 font-semibold px-8 py-3 rounded-xl transition-all duration-300"
              >
                No, I'm under 25
              </Button>
            </div>

            {/* Footer text */}
            <div className="text-center mt-6">
              <p className="text-white/60 text-sm">
                Please drink responsibly
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;