'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function PricingPlans() {
  const [isVisible, setIsVisible] = useState(false);
  const [billingCycle, setBillingCycle] = useState('monthly');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('pricing-plans');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small cafes and food trucks',
      monthlyPrice: 49,
      yearlyPrice: 39,
      features: [
        'Up to 2 POS terminals',
        'Basic inventory management',
        'Order management',
        'Daily sales reports',
        'Email support',
        'Payment processing',
        'Basic analytics'
      ],
      color: 'blue',
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing restaurants',
      monthlyPrice: 99,
      yearlyPrice: 79,
      features: [
        'Up to 5 POS terminals',
        'Advanced inventory management',
        'Table reservations',
        'Staff management',
        'Advanced analytics',
        'Customer management',
        'Priority support',
        'Multi-location support',
        'API access'
      ],
      color: 'orange',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For restaurant chains and franchises',
      monthlyPrice: 199,
      yearlyPrice: 159,
      features: [
        'Unlimited POS terminals',
        'Complete inventory suite',
        'Advanced reporting',
        'Custom integrations',
        'Dedicated account manager',
        'Training & onboarding',
        '24/7 phone support',
        'White-label options',
        'Advanced security'
      ],
      color: 'purple',
      popular: false
    }
  ];

  const getPrice = (plan: typeof plans[0]) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getColorClasses = (color: string, isPopular: boolean) => {
    const colors = {
      blue: {
        bg: 'bg-blue-500',
        text: 'text-blue-500',
        border: 'border-blue-500',
        button: 'bg-blue-500 hover:bg-blue-600'
      },
      orange: {
        bg: 'bg-orange-500',
        text: 'text-orange-500',
        border: 'border-orange-500',
        button: 'bg-orange-500 hover:bg-orange-600'
      },
      purple: {
        bg: 'bg-purple-500',
        text: 'text-purple-500',
        border: 'border-purple-500',
        button: 'bg-purple-500 hover:bg-purple-600'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="pricing-plans" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const colorClasses = getColorClasses(plan.color, plan.popular);
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 transition-all duration-1000 transform hover:-translate-y-2 ${
                  plan.popular 
                    ? 'border-2 border-orange-500 shadow-2xl scale-105' 
                    : 'border border-gray-200 shadow-lg hover:shadow-xl'
                } ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 ${colorClasses.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <i className={`ri-${plan.color === 'blue' ? 'store' : plan.color === 'orange' ? 'restaurant' : 'building'}-line text-white text-2xl`}></i>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      ${getPrice(plan)}
                    </span>
                    <span className="text-gray-600 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'month, billed yearly'}
                    </span>
                  </div>
                  
                  <Link 
                    href="/demo"
                    className={`w-full ${colorClasses.button} text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-block text-center whitespace-nowrap cursor-pointer`}
                  >
                    Start Free Trial
                  </Link>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 mb-4">Everything included:</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-5 h-5 flex items-center justify-center mr-3">
                        <i className={`ri-check-line ${colorClasses.text} text-lg`}></i>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto">
              We offer custom pricing for large restaurant chains and unique business needs. 
              Contact our sales team for a personalized quote.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}