import { useState } from "react";

const WEB3FORMS_ACCESS_KEY = "78cc90ec-773d-4f45-ba15-71caffedc326"; // 🔑 Replace with your Web3Forms access key

const initialState = { firstName: "", lastName: "", email: "", whatsapp: "", message: "" };

const inputClass =
    "w-full font-body text-sm text-dark bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 placeholder:text-dark/35";

const ContactForm = () => {
    const [form, setForm] = useState(initialState);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const payload = {
                access_key: WEB3FORMS_ACCESS_KEY,
                subject: "New Waitlist Submission – Soul N Psyche",
                from_name: "Soul N Psyche Website",
                ...form,
                botcheck: "",
            };

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (data.success) {
                setSubmitted(true);
                setForm(initialState);
            } else {
                setError(data.message || "Something went wrong. Please try again.");
            }
        } catch {
            setError("Network error. Please check your connection and try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
            style={{
                background:
                    "linear-gradient(135deg, #e8b4c0 0%, #d49ab0 30%, #c48aaa 60%, #b87aab 100%)",
            }}
        >
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2
                        className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
                        style={{ color: "#1a1a2e" }}
                    >
                        Be the First to Experience Soul N Psyche
                    </h2>
                    <p className="font-body text-sm sm:text-base" style={{ color: "#3a2a3a" }}>
                        Join our waitlist for launch updates, early booking access, and wellness insights.
                    </p>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">

                    {/* Success state */}
                    {submitted ? (
                        <div className="flex flex-col items-center text-center py-8 gap-4">
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl"
                                style={{ background: "linear-gradient(135deg, #e8588a, #9b5de5)" }}
                            >
                                ✓
                            </div>
                            <h3 className="font-heading text-2xl font-bold text-dark">
                                You're on the list!
                            </h3>
                            <p className="font-body text-sm text-dark/60 max-w-xs">
                                Thank you for your interest. We'll be in touch soon with everything you need to know.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="font-body text-sm text-primary underline underline-offset-2 mt-2"
                            >
                                Submit another response
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                            {/* First Name + Last Name */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-body text-sm font-medium text-dark">
                                        First Name <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        placeholder="First name"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        className={inputClass}
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-body text-sm font-medium text-dark">
                                        Last Name <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        required
                                        placeholder="Last name"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        className={inputClass}
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-1.5">
                                <label className="font-body text-sm font-medium text-dark">
                                    Email <span className="text-primary">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="your@email.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            {/* WhatsApp */}
                            <div className="flex flex-col gap-1.5">
                                <label className="font-body text-sm font-medium text-dark">
                                    WhatsApp No
                                </label>
                                <input
                                    type="tel"
                                    name="whatsapp"
                                    placeholder="+91 98765 43210"
                                    value={form.whatsapp}
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            {/* Message */}
                            <div className="flex flex-col gap-1.5">
                                <label className="font-body text-sm font-medium text-dark">
                                    Message (Optional)
                                </label>
                                <textarea
                                    name="message"
                                    rows={3}
                                    placeholder="Tell us about what you're looking for..."
                                    value={form.message}
                                    onChange={handleChange}
                                    className={`${inputClass} resize-none`}
                                />
                            </div>

                            {/* Error message */}
                            {error && (
                                <p className="font-body text-xs text-red-500 text-center -mt-1">{error}</p>
                            )}

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full mt-1 py-3.5 rounded-lg text-white font-body text-sm font-semibold hover:opacity-90 active:scale-[0.99] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                style={{
                                    background: "linear-gradient(135deg, #f94771 0%, #ff6b35 100%)",
                                }}
                            >
                                {loading ? (
                                    <>
                                        <svg
                                            className="animate-spin h-4 w-4 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v8H4z"
                                            />
                                        </svg>
                                        Sending…
                                    </>
                                ) : (
                                    "Join the community"
                                )}
                            </button>

                        </form>
                    )}
                </div>

            </div>
        </section>
    );
};

export default ContactForm;
