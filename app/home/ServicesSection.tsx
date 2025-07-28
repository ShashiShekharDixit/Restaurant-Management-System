'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ServicesSection() {
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

    const element = document.getElementById('services-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: 'ri-code-s-slash-line',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure & Scalable'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with exceptional user experience.',
      features: ['React Native', 'iOS & Android', 'Cloud Integration', 'Push Notifications'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'ri-cloud-line',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services using AWS, Azure, and Google Cloud Platform.',
      features: ['Auto Scaling', 'High Availability', 'Cost Optimization', '24/7 Monitoring'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: 'ri-bar-chart-line',
      title: 'Digital Marketing',
      description: 'Data-driven digital marketing strategies to boost your online presence and drive conversions.',
      features: ['SEO & SEM', 'Social Media', 'Analytics', 'Content Marketing'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: 'ri-settings-line',
      title: 'IT Consulting',
      description: 'Strategic technology consulting to help you make informed decisions and optimize your IT infrastructure.',
      features: ['Technology Audit', 'Digital Strategy', 'Process Optimization', 'Risk Assessment'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from cyber threats and data breaches.',
      features: ['Security Audit', 'Threat Detection', 'Data Protection', 'Compliance'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="services-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive technology solutions to help your business thrive in the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link 
                href="/services" 
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 flex items-center cursor-pointer"
              >
                Learn More
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Link 
            href="/services" 
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap cursor-pointer"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}