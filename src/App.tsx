import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { BookingSection } from './components/BookingSection';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('Wash & Fold');
  const [selectedWeightForBooking, setSelectedWeightForBooking] = useState<number | undefined>(undefined);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromCard = (serviceName: string) => {
    setSelectedServiceForBooking(serviceName);
    scrollToSection('booking');
  };

  const handleSelectPlanFromPricing = (planName: string, estimatedKg?: number) => {
    setSelectedServiceForBooking(planName);
    if (estimatedKg) {
      setSelectedWeightForBooking(estimatedKg);
    }
    scrollToSection('booking');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 font-sans">
      {/* Sticky Navigation Header */}
      <Navbar onScheduleClick={() => scrollToSection('booking')} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onScheduleClick={() => scrollToSection('booking')}
          onServicesClick={() => scrollToSection('services')}
        />

        {/* 2. Trust Stats Bar */}
        <Stats />

        {/* 3. Services Section */}
        <Services onSelectService={handleSelectServiceFromCard} />

        {/* 4. Pricing & Interactive Estimator */}
        <Pricing onSelectPlan={handleSelectPlanFromPricing} />

        {/* 5. How It Works 4-Step Process */}
        <HowItWorks onScheduleClick={() => scrollToSection('booking')} />

        {/* 6. Why Choose SwiftWash */}
        <WhyChooseUs />

        {/* 7. Realistic Testimonials */}
        <Testimonials />

        {/* 8. Interactive Pickup Booking Form */}
        <BookingSection
          initialService={selectedServiceForBooking}
          initialWeight={selectedWeightForBooking}
        />

        {/* 9. FAQ Section */}
        <FAQ />

        {/* 10. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
