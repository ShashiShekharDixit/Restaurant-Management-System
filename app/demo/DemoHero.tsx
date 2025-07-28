'use client';

import { useState, useEffect } from 'react';

export default function DemoHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-red-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center text-white transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            See RestaurantPro
            <span className="text-orange-200 block">in Action</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-orange-100">
            Book a personalized demo and discover how RestaurantPro can transform your restaurant operations. 
            See real results in just 30 minutes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">30 Minutes</h3>
              <p className="text-orange-100">Quick personalized walkthrough</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-user-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">1-on-1 Session</h3>
              <p className="text-orange-100">Dedicated expert guide</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-gift-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Trial</h3>
              <p className="text-orange-100">30-day trial after demo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}