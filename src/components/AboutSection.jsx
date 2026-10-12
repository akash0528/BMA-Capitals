import React from "react";
import { Target, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Years of Experience", value: "10+" },
  { label: "Partner Banks in UAE", value: "25+" },
  { label: "Satisfied Clients", value: "12,000+" },
  { label: "Loan Volume Processed", value: "AED 1.2B+" },
];

const points = [
  {
    Icon: Target,
    title: "Strategic Advisory",
    text: "Tailored debt restructuring and asset optimization.",
  },
  {
    Icon: Shield,
    title: "Transparent Process",
    text: "Zero hidden charges with full regulatory compliance.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            About Emrin and Radit consultants
          </h2>
          <div className="mx-auto mt-5 h-1.5 w-40 sm:w-48 rounded-full bg-amber-500" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-4 -left-4 w-2/3 h-2/3 rounded-2xl bg-amber-100" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=900"
                alt="Emrin and Radit consultants advisors meeting a client"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-slate-900 text-white rounded-2xl shadow-xl px-6 py-5 border-4 border-white">
              <p className="text-4xl font-extrabold text-amber-400 leading-none">
                10+
              </p>
              <p className="text-sm text-slate-200 mt-1">Years of experience</p>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
              Leading independent corporate and personal financial consultancy
              in the UAE
            </h3>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Emrin and Radit consultants is a premier financial brokerage and
              consultancy firm based in Dubai. We connect individuals,
              entrepreneurs and corporate enterprises with customized banking
              products and capital solutions.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              With strong relationships across major local and international UAE
              banks, we negotiate preferred interest rates, flexible repayment
              tenures and high approval ratios for our clients.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {points.map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-amber-500/30">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{title}</h4>
                    <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-slate-900 hover:bg-amber-600 text-white font-semibold transition-colors shadow-lg"
              >
                <span>Speak with our advisory desk</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats band */}
        <div className="mt-24 bg-slate-900 rounded-3xl px-6 py-10 sm:px-10 shadow-2xl">
          <p className="text-center text-white text-xl font-bold mb-8">
            Why clients trust Emrin and Radit consultants
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:divide-x lg:divide-slate-700">
            {stats.map((s) => (
              <div key={s.label} className="text-center px-4">
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">
                  {s.value}
                </div>
                <div className="text-sm text-slate-300 mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
