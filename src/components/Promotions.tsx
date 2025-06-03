import React from 'react';

interface PromotionsProps {
  loaded?: boolean;
}
// Carousel and lucide-react imports are no longer needed for a static card layout
// import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
// import { ArrowLeft, ArrowRight } from 'lucide-react';

const promotions = [
	{
		id: 1,
		title: 'Happy Hour',
		description: 'Everyday 4PM-7PM: Half-price drafts & well drinks',
	},
	{
		id: 2,
		title: 'Whiskey Wednesday',
		description: '25% off premium whiskeys every Wednesday',
	},
	{
		id: 3,
		title: 'Live Music Weekends',
		description: 'No cover charge Fri-Sat 8PM-12AM',
	},
	{
		id: 4,
		title: 'Thursday Trivia Night',
		description: 'Win bar tabs & prizes starting at 8PM',
	},
];

const Promotions: React.FC<PromotionsProps> = ({ loaded }) => {
	// Removed state and effects for carousel functionality

	return (
		<section
			id="promotions"
			className="relative z-20 py-12 md:py-16" // Adjusted padding
		>
			<div className="container mx-auto px-4">
				<h2 className="text-center text-3xl md:text-4xl font-alt2 mb-10 md:mb-12 text-[#FF8C42] drop-shadow-xl">
					Special Offers
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					{promotions.map((promo, index) => (
						<div
							key={promo.id}
							className={`relative bg-gradient-to-br from-[#FF6F1F] to-[#FF8C42] rounded-2xl shadow-[0_2px_16px_0_rgba(255,111,31,0.25)] p-8 flex flex-col text-left transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_8px_rgba(255,140,66,0.55),0_0_0_8px_rgba(255,111,31,0.18)] group before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none before:shadow-[inset_0_2px_16px_0_rgba(255,255,255,0.08)] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
							style={{ transitionDelay: loaded ? `${index * 100 + 700}ms` : '0ms', transitionProperty: 'box-shadow, transform' }}
						>
							<div className="absolute left-0 top-8 w-1 h-10 bg-yellow-300/80 rounded-r-lg shadow-lg"></div>
							<h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-100 transition-colors duration-300">
								{promo.title}
							</h3>
							<div className="h-[2px] w-12 bg-white/30 rounded-full mb-3"></div>
							<p className="text-white/90 text-lg leading-relaxed">
								{promo.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Promotions;
