import React, { useState } from "react";
import { Link } from "react-router-dom";

const fmt = (n) =>
  n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const thumb =
  "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-600 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:cursor-pointer " +
  "[&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-amber-600 [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-solid [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:cursor-pointer";

function Slider({ label, value, min, max, step, onChange, display }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <label htmlFor={label} className="block text-white font-semibold mb-4">
        {label}
      </label>
      <input
        id={label}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{
          background: `linear-gradient(to right, #d97706 ${pct}%, #ffffff ${pct}%)`,
        }}
        className={`w-full h-1 rounded-full appearance-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-4 focus-visible:ring-offset-black ${thumb}`}
      />
      <p className="text-white/90 mt-3">{display}</p>
    </div>
  );
}

export default function CalculatorSection() {
  const [loanAmount, setLoanAmount] = useState(150000);
  const [months, setMonths] = useState(36);
  const [rate, setRate] = useState(5);

  // EMI (reducing balance)
  const r = rate / 12 / 100;
  const emi =
    (loanAmount * r * Math.pow(1 + r, months)) /
      (Math.pow(1 + r, months) - 1) || 0;
  const totalPayment = emi * months;
  const totalInterest = Math.max(totalPayment - loanAmount, 0);

  return (
    <section
      id="calculator"
      className="relative py-16 lg:py-24 overflow-hidden"
    >
      {/* Background photo + overlay */}
      <img
        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1920"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-slate-900/70" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Calculate Loan EMI
          </h2>
          <div className="mx-auto mt-5 h-1.5 w-40 sm:w-48 bg-amber-500" />
        </div>

        {/* Two panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 shadow-2xl">
          {/* Left: inputs */}
          <div className="bg-black/90 p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Get a Loan Today
            </h3>
            <div className="space-y-10">
              <Slider
                label="Loan Amount"
                value={loanAmount}
                min={10000}
                max={1000000}
                step={5000}
                onChange={setLoanAmount}
                display={`AED ${loanAmount.toLocaleString()}`}
              />
              <Slider
                label="Loan Months"
                value={months}
                min={6}
                max={60}
                step={6}
                onChange={setMonths}
                display={`${months} Months`}
              />
              <Slider
                label="Interest Rate"
                value={rate}
                min={2.5}
                max={15}
                step={0.25}
                onChange={setRate}
                display={`${rate.toFixed(2)} %`}
              />
            </div>
          </div>

          {/* Right: results */}
          <div className="bg-amber-600 p-8 sm:p-12 flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <p className="text-white/90">Loan EMI</p>
                <p className="text-4xl sm:text-5xl font-bold text-white mt-1">
                  {fmt(emi)}
                </p>
              </div>
              <div>
                <p className="text-white/90">Total Interest Payable</p>
                <p className="text-4xl sm:text-5xl font-bold text-white mt-1">
                  {fmt(totalInterest)}
                </p>
              </div>
              <div>
                <p className="text-white/90">Total Payment (Pri + Int)</p>
                <p className="text-4xl sm:text-5xl font-bold text-white mt-1">
                  {fmt(totalPayment)}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-block bg-black hover:bg-slate-800 text-white font-bold tracking-wider text-sm px-10 py-5 transition-colors"
              >
                APPLY NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
