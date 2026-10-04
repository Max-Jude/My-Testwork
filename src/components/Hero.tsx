import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, MapPin, Sparkles } from 'lucide-react';

interface HeroProps {
  onScheduleClick: () => void;
  onServicesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScheduleClick, onServicesClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-slate-50">
      {/* Subtle decorative background circle */}
      <div className="absolute top-12 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-sky-200/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-teal-100/30 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Messaging & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location context note */}
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-800 tracking-wide">
              <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
              <span>Doorstep Pickup & Delivery in Ibadan</span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="text-slate-500 font-normal">Bodija · UI · Jericho · Oluyole</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12] text-balance">
              Laundry Day, <span className="text-sky-600">Without the Work.</span>
            </h1>

            {/* Supporting Value Proposition */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              SwiftWash picks up your clothes, gives them professional care, and delivers them back fresh, clean, and ready to wear.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={onScheduleClick}
                className="group flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-sky-600 hover:bg-sky-700 active:scale-[0.99] rounded-xl transition-all shadow-md shadow-sky-600/20 whitespace-nowrap cursor-pointer"
              >
                <span>Schedule a Pickup</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onServicesClick}
                className="flex items-center justify-center px-6 py-3.5 text-base font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors whitespace-nowrap shadow-xs cursor-pointer"
              >
                View Services & Rates
              </button>
            </div>

            {/* Trust indicators (Zero-Pill discipline: unboxed text with subtle typographic separators) */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm text-slate-600 font-medium">
              <span className="flex items-center gap-1.5 text-slate-700">
                <Clock className="w-4 h-4 text-sky-600" />
                Fast pickup
              </span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                Professional care
              </span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-sky-600" />
                Convenient delivery
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer image frame with soft shadow & single elevation */}
              <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xl shadow-slate-200/60 aspect-[4/3] sm:aspect-[16/11]">
                
                {/* Fallback container if image fails or while loading */}
                {!imageLoaded && !imageError && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-100 to-slate-100 animate-pulse flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-sky-400" />
                  </div>
                )}

                {imageError ? (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 p-8 text-center">
                    <Sparkles className="w-12 h-12 text-sky-500 mb-3" />
                    <p className="text-base font-semibold text-slate-800">Fresh, Clean & Precision Folded</p>
                    <p className="text-xs text-slate-500 mt-1">Doorstep laundry service for homes and teams across Ibadan.</p>
                  </div>
                ) : (
                  <img
                    src="/src/assets/images/hero_laundry_fresh_1791129530847.jpg"
                    alt="Neatly folded fresh laundry and ironed shirts in a bright modern home setting"
                    referrerPolicy="no-referrer"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                )}

                {/* Subtle scrim for bottom overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

                {/* Grounded overlay callout */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold tracking-tight text-white drop-shadow-sm">
                        Signature Crisp Fold
                      </p>
                      <p className="text-xs text-slate-200">
                        Sorted by color & fabric type
                      </p>
                    </div>
                    <span className="text-xs font-semibold bg-white/20 backdrop-blur-md px-2.5 py-1 rounded text-white border border-white/30">
                      Standard Care
                    </span>
                  </div>
                </div>

              </div>

              {/* Quiet floating testimonial card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white border border-slate-200/90 rounded-xl p-3.5 shadow-lg max-w-[260px] hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 font-bold text-xs flex items-center justify-center">
                    DA
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Damilola A.</p>
                    <p className="text-[11px] text-slate-500">Bodija, Ibadan</p>
                  </div>
                </div>
                <p className="text-[11px] text-slate-600 mt-2 line-clamp-2 italic">
                  "Saved me hours every weekend. My shirts arrive wrinkle-free!"
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
