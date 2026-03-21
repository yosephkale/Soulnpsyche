import { useEffect, useRef } from "react";

const steps = [
    {
        number: "01",
        title: "Follow Us On Instagram",
        description: "Join our community for FREE mental wellness content, tips, and insights delivered daily",
        color: "#f94771",
        lightBg: "#fff0f3",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.7 5.5 4.3 9 4.4A5.5 5.5 0 0 1 22 4z" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Download Resources",
        description: "Get our exclusive E-book packed with evidence-based tools for emotional well-being",
        color: "#7c3aed",
        lightBg: "#f5f3ff",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M12 15V3m0 12l-4-4m4 4l4-4" />
                <path d="M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Book a Discovery Call",
        description: "Start your personalized path to healing, a free call to find the right care for you",
        color: "#0d9488",
        lightBg: "#f0fdfa",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
        ),
    },
];

const Process = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("pr-active");
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="process" className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Title */}
                <div className="pr-title text-center mb-16">
                    {/* <p className="font-body text-xs uppercase tracking-[0.25em] font-semibold mb-3"
                        style={{ color: "#f94771" }}>Your Journey</p> */}
                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
                        Your Journey Begins Here
                    </h2>
                </div>

                {/* Cards + connectors row */}
                <div ref={sectionRef} className="pr-section hidden md:flex items-stretch gap-0">
                    {steps.map((step, i) => (
                        <div key={step.number} className="flex items-center flex-1 min-w-0">

                            {/* ── Card ── */}
                            <div
                                className="pr-card flex-1 rounded-2xl p-7 flex flex-col gap-4 border hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400 min-w-0"
                                style={{
                                    backgroundColor: step.lightBg,
                                    borderColor: `${step.color}25`,
                                    "--cd": `${i * 350 + 200}ms`,
                                }}
                            >
                                {/* Icon inside card */}
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{
                                        background: `linear-gradient(135deg, ${step.color}22, ${step.color}44)`,
                                        color: step.color,
                                    }}
                                >
                                    {step.icon}
                                </div>

                                <span className="font-body text-xs font-bold tracking-widest" style={{ color: step.color }}>
                                    {step.number}
                                </span>
                                <h3 className="font-heading text-base font-bold text-dark leading-snug">
                                    {step.title}
                                </h3>
                                <p className="font-body text-xs text-dark/55 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {/* ── Connector between cards (not after last) ── */}
                            {i < steps.length - 1 && (
                                <div className="flex items-center flex-shrink-0 w-10 relative">
                                    {/* Gray track */}
                                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[3px] bg-gray-200 rounded-full" />
                                    {/* Animated fill */}
                                    <div
                                        className="pr-connector absolute left-0 top-1/2 -translate-y-1/2 h-[3px] rounded-full"
                                        style={{
                                            background: `linear-gradient(90deg, ${step.color}, ${steps[i + 1].color})`,
                                            "--cnd": `${i * 350 + 550}ms`,
                                        }}
                                    />
                                    {/* Arrow head */}
                                    {/* <svg
                                        className="pr-arrow absolute right-0 top-1/2 -translate-y-1/2"
                                        width="8" height="12" viewBox="0 0 8 12" fill="none"
                                        style={{ "--cnd": `${i * 350 + 750}ms` }}
                                    >
                                        <path d="M1 1l6 5-6 5" stroke={steps[i + 1].color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg> */}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile: vertical stack */}
                <div className="md:hidden flex flex-col gap-6">
                    {steps.map((step, i) => (
                        <div key={step.number} className="flex flex-col items-center gap-2">
                            <div
                                className="w-full rounded-2xl p-6 flex flex-col gap-3 border"
                                style={{ backgroundColor: step.lightBg, borderColor: `${step.color}25` }}
                            >
                                <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                                    style={{ background: `${step.color}22`, color: step.color }}>
                                    {step.icon}
                                </div>
                                <span className="font-body text-xs font-bold tracking-widest" style={{ color: step.color }}>{step.number}</span>
                                <h3 className="font-heading text-base font-bold text-dark">{step.title}</h3>
                                <p className="font-body text-xs text-dark/55 leading-relaxed">{step.description}</p>
                            </div>
                            {i < steps.length - 1 && (
                                <div className="w-[3px] h-8 rounded-full"
                                    style={{ background: `linear-gradient(to bottom, ${step.color}, ${steps[i + 1].color})` }} />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .pr-title {
                    opacity: 0;
                    transform: translateY(16px);
                    animation: prUp 0.7s cubic-bezier(.22,1,.36,1) 0.1s forwards;
                }
                @keyframes prUp {
                    to { opacity: 1; transform: translateY(0); }
                }

                /* Cards fade+rise with stagger */
                .pr-card {
                    opacity: 0;
                    transform: translateY(30px);
                    transition:
                        opacity 0.6s cubic-bezier(.22,1,.36,1) var(--cd, 0ms),
                        transform 0.6s cubic-bezier(.22,1,.36,1) var(--cd, 0ms),
                        box-shadow 0.3s ease,
                        translate 0.3s ease;
                }
                .pr-section.pr-active .pr-card {
                    opacity: 1;
                    transform: translateY(0);
                }

                /* Connector line draws left → right */
                .pr-connector {
                    width: 0%;
                    transition: width 0.5s cubic-bezier(.4,0,.2,1) var(--cnd, 0ms);
                }
                .pr-section.pr-active .pr-connector {
                    width: 100%;
                }

                /* Arrow fades in after line */
                .pr-arrow {
                    opacity: 0;
                    transition: opacity 0.3s ease var(--cnd, 0ms);
                }
                .pr-section.pr-active .pr-arrow {
                    opacity: 1;
                }
            `}</style>
        </section>
    );
};

export default Process;
