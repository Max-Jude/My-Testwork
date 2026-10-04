import React from 'react';
import { CalendarCheck, Bike, Sparkles, PackageCheck, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/mockData';

interface HowItWorksProps {
  onScheduleClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onScheduleClick }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return CalendarCheck;
      case 1:
        return Bike;
      case 2:
        return Sparkles;
      case 3:
        return PackageCheck;
      default:
        return CalendarCheck;
    }
  };

  return (
    <section id="how-it-works" className="py-20 bg-slate-50 border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
          <p className="text-xs font-bold text-sky-600 uppercase tracking-widest">
            Effortless Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-heading">
            How SwiftWash Works in 4 Simple Steps
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            No trips to laundromats in Ibadan traffic. We have streamlined the entire process from your doorstep back to your closet.
          </p>
        </div>

        {/* 4 Process Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = getStepIcon(idx);
            return (
              <div
                key={step.step}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:shadow-md transition-shadow relative"
              >
                <div>
                  {/* Step Header with human editorial numbering */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 font-mono tracking-wider">
                      STEP {step.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-sky-600 mb-2.5">
                    {step.description}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center text-xs text-slate-400 font-medium">
                  {idx < 3 ? 'Next: Step 0' + (idx + 2) : 'Ready to wear!'}
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Image Banner */}
        <div className="mt-14 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-4">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                Reliable Doorstep Service
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
                We collect right from your apartment, hostel, or office gate.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether you live inside the University of Ibadan campus, an apartment in Bodija, or an estate in Oluyole, our dispatched riders communicate ahead with accurate arrival estimates.
              </p>
              
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={onScheduleClick}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-xl transition-colors shadow-sm cursor-pointer"
                >
                  <span>Book Your First Pickup</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-xs text-slate-500 flex items-center gap-1.5 sm:pl-2">
                  <span>Free doorstep collection on standard laundry bundles</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 h-64 lg:h-full min-h-[260px] relative bg-slate-100">
              <img
                src="/src/assets/images/delivery_pickup_bag_1791129556064.jpg"
                alt="SwiftWash delivery tote bag being handed over at a doorstep"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 text-xs font-medium text-white drop-shadow-md">
                Eco-friendly reusable SwiftWash laundry totes
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
