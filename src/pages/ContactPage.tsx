import React, { useState } from 'react';
import { Mail, Phone, Instagram, Facebook, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', mobile: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

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
            <div className="flex-1 flex flex-col gap-6 justify-center">
              {/* Kenny's Logo */}
              <div className="flex justify-center mb-4">
                <img  
                  src="/lovable-uploads/logo.png" 
                  alt="Kenny's Bar Logo" 
                  className="w-36 h-auto object-contain"
                />
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-[#FF8C42] w-6 h-6" />
                <span className="text-white/90">89/1, Monnekollal Village, Varthur Hobli, Outer Ring Road, Marathahalli, Bangalore</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#FF8C42] w-6 h-6" />
                <a href="tel:+919317417517" className="text-white/90 hover:text-[#FF8C42] transition">+91 9317417517</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#FF8C42] w-6 h-6" />
                <a href="mailto:info@kennys.bar" className="text-white/90 hover:text-[#FF8C42] transition">info@kennys.bar</a>
              </div>
              <div className="flex gap-4 mt-2">
                <a href="https://www.instagram.com/kenny.sbar?igsh=ajFkamh0dzZueXR6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full px-4 py-2 transition-colors font-medium text-white">
                  <Instagram className="h-5 w-5 text-[#FF8C42]" />
                  <span className="text-sm">Instagram</span>
                </a>
                <a href="https://www.facebook.com/people/Kennys-Bar/61576548480813/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#FF8C42]/10 hover:bg-[#FF8C42]/30 rounded-full px-4 py-2 transition-colors font-medium text-white">
                  <Facebook className="h-5 w-5 text-[#FF8C42]" />
                  <span className="text-sm">Facebook</span>
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
      {/* <Footer /> */}
    </div>
  );
};

export default ContactPage;
