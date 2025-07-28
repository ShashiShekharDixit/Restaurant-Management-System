'use client';

import { useState, useEffect } from 'react';

export default function AboutHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Professional%20restaurant%20team%20meeting%20in%20modern%20office%20space%2C%20diverse%20group%20of%20people%20collaborating%20around%20conference%20table%2C%20laptops%20and%20documents%2C%20contemporary%20business%20environment%20with%20large%20windows%20and%20city%20view&width=1920&height=1080&seq=about-hero-001&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center text-white w-full">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            We're Revolutionizing
            <span className="text-orange-400 block">Restaurant Management</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Founded by restaurant industry veterans, we understand the challenges you face every day. 
            Our mission is to make restaurant operations seamless, profitable, and stress-free.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-4xl font-bold text-orange-400 mb-2">2018</div>
              <div className="text-lg font-semibold mb-2">Founded</div>
              <p className="text-gray-200">Started with a vision to transform restaurant operations</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-4xl font-bold text-orange-400 mb-2">2500+</div>
              <div className="text-lg font-semibold mb-2">Restaurants</div>
              <p className="text-gray-200">Successfully serving establishments worldwide</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-4xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-lg font-semibold mb-2">Team Members</div>
              <p className="text-gray-200">Dedicated professionals working for your success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}