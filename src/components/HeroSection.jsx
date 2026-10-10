import React from "react";
import { ShieldCheck, ArrowRight, Award, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection({ onOpenService }) {
  return (
    <section
      id="home"
      className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1920"
        alt="Financial consultation meeting"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay (text readable rakhne ke liye) */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/65 to-slate-900/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="max-w-3xl space-y-6 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-amber-50/95 border border-amber-200 text-amber-800 text-xs font-semibold">
            <ShieldCheck size={16} className="text-amber-600" />
            <span>Licensed Corporate Financial Advisors in Dubai</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Empowering Your{" "}
            <span className="text-amber-400">Financial Growth</span> in UAE
          </h1>

          <p className="text-lg sm:text-xl text-slate-200 max-w-2xl leading-relaxed">
            Tailored financial solutions for corporate expansion, personal
            wealth management, debt consolidation, and mortgage financing across
            the Emirates.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <Link
              to="/calculator"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-all shadow-lg text-center"
            >
              <span>Calculate Loan EMI</span>
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              to="contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-white/10 backdrop-blur border border-white/40 text-white font-semibold hover:bg-white hover:text-slate-900 transition-all text-center"
            >
              <span>Get Free Consultation</span>
            </Link>
          </div>

          <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/20 max-w-xl">
            {["Quick Approval", "Lowest Rates", "100% Confidential"].map(
              (item) => (
                <div key={item} className="flex items-center space-x-2">
                  <CheckCircle2 size={18} className="text-amber-400 shrink-0" />
                  <span className="text-sm font-medium text-white">{item}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Floating Badges (right side, desktop only) */}
      <div className="hidden lg:flex absolute right-10 bottom-10 z-10 flex-col gap-3 items-end">
        <div className="bg-slate-900/90 text-white p-3.5 rounded-xl shadow-xl border border-slate-700 flex items-center space-x-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
          <p className="text-xs font-semibold tracking-wide">
            98.5% Approval Rate
          </p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-xl flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
            <Award size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Disbursed</p>
            <p className="text-sm font-bold text-slate-900">AED 500M+</p>
          </div>
        </div>
      </div>
    </section>
  );
}
