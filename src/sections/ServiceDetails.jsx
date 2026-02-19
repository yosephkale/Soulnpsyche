import { useEffect, useRef } from "react";

const details = [
    {
        heading: "Psychiatry — Clinical Care with Compassion",
        description:
            "Comprehensive evaluations, diagnosis, and medication management in a warm, supportive environment.",
        bullets: [
            "Personalized psychiatric assessments",
            "Medication management",
            "Clinical monitoring",
            "Collaborative planning",
        ],
        checkColor: "#f94771",
        checkBg: "#fff0f3",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
        imageLeft: false,
    },
    {
        heading: "Psychology — Therapy Designed for Deep Healing",
        description:
            "Therapeutic sessions that help you heal, gain clarity, and restore emotional balance.",
        bullets: [
            "Individual therapy",
            "Couple's therapy",
            "Trauma & stress support",
            "CBT, DBT, evidence-based modalities",
        ],
        checkColor: "#7c3aed",
        checkBg: "#f5f3ff",
        image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=800&q=80",
        imageLeft: true,
    },
    {
        heading: "Yoga — Movement, Breath, and Inner Peace",
        description:
            "Mind-body practices focused on grounding, nervous system regulation, and holistic restoration.",
        bullets: [
            "Restorative yoga",
            "Guided meditation",
            "Breathwork",
            "Small group sessions",
        ],
        checkColor: "#0d9488",
        checkBg: "#f0fdfa",
        image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&q=80",
        imageLeft: false,
    },
];

const ServiceDetails = () => {
    const rowsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("sd-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );
        rowsRef.current.forEach((row) => { if (row) observer.observe(row); });
        return () => observer.disconnect();
    }, []);

    return (
        <section id="service-details" className="py-20 lg:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24 lg:gap-32">
                {details.map((item, i) => (
                    <div
                        key={item.heading}
                        ref={(el) => (rowsRef.current[i] = el)}
                        className={`sd-row flex flex-col gap-10 lg:gap-16 lg:items-center ${item.imageLeft ? "lg:flex-row-reverse" : "lg:flex-row"
                            }`}
                    >
                        {/* Text Side */}
                        <div className="sd-text lg:w-1/2 flex flex-col gap-5">
                            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark leading-tight">
                                {item.heading}
                            </h2>
                            <p className="font-body text-base text-dark/60 leading-relaxed max-w-md">
                                {item.description}
                            </p>
                            <ul className="flex flex-col gap-3 mt-1">
                                {item.bullets.map((b) => (
                                    <li key={b} className="flex items-center gap-3">
                                        {/* Check badge */}
                                        <span
                                            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                                            style={{ backgroundColor: item.checkBg, color: item.checkColor }}
                                        >
                                            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                                                <polyline points="2.5 8 6 11.5 13.5 4" />
                                            </svg>
                                        </span>
                                        <span className="font-body text-sm text-dark/70">{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Image Side */}
                        <div className="sd-image lg:w-1/2 overflow-hidden rounded-2xl shadow-md">
                            <img
                                src={item.image}
                                alt={item.heading}
                                className="w-full h-72 lg:h-96 object-cover hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                .sd-row {
                    opacity: 0;
                }
                .sd-row .sd-text {
                    transform: translateX(-40px);
                    transition: opacity 0.75s cubic-bezier(.22,1,.36,1), transform 0.75s cubic-bezier(.22,1,.36,1);
                    opacity: 0;
                }
                .sd-row .sd-image {
                    transform: translateX(40px);
                    transition: opacity 0.75s cubic-bezier(.22,1,.36,1) 0.12s, transform 0.75s cubic-bezier(.22,1,.36,1) 0.12s;
                    opacity: 0;
                }
                /* For image-left rows, flip the slide directions */
                .lg\\:flex-row-reverse .sd-text {
                    transform: translateX(40px);
                }
                .lg\\:flex-row-reverse .sd-image {
                    transform: translateX(-40px);
                }
                .sd-row.sd-visible {
                    opacity: 1;
                }
                .sd-row.sd-visible .sd-text,
                .sd-row.sd-visible .sd-image {
                    opacity: 1;
                    transform: translateX(0);
                }
            `}</style>
        </section>
    );
};

export default ServiceDetails;
