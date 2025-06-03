import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Utensils, Menu as MenuIcon, Star, Clock, Calendar, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// Updated GlassCard for more transparency and polish
const GlassCard = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg" />
    <div className="relative z-10">{children}</div>
  </div>
);

const MenuSection = ({ title, items }: { title: string, items: Array<{name: string, description: string, price: string}> }) => {
  return (
    <div className="mb-12 relative">
      {/* Decorative corners remain unchanged */}
      <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#FF6F1F]/40"></div>
      <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#FF6F1F]/40"></div>
      <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[#FF6F1F]/40"></div>
      <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#FF6F1F]/40"></div>
      <h3 className="text-2xl font-title text-[#FF8C42] mb-6 inline-block relative group">
        {title}
        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF6F1F] to-transparent group-hover:w-full transition-all duration-300"></span>
      </h3>
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="group relative rounded-2xl bg-black/40 backdrop-blur-lg border border-[#FF6F1F]/10 shadow-lg p-6 transition-all duration-300 hover:shadow-[0_0_24px_#FF6F1F55]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ scale: 1.025 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <h4 className="text-2xl font-bold text-white group-hover:text-[#FF8C42] flex items-center gap-2">
                  {item.name}
                  <Sparkles className="w-4 h-4 text-[#FF8C42] opacity-70" />
                </h4>
                <p className="text-white/70 mt-2 text-base tracking-wide">
                  {item.description}
                </p>
              </div>
              <motion.div
                className="ml-4 px-5 py-2 rounded-full bg-[#FF6F1F]/90 text-white font-bold text-lg shadow-md border-2 border-[#FF8C42]/40 transition-all"
                whileHover={{ scale: 1.1, boxShadow: "0 0 16px #FF8C42" }}
              >
                {item.price || <span className="opacity-0">-</span>}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState("drinks");
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  
  // Sample menu data
  const drinks = [
    {
      title: "Signature Cocktails",
      items: [
        {
          name: "Kenny's Old Fashioned",
          description: "Our take on the classic with bourbon, house bitters, and a touch of maple",
          price: "$12"
        },
        {
          name: "Neighborhood Negroni",
          description: "Gin, vermouth, and Campari with an orange twist",
          price: "$14"
        },
        {
          name: "Memory Lane Mule",
          description: "Vodka, fresh lime, and ginger beer with a hint of nostalgia",
          price: "$11"
        },
        {
          name: "Whiskey Sour Stories",
          description: "Whiskey, lemon, sugar, and a float of red wine",
          price: "$13"
        }
      ]
    },
    {
      title: "Craft Beer",
      items: [
        {
          name: "Local IPA",
          description: "Hoppy, citrusy, and perfectly balanced from our neighborhood brewery",
          price: "$7"
        },
        {
          name: "Seasonal Ale",
          description: "Rotating selection that captures the essence of the season",
          price: "$8"
        },
        {
          name: "Dark Porter",
          description: "Rich, robust, with notes of chocolate and coffee",
          price: "$8"
        }
      ]
    },
    {
      title: "Wine Selection",
      items: [
        {
          name: "House Red Blend",
          description: "Medium-bodied with notes of dark fruits and a smooth finish",
          price: "$9 / $36"
        },
        {
          name: "Chardonnay",
          description: "Bright and crisp with hints of apple and oak",
          price: "$10 / $40"
        },
        {
          name: "Rosé All Day",
          description: "Refreshing with notes of strawberry and watermelon",
          price: "$11 / $44"
        }
      ]
    }
  ];
  
  const food = [
    {
      title: "Small Plates",
      items: [
        {
          name: "Truffle Fries",
          description: "Hand-cut potatoes, truffle oil, parmesan, and herbs",
          price: "$8"
        },
        {
          name: "Loaded Nachos",
          description: "Corn tortilla chips, cheese blend, jalapeños, sour cream, guacamole",
          price: "$12"
        },
        {
          name: "Chicken Wings",
          description: "Choose from buffalo, bbq, or our secret 'Kenny's' sauce",
          price: "$14"
        }
      ]
    },
    {
      title: "Mains",
      items: [
        {
          name: "Kenny's Burger",
          description: "House-ground beef, cheddar, caramelized onions, special sauce, brioche bun",
          price: "$17"
        },
        {
          name: "Fish & Chips",
          description: "Beer-battered cod, hand-cut fries, house tartar sauce",
          price: "$19"
        },
        {
          name: "Veggie Buddha Bowl",
          description: "Quinoa, roasted vegetables, avocado, tahini dressing",
          price: "$16"
        }
      ]
    },
    {
      title: "Desserts",
      items: [
        {
          name: "Chocolate Stout Cake",
          description: "Rich chocolate cake made with local stout, vanilla ice cream",
          price: "$9"
        },
        {
          name: "Seasonal Fruit Crumble",
          description: "Warm seasonal fruit topped with oat crumble and whipped cream",
          price: "$8"
        }
      ]
    }
  ];
  
  const specials = [
    {
      title: "Happy Hour Specials",
      items: [
        {
          name: "Draft Beer",
          description: "All local drafts",
          price: "$5"
        },
        {
          name: "House Wine",
          description: "Red, white, or rosé",
          price: "$6"
        },
        {
          name: "Well Drinks",
          description: "Standard mixers included",
          price: "$7"
        }
      ]
    },
    {
      title: "Weekly Specials",
      items: [
        {
          name: "Monday - Industry Night",
          description: "25% off for service industry workers with ID",
          price: ""
        },
        {
          name: "Tuesday - Trivia Night",
          description: "$10 pitchers during trivia from 7-9pm",
          price: ""
        },
        {
          name: "Wednesday - Wine Down",
          description: "Half-priced bottles of wine all night",
          price: ""
        },
        {
          name: "Sunday - Brunch",
          description: "Brunch menu with $5 mimosas and Bloody Marys from 11am-3pm",
          price: ""
        }
      ]
    }
  ];
  
  return (
    <section id="menu" className="py-24 relative overflow-hidden min-h-screen">
      {/* Enhanced background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
            alt="Bar ambience background"
            className="absolute top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 z-10"></div>
        </motion.div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 z-20 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#FF6F1F]/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-30">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#FF6F1F] to-transparent"></div>
          <h2 className="text-[#FF8C42] font-handwritten text-6xl mb-4 relative inline-block">
            Our Menu
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6F1F] to-transparent"></div>
          </h2>
          <p className="text-white/80 max-w-xl mx-auto text-lg">
            Carefully crafted drinks and delicious comfort food, made with love for our neighborhood.
          </p>
        </motion.div>
        
        <Tabs 
          defaultValue="drinks" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-center mb-12">
            <GlassCard className="p-1 w-full max-w-full sm:max-w-2xl mx-auto min-h-[64px]">
              <TabsList className="flex justify-start sm:justify-center w-full bg-transparent border-none overflow-x-auto flex-nowrap scrollbar-thin scrollbar-thumb-[#FF8C42]/30 scrollbar-track-transparent min-h-[56px] px-4">
                <TabsTrigger
                  value="drinks"
                  className="min-w-max relative flex items-center gap-2 px-4 sm:px-8 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300
                    data-[state=active]:bg-[#FF6F1F] data-[state=active]:text-white data-[state=active]:shadow-lg
                    data-[state=active]:scale-105
                    text-[#FF8C42] hover:bg-[#FF8C42]/10 focus:outline-none focus:ring-2 focus:ring-[#FF8C42]/40"
                >
                  <MenuIcon className="h-5 w-5" />
                  Drinks
                </TabsTrigger>
                <TabsTrigger
                  value="food"
                  className="min-w-max relative flex items-center gap-2 px-4 sm:px-8 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300
                    data-[state=active]:bg-[#FF6F1F] data-[state=active]:text-white data-[state=active]:shadow-lg
                    data-[state=active]:scale-105
                    text-[#FF8C42] hover:bg-[#FF8C42]/10 focus:outline-none focus:ring-2 focus:ring-[#FF8C42]/40"
                >
                  <Utensils className="h-5 w-5" />
                  Food
                </TabsTrigger>
                <TabsTrigger
                  value="specials"
                  className="min-w-max relative flex items-center gap-2 px-4 sm:px-8 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300
                    data-[state=active]:bg-[#FF6F1F] data-[state=active]:text-white data-[state=active]:shadow-lg
                    data-[state=active]:scale-105
                    text-[#FF8C42] hover:bg-[#FF8C42]/10 focus:outline-none focus:ring-2 focus:ring-[#FF8C42]/40"
                >
                  <Star className="h-5 w-5" />
                  Specials
                </TabsTrigger>
              </TabsList>
            </GlassCard>
          </div>
          
          <div className="relative flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full flex justify-center"
              >
                <GlassCard className="p-8 max-w-2xl w-full mx-auto">
                  <TabsContent value="drinks" className="mt-0 space-y-6">
                    {drinks.map((section, index) => (
                      <MenuSection key={index} title={section.title} items={section.items} />
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="food" className="mt-0 space-y-6">
                    {food.map((section, index) => (
                      <MenuSection key={index} title={section.title} items={section.items} />
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="specials" className="mt-0 space-y-6">
                    <GlassCard className="p-4 mb-6">
                      <div className="flex items-center gap-2 text-[#FF8C42]">
                        <Clock className="h-5 w-5" />
                        <span className="font-medium">Happy Hour: Mon-Fri, 4-7pm</span>
                      </div>
                    </GlassCard>
                    {specials.map((section, index) => (
                      <MenuSection key={index} title={section.title} items={section.items} />
                    ))}
                  </TabsContent>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>
        </Tabs>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 relative"
        >
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#FF6F1F]/40 to-transparent mx-auto mb-6"></div>
          <GlassCard className="p-6 max-w-lg mx-auto">
            <p className="text-white/70 italic mb-4">
              Menu and prices subject to change. Please ask your server about allergens.
              <br />
              <span className="text-[#FF8C42]/80 text-sm mt-2 block">We source ingredients locally whenever possible.</span>
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <Calendar className="h-6 w-6 text-[#FF6F1F]/60 hover:text-[#FF6F1F] transition-colors duration-300" />
              <Clock className="h-6 w-6 text-[#FF6F1F]/60 hover:text-[#FF6F1F] transition-colors duration-300" />
              <MenuIcon className="h-6 w-6 text-[#FF6F1F]/60 hover:text-[#FF6F1F] transition-colors duration-300" />
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
