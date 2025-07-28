'use client';

import { useState, useEffect } from 'react';

export default function ContactHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-red-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center text-white transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-orange-100">
            Ready to transform your restaurant operations? We're here to help you get started 
            and answer any questions you might have.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-phone-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-orange-100">24/7 Support Available</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-mail-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-orange-100">Quick Response Guaranteed</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calendar-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Schedule Demo</h3>
              <p className="text-orange-100">See RestaurantPro in Action</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}