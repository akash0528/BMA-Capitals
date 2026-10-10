import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import CalculatorSection from "./components/CalculatorSection";
import AboutSection from "./components/AboutSection";
import FaqsSection from "./components/FaqsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ServiceModal from "./components/ServiceModal";
import { MessageSquare } from "lucide-react";

// ScrollToTop helper component to fix page position on route change
// ScrollToTop component with instant jump behavior (no smooth scroll)
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

const servicesData = [
  {
    id: "personal",
    title: "Personal Loans",
    icon: "UserCheck",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
    shortDesc:
      "Flexible personal financing up to AED 500,000 for UAE residents with competitive interest rates.",
    fullDesc:
      "Get high-value personal loans with or without salary transfer options. Ideal for education, travel, emergency funding, or credit restructuring.",
    features: [
      "Rates starting at 4.99% p.a.",
      "Tenure up to 48 months",
      "Quick approval within 24 hours",
      "No hidden processing fees",
    ],
    docs: [
      "Valid Emirates ID & Passport copy",
      "3 to 6 months bank statement",
      "Salary Transfer Letter / Pay Slips",
    ],
  },
  {
    id: "business",
    title: "Business Loans",
    icon: "Briefcase",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600",
    shortDesc:
      "Unsecured working capital and business expansion loans up to AED 5 Million for companies in UAE.",
    fullDesc:
      "Empower your enterprise with collateral-free business financing to manage cash flow, purchase equipment, or fund growth.",
    features: [
      "High loan limits up to AED 5M",
      "Flexible repayment structures",
      "Minimum company age 1 year",
      "Custom working capital lines",
    ],
    docs: [
      "Trade License copy",
      "MOA & Power of Attorney",
      "12 months corporate bank statements",
      "Audited Financials (for large limits)",
    ],
  },
  {
    id: "consolidation",
    title: "Debt Consolidation",
    icon: "Layers",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
    shortDesc:
      "Combine multiple credit card balances and high-interest loans into a single lower monthly installment.",
    fullDesc:
      "Reduce your financial stress by consolidating all existing debt into one structured payment with significantly lower interest rates.",
    features: [
      "Reduce monthly payout up to 40%",
      "Single easy monthly payment",
      "Clear AECB liabilities",
      "Professional debt advice",
    ],
    docs: [
      "Emirates ID copy",
      "Liability letters from current banks",
      "3 months bank statements",
    ],
  },
  {
    id: "mortgage",
    title: "Home & Mortgage Loans",
    icon: "Landmark",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600",
    shortDesc:
      "Property financing options for buying residential or commercial real estate across Dubai and UAE.",
    fullDesc:
      "Get pre-approved mortgage loans for ready or off-plan properties with up to 80% loan-to-value (LTV) ratio.",
    features: [
      "Up to 25 years tenure",
      "Fixed & variable interest rates",
      "Equity release options",
      "Resident & Non-Resident support",
    ],
    docs: [
      "Passport & Emirates ID",
      "6 months bank statements",
      "Proof of income / Business records",
      "Property Title Deed copy",
    ],
  },
  {
    id: "creditcard",
    title: "Premium Credit Cards",
    icon: "CreditCard",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=600",
    shortDesc:
      "Cashback, travel rewards, and lounge access cards tailored to your lifestyle and salary range.",
    fullDesc:
      "Unlock luxury perks, complimentary airport lounge access, lifestyle discounts, and 0% balance transfer options.",
    features: [
      "High reward points & cashback",
      "Free lounge access worldwide",
      "0% interest installment plans",
      "Minimum salary AED 8,000",
    ],
    docs: [
      "Emirates ID",
      "Latest 3 months bank statement",
      "Salary certificate",
    ],
  },
  {
    id: "corporate",
    title: "Business Account Opening",
    icon: "Building",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
    shortDesc:
      "Hassle-free corporate banking relationship management and account opening assistance.",
    fullDesc:
      "Simplify UAE corporate bank account setup for Mainland, Free Zone, and Offshore company entities with guidance from banking experts.",
    features: [
      "Fast-track application processing",
      "Multi-currency account options",
      "Dedicated banking officer",
      "Support for diverse business activities",
    ],
    docs: [
      "Complete Trade License set",
      "Shareholder passports & EID",
      "Company Profile & Invoice samples",
    ],
  },
];

export default function App() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-amber-200 selection:text-slate-900">
        <TopBar />
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ServicesSection
                  onSelectService={setSelectedService}
                  servicesData={servicesData}
                />
                <CalculatorSection />
                <AboutSection />
                <FaqsSection />
                <ContactSection />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <ServicesSection
                onSelectService={setSelectedService}
                servicesData={servicesData}
              />
            }
          />
          <Route path="/calculator" element={<CalculatorSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>

        <Footer />

        {/* Service Modal Popup */}
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />

        {/* Floating WhatsApp Action Button */}
        <a
          href="https://wa.me/97143494393?text=Hello%20BMA%20Capital,%20I%20would%20like%20to%20inquire%20about%20financial%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center border-2 border-white"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare size={24} />
        </a>
      </div>
    </BrowserRouter>
  );
}
