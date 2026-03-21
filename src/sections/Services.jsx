import { useEffect, useRef } from "react";

const services = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.96-3 2.5 2.5 0 0 1-1.32-4.24 3 3 0 0 1 .34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.18-2" />
                <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.96-3 2.5 2.5 0 0 0 1.32-4.24 3 3 0 0 0-.34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.18-2" />
            </svg>
        ),
        title: "Psychiatry",
        description:
            "Clinical mental health care including diagnosis, medication management, and comprehensive evaluations.",
        bg: "bg-rose-50",
        iconBg: "#fce7f3",
        iconColor: "#f94771",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
        title: "Psychology",
        description:
            "Evidence-based therapy for individuals and couples focused on deep healing and emotional growth.",
        bg: "bg-white",
        iconBg: "#f0f0ff",
        iconColor: "#7c3aed",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M12 22c4.97 0 9-2.69 9-6-2.76 0-5.24-.68-7-2-1.76 1.32-4.24 2-7 2-1.13 0-2.2-.13-3.18-.36C3.97 17.43 7.51 22 12 22z" />
                <path d="M12 14c-4.97 0-9-2.69-9-6 0-1.06.4-2.06 1.09-2.93" />
                <path d="M3.18 9.36C4.16 5.13 7.7 2 12 2c4.3 0 7.84 3.13 8.82 7.36" />
            </svg>
        ),
        title: "Yoga",
        description:
            "Mind-body practices combining movement, breathwork, and meditation for holistic wellness.",
        bg: "bg-teal-50",
        iconBg: "#ccfbf1",
        iconColor: "#0d9488",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
            </svg>
        ),
        title: "Sound Healing",
        description:
            "Holistic healing practices focused on emotional release, stress reduction, and restoring inner balance.",
        bg: "bg-amber-50",
        iconBg: "#fef3c7",
        iconColor: "#d97706",
    },
];

const Services = () => {
    const titleRef = useRef(null);
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
            { threshold: 0.12 }
        );
        if (titleRef.current) observer.observe(titleRef.current);
        cardsRef.current.forEach((card) => { if (card) observer.observe(card); });
        return () => observer.disconnect();
    }, []);

    return (
        <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Title */}
                <div ref={titleRef} className="services-title text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
                        Our Core Services
                    </h2>
                    <p className="font-body text-base sm:text-lg text-dark/55 leading-relaxed">
                        A triad of services designed to bring balance to the mind, body, and soul.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, i) => (
                        <div
                            key={service.title}
                            ref={(el) => (cardsRef.current[i] = el)}
                            className={`service-card group relative ${service.bg} rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500`}
                            style={{ transitionDelay: `${i * 130}ms` }}
                        >
                            {/* Animated accent bar — grows left to right on hover, always at card bottom */}
                            <div
                                className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full rounded-full transition-all duration-500 ease-out"
                                style={{ background: `linear-gradient(90deg, ${service.iconColor}, transparent)` }}
                            />

                            {/* Body */}
                            <div className="p-7 flex flex-col gap-4">

                                {/* Icon — bounces on group hover */}
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                                    style={{ backgroundColor: service.iconBg, color: service.iconColor }}
                                >
                                    {service.icon}
                                </div>

                                <h3 className="font-heading text-xl font-bold text-dark group-hover:text-dark/90 transition-colors duration-200">
                                    {service.title}
                                </h3>
                                <p className="font-body text-sm text-dark/60 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .services-title {
                    opacity: 0;
                    transform: translateY(22px);
                    transition: opacity 0.75s cubic-bezier(.22,1,.36,1), transform 0.75s cubic-bezier(.22,1,.36,1);
                }
                .services-title.is-visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                .service-card {
                    opacity: 0;
                    transform: translateY(40px) scale(0.96);
                    transition:
                        opacity 0.65s cubic-bezier(.22,1,.36,1),
                        transform 0.65s cubic-bezier(.22,1,.36,1),
                        box-shadow 0.4s ease;
                }
                .service-card.is-visible {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
                /* Stagger each card's visible delay separately so it's independent of hover */
                .service-card:nth-child(1) { transition-delay: 0ms; }
                .service-card:nth-child(2) { transition-delay: 130ms; }
                .service-card:nth-child(3) { transition-delay: 260ms; }
                .service-card:nth-child(4) { transition-delay: 390ms; }
            `}</style>
        </section>
    );
};

export default Services;

