import React, { useState } from "react";
import { Menu, X, Building2 } from "lucide-react";
import Logo from "../assets/bbma.jpeg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "CALCULATOR", href: "/calculator" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={Logo}
              alt="BMA Capital Logo"
              className="h-16 sm:h-20 w-auto object-contain mix-blend-multiply contrast-125"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                BMA CAPITAL
              </span>
              <span className="text-[10px] font-medium tracking-widest text-amber-600 uppercase mt-1">
                Financial Consultancy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-lg font-semibold font-sans text-black hover:text-amber-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-amber-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-800 hover:text-amber-600 hover:bg-slate-50 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
