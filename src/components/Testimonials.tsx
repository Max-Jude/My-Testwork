import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
          <p className="text-xs font-bold text-sky-600 uppercase tracking-widest">
            Customer Stories
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-heading">
            Trusted by Busy People Across Ibadan
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            See how doctors, engineers, students, and families reclaim their weekends with SwiftWash.
          </p>
          <div className="text-xs text-slate-400 italic pt-1">
            Note: Illustrative fictional testimonials representing user customer personas for this prototype.
          </div>
        </div>

        {/* Testimonials 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div className="space-y-4">
                {/* Top Row: Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400" aria-label={`${item.rating} out of 5 stars`}>
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-slate-200" />
                </div>

                {/* Quote Text */}
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Details (Zero-pill discipline: unboxed text with subtle typographic separators) */}
              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                    <span>{item.role}</span>
                    <span className="text-slate-300" aria-hidden="true">·</span>
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="w-9 h-9 rounded-full bg-sky-100 text-sky-700 font-bold text-xs flex items-center justify-center">
                  {item.name.slice(0, 2).toUpperCase()}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
