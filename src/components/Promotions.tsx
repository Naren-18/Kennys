import React, { useState, useEffect, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowLeft, ArrowRight, Clock, Music, Trophy, Wine, Beer, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

// Add custom styles for the carousel
const carouselStyles = `
.embla {
  overflow: visible;
}
.embla__slide {
  transition: all 0.4s ease;
}
.embla__slide.is-active {
  z-index: 10;
}
.promo-card {
  transition: all 0.4s ease-out;
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.3);
}
`;

// Add styles to head
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = carouselStyles;
  document.head.appendChild(styleElement);
}

interface PromotionsProps {
  loaded?: boolean;
}

const promotions = [
	{
		id: 1,
		title: 'Happy Hour',
		description: 'Everyday 4PM-7PM: Half-price drafts & well drinks',
		image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80', // Beer glasses
		backgroundColor: 'from-amber-700/80 to-amber-900/90',
		icon: <Beer className="w-8 h-8 text-white/90" />
	},
	{
		id: 2,
		title: 'Whiskey Wednesday',
		description: '25% off premium whiskeys every Wednesday',
		image: 'https://images.unsplash.com/photo-1514361892635-cebb9b6c7ca7?auto=format&fit=crop&w=800&q=80', // Whiskey glass
		backgroundColor: 'from-amber-800/80 to-amber-950/90',
		icon: <Wine className="w-8 h-8 text-white/90" />
	},
	{
		id: 3,
		title: 'Live Music Weekends',
		description: 'No cover charge Fri-Sat 8PM-12AM',
		image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80', // Live music
		backgroundColor: 'from-orange-700/80 to-orange-900/90',
		icon: <Music className="w-8 h-8 text-white/90" />
	},
	{
		id: 4,
		title: 'Thursday Trivia Night',
		description: 'Win bar tabs & prizes starting at 8PM',
		image: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=800&q=80', // Trivia/quiz night
		backgroundColor: 'from-amber-600/80 to-amber-800/90',
		icon: <Trophy className="w-8 h-8 text-white/90" />
	},
	{
		id: 5,
		title: 'Sunday Brunch Special',
		description: 'Bottomless mimosas with any brunch entree 11AM-3PM',
		image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80', // Brunch/mimosas
		backgroundColor: 'from-orange-600/80 to-orange-800/90',
		icon: <Calendar className="w-8 h-8 text-white/90" />
	},
];

