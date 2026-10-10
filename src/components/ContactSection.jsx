import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const EMPTY = {
  name: "",
  phone: "",
  email: "",
  service: "Personal Loan",
  message: "",
};

const inputCls =
  "w-full px-4 py-3.5 bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm transition focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/15";

const info = [
  {
    Icon: MapPin,
    title: "Visit us",
    text: "Level 14, Prime Tower, Business Bay, Dubai, UAE",
  },
  {
    Icon: Phone,
    title: "Call us",
    text: "+971 43494393",
    href: "tel:+97143494393",
  },
  {
    Icon: Mail,
    title: "Email us",
    text: "Info@bmacapital.ae",
    href: "mailto:Info@bmacapital.ae",
  },
  {
    Icon: Clock,
    title: "Working hours",
    text: "Mon – Sat, 9:00 AM – 6:00 PM",
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(EMPTY);

  const set = (key) => (e) =>
    setFormData({ ...formData, [key]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: yahan apni API / email service call karo
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData(EMPTY);
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background photo + overlay */}
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-slate-900/80" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Contact Us
          </h2>
          <div className="mx-auto mt-5 h-1.5 w-40 sm:w-48 bg-amber-500" />
          <p className="text-slate-300 mt-6 text-base sm:text-lg max-w-2xl mx-auto">
            Talk to our advisors for a free consultation. We usually reply
            within 2 business hours.
          </p>
        </div>

        {/* Info strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {info.map(({ Icon, title, text, href }) => {
            const Tag = href ? "a" : "div";
            return (
              <Tag
                key={title}
                {...(href ? { href } : {})}
                className="bg-white/10 backdrop-blur border border-white/20 p-5 flex items-start gap-4 hover:bg-white/15 transition-colors"
              >
                <div className="w-11 h-11 bg-amber-500 text-white flex items-center justify-center shrink-0">
                  <Icon size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-white font-semibold">{title}</p>
                  <p className="text-slate-200 text-sm mt-0.5 break-words leading-snug">
                    {text}
                  </p>
                </div>
              </Tag>
            );
          })}
        </div>

        {/* Map + Form in one card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 shadow-2xl bg-white">
          {/* Map */}
          <div className="relative min-h-[300px] lg:min-h-full bg-slate-200 order-2 lg:order-1">
            <iframe
              title="BMA Capital Dubai Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178652317924!2d55.27218777610051!3d25.180373231700685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682f483c7a31%3A0xc34b3f07a4e60df0!2sBusiness%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Form */}
          <div className="p-8 sm:p-12 order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Request a Callback
            </h3>
            <div className="mt-3 mb-8 h-1 w-14 bg-amber-500" />

            {submitted ? (
              <div className="py-10 px-6 bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle size={48} className="text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold text-emerald-900">
                  Inquiry submitted successfully
                </h4>
                <p className="text-emerald-700">
                  Our senior financial advisor will contact you within 2
                  business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  required
                  autoComplete="name"
                  aria-label="Full name"
                  placeholder="Full name *"
                  value={formData.name}
                  onChange={set("name")}
                  className={inputCls}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    required
                    autoComplete="tel"
                    aria-label="Phone number"
                    placeholder="Phone (+971 50 000 0000) *"
                    value={formData.phone}
                    onChange={set("phone")}
                    className={inputCls}
                  />
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    aria-label="Email address"
                    placeholder="Email address *"
                    value={formData.email}
                    onChange={set("email")}
                    className={inputCls}
                  />
                </div>
                <select
                  aria-label="Service required"
                  value={formData.service}
                  onChange={set("service")}
                  className={inputCls}
                >
                  <option>Personal Loan</option>
                  <option>Business Loan</option>
                  <option>Debt Consolidation</option>
                  <option>Mortgage Loan</option>
                  <option>Credit Cards</option>
                  <option>Corporate Account Opening</option>
                </select>
                <textarea
                  rows={4}
                  aria-label="Your query"
                  placeholder="Tell us what you need (salary, funding amount, etc.)"
                  value={formData.message}
                  onChange={set("message")}
                  className={`${inputCls} resize-none`}
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-black hover:bg-amber-600 text-white font-bold tracking-wider text-sm px-10 py-4 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-500/40"
                >
                  <Send size={16} />
                  <span>SUBMIT INQUIRY</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
