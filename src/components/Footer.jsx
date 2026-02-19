const socials = [
    {
        label: "Instagram",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        label: "Facebook",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
    {
        label: "Email",
        href: "mailto:hello@soulandpsyche.in",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 7L2 7" />
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
