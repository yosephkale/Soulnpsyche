import { useEffect, useRef } from "react";

const spaces = [
    {
        label: "Private Suites",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    },
    {
        label: "Meditation Lounge",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&q=80",
    },
    {
        label: "Yoga Studio",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    },
    {
        label: "Healing-Inspired Interiors",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    },
];

const Spaces = () => {
    const titleRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("sp-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (titleRef.current) observer.observe(titleRef.current);
        cardsRef.current.forEach((c) => { if (c) observer.observe(c); });
        return () => observer.disconnect();
    }, []);

    return (
        <section id="spaces" className="py-16 lg:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Title */}
                <div ref={titleRef} className="sp-title text-center mb-12">
                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
                        Our Spaces
                    </h2>
                </div>

                {/* 2×2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {spaces.map((space, i) => (
                        <div
                            key={space.label}
                            ref={(el) => (cardsRef.current[i] = el)}
                            className="sp-card group relative rounded-2xl overflow-hidden h-64 sm:h-72 lg:h-80 cursor-pointer"
                            style={{ "--delay": `${i * 100}ms` }}
                        >
                            {/* Image with zoom on hover */}
                            <img
                                src={space.image}
                                alt={space.label}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />

                            {/* Gradient overlay — deepens on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

                            {/* Label — slides up on hover */}
                            <div className="absolute bottom-5 left-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="font-heading text-lg font-semibold text-white leading-tight drop-shadow">
                                    {space.label}
                                </p>
                            </div>

                            {/* Accent line at bottom — sweeps in on hover */}
                            <div
                                className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out rounded-full"
                                style={{ background: "linear-gradient(90deg, #f94771, #ff6b35)" }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .sp-title {
                    opacity: 0;
                    transform: translateY(18px);
                    transition: opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1);
                }
                .sp-title.sp-visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                .sp-card {
                    opacity: 0;
                    transform: translateY(32px) scale(0.97);
                    transition:
                        opacity 0.65s cubic-bezier(.22,1,.36,1) var(--delay, 0ms),
                        transform 0.65s cubic-bezier(.22,1,.36,1) var(--delay, 0ms);
                }
                .sp-card.sp-visible {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            `}</style>
        </section>
    );
};

export default Spaces;
