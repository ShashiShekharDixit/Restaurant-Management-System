'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServicesHero from './ServicesHero';
import FeaturesGrid from './FeaturesGrid';
import IntegrationsSection from './IntegrationsSection';
import BenefitsSection from './BenefitsSection';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ServicesHero />
      <FeaturesGrid />
      <BenefitsSection />
      <IntegrationsSection />
      <Footer />
    </div>
  );
}