import React, { useState } from 'react';
import { Mail, Phone, Instagram, Facebook, MapPin, Navigation, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
// import Footer from '@/components/Footer';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', mobile: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [showLocationPopup, setShowLocationPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      await emailjs.send(
        'service_tnzidfj',
        'template_tu15umd',
        {
          name: form.name,
          mobile: form.mobile,
          message: form.message,
        },
        'z0yL-CfuTqtMyFvRr'
      );
      setResult('Message sent successfully!');
      setForm({ name: '', mobile: '', message: '' });
    } catch (error) {
      setResult('Failed to send message. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans relative">
      {/* Background overlays for consistency */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-black opacity-95"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-kenny-dark to-transparent opacity-50"></div>
        {/* Background image for contact page */}
        <img
          src="https://images.unsplash.com/photo-1597290282695-edc43d0e7129?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFyfGVufDB8fDB8fHww"
          alt="Bar background"
          className="absolute top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2 scale-105 opacity-30 z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-kenny-dark via-transparent to-transparent"></div>
      </div>
      <Navbar />
      <div className="flex flex-col items-center justify-center py-12 px-4 relative z-10 min-h-[80vh]">
        <div className="max-w-3xl w-full mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FF8C42] mb-2 text-center tracking-wide">Contact Us</h1>
          <p className="text-white/80 text-lg mb-8 text-center">We'd love to hear from you! Reach out for events, or just to say hello.</p>
          <div className="bg-[#1a120b]/80 rounded-3xl shadow-2xl border border-[#FF8C42]/20 p-8 md:p-12 flex flex-col md:flex-row gap-10">
            
            {/* Contact Info */}
            <div className="flex-1 flex flex-col gap-4 justify-center">
              {/* Kenny's Logo */}
              <div className="flex justify-center mb-2">
                <img  
                  src="/lovable-uploads/logo.png" 
                  alt="Kenny's Bar Logo" 
                  className="w-36 h-auto object-contain"
                />
              </div>
              
              {/* Our Locations Button - Same as Footer */}
              <button 
                onClick={() => setShowLocationPopup(true)}
                className="flex items-center gap-2 bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full px-3 py-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:translate-x-1 font-medium text-white w-max mb-2"
              >
                <MapPin className="h-4 w-4 text-[#FF8C42] transition-transform duration-200 hover:rotate-12" />
                <span className="text-sm">Our Locations</span>
              </button>
              
              <div className="flex items-center gap-3">
                <Phone className="text-[#FF8C42] w-6 h-6" />
                <a href="tel:+919317417517" className="text-white/90 hover:text-[#FF8C42] transition">+91 9317 417 517</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#FF8C42] w-6 h-6" />
                <a href="mailto:info@kennys.bar" className="text-white/90 hover:text-[#FF8C42] transition">info@kennys.bar</a>
              </div>
              <div className="flex gap-4 mt-2">
                <a href="https://www.instagram.com/kenny.sbar?igsh=ajFkamh0dzZueXR6" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full p-3 transition-colors" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-[#FF8C42]" />
                </a>
                <a href="https://www.facebook.com/people/Kennys-Bar/61576548480813/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full p-3 transition-colors" aria-label="Facebook">
                  <Facebook className="h-5 w-5 text-[#FF8C42]" />
                </a>
              </div>
            </div>
            {/* Contact Form */}
            <form className="flex-1 flex flex-col gap-5" onSubmit={handleSubmit}>
              <label className="text-white/90 font-semibold">Name
                <input name="name" type="text" className="mt-2 w-full rounded-lg bg-black/60 border border-[#FF8C42]/30 px-4 py-3 text-white focus:outline-none focus:border-[#FF8C42] transition" placeholder="Your Name" required value={form.name} onChange={handleChange} />
              </label>
              <label className="text-white/90 font-semibold">Mobile Number
                <input name="mobile" type="tel" className="mt-2 w-full rounded-lg bg-black/60 border border-[#FF8C42]/30 px-4 py-3 text-white focus:outline-none focus:border-[#FF8C42] transition" placeholder="Your Mobile Number" required value={form.mobile} onChange={handleChange} />
              </label>
              <label className="text-white/90 font-semibold">Message
                <textarea name="message" className="mt-2 w-full rounded-lg bg-black/60 border border-[#FF8C42]/30 px-4 py-3 text-white focus:outline-none focus:border-[#FF8C42] transition min-h-[120px] resize-none" placeholder="How can we help you?" required value={form.message} onChange={handleChange} />
              </label>
              <button type="submit" className="mt-2 w-full py-3 px-8 text-center uppercase font-semibold tracking-wide text-[#FF8C42] text-lg bg-transparent border-2 border-[#FF8C42] hover:bg-[#FF8C42] hover:text-white rounded-full transition-all duration-300 ease-in-out" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {result && <div className="text-center text-sm mt-2 text-[#FF8C42]">{result}</div>}
            </form>
          </div>
        </div>
      </div>
      
      {/* Location Popup - Same as Footer */}
      {showLocationPopup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ 
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="bg-black/90 border border-[#FF8C42]/30 rounded-2xl p-8 max-w-2xl w-full relative"
          >
            <button
              onClick={() => setShowLocationPopup(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            
            <h2 className="text-2xl font-bold text-[#FF8C42] mb-6 text-center">Our Locations</h2>
            
            <div className="space-y-6">
              {/* Current Location - Marathahalli */}
              <div className="bg-[#FF8C42]/10 rounded-xl p-6 border border-[#FF8C42]/20">
                <div className="flex items-start gap-4">
                  <div className="bg-[#FF8C42]/20 rounded-full p-2 mt-1">
                    <MapPin className="h-5 w-5 text-[#FF8C42]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">Kenny's Bar - Marathahalli</h3>
                    <p className="text-white/80 mb-3">89/1, Monnekollal Village, Varthur Hobli, Outer Ring Road, Marathahalli, Bengaluru, Karnataka 560037</p>
                    <div className="flex gap-3">
                      <a 
                        href="https://maps.google.com/?q=Kenny's+Bar+Marathahalli" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#FF8C42] text-white px-4 py-2 rounded-lg hover:bg-[#E0601A] transition-colors flex items-center gap-2"
                      >
                        <Navigation className="h-4 w-4" />
                        Get Directions
                      </a>
                      <a 
                        href="tel:+919317417517"
                        className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2"
                      >
                        <Phone className="h-4 w-4" />
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Upcoming Location - Hyderabad */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-[#FF8C42] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Coming Soon
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-full p-2 mt-1">
                    <MapPin className="h-5 w-5 text-white/60" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white/80 mb-2">Kenny's Bar - Hyderabad</h3>
                    <p className="text-white/60 mb-3">Location details will be announced soon. Stay tuned for updates!</p>
                    <div className="flex gap-3">
                      <button 
                        disabled
                        className="bg-white/10 text-white/50 px-4 py-2 rounded-lg cursor-not-allowed flex items-center gap-2"
                      >
                        <MapPin className="h-4 w-4" />
                        Location TBA
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-white/60 text-sm">Follow us on social media for updates on our new location!</p>
            </div>
          </motion.div>
        </div>
      )}
      {/* <Footer /> */}
    </div>
  );
};

export default ContactPage;
