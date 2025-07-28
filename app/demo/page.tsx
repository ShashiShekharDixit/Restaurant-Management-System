'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DemoHero from './DemoHero';
import DemoFeatures from './DemoFeatures';
import DemoForm from './DemoForm';

export default function DemoPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <DemoHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <DemoFeatures />
        <DemoForm />
      </div>
      <Footer />
    </div>
  );
}