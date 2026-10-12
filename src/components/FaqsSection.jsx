import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqsSection() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "What is the minimum salary required for a personal loan in UAE?",
      a: "Most UAE banks require a minimum monthly salary of AED 5,000 for salaried individuals. Higher salary brackets unlock lower interest rates and higher loan amounts.",
    },
    {
      q: "Can I get a loan if my company is not listed with the bank?",
      a: "Yes, Emrin and Radit consultants specializes in non-listed company loan approvals through specialized banking partners.",
    },
    {
      q: "What documents are needed for business loan application?",
      a: "Standard documents include Trade License, Memorandum of Association (MOA), 6-12 months bank statements, passport/Emirates ID copies of partners, and audit reports.",
    },
    {
      q: "How long does the loan approval process take?",
      a: "Pre-approvals are usually granted within 24 to 48 hours upon submission of complete documentation.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-4">
            Got Questions About UAE Banking?
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-5 bg-slate-50 hover:bg-slate-100 flex justify-between items-center transition-colors font-bold text-slate-900 text-sm sm:text-base"
              >
                <span className="flex items-center space-x-3">
                  <HelpCircle size={18} className="text-amber-600 shrink-0" />
                  <span>{faq.q}</span>
                </span>
                <ChevronDown
                  size={18}
                  className={`text-slate-500 transition-transform ${openIdx === idx ? "rotate-180 text-amber-600" : ""}`}
                />
              </button>

              {openIdx === idx && (
                <div className="p-5 bg-white text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
