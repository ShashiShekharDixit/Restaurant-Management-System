'use client';

import { useState, useEffect } from 'react';

export default function FeaturesGrid() {
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

    const element = document.getElementById('features-grid');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile POS',
      description: 'Take orders anywhere in your restaurant with tablet and smartphone support. Process payments, split bills, and manage tables seamlessly.',
      benefits: ['Contactless payments', 'Split billing', 'Table management', 'Offline mode']
    },
    {
      icon: 'ri-calendar-check-line',
      title: 'Reservation System',
      description: 'Manage bookings effortlessly with online reservations, waitlist management, and automated customer notifications.',
      benefits: ['Online booking', 'Waitlist management', 'SMS notifications', 'Table optimization']
    },
    {
      icon: 'ri-truck-line',
      title: 'Delivery Management',
      description: 'Streamline delivery and takeout orders with real-time tracking, driver management, and customer updates.',
      benefits: ['Order tracking', 'Driver dispatch', 'Delivery zones', 'Customer notifications']
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Financial Reports',
      description: 'Comprehensive financial reporting with profit analysis, expense tracking, and automated tax calculations.',
      benefits: ['Daily sales reports', 'Profit margins', 'Tax calculations', 'Expense tracking']
    },
    {
      icon: 'ri-user-settings-line',
      title: 'Customer Management',
      description: 'Build customer loyalty with detailed profiles, order history, and targeted marketing campaigns.',
      benefits: ['Customer profiles', 'Order history', 'Loyalty programs', 'Marketing automation']
    },
    {
      icon: 'ri-shopping-basket-line',
      title: 'Menu Management',
      description: 'Update menus in real-time across all platforms. Manage pricing, availability, and seasonal items easily.',
      benefits: ['Real-time updates', 'Multi-location sync', 'Seasonal menus', 'Pricing optimization']
    }
  ];

  return (
    <section id="features-grid" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for Every Restaurant
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive suite of tools is designed to handle every aspect of restaurant operations, 
            from small cafes to large restaurant chains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <i className={`${feature.icon} text-white text-2xl`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>

              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-4 h-4 flex items-center justify-center mr-3">
                      <i className="ri-check-line text-green-500 text-sm"></i>
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}