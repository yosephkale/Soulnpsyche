import { useEffect, useRef } from "react";
import missionBg from "../assets/ourmission.png";

const Mission = () => {
    const contentRef = useRef(null);

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
            { threshold: 0.2 }
        );
        if (contentRef.current) observer.observe(contentRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="mission"
            className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
            style={{
                backgroundImage: `url(${missionBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Soft pink overlay */}
            <div
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(249, 71, 113, 0.18)" }}
            />

            {/* Frosted gradient veil */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(255,240,244,0.55) 0%, rgba(255,228,235,0.65) 100%)",
                    backdropFilter: "blur(2px)",
                }}
            />

            {/* Content */}
            <div
                ref={contentRef}
                className="mission-content relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-dark">
                    Our Mission
                </h2>

                <p className="font-body text-lg sm:text-xl text-dark/70 leading-relaxed max-w-2xl mx-auto">
                    To bring together the science of the mind and the wisdom of the soul,
                    creating a place where people feel{" "}
                    <span className="font-semibold text-dark/90">seen</span>,{" "}
                    <span className="font-semibold text-dark/90">supported</span>, and{" "}
                    <span className="font-semibold text-dark/90">restored</span>.
                </p>
            </div>

            <style>{`
                .mission-content {
                    opacity: 0;
                    transform: translateY(24px);
                    transition: opacity 0.9s ease, transform 0.9s ease;
                }
                .mission-content.is-visible {
                    opacity: 1;
                    transform: translateY(0);
                }
            `}</style>
        </section>
    );
};

export default Mission;
