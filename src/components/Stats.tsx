import React from 'react';
import { Users, Star, Zap, Calendar } from 'lucide-react';

export const Stats: React.FC = () => {
  const stats = [
    {
      value: '1,500+',
      label: 'Bags of Laundry Cleaned',
      description: 'Handled with care across residential and campus areas',
      icon: Users,
    },
    {
      value: '4.9 / 5',
      label: 'Average Customer Rating',
      description: 'Based on post-delivery customer satisfaction feedback',
      icon: Star,
    },
    {
      value: 'Same-Day',
      label: 'Express Pickup Available',
      description: 'Book by 10:00 AM for rapid turnaround',
      icon: Zap,
    },
    {
      value: '7 Days',
      label: 'Weekly Collection & Return',
      description: 'Morning and evening pickup slots to suit your schedule',
      icon: Calendar,
    },
  ];

  return (
    <section className="bg-white border-y border-slate-200/80 py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top subtle disclaimer indicating demo figures */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100 flex-wrap gap-2 text-xs text-slate-500">
          <span className="font-medium text-slate-700">SwiftWash Performance Standard</span>
          <span className="text-slate-400 italic">Demo figures illustrating operational metrics</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-sky-600 mb-1">
                  <Icon className="w-4 h-4 text-sky-600" />
                  <span className="text-xs font-semibold text-slate-500 tracking-wide uppercase">
                    {stat.label}
                  </span>
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading tabular-nums">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-500 leading-normal">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
