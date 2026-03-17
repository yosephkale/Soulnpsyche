const testimonials = [
	{
		name: "Aanya",
		role: "Anxiety Support",
		quote: "I felt heard without being rushed, and that changed everything about asking for help.",
		image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=900",
		tint: "#ffe4ec",
	},
	{
		name: "Rohan",
		role: "Young Professional",
		quote: "The space felt calm, private, and deeply grounding from the first session onward.",
		image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=900",
		tint: "#e6f6f2",
	},
	{
		name: "Meera",
		role: "Trauma Recovery",
		quote: "The process was gentle, structured, and respectful of my pace.",
		image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=900",
		tint: "#fff0da",
	},
	{
		name: "Kabir",
		role: "Therapy Client",
		quote: "Every conversation felt thoughtful, practical, and emotionally safe.",
		image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=900",
		tint: "#efe5ff",
	},
	{
		name: "Sana",
		role: "Burnout Care",
		quote: "I finally found care that looked at both the mind and the body together.",
		image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=900",
		tint: "#e5f6ee",
	},
	{
		name: "Arjun",
		role: "Emotional Wellness",
		quote: "The approach felt premium without ever feeling distant or clinical.",
		image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=900",
		tint: "#ffe9d6",
	},
	{
		name: "Nisha",
		role: "Parent Support",
		quote: "It gave our family more clarity, steadiness, and confidence.",
		image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=900",
		tint: "#ffe6e1",
	},
	{
		name: "Dev",
		role: "Holistic Care",
		quote: "The environment itself made it easier to exhale and settle in.",
		image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=900",
		tint: "#e9f7f3",
	},
];

const TestimonialCard = ({ item }) => {
	return (
		<article
			className="ts-card group relative h-[290px] w-[200px] sm:h-[330px] sm:w-[228px] lg:h-[350px] lg:w-[238px] flex-shrink-0 overflow-hidden rounded-[26px] border border-white/70 shadow-[0_24px_60px_rgba(249,71,113,0.12)]"
			style={{ backgroundColor: item.tint }}
		>
			<img
				src={item.image}
				alt={item.name}
				className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
			/>

			<div className="absolute inset-0 bg-gradient-to-t from-dark/88 via-dark/28 to-transparent" />
			{/* <div className="absolute inset-x-0 top-0 h-24 opacity-95" style={{ background: `linear-gradient(180deg, ${item.tint} 0%, rgba(255,255,255,0) 100%)` }} /> */}
			{/* <div className="absolute inset-x-0 top-0 h-1.5" style={{ background: "linear-gradient(90deg, #f94771 0%, #ff6b35 52%, #0d9488 100%)" }} /> */}

			<div className="absolute inset-x-4 bottom-4 rounded-[22px] border border-white/20 bg-dark/25 p-4 backdrop-blur-md">
				<p className="font-heading text-xl font-bold text-white leading-none">
					{item.name}
				</p>
				<p className="mt-1 font-body text-[11px] uppercase tracking-[0.22em] text-white/70">
					{item.role}
				</p>
			</div>
		</article>
	);
};

const TestimonialRow = ({ items }) => {
	const marqueeItems = [...items, ...items];

	return (
		<div className="ts-row relative overflow-hidden">
			<div className="ts-track flex w-max gap-4 sm:gap-5 lg:gap-6">
				{marqueeItems.map((item, index) => (
					<TestimonialCard key={`${item.name}-${index}`} item={item} />
				))}
			</div>
		</div>
	);
};

const Testimonial = () => {
	return (
		<section id="testimonials" className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
			<div className="absolute inset-0 opacity-90">
				<div className="absolute left-[-3rem] top-10 h-44 w-44 rounded-full bg-primary/16 blur-3xl" />
				<div className="absolute right-[-2rem] top-1/4 h-52 w-52 rounded-full bg-secondary/14 blur-3xl" />
				<div className="absolute bottom-6 left-1/3 h-48 w-48 rounded-full bg-teal-500/12 blur-3xl" />
				<div className="absolute right-1/4 top-6 h-36 w-36 rounded-full bg-violet-300/16 blur-3xl" />
			</div>

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
					<p className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
						Testimonials
					</p>
				</div>

				<div className="relative rounded-[32px] border border-white/70 bg-white/40 px-3 py-4 shadow-[0_24px_80px_rgba(249,71,113,0.08)] backdrop-blur-sm sm:px-4 sm:py-5">
					<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-[#fff8f6]/90 to-transparent sm:w-10" />
					<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-[#f9fcfa]/90 to-transparent sm:w-10" />
					<TestimonialRow items={testimonials} />
				</div>
			</div>

			<style>{`
				.ts-row {
					mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
					-webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
				}
				.ts-track {
					animation: testimonial-marquee 42s linear infinite;
				}
				.ts-row:hover .ts-track {
					animation-play-state: paused;
				}
				@keyframes testimonial-marquee {
					from {
						transform: translateX(0);
					}
					to {
						transform: translateX(calc(-50% - 10px));
					}
				}
				@media (max-width: 640px) {
					.ts-track {
						animation-duration: 30s;
					}
				}
				@media (prefers-reduced-motion: reduce) {
					.ts-track {
						animation: none;
					}
				}
			`}</style>
		</section>
	);
};

export default Testimonial;
