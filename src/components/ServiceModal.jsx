import React from "react";
import { X, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceModal({ service, onClose }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
        >
          <X size={20} />
        </button>

        <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
          Service Overview
        </span>

        <h3 className="text-2xl font-extrabold text-slate-900 mt-3 mb-2">
          {service.title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {service.fullDesc}
        </p>

        {/* Feature Highlights */}
        <div className="space-y-4 mb-6">
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            Key Benefits
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.features.map((feat, i) => (
              <div
                key={i}
                className="flex items-center space-x-2 text-sm text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100"
              >
                <CheckCircle size={16} className="text-amber-600 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Required Documents */}
        <div className="mb-8">
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
            Required Documents
          </h4>
          <ul className="list-disc list-inside text-sm text-slate-600 space-y-1.5 pl-1">
            {service.docs.map((doc, i) => (
              <li key={i}>{doc}</li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <Link
          to="contact"
          onClick={onClose}
          className="block w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-center rounded-xl transition-all shadow-md"
        >
          Apply For {service.title} Now
        </Link>
      </div>
    </div>
  );
}
