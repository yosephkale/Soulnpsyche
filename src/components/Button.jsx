const variants = {
    primary:
        "text-white hover:opacity-90",
    secondary:
        "bg-dark text-white hover:bg-dark/80",
    outline:
        "border-2 border-white text-white hover:bg-white hover:text-dark",
};

const gradientStyles = {
    primary: { background: "linear-gradient(135deg, #f94771 0%, #ff6b35 100%)" },
    secondary: {},
    outline: {},
};

const Button = ({ children, variant = "primary", onClick, className = "" }) => {
    return (
        <button
            onClick={onClick}
            style={gradientStyles[variant]}
            className={`
        inline-flex items-center justify-center
        px-6 py-2.5 rounded-full
        font-body text-sm font-medium
        transition-all duration-200
        ${variants[variant]}
        ${className}
      `}
        >
            {children}
        </button>
    );
};

export default Button;
