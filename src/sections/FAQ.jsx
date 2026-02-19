import { useState } from "react";
import faqs from "../data/faq";

const FAQ = () => {
    const [openId, setOpenId] = useState(null);

    const toggle = (id) => setOpenId(openId === id ? null : id);

    return (
        <section id="faq" className="py-20 lg:py-28 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Centered Title */}
                <div className="text-center mb-14">
                    <p className="font-body text-sm uppercase tracking-[0.2em] text-primary font-medium mb-3">
                        Got Questions?
                    </p>
                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-tight">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* Accordion */}
                <div className="divide-y divide-gray-100">
                    {faqs.map((faq) => {
                        const isOpen = openId === faq.id;
                        return (
                            <div key={faq.id}>
                                {/* Question row */}
                                <button
                                    onClick={() => toggle(faq.id)}
                                    className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                                >
                                    <span className="font-body text-base sm:text-lg font-medium text-dark group-hover:text-primary transition-colors duration-200">
                                        {faq.question}
                                    </span>
                                    {/* Animated chevron */}
                                    <span
                                        className={`flex-shrink-0 w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 ${isOpen
                                            ? "bg-primary border-primary rotate-180"
                                            : "bg-transparent"
                                            }`}
                                    >
                                        <svg
                                            className={`w-3 h-3 transition-colors duration-300 ${isOpen ? "text-white" : "text-dark/40"
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2.5}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </span>
                                </button>

                                {/* Answer — smooth height via max-h transition */}
                                <div
                                    className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="font-body text-sm sm:text-base text-dark/60 leading-relaxed pb-5">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default FAQ;
