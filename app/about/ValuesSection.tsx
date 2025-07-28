'use client';

import { useState, useEffect } from 'react';

export default function ValuesSection() {
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

    const element = document.getElementById('values-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: 'ri-customer-service-line',
      title: 'Customer First',
      description: 'Every decision we make is guided by what\'s best for our restaurant partners. Your success is our success.',
      color: 'bg-blue-500'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Innovation',
      description: 'We continuously push the boundaries of restaurant technology to stay ahead of industry trends.',
      color: 'bg-yellow-500'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Reliability',
      description: 'Rock-solid systems and 99.9% uptime ensure your restaurant operations never miss a beat.',
      color: 'bg-green-500'
    },
    {
      icon: 'ri-team-line',
      title: 'Collaboration',
      description: 'We work closely with restaurant owners to understand real challenges and build practical solutions.',
      color: 'bg-purple-500'
    },
    {
      icon: 'ri-speed-line',
      title: 'Efficiency',
      description: 'Streamlining operations and reducing waste to help restaurants maximize profitability.',
      color: 'bg-red-500'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Sustainability',
      description: 'Supporting eco-friendly practices and helping restaurants reduce their environmental impact.',
      color: 'bg-emerald-500'
    }
  ];

  return (
    <section id="values-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These principles guide everything we do and shape how we serve the restaurant community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${value.icon} text-white text-2xl`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                {value.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto">
              To empower restaurants worldwide with intelligent technology that simplifies operations, 
              enhances customer experiences, and drives sustainable growth. We believe every restaurant, 
              from food trucks to fine dining establishments, deserves access to world-class management tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}