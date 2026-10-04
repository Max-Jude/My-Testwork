import React, { useState } from 'react';
import { Check, Calculator, ArrowRight, Info, Sparkles } from 'lucide-react';
import { PRICING_TIERS } from '../data/mockData';

interface PricingProps {
  onSelectPlan: (planName: string, estimatedKg?: number) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  // Estimator state
  const [selectedEstimatorPlan, setSelectedEstimatorPlan] = useState<'wash-fold' | 'regular-wash' | 'express' | 'duvet-cleaning'>('wash-fold');
  const [weightKg, setWeightKg] = useState<number>(5);

  const getEstimatedTotal = () => {
    switch (selectedEstimatorPlan) {
      case 'regular-wash':
        return weightKg * 1500;
      case 'wash-fold':
        return weightKg * 2000;
      case 'express':
        return weightKg * 3000;
      case 'duvet-cleaning':
        return Math.max(1, Math.round(weightKg / 4)) * 5000;
      default:
        return weightKg * 2000;
    }
  };

  const getPlanDisplayName = () => {
    switch (selectedEstimatorPlan) {
      case 'regular-wash':
        return 'Regular Wash';
      case 'wash-fold':
        return 'Wash + Fold';
      case 'express':
        return 'Express Service';
      case 'duvet-cleaning':
        return 'Duvet Cleaning';
    }
  };

  return (
    <section id="pricing" className="py-20 bg-white border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
          <p className="text-xs font-bold text-sky-600 uppercase tracking-widest">
            Clear & Upfront Rates
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-heading">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            No surprise billing, water surcharges, or hidden fees. We weigh or inspect your items upon pickup so you always know the exact cost before washing begins.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const isPopular = tier.popular;
            return (
              <div
                key={tier.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-200 ${
                  isPopular
                    ? 'border-2 border-sky-500 bg-sky-50/20 shadow-lg shadow-sky-500/10 p-6'
                    : 'border border-slate-200 bg-white hover:border-slate-300 p-6'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-600 text-white text-[11px] font-bold px-3 py-0.5 rounded-full tracking-wide">
                    Customer Favorite
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-base font-bold text-slate-900">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {tier.description}
                    </p>
                  </div>

                  <div className="py-3 border-y border-slate-100 mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading tabular-nums">
                        {tier.rate}
                      </span>
                      <span className="text-xs text-slate-500 font-normal">
                        /{tier.unit.replace('per ', '')}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectPlan(tier.name)}
                  className={`w-full py-2.5 px-3 text-xs font-semibold rounded-xl transition-all cursor-pointer text-center ${
                    isPopular
                      ? 'bg-sky-600 hover:bg-sky-700 text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  Select {tier.name}
                </button>
              </div>
            );
          })}
        </div>

        {/* Pricing Note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500 text-center">
          <Info className="w-4 h-4 text-slate-400 shrink-0" />
          <span>
            Note: Final prices may vary depending on item weight, special fabric care, or heavy ornamentation. Accurate scales are used at pickup.
          </span>
        </div>

        {/* Interactive Instant Cost Estimator Widget */}
        <div className="mt-16 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            
            {/* Estimator Controls */}
            <div className="w-full lg:w-7/12 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-700">
                <Calculator className="w-4 h-4 text-sky-600" />
                <span>Interactive Cost Estimator</span>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  Estimate Your Laundry Cost Before Booking
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Adjust the estimated weight or select your preferred laundry service to see a live quote in Nigerian Naira.
                </p>
              </div>

              {/* Service Select Buttons */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 block">
                  Select Laundry Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'wash-fold', label: 'Wash + Fold', rate: '₦2,000/kg' },
                    { id: 'regular-wash', label: 'Regular Wash', rate: '₦1,500/kg' },
                    { id: 'express', label: 'Express (24h)', rate: '₦3,000/kg' },
                    { id: 'duvet-cleaning', label: 'Duvets & Heavy', rate: '₦5,000/ea' },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      type="button"
                      onClick={() => setSelectedEstimatorPlan(btn.id as any)}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedEstimatorPlan === btn.id
                          ? 'border-sky-600 bg-white ring-2 ring-sky-500/20 shadow-xs'
                          : 'border-slate-200 bg-white/70 hover:bg-white text-slate-600'
                      }`}
                    >
                      <span className="block text-xs font-semibold text-slate-900">
                        {btn.label}
                      </span>
                      <span className="block text-[11px] text-slate-500 tabular-nums">
                        {btn.rate}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Weight Slider */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-xs">
                  <label htmlFor="weight-range" className="font-semibold text-slate-700">
                    {selectedEstimatorPlan === 'duvet-cleaning' ? 'Estimated Duvet Pieces' : 'Estimated Laundry Weight'}
                  </label>
                  <span className="font-bold text-sky-600 text-sm tabular-nums">
                    {selectedEstimatorPlan === 'duvet-cleaning' 
                      ? `${Math.max(1, Math.round(weightKg / 4))} Duvet(s)`
                      : `${weightKg} kg (Approx. ${weightKg * 4} items)`
                    }
                  </span>
                </div>

                <input
                  id="weight-range"
                  type="range"
                  min="2"
                  max="20"
                  step="1"
                  value={weightKg}
                  onChange={(e) => setWeightKg(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                />

                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>Light (2-3 kg)</span>
                  <span>Standard basket (5-7 kg)</span>
                  <span>Family pile (10-15 kg)</span>
                  <span>Heavy (20 kg)</span>
                </div>
              </div>
            </div>

            {/* Estimator Output Card */}
            <div className="w-full lg:w-4/12 bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm">
              <div className="space-y-3">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Estimated Summary
                </span>

                <div className="pt-2">
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading tabular-nums text-sky-600">
                    ₦{getEstimatedTotal().toLocaleString()}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Based on {weightKg}kg for {getPlanDisplayName()}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Doorstep pickup</span>
                    <span className="text-emerald-600 font-medium">Included in Ibadan</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Eco-friendly detergents</span>
                    <span className="text-emerald-600 font-medium">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sorting & precision fold</span>
                    <span className="text-emerald-600 font-medium">Included</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onSelectPlan(getPlanDisplayName(), weightKg)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm rounded-xl transition-all shadow-sm cursor-pointer"
                >
                  <span>Book with this Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
