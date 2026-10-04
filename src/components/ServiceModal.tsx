import React, { useEffect } from 'react';
import { X, Check, Clock, Tag, Sparkles, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectService: (serviceName: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectService,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Service Overview</span>
          </div>
          <h2 id="modal-title" className="text-2xl font-bold text-slate-900 font-heading">
            {service.name}
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            {service.tagline}
          </p>
        </div>

        {/* Price & Turnaround Row */}
        <div className="my-5 p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-sky-600" />
            <div>
              <span className="text-xs text-slate-500 block">Starting Rate</span>
              <span className="font-bold text-slate-900 tabular-nums">
                {service.startingPrice} <span className="font-normal text-xs text-slate-500">{service.priceUnit}</span>
              </span>
            </div>
          </div>
          <div className="h-8 w-px bg-slate-200" />
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-teal-600" />
            <div>
              <span className="text-xs text-slate-500 block">Turnaround Time</span>
              <span className="font-semibold text-slate-900 text-xs sm:text-sm">
                {service.turnaround}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4">
          <p className="text-sm text-slate-600 leading-relaxed">
            {service.description}
          </p>

          <div>
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">
              What Is Included
            </h3>
            <ul className="space-y-2">
              {service.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                  <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2">
            <p className="text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Best for:</span> {service.recommendedFor}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onSelectService(service.name);
              onClose();
            }}
            className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm transition-all cursor-pointer"
          >
            <span>Book This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
