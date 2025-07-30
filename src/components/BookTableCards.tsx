import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CalendarClock, Users, Phone, Mail, PartyPopper, MapPin, Clock, Calendar } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import GlassCard from './ui/glass-card';

const BookTableCards = () => {
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
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation form data:', formData);
    
    // Show success message
    toast({
      title: "Reservation Submitted!",
      description: `Your table reservation for ${formData.guests} guests at Kenny's ${formData.location === 'bangalore' ? 'Bangalore' : 'Hyderabad'} has been submitted. We'll confirm shortly.`,
    });
    
    // Reset form (optional)
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
  };

  return (
    <section className="py-24 bg-kenny-dark relative overflow-hidden section-with-sidebar min-h-screen">
      {/* Book A Table Card */}
      <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-[#FF6F1F]/30 flex-1 max-w-md shadow-lg shadow-black/30 group hover:border-[#FF6F1F]/50 transition-all duration-500 relative">
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#FF6F1F]/40 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#FF6F1F]/40 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-4 right-4 bg-[#FF6F1F]/10 p-2 rounded-full">
          <CalendarClock className="h-5 w-5 text-[#FF8C42]" />
        </div>
        <h3 className="text-[#FF8C42] font-title text-2xl mb-4 flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          <span>Book A Table</span>
        </h3>
        <p className="text-white/80 mb-6">Reserve your spot at Kenny's and skip the wait. We'll hold your table for 15 minutes past your reservation time.</p>
        <Dialog>
          <DialogTrigger asChild>
            <button
              className="relative cursor-pointer py-3 px-6 text-center inline-flex justify-center items-center gap-2 text-base rounded-lg transition-all duration-300 w-full bg-gradient-to-r from-[#FF6F1F] to-[#FF8C42] text-white group"
            >
              <Users className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">Make Reservation</span>
            </button>
          </DialogTrigger>
          <DialogContent className="bg-black/90 border border-[#FF6F1F]/30 text-white sm:max-w-lg rounded-xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#FF6F1F]/40 rounded-tl-xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#FF6F1F]/40 rounded-br-xl"></div>
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#FF6F1F]/10 blur-[80px] opacity-60"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#FF8C42]/10 blur-[80px] opacity-60"></div>
            <DialogHeader className="relative z-10">
              <div className="flex justify-center mb-2">
                <div className="bg-gradient-to-r from-[#FF6F1F]/20 to-[#FF8C42]/20 p-3 rounded-full">
                  <CalendarClock className="h-6 w-6 text-[#FF8C42]" />
                </div>
              </div>
              <DialogTitle className="text-center text-[#FF8C42] font-handwritten text-4xl mb-1 relative inline-block">
                Book Your Table
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6F1F] to-transparent"></div>
              </DialogTitle>
              <DialogDescription className="text-white/70 text-center">
                Fill out the form below and we'll confirm your reservation shortly.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-5 pt-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF6F1F]/70">
                    <Mail className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF6F1F]/70">
                      <Clock className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF6F1F]/70">
                      <PartyPopper className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[#FF6F1F] to-[#FF8C42] text-white font-semibold text-lg shadow-md hover:scale-[1.03] transition-transform duration-200"
              >
                Submit Reservation
              </button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      
      {/* Order Online Card */}
      <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-[#FF6F1F]/30 flex-1 max-w-md shadow-lg shadow-black/30 group hover:border-[#FF6F1F]/50 transition-all duration-500 relative">
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#FF6F1F]/40 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#FF6F1F]/40 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-4 right-4 bg-[#FF6F1F]/10 p-2 rounded-full">
          <ChefHat className="h-5 w-5 text-[#FF8C42]" />
        </div>
        <h3 className="text-[#FF8C42] font-title text-2xl mb-4 flex items-center gap-2">
          <Utensils className="h-5 w-5" />
          <span>Order Online</span>
        </h3>
        <p className="text-white/80 mb-6">Craving Kenny's at home? Order through our delivery partners for the same great taste, delivered to your door.</p>
        <div className="flex items-center justify-center h-16">
          <span className="text-[#FF8C42] text-lg font-semibold">Coming Soon</span>
        </div>
      </div>
    </div>

    {/* Find Us Card */}
    <div className="mt-16 relative">
      <div className="flex justify-center mb-6">
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#FF6F1F]/50 to-transparent"></div>
      </div>
      <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-[#FF6F1F]/20 max-w-3xl mx-auto relative overflow-hidden">
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#FF6F1F]/30 rounded-tl-lg"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#FF6F1F]/30 rounded-br-lg"></div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0 bg-gradient-to-br from-[#FF6F1F]/10 to-[#FF8C42]/10 p-4 rounded-full">
            <MapPin className="h-8 w-8 text-[#FF8C42]" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-[#FF8C42] font-title text-xl mb-2">Find Us</h3>
            <p className="text-white/80 mb-3">123 Main Street, Downtown</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm py-1 px-3 bg-gradient-to-r from-[#FF6F1F]/10 to-[#FF8C42]/10 hover:from-[#FF6F1F]/20 hover:to-[#FF8C42]/20 border border-[#FF6F1F]/30 text-white rounded-lg transition-all duration-300"
              >
                <span>Get Directions</span>
              </a>
              <a 
                href="tel:+11234567890" 
                className="inline-flex items-center gap-1 text-sm py-1 px-3 bg-gradient-to-r from-[#FF6F1F]/10 to-[#FF8C42]/10 hover:from-[#FF6F1F]/20 hover:to-[#FF8C42]/20 border border-[#FF6F1F]/30 text-white rounded-lg transition-all duration-300"
              >
                <Phone className="h-3 w-3" />
                <span>(123) 456-7890</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTableCards;