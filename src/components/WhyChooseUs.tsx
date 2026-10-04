import React from 'react';
import { Clock, ShieldCheck, Receipt, Calendar, CheckCircle2, Headphones } from 'lucide-react';
import { BENEFITS } from '../data/mockData';
import { BenefitItem } from '../types';

export const WhyChooseUs: React.FC = () => {
  const getBenefitIcon = (name: BenefitItem['iconName']) => {
    switch (name) {
      case 'Clock':
        return Clock;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Receipt':
        return Receipt;
      case 'Calendar':
        return Calendar;
      case 'CheckCircle2':
        return CheckCircle2;
      case 'Headphones':
        return Headphones;
      default:
        return CheckCircle2;
    }
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
          <p className="text-xs font-bold text-sky-600 uppercase tracking-widest">
            The SwiftWash Difference
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-heading">
            Why Ibadan Residents & Teams Choose Us
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Built from the ground up for reliable turnaround, gentle garment handling, and honest communication.
          </p>
        </div>

        {/* 6 Benefit Cards (Clean 3x2 grid with single elevation) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BENEFITS.map((benefit, idx) => {
            const Icon = getBenefitIcon(benefit.iconName);
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-sky-300 hover:shadow-xs transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-sky-600 flex items-center justify-center mb-4 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
