import React, { useState } from 'react';
import { Shirt, Sparkles, Flame, BedDouble, Zap, Building2, ArrowRight, Clock } from 'lucide-react';
import { SERVICES } from '../data/mockData';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: ServiceItem['iconName']) => {
    switch (iconName) {
      case 'Shirt':
        return Shirt;
      case 'Sparkles':
        return Sparkles;
      case 'Flame':
        return Flame;
      case 'BedDouble':
        return BedDouble;
      case 'Zap':
        return Zap;
      case 'Building2':
        return Building2;
      default:
        return Shirt;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
          <p className="text-xs font-bold text-sky-600 uppercase tracking-widest">
            Specialized Garment Care
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-heading">
            Complete Laundry & Dry Cleaning Solutions
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            From everyday casuals to high-end native attire and heavy bedding, our team applies fabric-specific cycles for a crisp, fresh finish every time.
          </p>
        </div>

        {/* Services Grid (6 cards, single elevation, clean borders) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between hover:border-sky-300 hover:shadow-md transition-all duration-200 group"
              >
                <div>
                  {/* Top row with icon & starting price */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-medium text-slate-500 block">From</span>
                      <span className="text-base font-bold text-slate-900 tabular-nums">
                        {service.startingPrice}
                      </span>
                      <span className="text-[11px] text-slate-500 font-normal ml-1">
                        /{service.priceUnit.replace('per ', '')}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-sky-700 font-medium mt-0.5 mb-2.5">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Footer with turnaround & interactive Learn More */}
                <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{service.turnaround}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 hover:text-sky-700 transition-colors cursor-pointer group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Garment Care Callout Feature Bar */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/3 aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
            <img
              src="/src/assets/images/service_garments_rack_1791129544605.jpg"
              alt="Tailored suits and pressed garments hanging neatly on wooden racks"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="space-y-3 flex-1">
            <div className="text-xs font-semibold text-sky-700 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Fabric Care Guarantee</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
              Expert handling for traditional African attires and delicate silks
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We understand the investment in Agbada embroidery, Aso-Oke, lace materials, and tailored suits. Our master wash technicians inspect labels, conduct color-fastness tests, and apply calibrated steam finishing without burning fibers.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-600">
              <span>Color separation guarantee</span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span>Individual protective dust bags</span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span>Intact button inspection</span>
            </div>
          </div>
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectService={(serviceName) => {
          setSelectedService(null);
          onSelectService(serviceName);
        }}
      />
    </section>
  );
};
