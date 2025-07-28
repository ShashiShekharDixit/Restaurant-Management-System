'use client';

import { useState, useEffect } from 'react';

export default function PricingHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [billingCycle, setBillingCycle] = useState('monthly');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Simple, Transparent
            <span className="text-orange-500 block">Pricing</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your restaurant. No hidden fees, no surprises. 
            Cancel anytime with our 30-day money-back guarantee.
          </p>
          
          <div className="flex items-center justify-center mb-12">
            <div className="bg-gray-100 rounded-full p-1 flex">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer relative ${
                  billingCycle === 'yearly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Yearly
                <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-store-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Small Restaurants</h3>
              <p className="text-gray-600 text-sm">Perfect for cafes and small eateries</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-orange-500">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-restaurant-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Growing Restaurants</h3>
              <p className="text-gray-600 text-sm">Most popular choice for expanding businesses</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-building-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Restaurant Chains</h3>
              <p className="text-gray-600 text-sm">Enterprise solution for multiple locations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}