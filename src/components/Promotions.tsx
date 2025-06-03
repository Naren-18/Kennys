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
							className={`bg-black/60 border border-[#FF6F1F] rounded-2xl shadow-lg p-8 flex flex-col text-left transition-all duration-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
							style={{ transitionDelay: loaded ? `${index * 100 + 700}ms` : '0ms' }}
						>
							<h3 className="font-serif text-[#FF8C42] text-2xl mb-3 font-semibold">
								{promo.title}
							</h3>
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
