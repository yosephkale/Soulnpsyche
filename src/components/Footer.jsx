const socials = [
    {
        label: "Instagram",
        href: "https://www.instagram.com/soul_n_psyche?igsh=MTMzM2UxbDZpMzViMw==",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        label: "YouTube",
        href: "https://youtube.com/@soulnpsycheyrkr?si=oMnotiNehGY6kQ0V",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
];

const Footer = () => {
    return (
        <footer className="bg-[#f5f4f2] py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6 text-center">

                {/* Brand */}
                <a href="#hero" className="font-heading text-2xl font-bold text-dark tracking-wide">
                    Soul N Psyche
                </a>

                {/* Social Icons */}
                <div className="flex items-center gap-4">
                    {socials.map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            aria-label={s.label}
                            className="w-11 h-11 rounded-full border border-gray-300 bg-white flex items-center justify-center text-dark/50 hover:text-primary hover:border-primary transition-all duration-200"
                        >
                            {s.icon}
                        </a>
                    ))}
                </div>

                {/* Tagline */}
                <p className="font-body text-sm text-dark/55 tracking-wide">
                    Clinic Opening Soon
                </p>

                {/* Copyright */}
                <p className="font-body text-xs text-dark/35">
                    © {new Date().getFullYear()} Soul N Psyche. All rights reserved.
                </p>

            </div>
        </footer>
    );
};

export default Footer;
