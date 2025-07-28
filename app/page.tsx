'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from './home/HeroSection';
import ServicesSection from './home/ServicesSection';
import AboutSection from './home/AboutSection';
import TestimonialsSection from './home/TestimonialsSection';
import CTASection from './home/CTASection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}