import { useEffect, useRef } from "react";

const reasons = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
        title: "Private therapy suites",
        description: "Comfortable, confidential spaces designed for healing",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <circle cx="12" cy="8" r="4" />
                <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                <polyline points="16 3 18 5 22 1" />
            </svg>
        ),
        title: "Expert licensed professionals",
        description: "Experienced psychiatrists, psychologists, and yoga instructors",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
        ),
        title: "Holistic treatment approach",
        description: "Integrating mind, body, and soul for complete wellness",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M12 2l2.09 6.26L20 10l-5.91 4.26L16.18 21 12 17.27 7.82 21l2.09-6.74L4 10l5.91-1.74z" />
            </svg>
        ),
        title: "Luxury healing environment",
        description: "Every detail designed for your comfort and peace",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
        ),
        title: "Confidential care",
        description: "Your privacy and trust are our highest priorities",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: "Meaningful transformation",
        description: "Designed for deep, lasting change and personal growth",
    },
];

const WhyChooseUs = () => {
    const titleRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("wc-visible");
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
        <section id="why-choose-us" className="py-14 lg:py-18 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Title */}
                <div ref={titleRef} className="wc-title text-center mb-14">
                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
                        Why Choose Soul N Psyche
                    </h2>
                </div>

                {/* 3×2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {reasons.map((reason, i) => (
                        <div
                            key={reason.title}
                            ref={(el) => (cardsRef.current[i] = el)}
                            className="wc-card group relative bg-white border border-gray-100 rounded-2xl p-7 flex flex-col gap-4 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400 overflow-hidden"
                            style={{ "--delay": `${i * 80}ms` }}
                        >
                            {/* Subtle background glow on hover */}
                            <div className="absolute inset-0 bg-violet-50/0 group-hover:bg-violet-50/60 transition-colors duration-400 rounded-2xl pointer-events-none" />

                            {/* Icon badge */}
                            <div className="relative w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                                style={{ backgroundColor: "#ede9fe", color: "#7c3aed" }}>
                                {reason.icon}
                            </div>

                            {/* Text */}
                            <div className="relative flex flex-col gap-2">
                                <h3 className="font-heading text-base font-bold text-dark leading-snug">
                                    {reason.title}
                                </h3>
                                <p className="font-body text-sm text-dark/55 leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>

                            {/* Bottom accent line sweeps in on hover */}
                            <div
                                className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out rounded-full"
                                style={{ background: "linear-gradient(90deg, #7c3aed, #f94771)" }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .wc-title {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1);
                }
                .wc-title.wc-visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                .wc-card {
                    opacity: 0;
                    transform: translateY(36px) scale(0.96);
                    transition:
                        opacity 0.6s cubic-bezier(.22,1,.36,1) var(--delay, 0ms),
                        transform 0.6s cubic-bezier(.22,1,.36,1) var(--delay, 0ms),
                        box-shadow 0.4s ease,
                        translate 0.4s ease;
                }
                .wc-card.wc-visible {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            `}</style>
        </section>
    );
};

export default WhyChooseUs;
