import { useEffect, useRef } from "react";

const features = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
        ),
        title: "Evidence-Based Care",
        description: "Grounded in proven therapeutic methods and psychiatric science",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M12 2l2.09 6.26L20 10l-5.91 4.26L16.18 21 12 17.27 7.82 21l2.09-6.74L4 10l5.91-1.74z" />
            </svg>
        ),
        title: "Luxury Healing Environment",
        description: "Designed for comfort, privacy, and tranquility",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M12 22c0-5.5-4.5-10-10-10" />
                <path d="M12 22c0-5.5 4.5-10 10-10" />
                <path d="M12 22V2" />
            </svg>
        ),
        title: "Mind-Body Integration",
        description: "Combining mental health care with holistic wellness practices",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
            </svg>
        ),
        title: "Personalized Growth Plans",
        description: "Tailored treatment paths that honor your unique journey",
    },
];

const About = () => {
    const leftRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        if (leftRef.current) observer.observe(leftRef.current);
        cardsRef.current.forEach((card) => { if (card) observer.observe(card); });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="py-14 lg:py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-24">

                    {/* ── Left — slides in from left ── */}
                    <div
                        ref={leftRef}
                        className="lg:w-5/12 slide-from-left"
                    >
                        <p className="font-body text-sm uppercase tracking-[0.2em] font-semibold mb-4"
                            style={{ color: "#f94771" }}>
                            Our Philosophy
                        </p>
                        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-tight mb-6">
                            What Makes Soul N Psyche{" "}
                            <span style={{ color: "#f94771" }}>Different</span>
                        </h2>
                        <p className="font-body text-base sm:text-lg text-dark/60 leading-relaxed">
                            Soul N Psyche blends modern mental health science with holistic
                            mind–body practices to create a sanctuary for clarity, emotional
                            well-being, and restoration.
                        </p>

                        {/* Decorative accent bar */}
                        <div
                            className="mt-8 h-1 w-16 rounded-full"
                            style={{ background: "linear-gradient(90deg, #f94771, #ff6b35)" }}
                        />
                    </div>

                    {/* ── Right — 2×2 cards ── */}
                    <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {features.map((feature, i) => (
                            <div
                                key={feature.title}
                                ref={(el) => (cardsRef.current[i] = el)}
                                className="card-pop bg-gray-50 rounded-2xl p-6 flex flex-col gap-4 border border-gray-100 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                style={{ transitionDelay: `${i * 80}ms` }}
                            >
                                {/* Icon circle */}
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: "#f947711a", color: "#f94771" }}
                                >
                                    {feature.icon}
                                </div>

                                <div>
                                    <h3 className="font-heading text-base font-semibold text-dark mb-1">
                                        {feature.title}
                                    </h3>
                                    <p className="font-body text-sm text-dark/55 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Inline animation styles */}
            <style>{`
                .slide-from-left {
                    opacity: 0;
                    transform: translateX(-50px);
                    transition: opacity 0.7s ease, transform 0.7s ease;
                }
                .slide-from-left.is-visible {
                    opacity: 1;
                    transform: translateX(0);
                }
                .card-pop {
                    opacity: 0;
                    transform: translateY(30px) scale(0.97);
                    transition: opacity 0.6s ease, transform 0.6s ease,
                                box-shadow 0.3s ease, border-color 0.3s ease, translate 0.3s ease;
                }
                .card-pop.is-visible {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            `}</style>
        </section>
    );
};

export default About;
