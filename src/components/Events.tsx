import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Music, GlassWater, Star, Users, Clock, MapPin, CalendarClock, PartyPopper } from 'lucide-react';
import { motion } from 'framer-motion';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  category: 'music' | 'tasting' | 'special' | 'community';
}

const GlassCard = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg" />
    <div className="relative z-10">{children}</div>
  </div>
);

const Events = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const events: Event[] = [
    {
      id: 1,
      title: "Coming Soon",
      date: "TBA",
      time: "TBA",
      description: "Exciting events are being planned! Stay tuned for updates on our upcoming entertainment.",
      category: 'music'
    },
    {
      id: 2,
      title: "Coming Soon",
      date: "TBA",
      time: "TBA",
      description: "Amazing tasting experiences are in the works! Check back soon for details.",
      category: 'tasting'
    },
    {
      id: 3,
      title: "Coming Soon",
      date: "TBA",
      time: "TBA",
      description: "Community gatherings are being organized! We'll announce details soon.",
      category: 'community'
    },
    {
      id: 4,
      title: "Coming Soon",
      date: "TBA",
      time: "TBA",
      description: "Special celebrations are being planned! Keep an eye out for announcements.",
      category: 'special'
    }
  ];

  const filteredEvents = filter ? events.filter(event => event.category === filter) : events;
  
  const categoryColor = {
    music: "from-[#FF6F1F] to-[#FF8C42]",
    tasting: "from-[#FF6F1F] to-[#FF8C42]",
    special: "from-[#FF6F1F] to-[#FF8C42]",
    community: "from-[#FF6F1F] to-[#FF8C42]"
  };
  
  const categoryLabel = {
    music: "Music",
    tasting: "Tasting",
    special: "Special",
    community: "Community"
  };
  
  const categoryIcon = {
    music: <Music className="h-4 w-4" />,
    tasting: <GlassWater className="h-4 w-4" />,
    special: <Star className="h-4 w-4" />,
    community: <Users className="h-4 w-4" />
  };
    return (
    <section className="pt-8 pb-16 min-h-screen relative overflow-hidden">
      {/* Unique background image and overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1500&q=80"
          alt="Events bar background"
          className="absolute top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2 scale-105"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#FF6F1F] to-transparent"></div>
          <h2 className="text-[#FF8C42] font-bold font-['League_Spartan'] text-5xl md:text-6xl mb-4 relative inline-block">
            Join Us
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6F1F] to-transparent"></div>
          </h2>
          <h3 className="text-white font-semibold font-['League_Spartan'] text-2xl md:text-3xl mb-6">Upcoming Events</h3>
          <p className="text-white/80 font-['Montserrat'] max-w-2xl mx-auto text-base md:text-lg">
            Exciting events are being planned at Kenny's. Stay tuned for announcements!
          </p>
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-2">
              <PartyPopper className="h-6 w-6 text-[#FF6F1F]" />
              <div className="h-px w-16 bg-gradient-to-r from-[#FF6F1F]/50 to-transparent"></div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <GlassCard className="flex">
              <button
                className={`relative cursor-pointer py-3 px-6 text-center font-medium inline-flex justify-center items-center gap-2 text-base rounded-lg transition-all duration-300 ${filter === null ? 'bg-gradient-to-r from-[#FF6F1F] to-[#FF8C42] text-white' : 'text-white/80 hover:text-white'}`}
                onClick={() => setFilter(null)}
              >
                <CalendarClock className="h-4 w-4" />
                <span>All Events</span>
              </button>
              {['music', 'tasting', 'special', 'community'].map((category) => (
                <button
                  key={category}
                  className={`relative cursor-pointer py-3 px-6 text-center font-medium inline-flex justify-center items-center gap-2 text-base rounded-lg transition-all duration-300 ${filter === category ? 'bg-gradient-to-r from-[#FF6F1F] to-[#FF8C42] text-white' : 'text-white/80 hover:text-white'}`}
                  onClick={() => setFilter(category as Event['category'])}
                >
                  {categoryIcon[category as Event['category']]}
                  <span>{categoryLabel[category as Event['category']]}</span>
                </button>
              ))}
            </GlassCard>
          </div>
        </motion.div>
        <GlassCard className="p-8 relative overflow-hidden mt-12 max-w-6xl mx-auto w-full">
          {/* Corner decorative elements */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#FF6F1F]/40 rounded-tl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#FF6F1F]/40 rounded-br-2xl"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filteredEvents.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="h-full flex"
              >
                <GlassCard className="overflow-hidden transition-all duration-500 hover:border-[#FF6F1F]/30 rounded-xl shadow-lg group flex flex-col h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className={`h-1.5 w-full bg-gradient-to-r ${categoryColor[event.category]}`}></div>
                    <div className="p-6 relative flex flex-col flex-grow">
                      {/* Corner decorative elements that appear on hover */}
                      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#FF6F1F]/40 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#FF6F1F]/40 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="flex justify-between items-start mb-5">
                        <h4 className="text-white font-semibold font-['League_Spartan'] text-xl group-hover:text-[#FF8C42] transition-colors duration-300">{event.title}</h4>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#FF6F1F]/20 to-[#FF8C42]/20 backdrop-blur-sm text-white text-xs font-medium">
                          {categoryIcon[event.category]}
                          <span>{categoryLabel[event.category]}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-white/70 mb-2">
                        <Calendar className="h-4 w-4 text-[#FF8C42]" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70 mb-4">
                        <Clock className="h-4 w-4 text-[#FF8C42]" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <p className="text-white/80 mb-6 text-sm flex-grow">{event.description}</p>
                      <div className="mt-auto">
                        <Button
                          disabled
                          className="relative cursor-not-allowed py-3 px-6 text-center inline-flex justify-center items-center gap-2 text-base rounded-lg transition-all duration-300 w-full bg-gradient-to-r from-[#FF6F1F]/20 to-[#FF8C42]/20 border border-[#FF6F1F]/30 text-white/50"
                        >
                          <CalendarClock className="h-4 w-4 text-[#FF8C42]/50" />
                          <span>Details Coming Soon</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </GlassCard>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: filteredEvents.length * 0.1 }}
            >
              <GlassCard className="overflow-hidden flex flex-col rounded-xl shadow-xl relative group hover:border-[#FF6F1F]/50 transition-all duration-500">
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#FF6F1F]/40 rounded-tl-xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#FF6F1F]/40 rounded-br-xl"></div>
                <CardContent className="p-8 flex flex-col justify-center items-center h-full text-center relative z-10">
                  <div className="absolute top-4 right-4 bg-[#FF6F1F]/10 p-2 rounded-full">
                    <CalendarClock className="h-5 w-5 text-[#FF8C42]" />
                  </div>
                  <h4 className="text-[#FF6F1F] font-semibold font-['League_Spartan'] text-xl mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5" />
                    <span>Stay Tuned!</span>
                  </h4>
                  <p className="text-white/80 font-['Montserrat'] mb-6 max-w-xs">
                    We're planning amazing events for you! Follow us on social media for the latest updates.
                  </p>
                  <Button
                    disabled
                    className="relative cursor-not-allowed py-3 px-6 text-center inline-flex justify-center items-center gap-2 text-base rounded-lg transition-all duration-300 w-full bg-gradient-to-r from-[#FF6F1F]/20 to-[#FF8C42]/20 text-white/50"
                  >
                    <Calendar className="h-5 w-5" />
                    <span className="font-medium">Events Coming Soon</span>
                  </Button>
                </CardContent>
              </GlassCard>
            </motion.div>
          </div>
        </GlassCard>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 relative"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 flex items-center justify-center gap-1">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#FF6F1F]/50"></div>
            <MapPin className="h-4 w-4 text-[#FF8C42]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#FF6F1F]/50"></div>
          </div>
          <GlassCard className="inline-block px-6 py-3">
            <p className="text-white/70 font-['Montserrat'] italic">
              Exciting events are being planned at Kenny's Bar. Stay connected for updates!
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
