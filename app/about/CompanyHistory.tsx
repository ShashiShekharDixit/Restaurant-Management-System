'use client';

import { useState, useEffect } from 'react';

export default function CompanyHistory() {
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

    const element = document.getElementById('history-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const milestones = [
    {
      year: '2018',
      title: 'The Beginning',
      description: 'Founded by former restaurant owners who experienced firsthand the challenges of managing multiple locations without proper technology.',
      icon: 'ri-rocket-line'
    },
    {
      year: '2019',
      title: 'First Product Launch',
      description: 'Launched our MVP with basic POS and inventory management features. Served our first 50 restaurant clients.',
      icon: 'ri-product-hunt-line'
    },
    {
      year: '2020',
      title: 'Rapid Growth',
      description: 'Despite pandemic challenges, we grew to 500+ restaurants by helping businesses adapt to delivery and takeout models.',
      icon: 'ri-line-chart-line'
    },
    {
      year: '2021',
      title: 'Advanced Analytics',
      description: 'Introduced comprehensive analytics dashboard and AI-powered insights to help restaurants optimize operations.',
      icon: 'ri-bar-chart-line'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded internationally and reached 1,500+ restaurants across 25 countries with localized solutions.',
      icon: 'ri-global-line'
    },
    {
      year: '2023',
      title: 'Mobile Innovation',
      description: 'Launched mobile app suite and contactless ordering solutions, revolutionizing customer experience.',
      icon: 'ri-smartphone-line'
    },
    {
      year: '2024',
      title: 'AI Integration',
      description: 'Integrated advanced AI for predictive analytics, demand forecasting, and automated inventory management.',
      icon: 'ri-robot-line'
    }
  ];

  return (
    <section id="history-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From a small startup to a global leader in restaurant management technology, 
            here's how we've grown alongside our customers.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200"></div>
          
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 transition-all duration-1000 transform ${
                isVisible ? 'translate-x-0 opacity-100' : 
                index % 2 === 0 ? '-translate-x-10 opacity-0' : 'translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 order-2'}`}>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-3">
                    <div className={`w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center ${index % 2 === 0 ? 'ml-auto mr-3' : 'mr-3'}`}>
                      <i className={`${milestone.icon} text-white text-lg`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-orange-500">{milestone.year}</h3>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}