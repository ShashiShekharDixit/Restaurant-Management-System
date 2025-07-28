'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(37, 99, 235, 0.8)), url('https://readdy.ai/api/search-image?query=Modern%20technology%20office%20environment%20with%20digital%20screens%20displaying%20code%20and%20data%20analytics%2C%20futuristic%20workspace%20with%20multiple%20monitors%20showing%20software%20development%20interfaces%2C%20blue%20and%20purple%20lighting%20creating%20professional%20atmosphere&width=1920&height=1080&seq=hero-bg-001&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`text-white transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Innovation at
              <span className="text-blue-300 block">Your Fingertips</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Transform your business with cutting-edge technology solutions. We build, deploy, and scale 
              digital experiences that drive growth and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                href="/quote" 
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 text-center whitespace-nowrap cursor-pointer"
              >
                Start Your Project
              </Link>
              <Link 
                href="/portfolio" 
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 text-center whitespace-nowrap cursor-pointer"
              >
                View Our Work
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-1">200+</div>
                <div className="text-sm text-blue-100">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-1">150+</div>
                <div className="text-sm text-blue-100">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-1">5+</div>
                <div className="text-sm text-blue-100">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20software%20development%20team%20working%20on%20laptops%20with%20multiple%20screens%20showing%20modern%20web%20applications%20and%20mobile%20interfaces%2C%20collaborative%20workspace%20with%20diverse%20developers%20coding%20and%20designing%20user%20interfaces&width=600&height=700&seq=hero-team-001&orientation=portrait"
                alt="TechFlow Development Team"
                className="rounded-2xl shadow-2xl object-cover object-top w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-check-line text-white text-xl"></i>
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold">99.9% Uptime</div>
                    <div className="text-gray-600 text-sm">Reliable Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}