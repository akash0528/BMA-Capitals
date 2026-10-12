import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Smartphone,
  MessageCircle,
  Mail,
  Facebook,
  Youtube,
  X,
} from "lucide-react";

// ✏️ Apne asli details yahan daalo
const CONTACT = {
  email: "info@EmrinandRaditconsultants.ae",
  landline: "+971 4 3494393",
  mobile: "+971 50 000 0000",
  whatsapp: "+971 50 000 0000",
  timing: "09:00 AM to 6:00 PM, MON to SAT",
  facebook: "https://facebook.com/",
  youtube: "https://youtube.com/",
};

const digits = (n) => n.replace(/[^\d]/g, "");

function FreeConsultationModal({ onClose }) {
  // Esc se band + background scroll lock
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const rows = [
    {
      Icon: Phone,
      value: CONTACT.landline,
      href: `tel:+${digits(CONTACT.landline)}`,
    },
    {
      Icon: Smartphone,
      value: CONTACT.mobile,
      href: `tel:+${digits(CONTACT.mobile)}`,
    },
    {
      Icon: MessageCircle,
      value: CONTACT.whatsapp,
      href: `https://wa.me/${digits(CONTACT.whatsapp)}`,
    },
  ];

  const socials = [
    {
      Icon: Facebook,
      href: CONTACT.facebook,
      label: "Facebook",
      bg: "bg-blue-600",
    },
    {
      Icon: Mail,
      href: `mailto:${CONTACT.email}`,
      label: "Email",
      bg: "bg-sky-500",
    },
    {
      Icon: MessageCircle,
      href: `https://wa.me/${digits(CONTACT.whatsapp)}`,
      label: "WhatsApp",
      bg: "bg-green-500",
    },
    {
      Icon: Youtube,
      href: CONTACT.youtube,
      label: "YouTube",
      bg: "bg-red-600",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start sm:items-center justify-center p-4 bg-black/60 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Free Consultation"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white w-full max-w-3xl rounded-md shadow-2xl p-6 sm:p-8 my-8"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <h3 className="text-lg font-bold text-slate-900">
            Free Consultation
          </h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-amber-600 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="text-center pt-6">
          <p className="text-lg sm:text-xl font-bold text-slate-900">
            Please call us for free financial consultation with our expert
          </p>

          <div className="mt-6 bg-amber-600 text-white text-base sm:text-2xl font-bold py-3 sm:py-3.5 px-3 sm:px-4">
            Timing: {CONTACT.timing}
          </div>

          <div className="mt-8 space-y-5">
            {rows.map(({ Icon, value, href }) => (
              <a
                key={value + href}
                href={href}
                className="flex items-center justify-center gap-4 text-xl sm:text-3xl font-bold text-slate-900 hover:text-amber-600 transition-colors"
              >
                <Icon size={26} className="shrink-0" />
                <span>{value}</span>
              </a>
            ))}
          </div>

          <p className="mt-8 text-slate-600 leading-relaxed max-w-2xl mx-auto">
            You can also fill up the form in order to know your requirement in
            brief which will enable us to help you in valuable ways.
          </p>

          <Link
            to="/contact"
            onClick={onClose}
            className="inline-block mt-6 bg-slate-900 hover:bg-amber-600 text-white font-bold px-8 py-3.5 transition-colors"
          >
            MORE DETAILS
          </Link>

          <div className="mt-8 flex items-center justify-center gap-4">
            {socials.map(({ Icon, href, label, bg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className={`w-12 h-12 rounded-full ${bg} text-white flex items-center justify-center hover:scale-110 transition-transform`}
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TopBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-slate-900 text-white text-xs sm:text-sm py-2.5 md:py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          {/* Welcome: sirf tablet/desktop pe */}
          <span className="hidden md:inline text-slate-200">
            Welcome to Emrin and Radit consultants
          </span>

          <div className="flex w-full md:w-auto items-center justify-between md:justify-end gap-4 md:gap-6 font-semibold">
            {/* Email: sirf bade screen pe */}
            <a
              href={`mailto:${CONTACT.email}`}
              className="hidden lg:inline hover:text-amber-400 transition-colors"
            >
              {CONTACT.email}
            </a>

            {/* Phone: mobile pe icon ke saath */}
            <a
              href={`tel:+${digits(CONTACT.landline)}`}
              className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone size={14} className="text-amber-400 md:hidden" />
              <span>{CONTACT.landline}</span>
            </a>

            {/* Request Call Back: tablet/desktop */}
            <Link
              to="/contact"
              className="hidden md:inline hover:text-amber-400 transition-colors"
            >
              Request Call Back
            </Link>

            {/* Free consultation: mobile pe amber pill, desktop pe text */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="bg-amber-600 hover:bg-amber-700 md:bg-transparent md:hover:bg-transparent md:hover:text-amber-400 px-3 py-1.5 md:p-0 rounded-full md:rounded-none transition-colors"
            >
              Free consultation
            </button>
          </div>
        </div>
      </div>

      {open && <FreeConsultationModal onClose={() => setOpen(false)} />}
    </>
  );
}
