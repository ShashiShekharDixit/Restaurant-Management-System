'use client';

import { useState, useEffect } from 'react';

export default function BenefitsSection() {
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

    const element = document.getElementById('benefits-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      title: 'Increase Revenue',
      description: 'Boost sales by 35% on average with optimized operations and better customer experience.',
      image: 'https://readdy.ai/api/search-image?query=Restaurant%20revenue%20growth%20chart%20on%20tablet%20screen%2C%20increasing%20sales%20graphs%20and%20analytics%2C%20modern%20restaurant%20setting%20with%20busy%20dining%20area%20showing%20success%20and%20profitability&width=600&height=400&seq=benefits-001&orientation=landscape',
      stats: [
        { value: '35%', label: 'Average Revenue Increase' },
        { value: '28%', label: 'Faster Order Processing' },
        { value: '42%', label: 'Better Table Turnover' }
      ]
    },
    {
      title: 'Reduce Costs',
      description: 'Cut operational costs by up to 45% through intelligent inventory management and waste reduction.',
      image: 'https://readdy.ai/api/search-image?query=Restaurant%20cost%20reduction%20analytics%20dashboard%20showing%20expense%20optimization%2C%20inventory%20tracking%20system%2C%20professional%20kitchen%20with%20organized%20storage%20and%20efficient%20operations&width=600&height=400&seq=benefits-002&orientation=landscape',
      stats: [
        { value: '45%', label: 'Cost Reduction' },
        { value: '60%', label: 'Less Food Waste' },
        { value: '30%', label: 'Lower Labor Costs' }
      ]
    },
    {
      title: 'Improve Efficiency',
      description: 'Streamline operations with automated processes and real-time data insights for better decision making.',
      image: 'https://readdy.ai/api/search-image?query=Efficient%20restaurant%20kitchen%20operations%20with%20digital%20order%20management%20system%2C%20staff%20working%20smoothly%20with%20tablets%20and%20modern%20equipment%2C%20organized%20workflow%20and%20productivity&width=600&height=400&seq=benefits-003&orientation=landscape',
      stats: [
        { value: '50%', label: 'Faster Service' },
        { value: '65%', label: 'Reduced Errors' },
        { value: '40%', label: 'Better Staff Productivity' }
      ]
    }
  ];

  return (
    <section id="benefits-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Measurable Results for Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See real impact on your bottom line with proven results from thousands of restaurants worldwide
          </p>
        </div>

        <div className="space-y-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              } transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {benefit.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {benefit.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-3xl font-bold text-orange-500 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-80 object-cover object-top"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}