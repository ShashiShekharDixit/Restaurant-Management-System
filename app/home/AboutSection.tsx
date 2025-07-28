'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AboutSection() {
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

    const element = document.getElementById('about-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <img
              src="https://readdy.ai/api/search-image?query=Modern%20technology%20company%20office%20with%20team%20collaboration%2C%20diverse%20professionals%20working%20together%20on%20innovative%20projects%2C%20contemporary%20workspace%20with%20glass%20walls%20and%20digital%20displays%20showing%20data%20visualization&width=600&height=500&seq=about-office-001&orientation=landscape"
              alt="TechFlow Team Collaboration"
              className="rounded-2xl shadow-2xl object-cover object-top w-full"
            />
          </div>
          
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose
              <span className="text-blue-600 block">TechFlow?</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're not just another tech company. We're your strategic partner in digital transformation, 
              committed to delivering solutions that drive real business results.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-lightbulb-line text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation-Driven</h3>
                  <p className="text-gray-600">We stay ahead of technology trends to bring you cutting-edge solutions.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-team-line text-green-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
                  <p className="text-gray-600">Our skilled professionals have years of experience in their respective fields.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-customer-service-line text-orange-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
                  <p className="text-gray-600">Round-the-clock support ensures your business never stops running.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/about" 
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 text-center whitespace-nowrap cursor-pointer"
              >
                Learn More About Us
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300 text-center whitespace-nowrap cursor-pointer"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}