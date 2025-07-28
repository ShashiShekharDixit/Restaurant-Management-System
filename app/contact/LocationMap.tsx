'use client';

import { useState, useEffect } from 'react';

export default function LocationMap() {
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

    const element = document.getElementById('location-map');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="location-map" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Find Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Visit our headquarters in New York or connect with us virtually. 
            We're always excited to meet restaurant owners and discuss your needs.
          </p>
        </div>

        <div className={`bg-gray-100 rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343876!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635959419076!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>

        <div className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-map-pin-line text-white text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              123 Restaurant Avenue, Suite 100<br />
              New York, NY 10001
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-time-line text-white text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Hours</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Monday - Friday: 9 AM - 6 PM EST<br />
              Saturday - Sunday: Closed
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-car-line text-white text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Parking</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Visitor parking available in building garage<br />
              Street parking also available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}