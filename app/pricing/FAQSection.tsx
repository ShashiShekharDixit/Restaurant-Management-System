'use client';

import { useState, useEffect } from 'react';

export default function FAQSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('faq-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: 'Is there a setup fee or hidden costs?',
      answer: 'No setup fees, no hidden costs. The price you see is exactly what you pay. We believe in transparent pricing with no surprises.'
    },
    {
      question: 'Can I change plans at any time?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate your billing accordingly.'
    },
    {
      question: 'What happens during the free trial?',
      answer: 'You get full access to all features of your chosen plan for 30 days. No credit card required to start. You only pay if you decide to continue after the trial.'
    },
    {
      question: 'Do you offer training and support?',
      answer: 'Absolutely! All plans include onboarding support. Professional and Enterprise plans get priority support, and Enterprise customers get a dedicated account manager.'
    },
    {
      question: 'Is my data secure and backed up?',
      answer: 'Yes, we use enterprise-grade security with daily backups. Your data is encrypted and stored in secure data centers with 99.9% uptime guarantee.'
    },
    {
      question: 'Can I integrate with my existing systems?',
      answer: 'We offer 100+ integrations with popular restaurant tools. Enterprise plans include custom integration support for your specific needs.'
    },
    {
      question: 'What if I need to cancel?',
      answer: 'You can cancel anytime with no penalties. We offer a 30-day money-back guarantee, and you can export all your data before leaving.'
    },
    {
      question: 'Do you support multiple locations?',
      answer: 'Professional and Enterprise plans support multiple locations with centralized management, reporting, and inventory tracking across all your restaurants.'
    }
  ];

  return (
    <section id="faq-section" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Everything you need to know about our pricing and plans
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-xl overflow-hidden transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <i className={`ri-${openFAQ === index ? 'subtract' : 'add'}-line text-xl text-gray-600 transition-transform duration-200`}></i>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openFAQ === index ? 'max-h-96 pb-6' : 'max-h-0'
              }`}>
                <div className="px-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-lg mb-6 leading-relaxed">
              Our team is here to help you choose the right plan for your restaurant. 
              Get in touch and we'll answer all your questions.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}