const Promotions: React.FC<PromotionsProps> = ({ loaded }) => {
	const [api, setApi] = useState<any>(null);
	const [current, setCurrent] = useState(0);
	const [loadedImages, setLoadedImages] = useState<{[key: number]: boolean}>({});
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	// Handle carousel movement and tracking current slide
	useEffect(() => {
		if (!api) return;

		const onSelect = () => {
			setCurrent(api.selectedScrollSnap());
			
			// Style active and non-active slides
			const slides = document.querySelectorAll('#promotions .embla__slide');
			const activeIndex = api.selectedScrollSnap();
			
			slides.forEach((slide, index) => {
				const slideElement = slide as HTMLElement;
				const innerCard = slideElement.querySelector('.promo-card') as HTMLElement;
				
				if (index === activeIndex) {
					slideElement.classList.add('is-active');
					if (innerCard) {
						innerCard.style.opacity = '1';
						innerCard.style.transform = 'scale(1)';
					}
				} else {
					slideElement.classList.remove('is-active');
					if (innerCard) {
						innerCard.style.opacity = '0.6';
						innerCard.style.transform = 'scale(0.9)';
					}
				}
			});
		};

		api.on("select", onSelect);
		
		// Run once on initial load
		setTimeout(onSelect, 100);
		
		// Auto-advance carousel every 5 seconds
		intervalRef.current = setInterval(() => {
			api.scrollNext();
		}, 5000);
		
		return () => {
			api.off("select", onSelect);
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, [api]);
	
	// Track when images are loaded
	const handleImageLoad = (id: number) => {
		setLoadedImages(prev => ({...prev, [id]: true}));
	};

	return (		<section
			id="promotions"
			className="relative z-20 w-full max-w-6xl mx-auto px-0 sm:px-0 overflow-visible"
			style={{ marginTop: "-6%" }}
		>
			<div className="mx-auto w-full">
				<h2 className="text-center text-3xl md:text-4xl font-alt2 mb-8 md:mb-10 text-white drop-shadow-xl">
					Special Offers
				</h2>				<Carousel 
					className={`mx-auto w-full ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} group overflow-visible`}
					style={{ transitionDelay: loaded ? '700ms' : '0ms' }}
					setApi={setApi}
					opts={{ 
                        loop: true, 
                        align: "center",
                        containScroll: false,
                        dragFree: true
                    }}
                    onMouseEnter={() => {
                        if (intervalRef.current) clearInterval(intervalRef.current);
                    }}
                    onMouseLeave={() => {
                        if (intervalRef.current) clearInterval(intervalRef.current);
                        intervalRef.current = setInterval(() => {
                            api?.scrollNext();
                        }, 5000);
                    }}
				>					<CarouselContent className="-ml-4 md:ml-0">
						{promotions.map((promo, index) => (							<CarouselItem key={promo.id} className="basis-[80%] md:basis-[70%] lg:basis-[60%] px-4">								<motion.div
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="promo-card relative h-[350px] sm:h-[380px] md:h-[400px] rounded-3xl overflow-hidden group mx-auto w-full transition-all duration-500 shadow-2xl border border-[#FF8C42]/30"
								>
									{/* Solid/Gradient background */}
									<div className="absolute inset-0 bg-gradient-to-br from-[#1a120b] via-[#2d1606] to-[#FF8C42]/90 z-0" />
									{/* Image overlay for subtle texture */}
									<div className="absolute inset-0 bg-center bg-cover opacity-30 z-10" style={{ backgroundImage: `url(${promo.image})` }} />
									{/* Subtle overlay for softer edges */}
									<div className="absolute inset-0 bg-black/30 z-20 pointer-events-none" />
									{/* Content */}
									<div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-30 flex flex-col h-full justify-end">
										<div className="flex items-center gap-4 mb-4">
											<div className="p-3 bg-[#FF8C42] rounded-full shadow-lg flex items-center justify-center">
												{promo.icon}
											</div>
											<h3 className="text-white text-2xl font-bold tracking-wide flex-1 text-left">
												{promo.title}
											</h3>
										</div>
										<p className="text-[#FF8C42] text-lg font-semibold mb-2 text-left">
											{promo.description}
										</p>
									</div>
								</motion.div>
							</CarouselItem>
						))}
					</CarouselContent>					<CarouselPrevious 
						className="left-0 sm:left-2 md:left-0 bg-[#FF6F1F]/80 hover:bg-[#FF6F1F] border-none text-white opacity-70 sm:opacity-60 group-hover:opacity-100 transition-opacity absolute" 
						variant="outline"
					/>
					<CarouselNext 
						className="right-0 sm:right-2 md:right-0 bg-[#FF6F1F]/80 hover:bg-[#FF6F1F] border-none text-white opacity-70 sm:opacity-60 group-hover:opacity-100 transition-opacity absolute" 
						variant="outline"
					/>
				</Carousel>
						{/* Enhanced dots indicator with animation */}
				<div className="flex justify-center gap-2 mt-6 sm:mt-8 mb-4">
					{promotions.map((promo, index) => (
						<button
							key={promo.id}
							className={cn(
								"h-2 sm:h-3 rounded-full transition-all duration-500 relative overflow-hidden",
								current === index ? "w-6 sm:w-8 bg-[#FF6F1F]" : "w-2 sm:w-3 bg-[#FF8C42]/40 hover:bg-[#FF8C42]/60"
							)}
							onClick={() => api?.scrollTo(index)}
							aria-label={`Go to slide ${index + 1}`}
						>
							{current === index && (
								<motion.div 
									className="absolute inset-0 bg-[#FF8C42]" 
									initial={{ x: "-100%" }}
									animate={{ x: "0%" }}
									transition={{ duration: 5, repeat: 1, repeatDelay: 0 }}
								/>
							)}
						</button>
					))}
				</div>
			</div>
		</section>
	);
};

export default Promotions;
