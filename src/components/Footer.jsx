import React from "react";
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/bbma.jpeg";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={Logo}
                alt="BMA Capital Logo"
                className="h-12 w-auto object-contain " // Inverted to look clean on dark footer background
              />
              <span className="text-lg font-bold text-white tracking-wider">
                BMA CAPITAL
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Leading financial advisory firm in Dubai, providing bespoke loan,
              mortgage, and corporate finance solutions across the UAE.
            </p>
          </div>

          {/* Quick Links with correct router 'to' paths */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-amber-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/calculator"
                  className="hover:text-amber-400 transition-colors"
                >
                  Loan Calculator
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-amber-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-amber-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="hover:text-amber-400 transition-colors"
                >
                  Personal Loans
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-amber-400 transition-colors"
                >
                  Business Finance
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-amber-400 transition-colors"
                >
                  Debt Consolidation
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-amber-400 transition-colors"
                >
                  Home Mortgages
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-amber-400 transition-colors"
                >
                  Corporate Banking
                </Link>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Disclaimer</h4>
            <p className="text-slate-500 leading-relaxed">
              BMA Capital acts as an independent financial consultant and
              broker. Final loan terms, interest rates, and approvals remain
              subject to partner bank policies and AECB credit checks.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>
            © {new Date().getFullYear()} BMA Capital Financial Consultancy. All
            rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 hover:bg-slate-800 transition-colors flex items-center space-x-2"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
