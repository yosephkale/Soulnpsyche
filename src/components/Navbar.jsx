import { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/Untitled_design__1_-removebg-preview.png";

const navLinks = [
    { label: "Philosophy", target: "#about" },
    { label: "Team", target: "/team" },
    { label: "Services", target: "#services" },
    { label: "Testimonials", target: "#testimonials" },
    { label: "Why Us", target: "#why-choose-us" },
    { label: "Facilities", target: "#spaces" },
    { label: "FAQ", target: "#faq" },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();

    const resolveHref = (target) => {
        if (target.startsWith("#")) {
            return pathname === "/" ? target : `/${target}`;
        }
        return target;
    };

    return (
        <header className="sticky top-0 z-50 bg-light/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo + Brand Name */}
                    <a href={pathname === "/" ? "#hero" : "/#hero"} className="flex items-center gap-2">
                        <img
                            src={logo}
                            alt="Soul N Psyche Logo"
                            className="h-10 w-auto object-contain"
                        />
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={resolveHref(link.target)}
                                className="font-body text-sm text-dark/70 hover:text-primary transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* CTA + Hamburger */}
                    <div className="flex items-center gap-4">
                        <a
                            href={pathname === "/" ? "#contact" : "/#contact"}
                            className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-white font-body text-sm font-medium transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                            style={{
                                background: "linear-gradient(135deg, #f94771 0%, #ff6b35 100%)",
                            }}
                        >
                            Join the community
                        </a>

                        {/* Hamburger */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 group"
                            aria-label="Toggle menu"
                        >
                            <span
                                className={`block h-0.5 w-6 bg-dark transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                            />
                            <span
                                className={`block h-0.5 w-6 bg-dark transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
                            />
                            <span
                                className={`block h-0.5 w-6 bg-dark transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <nav className="flex flex-col px-4 pb-4 gap-4 bg-light/95 backdrop-blur-md">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={resolveHref(link.target)}
                            onClick={() => setMenuOpen(false)}
                            className="font-body text-sm text-dark/70 hover:text-primary transition-colors duration-200 py-1 border-b border-gray-100"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={pathname === "/" ? "#contact" : "/#contact"}
                        onClick={() => setMenuOpen(false)}
                        className="inline-flex justify-center items-center px-5 py-2 rounded-full text-white font-body text-sm font-medium hover:opacity-90 transition-all duration-200 mt-2"
                        style={{
                            background: "linear-gradient(135deg, #f94771 0%, #ff6b35 100%)",
                        }}
                    >
                        Join the community
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
