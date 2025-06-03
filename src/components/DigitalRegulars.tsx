import React from 'react';

const DigitalRegulars = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#2b1b08] to-[#1a0f00] relative overflow-hidden">
      <div className="absolute inset-0 paper-texture opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/2 relative">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-kenny-amber/30"></div>
                <img 
                  src="https://images.unsplash.com/photo-1529604278261-8bfcdb00a7b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Kenny's Bar Regulars" 
                  className="relative z-10 warmth-filter"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-kenny-amber/10 backdrop-blur-sm border border-kenny-amber/30 p-4 max-w-[200px] transform rotate-2">
                <p className="text-white/80 font-handwritten text-lg">
                  "First round's on me for all our digital regulars!"
                  <br />- Kenny
                </p>
              </div>
            </div>
              <div className="md:w-1/2">
              <h2 className="text-kenny-amber font-handwritten text-5xl mb-2">Digital Regulars</h2>
              <h3 className="text-white text-2xl mb-6">Join Our Community</h3>
              <p className="text-white/80 mb-6">
                The next best thing to being at Kenny's is being part of our digital community. Join our Digital Regulars program to:
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Get personalized greetings when you visit our site",
                  "Collect digital coasters for different experiences",
                  "Remember your favorite orders with \"Your Usual\"",
                  "See when your friends are planning to visit",
                  "Get exclusive invites to special events"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-kenny-amber mr-2">•</span>
                    <span className="text-white/80">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <button
                id="open-digital-regular-modal"
                type="button"
                className="bg-kenny-amber hover:bg-kenny-amber/90 text-white font-bold text-lg px-8 py-4 active:scale-95 transition-all rounded-lg"
              >
                Become a Digital Regular
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalRegulars;
