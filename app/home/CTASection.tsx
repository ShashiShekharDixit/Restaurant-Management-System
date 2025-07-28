'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CTASection() {
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

    const element = document.getElementById('cta-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="cta-section" 
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.95), rgba(147, 51, 234, 0.95)), url('https://readdy.ai/api/search-image?query=Modern%20technology%20workspace%20with%20team%20collaboration%2C%20multiple%20computer%20screens%20showing%20innovative%20software%20projects%2C%20futuristic%20office%20environment%20with%20digital%20displays%20and%20creative%20atmosphere&width=1920&height=600&seq=cta-bg-001&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center text-white transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to Transform
            <span className="text-blue-300 block">Your Business?</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-blue-100">
            Let's discuss your project and discover how TechFlow can help you achieve your digital goals. 
            Get started with a free consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              href="/quote" 
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              Get Free Quote
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              Schedule Consultation
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Quick Response</h3>
              <p className="text-blue-100">We respond to all inquiries within 2 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Guaranteed Quality</h3>
              <p className="text-blue-100">100% satisfaction guarantee on all projects</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-award-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Award Winning</h3>
              <p className="text-blue-100">Recognized excellence in technology solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}