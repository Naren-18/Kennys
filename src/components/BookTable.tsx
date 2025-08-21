import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, Mail, PartyPopper, Utensils, MapPin } from 'lucide-react';
import emailjs from 'emailjs-com';

const BookTable = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: 'bangalore', // Default to Bangalore
    date: '',
    time: '',
    guests: '2',
    occasion: '',
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    
    console.log('Form submitted with data:', formData);
    
    try {
      // Save reservation to localStorage FIRST
      const reservation = {
        id: Date.now().toString(),
        ...formData,
        createdAt: new Date().toISOString()
      };
      
      console.log('Saving reservation:', reservation);
      
      const existingReservations = JSON.parse(localStorage.getItem('reservations') || '[]');
      console.log('Existing reservations:', existingReservations);
      
      existingReservations.push(reservation);
      localStorage.setItem('reservations', JSON.stringify(existingReservations));
      
      console.log('Reservation saved to localStorage');
      
      // Try to send email (but don't let it block the localStorage save)
      try {
        await emailjs.send(
          'service_tnzidfj',
          'template_99mma4f',
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            location: formData.location,
            date: formData.date,
            time: formData.time,
            guests: formData.guests,
            occasion: formData.occasion,
          },
          'z0yL-CfuTqtMyFvRr'
        );
        console.log('Email sent successfully');
      } catch (emailError) {
        console.log('Email failed but reservation was saved:', emailError);
      }
      
      setResult('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: 'bangalore',
        date: '',
        time: '',
        guests: '2',
        occasion: '',
      });
    } catch (error) {
      console.error('Reservation error:', error);
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
        
        {/* Location Information Cards */}
        <div className="w-full max-w-6xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bengaluru Location */}
            <div className="bg-black/60 backdrop-blur-md border border-[#FF6F1F]/40 rounded-2xl shadow-xl p-6">
              <div className="text-center">
                <div className="bg-[#1a120b] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-[#FF8C42] w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#FF8C42] mb-2">Kenny's Bar - Bengaluru</h3>
                <p className="text-white/80 text-sm mb-4">4th Floor, NTR Royal Plaza, Home Building, Outer Ring Rd, Marathahalli Village, Marathahalli, Bengaluru, Karnataka 560037</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Phone className="text-[#FF8C42] w-4 h-4" />
                  <a href="tel:+919317417517" className="text-[#FF8C42] hover:text-white transition-colors text-sm font-medium">
                    +91 93174 17517
                  </a>
                </div>
                <p className="text-white/60 text-xs">Open: 4:00 PM - 1:00 AM (Daily)</p>
              </div>
            </div>
            
            {/* Hyderabad Location */}
            <div className="bg-black/60 backdrop-blur-md border border-[#FF6F1F]/40 rounded-2xl shadow-xl p-6">
              <div className="text-center">
                <div className="bg-[#1a120b] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-[#FF8C42] w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#FF8C42] mb-2">Kenny's Bar - Hyderabad</h3>
                <p className="text-white/80 text-sm mb-4">The District, Myscape Rd, Financial District, Nanakramguda, Hyderabad, Telangana 500032</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Phone className="text-[#FF8C42] w-4 h-4" />
                  <a href="tel:+919637819999" className="text-[#FF8C42] hover:text-white transition-colors text-sm font-medium">
                    +91 96378 19999
                  </a>
                </div>
                <p className="text-white/60 text-xs">Open: 4:00 PM - 1:00 AM (Daily)</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full max-w-2xl bg-black/60 backdrop-blur-md rounded-2xl border border-[#FF6F1F]/30 shadow-2xl p-10 relative mb-12">
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#FF6F1F]/40 rounded-tl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#FF6F1F]/40 rounded-br-2xl"></div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Location Selection */}
            <div className="space-y-2 relative">
              <label htmlFor="location" className="text-sm font-medium flex items-center gap-2 text-[#FF8C42]">
                <span>Select Location</span>
              </label>
              <div className="relative">
                <select
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#FF6F1F]/30 bg-black/50 p-3 pl-10 text-white focus:border-[#FF8C42]/50 focus:ring-1 focus:ring-[#FF8C42]/50 transition-all duration-300 appearance-none cursor-pointer"
                  disabled={loading}
                >
                  <option value="bangalore" className="bg-black text-white">Bangalore - Marathahalli</option>
                  <option value="hyderabad" className="bg-black text-white">Hyderabad - Financial District</option>
                </select>
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF6F1F]/70">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#FF6F1F]/70 pointer-events-none">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            
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
            
            {/* Location-specific message */}
            {formData.location === 'hyderabad' && (
            <div className="bg-[#FF8C42]/10 border border-[#FF8C42]/30 rounded-lg p-4 text-center">
            <p className="text-[#FF8C42] font-medium">
            📍 Your table reservation for Hyderabad location has been submitted. We'll confirm shortly.
            </p>
            </div>
            )}
            
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
      </div>
    </section>
  );
};

export default BookTable;
