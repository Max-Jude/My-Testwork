import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, User, Mail, Phone, Package, FileText, CheckCircle2, RotateCcw, AlertCircle, Sparkles } from 'lucide-react';
import { BookingFormData } from '../types';

interface BookingSectionProps {
  initialService?: string;
  initialWeight?: number;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  initialService = 'Wash & Fold',
  initialWeight,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    pickupDate: '',
    pickupTime: 'morning',
    serviceType: initialService,
    estimatedWeight: initialWeight ? `${initialWeight} kg` : 'Standard basket (5-7 kg)',
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);

  // Update when parent passes new selected service or weight
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceType: initialService }));
    }
    if (initialWeight) {
      setFormData((prev) => ({ ...prev, estimatedWeight: `${initialWeight} kg` }));
    }
  }, [initialService, initialWeight]);

  // Set minimum date to today
  const todayString = new Date().toISOString().split('T')[0];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Name should be at least 3 characters.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (!/^(\+234|0)[789][01]\d{8}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Please enter a valid Nigerian phone number (e.g., 0803 123 4567).';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Please specify your pickup street address or estate in Ibadan.';
    } else if (formData.address.trim().length < 6) {
      newErrors.address = 'Please provide a more detailed address for our rider.';
    }

    if (!formData.pickupDate) {
      newErrors.pickupDate = 'Please select a preferred pickup date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear specific error on change
    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData({ ...formData });
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      address: '',
      pickupDate: '',
      pickupTime: 'morning',
      serviceType: 'Wash & Fold',
      estimatedWeight: 'Standard basket (5-7 kg)',
      notes: '',
    });
    setErrors({});
  };

  return (
    <section id="booking" className="py-20 bg-white border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <p className="text-xs font-bold text-sky-600 uppercase tracking-widest">
            Doorstep Collection
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-heading">
            Schedule Your Laundry Pickup
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto font-normal">
            Choose your date, pickup slot, and address in Ibadan. Our courier brings a sanitized laundry tote directly to your doorstep.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-slate-50/70 rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm relative">
          
          {/* Subtle Demonstration Banner */}
          <div className="mb-8 p-3.5 bg-sky-50 border border-sky-200/80 rounded-xl flex items-start gap-3 text-xs text-sky-900">
            <Sparkles className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block">Frontend Demo Project</span>
              <span>This booking interface is a client-side simulation. No live payments or backend database writes are executed.</span>
            </div>
          </div>

          {isSubmitted && submittedData ? (
            /* Clear Demo Success State */
            <div className="space-y-6 text-center py-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900 font-heading">
                  Demo Booking Simulated
                </h3>
                <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                  Demo booking received. In a production version, this information would be securely sent to SwiftWash, and an SMS confirmation with rider dispatch tracking would be sent to your phone.
                </p>
              </div>

              {/* Submitted Summary Table */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 text-left max-w-lg mx-auto text-xs sm:text-sm space-y-2.5">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Customer Name:</span>
                  <span className="font-semibold text-slate-900">{submittedData.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Contact Phone:</span>
                  <span className="font-semibold text-slate-900">{submittedData.phone}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Email Address:</span>
                  <span className="font-semibold text-slate-900">{submittedData.email}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Pickup Location:</span>
                  <span className="font-semibold text-slate-900 text-right">{submittedData.address}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Date & Slot:</span>
                  <span className="font-semibold text-slate-900">{submittedData.pickupDate} ({submittedData.pickupTime})</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Service Type:</span>
                  <span className="font-semibold text-sky-600">{submittedData.serviceType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Estimated Quantity:</span>
                  <span className="font-semibold text-slate-900">{submittedData.estimatedWeight}</span>
                </div>
                {submittedData.notes && (
                  <div className="pt-2 border-t border-slate-100 text-slate-500">
                    <span className="font-medium text-slate-700 block mb-0.5">Notes:</span>
                    <span>{submittedData.notes}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Submit Another Demo Booking</span>
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Booking Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Row 1: Name and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Babatunde Adeleke"
                      className={`w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-hidden transition-all ${
                        errors.fullName
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                          : 'border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Phone Number (WhatsApp reachable) <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 0803 123 4567"
                      className={`w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-hidden transition-all ${
                        errors.phone
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                          : 'border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Email and Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. b.adeleke@gmail.com"
                      className={`w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-hidden transition-all ${
                        errors.email
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                          : 'border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="address" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Pickup Address in Ibadan <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="e.g. 14 Awolowo Avenue, Old Bodija"
                      className={`w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-hidden transition-all ${
                        errors.address
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                          : 'border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200'
                      }`}
                    />
                  </div>
                  {errors.address && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.address}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Pickup Date and Pickup Time Slot */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="pickupDate" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Preferred Pickup Date <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      id="pickupDate"
                      name="pickupDate"
                      type="date"
                      min={todayString}
                      value={formData.pickupDate}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border bg-white text-slate-900 focus:outline-hidden transition-all ${
                        errors.pickupDate
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                          : 'border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200'
                      }`}
                    />
                  </div>
                  {errors.pickupDate && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.pickupDate}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="pickupTime" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Clock className="w-4 h-4" />
                    </div>
                    <select
                      id="pickupTime"
                      name="pickupTime"
                      value={formData.pickupTime}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-slate-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 focus:outline-hidden transition-all"
                    >
                      <option value="Morning (8:00 AM – 11:00 AM)">Morning (8:00 AM – 11:00 AM)</option>
                      <option value="Midday (11:00 AM – 2:00 PM)">Midday (11:00 AM – 2:00 PM)</option>
                      <option value="Afternoon (2:00 PM – 5:00 PM)">Afternoon (2:00 PM – 5:00 PM)</option>
                      <option value="Evening (5:00 PM – 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 4: Service Type and Estimated Quantity */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="serviceType" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Primary Service Type
                  </label>
                  <div className="relative">
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-slate-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 focus:outline-hidden transition-all"
                    >
                      <option value="Wash & Fold">Wash & Fold (₦2,000/kg)</option>
                      <option value="Regular Wash">Regular Wash (₦1,500/kg)</option>
                      <option value="Dry Cleaning">Dry Cleaning (from ₦2,000/item)</option>
                      <option value="Steam Ironing & Pressing">Steam Ironing & Pressing (₦1,200/item)</option>
                      <option value="Bedding & Duvets">Bedding & Duvets (₦5,000+/item)</option>
                      <option value="Express Laundry">Express Laundry (₦3,000/kg)</option>
                      <option value="Corporate Laundry">Corporate Laundry (Custom Quote)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="estimatedWeight" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Estimated Laundry Quantity
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Package className="w-4 h-4" />
                    </div>
                    <select
                      id="estimatedWeight"
                      name="estimatedWeight"
                      value={formData.estimatedWeight}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-slate-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 focus:outline-hidden transition-all"
                    >
                      <option value="Light bag (~2-3 kg)">Light bag (~2-3 kg)</option>
                      <option value="Standard basket (5-7 kg)">Standard basket (5-7 kg)</option>
                      <option value="Family pile (10-15 kg)">Family pile (10-15 kg)</option>
                      <option value="Large bundle (15+ kg)">Large bundle (15+ kg)</option>
                      <option value="Duvets / Heavy bedding only">Duvets / Heavy bedding only</option>
                      <option value="Individual dry cleaning pieces">Individual dry cleaning pieces</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 5: Notes / Gate instructions */}
              <div>
                <label htmlFor="notes" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Additional Notes or Fabric Care Instructions <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3.5 text-slate-400 pointer-events-none">
                    <FileText className="w-4 h-4" />
                  </div>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="e.g. Please separate white linen shirts, or gate access code: #401"
                    className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 focus:outline-hidden transition-all"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 text-sm sm:text-base font-semibold text-white bg-sky-600 hover:bg-sky-700 active:scale-[0.99] rounded-xl transition-all shadow-md shadow-sky-600/20 cursor-pointer"
                >
                  Confirm & Schedule Pickup
                </button>
                <p className="text-center text-xs text-slate-500 mt-2.5">
                  No payment required now. You verify weight and pay on delivery or electronic transfer.
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
