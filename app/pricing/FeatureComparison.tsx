'use client';

import { useState, useEffect } from 'react';

export default function FeatureComparison() {
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

    const element = document.getElementById('feature-comparison');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    { name: 'POS Terminals', starter: '2', professional: '5', enterprise: 'Unlimited' },
    { name: 'Order Management', starter: true, professional: true, enterprise: true },
    { name: 'Basic Analytics', starter: true, professional: true, enterprise: true },
    { name: 'Inventory Management', starter: 'Basic', professional: 'Advanced', enterprise: 'Complete Suite' },
    { name: 'Table Reservations', starter: false, professional: true, enterprise: true },
    { name: 'Staff Management', starter: false, professional: true, enterprise: true },
    { name: 'Customer Management', starter: false, professional: true, enterprise: true },
    { name: 'Multi-location Support', starter: false, professional: true, enterprise: true },
    { name: 'API Access', starter: false, professional: true, enterprise: true },
    { name: 'Advanced Reporting', starter: false, professional: false, enterprise: true },
    { name: 'Custom Integrations', starter: false, professional: false, enterprise: true },
    { name: 'Dedicated Account Manager', starter: false, professional: false, enterprise: true },
    { name: 'White-label Options', starter: false, professional: false, enterprise: true },
    { name: 'Support Level', starter: 'Email', professional: 'Priority', enterprise: '24/7 Phone' }
  ];

  const renderFeatureValue = (value: any) => {
    if (typeof value === 'boolean') {
      return value ? (
        <div className="w-5 h-5 flex items-center justify-center">
          <i className="ri-check-line text-green-500 text-lg"></i>
        </div>
      ) : (
        <div className="w-5 h-5 flex items-center justify-center">
          <i className="ri-close-line text-gray-400 text-lg"></i>
        </div>
      );
    }
    return <span className="text-gray-900 font-medium">{value}</span>;
  };

  return (
    <section id="feature-comparison" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Compare All Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See exactly what's included in each plan. All plans include our core restaurant management features.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-lg font-semibold text-gray-900">
                    Features
                  </th>
                  <th className="px-6 py-4 text-center text-lg font-semibold text-blue-500">
                    Starter
                  </th>
                  <th className="px-6 py-4 text-center text-lg font-semibold text-orange-500 relative">
                    Professional
                    <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                      Popular
                    </span>
                  </th>
                  <th className="px-6 py-4 text-center text-lg font-semibold text-purple-500">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {features.map((feature, index) => (
                  <tr 
                    key={index} 
                    className={`hover:bg-gray-50 transition-colors duration-200 ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <td className="px-6 py-4 text-gray-900 font-medium">
                      {feature.name}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {renderFeatureValue(feature.starter)}
                    </td>
                    <td className="px-6 py-4 text-center bg-orange-50">
                      {renderFeatureValue(feature.professional)}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {renderFeatureValue(feature.enterprise)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-shield-check-line text-white text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">30-Day Money Back</h3>
            <p className="text-gray-600 text-sm">Try risk-free with our guarantee</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-arrow-up-line text-white text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Upgrade Anytime</h3>
            <p className="text-gray-600 text-sm">Scale up as your business grows</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-customer-service-line text-white text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
            <p className="text-gray-600 text-sm">Get help when you need it most</p>
          </div>
        </div>
      </div>
    </section>
  );
}