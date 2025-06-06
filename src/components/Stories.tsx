import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, Heart, Calendar, Star, PenLine } from 'lucide-react';
import { motion } from 'framer-motion';

interface Story {
  id: number;
  author: string;
  content: string;
  date: string;
  image?: string;
}

const GlassCard = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg" />
    <div className="relative z-10">{children}</div>
  </div>
);

const Stories = () => {
  const stories: Story[] = [
    {
      id: 1,
      author: "Marcus J.",
      content: "I proposed to my wife at Kenny's, right by the fireplace on a winter evening. Kenny knew my plan and made sure our song was playing at exactly the right moment. Five years later, we still come back for our anniversary.",
      date: "February 14, 2020",
      image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      author: "Ellie S.",
      content: "My dad and I reconnected after years of not speaking when he suggested meeting at Kenny's. Something about the place just made it easier to talk. Now it's our monthly tradition.",
      date: "October 3, 2021",
    },
    {
      id: 3,
      author: "The Thursday Crew",
      content: "What started as four coworkers grabbing a drink has turned into a weekly tradition going on 8 years. Through job changes, weddings, kids - Kenny's is where we keep our friendship alive.",
      date: "Ongoing since 2016",
      image: "https://images.unsplash.com/photo-1529604278261-8bfcdb00a7b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="pt-8 pb-16 min-h-screen relative overflow-hidden">
      {/* Unique background image and overlay */}
      <div className="absolute inset-0 z-0">
        {/* <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1500&q=80"
          alt="Cozy bar background"
          className="absolute top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2 scale-105"
        /> */}
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
          <h2 className="text-[#FF8C42] font-bold font-sans text-5xl md:text-6xl mb-4 relative inline-block">
            Neighborhood Stories
          </h2>
          <h3 className="text-white font-semibold font-sans text-2xl md:text-3xl mb-6">Memories Made at Kenny's</h3>
          <p className="text-white/80 font-sans max-w-2xl mx-auto text-base md:text-lg">
            Our walls have witnessed countless moments of celebration, reconciliation, friendship, and love. 
            Here are some of the stories our customers have shared.
          </p>
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-2">
              <Quote className="h-6 w-6 text-[#FF6F1F] rotate-180" />
              <div className="h-px w-16 bg-gradient-to-r from-[#FF6F1F]/50 to-transparent"></div>
            </div>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stories.map((story, idx) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <GlassCard className="overflow-hidden h-full flex flex-col rounded-xl shadow-xl group hover:border-[#FF6F1F]/30 transition-all duration-500">
                {story.image && (
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <img 
                      src={story.image} 
                      alt={`Story by ${story.author}`} 
                      className="w-full h-full object-cover warmth-filter transition-transform duration-700 group-hover:scale-105 brightness-[0.85] group-hover:brightness-100"
                    />
                    {/* Corner decorative elements */}
                    <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#FF6F1F]/40 rounded-tl-lg z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#FF6F1F]/40 rounded-br-lg z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                )}
                <CardContent className="p-6 flex flex-col flex-grow relative">
                  <Quote className="absolute text-[#FF6F1F]/20 h-12 w-12 -top-2 -left-2 rotate-180" />
                  <div className="flex-grow relative">
                    <p className="text-white/90 font-sans italic mb-6 text-base leading-relaxed relative z-10">"{story.content}"</p>
                  </div>
                  <div className="flex justify-between items-end pt-4 border-t border-white/10 mt-2">
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-[#FF8C42]" />
                      <span className="text-[#FF8C42] font-semibold font-sans">{story.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/50 text-sm">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{story.date}</span>
                    </div>
                  </div>
                </CardContent>
              </GlassCard>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: stories.length * 0.1 }}
          >
            <GlassCard className="overflow-hidden flex flex-col rounded-xl shadow-xl relative group hover:border-[#FF6F1F]/50 transition-all duration-500">
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#FF6F1F]/40 rounded-tl-xl"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#FF6F1F]/40 rounded-br-xl"></div>
              <CardContent className="p-8 flex flex-col justify-center items-center h-full text-center relative z-10">
                <div className="absolute top-4 right-4 bg-[#FF6F1F]/10 p-2 rounded-full">
                  <PenLine className="h-5 w-5 text-[#FF8C42]" />
                </div>
                <h4 className="text-[#FF6F1F] font-semibold font-sans text-xl mb-4 flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  <span>Share Your Kenny's Story</span>
                </h4>
                <p className="text-white/80 font-sans mb-6 max-w-xs">
                  Everyone who's spent time at Kenny's has a story. What's yours?
                </p>
                <Button
                  asChild
                  className="relative cursor-pointer py-3 px-6 text-center font-sans inline-flex justify-center text-base uppercase rounded-lg border-solid transition-all duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden font-extrabold w-full"
                  style={{
                    background: 'linear-gradient(to right, #FF6F1F, #FF8C42)',
                    textShadow: '0 1px 4px #0008',
                    color: '#fff',
                  }}
                >
                  <span>
                    <span className="relative z-20">Add Your Memory</span>
                    <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                    <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-white/30 absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
                    <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-white/30 absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
                    <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-white/30 absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
                    <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-white/30 absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
                  </span>
                </Button>
              </CardContent>
            </GlassCard>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 relative"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 flex items-center justify-center gap-1">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#FF6F1F]/50"></div>
            <Quote className="h-4 w-4 text-[#FF8C42]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#FF6F1F]/50"></div>
          </div>
          <GlassCard className="inline-block px-6 py-3">
            <p className="text-white/70 font-sans italic">
              Every story adds to the rich tapestry of Kenny's history. We're grateful for each one.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Stories;
