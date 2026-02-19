import Button from "../components/Button";
import heroBg from "../assets/herosectionbg.png";

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroBg})` }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-dark/60" />

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">

                {/* Heading */}
                <h1 className="animate-fade-in-up font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                    Because the world doesn't need more noise. It needs more{" "}
                    <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #f94771, #ff6b35)" }}>
                        healing.
                    </span>
                </h1>

                {/* Subheading */}
                <p className="animate-fade-in-up-delay-1 font-body text-base sm:text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed">
                    A luxury psychology, psychiatry, and yoga wellness clinic opening soon.
                </p>

                {/* CTA Buttons */}
                <div className="animate-fade-in-up-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button variant="primary" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
                        Join the Waitlist
                    </Button>
                    <Button variant="outline" onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>
                        Explore Our Philosophy
                    </Button>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
                <span className="font-body text-xs text-white/50 tracking-widest uppercase">Scroll</span>
                <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
