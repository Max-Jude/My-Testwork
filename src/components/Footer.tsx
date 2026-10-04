import React from 'react';
import { Sparkles, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-sky-600 text-white">
                <Sparkles className="w-3.5 h-3.5" />
              </span>
              <span className="text-xl font-bold tracking-tight text-white font-heading">
                Swift<span className="text-sky-400">Wash</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Clean clothes. Less stress. SwiftWash is Ibadan’s modern laundry pickup and delivery service, providing dependable doorstep garment care for busy households and growing teams.
            </p>

            <div className="pt-1 text-xs text-slate-400 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>Ibadan, Oyo State, Nigeria</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {['Home', 'Services', 'Pricing', 'How It Works', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => scrollTo(`#${item.toLowerCase().replace(/\s+/g, '-')}`)}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>Wash & Fold (Daily Casuals)</li>
              <li>Dry Cleaning (Suits & Native Wear)</li>
              <li>Steam Ironing & Pressing</li>
              <li>Bedding & Duvet Deep Clean</li>
              <li>Express 24-Hour Laundry</li>
              <li>Corporate & Team Solutions</li>
            </ul>
          </div>

          {/* Col 4: Contact & Demo Notice */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Support Desk
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="tabular-nums">+234 803 000 7943</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>hello@swiftwash-demo.ng</span>
              </li>
              <li className="text-xs text-slate-500 pt-1">
                Mon - Sat: 7am - 8pm · Sun: 9am - 5pm
              </li>
            </ul>

            <div className="pt-3">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-[11px] text-slate-400 leading-normal">
                <span className="text-sky-300 font-semibold block mb-0.5">Frontend Prototype</span>
                SwiftWash is a showcase concept project. No financial or private personal data is collected or transmitted.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} SwiftWash Laundry Services. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Frontend Demonstration</span>
            <span aria-hidden="true">·</span>
            <span>Static Netlify Ready</span>
            <span aria-hidden="true">·</span>
            <span>Ibadan, Nigeria</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
