'use client';

import { useState, useEffect } from 'react';

export default function IntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('integrations-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const integrations = [
    { name: 'Uber Eats', icon: 'ri-ride-car-line', category: 'Delivery' },
    { name: 'DoorDash', icon: 'ri-takeaway-line', category: 'Delivery' },
    { name: 'Grubhub', icon: 'ri-restaurant-line', category: 'Delivery' },
    { name: 'Stripe', icon: 'ri-bank-card-line', category: 'Payment' },
    { name: 'Square', icon: 'ri-qr-code-line', category: 'Payment' },
    { name: 'PayPal', icon: 'ri-paypal-line', category: 'Payment' },
    { name: 'QuickBooks', icon: 'ri-file-chart-line', category: 'Accounting' },
    { name: 'Xero', icon: 'ri-calculator-line', category: 'Accounting' },
    { name: 'Mailchimp', icon: 'ri-mail-line', category: 'Marketing' },
    { name: 'OpenTable', icon: 'ri-calendar-check-line', category: 'Reservation' },
    { name: 'Yelp', icon: 'ri-star-line', category: 'Review' },
    { name: 'Google My Business', icon: 'ri-google-line', category: 'Review' }
  ];

  const categories = ['All', 'Delivery', 'Payment', 'Accounting', 'Marketing', 'Reservation', 'Review'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredIntegrations = activeCategory === 'All' 
    ? integrations 
    : integrations.filter(integration => integration.category === activeCategory);

  return (
    <section id="integrations-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Seamless Integrations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with your favorite tools and services. Our platform integrates with 100+ popular restaurant and business applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {filteredIntegrations.map((integration, index) => (
            <div
              key={integration.name}
              className={`bg-gray-50 rounded-xl p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                <i className={`${integration.icon} text-gray-600 text-xl`}></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                {integration.name}
              </h3>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                {integration.category}
              </p>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Integration?</h3>
            <p className="text-lg mb-6 leading-relaxed max-w-2xl mx-auto">
              Our API allows for custom integrations with any system. Our development team can help you connect 
              RestaurantPro with your existing tools and workflows.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              Contact Our API Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}