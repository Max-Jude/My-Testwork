import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Phone } from 'lucide-react';

interface NavbarProps {
  onScheduleClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScheduleClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
            : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#home');
              }}
              className="group flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 transition-colors"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-600 text-white shadow-sm group-hover:bg-sky-700 transition-colors">
                <Sparkles className="w-4 h-4" />
              </span>
              <span className="font-heading text-slate-900 tracking-tight">
                Swift<span className="text-sky-600">Wash</span>
              </span>
            </a>

            {/* Zone 2: Clean text navigation links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="hover:text-sky-600 transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary action button & mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+2348030007943"
                className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-sky-600 transition-colors px-2 py-1"
                title="Customer Help Desk (Demo)"
              >
                <Phone className="w-3.5 h-3.5 text-sky-500" />
                <span className="tabular-nums">0803 000 7943</span>
              </a>

              <button
                type="button"
                onClick={onScheduleClick}
                className="px-4 py-2 text-sm font-semibold text-white bg-sky-600 rounded-lg hover:bg-sky-700 active:scale-[0.98] transition-all shadow-sm shadow-sky-200 whitespace-nowrap cursor-pointer"
              >
                Schedule a Pickup
              </button>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
                className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-start">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative bg-white border-b border-slate-200 px-6 pt-5 pb-8 shadow-xl space-y-5 mt-16 animate-in slide-in-from-top duration-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Menu
              </span>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-700"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-base font-medium text-slate-700 hover:text-sky-600 py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-2 border-t border-slate-100 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onScheduleClick();
                }}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition-colors shadow-sm"
              >
                Schedule a Pickup
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
                <Phone className="w-3.5 h-3.5 text-sky-500" />
                <span>Call SwiftWash Desk: 0803 000 7943</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
