import { useEffect, useRef } from "react";
import YogaStudioImage from "../assets/YogaStudioImage.webp";
const spaces = [
    {
        label: "Yoga Studio",
        image: YogaStudioImage,
    },
];

const Spaces = () => {
    const titleRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

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
        if (imageRef.current) observer.observe(imageRef.current);
        if (contentRef.current) observer.observe(contentRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="spaces" className="pb-16 sm:pb-20 lg:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={titleRef} className="sp-title text-center mb-10 sm:mb-12">
                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-3">
                        Our Spaces
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    <div
                        ref={imageRef}
                        className="sp-image relative rounded-3xl overflow-hidden border border-gray-100 shadow-md"
                    >
                        <img
                            src={spaces[0].image}
                            alt={spaces[0].label}
                            className="w-full h-[300px] sm:h-[360px] lg:h-[400px] object-cover"
                        />
                    </div>

                    <div ref={contentRef} className="sp-content">
                        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-tight mb-6">
                            Yoga Studio
                        </h2>

                        <div className="rounded-3xl border border-primary/15 bg-white p-6 sm:p-7 shadow-sm relative overflow-hidden">
                            <div
                                className="absolute inset-x-0 top-0 h-1"
                                style={{ background: "linear-gradient(90deg, #f94771, #ff6b35)" }}
                            />

                            <div className="flex items-start gap-3 mb-5">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                        <path d="M21 10c0 6.5-9 12-9 12S3 16.5 3 10a9 9 0 1 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-body text-xs uppercase tracking-[0.2em] text-dark/60 mb-1">Address</p>
                                    <p className="font-heading text-2xl sm:text-3xl text-dark">Nirvana Yogshala</p>
                                </div>
                            </div>

                            <div className="rounded-2xl bg-gray-50 border border-gray-200 px-4 sm:px-5 py-4">
                                <p className="font-body text-base sm:text-lg text-dark leading-relaxed">
                                    Urban Estate Phase 2, Patiala, Behind Sip Sip Spot Cafe
                                </p>
                            </div>
                        </div>

                        <div
                            className="mt-6 h-1 w-20 rounded-full"
                            style={{ background: "linear-gradient(90deg, #f94771, #ff6b35)" }}
                        />
                    </div>
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
                .sp-image {
                    opacity: 0;
                    transform: translateX(-32px);
                    transition: opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1);
                }
                .sp-image.sp-visible {
                    opacity: 1;
                    transform: translateX(0);
                }
                .sp-content {
                    opacity: 0;
                    transform: translateX(32px);
                    transition: opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1);
                }
                .sp-content.sp-visible {
                    opacity: 1;
                    transform: translateX(0);
                }
            `}</style>
        </section>
    );
};

export default Spaces;
