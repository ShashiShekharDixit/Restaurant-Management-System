'use client';

import { useState, useEffect } from 'react';

export default function ServicesHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Modern%20restaurant%20technology%20dashboard%20with%20multiple%20screens%20displaying%20analytics%2C%20order%20management%2C%20inventory%20tracking%2C%20professional%20kitchen%20environment%20with%20digital%20displays%20and%20management%20systems&width=1920&height=1080&seq=services-hero-001&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center text-white w-full">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Complete Restaurant
            <span className="text-orange-400 block">Management Suite</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Everything you need to run your restaurant efficiently. From POS systems to analytics, 
            inventory management to staff scheduling - we've got you covered.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shopping-cart-2-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">POS System</h3>
              <p className="text-gray-200 text-sm">Advanced point-of-sale with mobile support</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-bar-chart-box-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Analytics</h3>
              <p className="text-gray-200 text-sm">Real-time insights and reporting</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-database-2-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Inventory</h3>
              <p className="text-gray-200 text-sm">Smart stock management and tracking</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-team-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Staff Management</h3>
              <p className="text-gray-200 text-sm">Scheduling and performance tracking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}