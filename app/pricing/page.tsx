'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PricingHero from './PricingHero';
import PricingPlans from './PricingPlans';
import FeatureComparison from './FeatureComparison';
import FAQSection from './FAQSection';

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <PricingHero />
      <PricingPlans />
      <FeatureComparison />
      <FAQSection />
      <Footer />
    </div>
  );
}