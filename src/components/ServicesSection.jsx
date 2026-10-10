import React from "react";
import {
  UserCheck,
  Briefcase,
  Layers,
  Landmark,
  CreditCard,
  Building,
} from "lucide-react";

export default function ServicesSection({ onSelectService, servicesData }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "UserCheck":
        return <UserCheck size={22} className="text-amber-600" />;
      case "Briefcase":
        return <Briefcase size={22} className="text-amber-600" />;
      case "Layers":
        return <Layers size={22} className="text-amber-600" />;
      case "Landmark":
        return <Landmark size={22} className="text-amber-600" />;
      case "CreditCard":
        return <CreditCard size={22} className="text-amber-600" />;
      case "Building":
        return <Building size={22} className="text-amber-600" />;
      default:
        return <Briefcase size={22} className="text-amber-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Financial Services
          </h2>
          <div className="mx-auto mt-5 h-1.5 w-40 sm:w-48 rounded-full bg-amber-500" />
          <p className="text-slate-600 mt-6 text-base sm:text-lg leading-relaxed">
            We work with top UAE banks to offer a wide range of financial
            services, so every customer gets structured financing, competitive
            rates and professional care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Service Card Image Banner with Zoom Effect */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>

                  {/* Floating Icon badge over image */}
                  <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm border border-slate-200 flex items-center justify-center shadow-md">
                    {getIcon(service.icon)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center text-sm font-semibold text-slate-900 group-hover:text-amber-600">
                <span>View Requirements & Details</span>
                <span className="ml-2 group-hover:translate-x-1.5 transition-transform">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
