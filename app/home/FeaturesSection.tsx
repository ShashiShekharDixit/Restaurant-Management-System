'use client';

import { useState, useEffect } from 'react';

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);
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

    const element = document.getElementById('features-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile POS System',
      description: 'Take orders anywhere with our mobile point-of-sale system. Process payments, split bills, and manage tables from any device.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20tablet%20POS%20system%20in%20restaurant%20with%20waiter%20taking%20order%2C%20clean%20interface%20showing%20menu%20items%20and%20payment%20options%2C%20professional%20restaurant%20environment%20with%20customers%20dining%20in%20background&width=600&height=400&seq=feature-001&orientation=landscape'
    },
    {
      icon: 'ri-database-line',
      title: 'Inventory Management',
      description: 'Track stock levels, set automatic reorder points, and manage suppliers. Never run out of ingredients again.',
      image: 'https://readdy.ai/api/search-image?query=Restaurant%20inventory%20management%20system%20on%20computer%20screen%20showing%20stock%20levels%2C%20ingredient%20tracking%2C%20supplier%20information%2C%20modern%20kitchen%20storage%20area%20with%20organized%20shelves%20and%20food%20containers&width=600&height=400&seq=feature-002&orientation=landscape'
    },
    {
      icon: 'ri-calendar-line',
      title: 'Table Reservations',
      description: 'Manage bookings with ease. Accept online reservations, optimize seating, and reduce wait times for customers.',
      image: 'https://readdy.ai/api/search-image?query=Restaurant%20reservation%20system%20interface%20showing%20table%20layout%2C%20booking%20calendar%2C%20customer%20information%2C%20elegant%20dining%20room%20with%20well-arranged%20tables%20and%20ambient%20lighting&width=600&height=400&seq=feature-003&orientation=landscape'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Financial Reports',
      description: 'Comprehensive financial reporting with real-time sales data, profit margins, and expense tracking.',
      image: 'https://readdy.ai/api/search-image?query=Restaurant%20financial%20dashboard%20displaying%20sales%20charts%2C%20profit%20graphs%2C%20expense%20reports%20on%20modern%20computer%20screen%2C%20professional%20office%20environment%20with%20business%20documents%20and%20calculator&width=600&height=400&seq=feature-004&orientation=landscape'
    }
  ];

  return (
    <section id="features-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Run Your Restaurant
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive suite of tools helps you manage every aspect of your restaurant operations, 
            from front-of-house to back-of-house operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  activeFeature === index
                    ? 'bg-white shadow-xl border-l-4 border-orange-500'
                    : 'bg-white/50 hover:bg-white hover:shadow-lg'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    activeFeature === index ? 'bg-orange-500' : 'bg-gray-200'
                  }`}>
                    <i className={`${feature.icon} text-xl ${
                      activeFeature === index ? 'text-white' : 'text-gray-600'
                    }`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold mb-2 ${
                      activeFeature === index ? 'text-orange-500' : 'text-gray-900'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
              <img
                src={features[activeFeature].image}
                alt={features[activeFeature].title}
                className="w-full h-96 object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center shadow-xl">
              <i className={`${features[activeFeature].icon} text-white text-3xl`}></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}