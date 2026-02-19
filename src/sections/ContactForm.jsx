import { useState } from "react";

const initialState = { name: "", email: "", phone: "", message: "" };

const inputClass =
    "w-full font-body text-sm text-dark bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 placeholder:text-dark/35";

const ContactForm = () => {
    const [form, setForm] = useState(initialState);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setForm(initialState);
    };

    return (
        <section
            id="contact"
            className="py-20 lg:pt-18 lg:pb-28 relative overflow-hidden"
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
                            <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl"
                                style={{ background: "linear-gradient(135deg, #e8588a, #9b5de5)" }}>
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

                            {/* Name */}
                            <div className="flex flex-col gap-1.5">
                                <label className="font-body text-sm font-medium text-dark">
                                    Name <span className="text-primary">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your full name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className={inputClass}
                                />
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

                            {/* Phone */}
                            <div className="flex flex-col gap-1.5">
                                <label className="font-body text-sm font-medium text-dark">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="(555) 123-4567"
                                    value={form.phone}
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

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full mt-1 py-3.5 rounded-lg text-white font-body text-sm font-semibold hover:opacity-90 active:scale-[0.99] transition-all duration-200"
                                style={{
                                    background: "linear-gradient(90deg, #e8588a 0%, #9b5de5 100%)",
                                }}
                            >
                                Join the Waitlist
                            </button>

                        </form>
                    )}
                </div>

            </div>
        </section>
    );
};

export default ContactForm;
