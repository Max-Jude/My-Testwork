import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, RotateCcw, MessageSquare, AlertCircle } from 'lucide-react';
import { SERVICE_AREAS } from '../data/mockData';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please type a brief message.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
          <p className="text-xs font-bold text-sky-600 uppercase tracking-widest">
            We Are Here For You
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-heading">
            Get in Touch with SwiftWash
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Have questions about specialized fabrics, bulk corporate contracts, or want to partner with us? Drop us a line or call our demo helpline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Business & Operations Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-7 space-y-6">
              
              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-sky-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Customer Care & WhatsApp
                  </h4>
                  <a
                    href="tel:+2348030007943"
                    className="text-base font-bold text-slate-900 hover:text-sky-600 transition-colors block mt-0.5 tabular-nums"
                  >
                    +234 803 000 7943
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fast response during regular dispatch hours.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-teal-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Email Support
                  </h4>
                  <a
                    href="mailto:hello@swiftwash-demo.ng"
                    className="text-base font-bold text-slate-900 hover:text-sky-600 transition-colors block mt-0.5"
                  >
                    hello@swiftwash-demo.ng
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    For corporate inquiries, billing, and team accounts.
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-sky-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Pickup & Delivery Hours
                  </h4>
                  <div className="text-sm font-semibold text-slate-900 mt-0.5">
                    Monday – Saturday: 7:00 AM – 8:00 PM
                  </div>
                  <div className="text-xs text-slate-600">
                    Sunday: 9:00 AM – 5:00 PM
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-sky-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Primary Service Areas in Ibadan
                  </h4>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {SERVICE_AREAS.slice(0, 6).map((area, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded-md"
                      >
                        {area}
                      </span>
                    ))}
                    <span className="text-xs text-slate-400 self-center">and more...</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-slate-50/70 rounded-2xl border border-slate-200/90 p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Send Us a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fill out the quick form below and our team will get back to you promptly.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 text-center space-y-4 bg-white rounded-xl border border-slate-200 animate-in fade-in duration-200">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Demo Message Received</h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out, <span className="font-semibold">{formData.name}</span>! In a production deployment, this inquiry would be routed to SwiftWash's support inbox.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-700 bg-sky-50 px-4 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Send another message</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Samuel Adekunle"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-white text-slate-900 focus:outline-hidden transition-all ${
                        errors.name
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                          : 'border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. samuel@example.com"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-white text-slate-900 focus:outline-hidden transition-all ${
                        errors.email
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                          : 'border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 0802 345 6789"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-slate-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 focus:outline-hidden transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 mb-1">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Corporate Laundry Account"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-slate-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 focus:outline-hidden transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help your home or organization?"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-white text-slate-900 focus:outline-hidden transition-all ${
                      errors.message
                        ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                        : 'border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 active:scale-[0.99] rounded-xl transition-all shadow-sm cursor-pointer"
                  >
                    <span>Send Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-slate-500 ml-3">
                    Demo form with instant client feedback
                  </span>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
