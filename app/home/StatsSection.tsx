'use client';

import { useState, useEffect } from 'react';

export default function StatsSection() {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { value: 2500, suffix: '+', label: 'Restaurants Served', icon: 'ri-restaurant-line' },
    { value: 98, suffix: '%', label: 'Customer Satisfaction', icon: 'ri-heart-line' },
    { value: 45, suffix: '%', label: 'Average Cost Reduction', icon: 'ri-money-dollar-circle-line' },
    { value: 24, suffix: '/7', label: 'Support Available', icon: 'ri-customer-service-line' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.value / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, 40);
    });
  };

  return (
    <section 
      id="stats-section" 
      className="py-20 bg-gradient-to-r from-orange-500 to-red-500 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Restaurants Worldwide
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful restaurants that have transformed their operations with RestaurantPro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl transform transition-all duration-1000 hover:scale-105 hover:bg-white/20 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${stat.icon} text-white text-2xl`}></i>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {counters[index]}{stat.suffix}
              </div>
              <div className="text-orange-100 font-medium text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="text-white text-sm font-medium">TRUSTED BY</div>
            <div className="h-8 border-l border-white/30"></div>
            <div className="text-white text-lg font-semibold">McDonald's</div>
            <div className="text-white text-lg font-semibold">KFC</div>
            <div className="text-white text-lg font-semibold">Subway</div>
            <div className="text-white text-lg font-semibold">Pizza Hut</div>
            <div className="text-white text-lg font-semibold">Domino's</div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="animate-pulse absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full"></div>
        <div className="animate-pulse absolute top-40 right-20 w-3 h-3 bg-white/20 rounded-full" style={{animationDelay: '1s'}}></div>
        <div className="animate-pulse absolute bottom-20 left-1/4 w-2 h-2 bg-white/40 rounded-full" style={{animationDelay: '2s'}}></div>
        <div className="animate-pulse absolute bottom-40 right-1/3 w-4 h-4 bg-white/10 rounded-full" style={{animationDelay: '3s'}}></div>
      </div>
    </section>
  );
}