import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, Mail, PartyPopper, Utensils } from 'lucide-react';
import emailjs from 'emailjs-com';

const BookTable = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      await emailjs.send(
        'service_tnzidfj', // Replace with your actual service ID
        'template_99mma4f', // Replace with your actual template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          date: formData.date,
          time: formData.time,
          guests: formData.guests,
          occasion: formData.occasion,
        },
        'z0yL-CfuTqtMyFvRr' // Replace with your actual public key
      );
      setResult('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        occasion: '',
      });
    } catch (error) {
      setResult('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="book-table" className="py-24 bg-kenny-dark relative overflow-hidden section-with-sidebar min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-40 right-40 w-96 h-96 rounded-full bg-[#FF6F1F]/20 blur-[100px] opacity-50"></div>
        <div className="absolute bottom-40 left-40 w-80 h-80 rounded-full bg-[#FF8C42]/20 blur-[100px]"></div>
        <div className="absolute inset-0 wood-grain opacity-30"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <div className="text-center mb-12 relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#FF6F1F] to-transparent"></div>
          <h2 className="text-[#FF8C42] font-handwritten text-6xl mb-4 relative inline-block">
            Reserve Your Table
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6F1F] to-transparent"></div>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Whether you're planning a cozy night out or a special celebration, book your table at Kenny's and let us make your evening memorable.
          </p>
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-2">
              <Utensils className="h-6 w-6 text-[#FF6F1F]" />
              <div className="h-px w-16 bg-gradient-to-r from-[#FF6F1F]/50 to-transparent"></div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-2xl bg-black/60 backdrop-blur-md rounded-2xl border border-[#FF6F1F]/30 shadow-2xl p-10 relative mb-12">
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#FF6F1F]/40 rounded-tl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#FF6F1F]/40 rounded-br-2xl"></div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 relative">
                <label htmlFor="name" className="text-sm font-medium flex items-center gap-2 text-[#FF8C42]">
                  <span>Full Name</span>
                </label>
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-[#FF6F1F]/30 bg-black/50 p-3 pl-10 text-white focus:border-[#FF8C42]/50 focus:ring-1 focus:ring-[#FF8C42]/50 transition-all duration-300"
                    placeholder="John Doe"
                    disabled={loading}
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF6F1F]/70">
                    <Users className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <div className="space-y-2 relative">
                <label htmlFor="phone" className="text-sm font-medium flex items-center gap-2 text-[#FF8C42]">
                  <span>Phone Number</span>
                </label>
                <div className="relative">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-[#FF6F1F]/30 bg-black/50 p-3 pl-10 text-white focus:border-[#FF8C42]/50 focus:ring-1 focus:ring-[#FF8C42]/50 transition-all duration-300"
                    placeholder="(123) 456-7890"
                    disabled={loading}
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF6F1F]/70">
                    <Phone className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2 relative">
              <label htmlFor="email" className="text-sm font-medium flex items-center gap-2 text-[#FF8C42]">
                <span>Email Address</span>
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#FF6F1F]/30 bg-black/50 p-3 pl-10 text-white focus:border-[#FF8C42]/50 focus:ring-1 focus:ring-[#FF8C42]/50 transition-all duration-300"
                  placeholder="your@email.com"
                  disabled={loading}
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF6F1F]/70">
                  <Mail className="h-4 w-4" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 relative">
                <label htmlFor="date" className="text-sm font-medium flex items-center gap-2 text-[#FF8C42]">
                  <span>Date</span>
                </label>
                <div className="relative">
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-[#FF6F1F]/30 bg-black/50 p-3 pl-10 text-white focus:border-[#FF8C42]/50 focus:ring-1 focus:ring-[#FF8C42]/50 transition-all duration-300"
                    min={new Date().toISOString().split('T')[0]}
                    disabled={loading}
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF6F1F]/70">
                    <Calendar className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <div className="space-y-2 relative">
                <label htmlFor="time" className="text-sm font-medium flex items-center gap-2 text-[#FF8C42]">
                  <span>Time</span>
                </label>
                <div className="relative">
                  <input
                    id="time"
                    name="time"
                    type="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-[#FF6F1F]/30 bg-black/50 p-3 pl-10 text-white focus:border-[#FF8C42]/50 focus:ring-1 focus:ring-[#FF8C42]/50 transition-all duration-300"
                    disabled={loading}
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF6F1F]/70">
                    <Clock className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 relative">
                <label htmlFor="guests" className="text-sm font-medium flex items-center gap-2 text-[#FF8C42]">
                  <span>Number of Guests</span>
                </label>
                <div className="relative">
                  <input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="20"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-[#FF6F1F]/30 bg-black/50 p-3 pl-10 text-white focus:border-[#FF8C42]/50 focus:ring-1 focus:ring-[#FF8C42]/50 transition-all duration-300"
                    placeholder="2"
                    disabled={loading}
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF6F1F]/70">
                    <Users className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <div className="space-y-2 relative">
                <label htmlFor="occasion" className="text-sm font-medium flex items-center gap-2 text-[#FF8C42]">
                  <span>Occasion</span>
                </label>
                <div className="relative">
                  <input
                    id="occasion"
                    name="occasion"
                    type="text"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-[#FF6F1F]/30 bg-black/50 p-3 pl-10 text-white focus:border-[#FF8C42]/50 focus:ring-1 focus:ring-[#FF8C42]/50 transition-all duration-300"
                    placeholder="Birthday, Anniversary, etc. (optional)"
                    disabled={loading}
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF6F1F]/70">
                    <PartyPopper className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[#FF6F1F] to-[#FF8C42] text-white font-semibold text-lg shadow-md hover:scale-[1.03] transition-transform duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Reservation'}
            </button>
            {result === 'success' && (
              <div className="text-green-400 text-center mt-4">Reservation request submitted! We'll confirm your table soon.</div>
            )}
            {result === 'error' && (
              <div className="text-red-400 text-center mt-4">Failed to send reservation. Please try again later.</div>
            )}
          </form>
        </div>
        {/* Order Online Card */}
        <div className="w-full max-w-2xl bg-black/60 backdrop-blur-md rounded-2xl border border-[#FF6F1F]/30 shadow-2xl p-10 relative flex flex-col items-center">
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#FF6F1F]/40 rounded-tl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#FF6F1F]/40 rounded-br-2xl"></div>
          <h3 className="text-[#FF8C42] font-title text-2xl mb-4 flex items-center gap-2">
            <span>Order Online</span>
          </h3>
          <p className="text-white/80 mb-6 text-center">Enjoy Kenny's at home! Online ordering is launching soon.</p>
          <div className="w-full flex justify-center">
            <span className="inline-block bg-gradient-to-r from-[#FF6F1F] to-[#FF8C42] text-white px-6 py-3 rounded-lg font-semibold text-lg opacity-80 cursor-not-allowed select-none">Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTable;
