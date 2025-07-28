'use client';

import { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('testimonials-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, Digital Innovations Inc.',
      company: 'Digital Innovations Inc.',
      testimonial: 'TechFlow transformed our entire digital infrastructure. Their team delivered exceptional results that exceeded our expectations. Our productivity increased by 40% within the first month.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20businesswoman%20CEO%20in%20her%2040s%2C%20confident%20expression%2C%20executive%20attire%2C%20modern%20office%20background%20with%20glass%20windows%20and%20city%20view&width=100&height=100&seq=testimonial-001&orientation=squarish',
      rating: 5
    },
    {
      name: 'Michael Chen',
      position: 'CTO, StartupTech',
      company: 'StartupTech',
      testimonial: 'Working with TechFlow was a game-changer for our startup. They built our entire platform from scratch and provided ongoing support. Their expertise in modern technologies is unmatched.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20male%20technology%20executive%20in%20his%2030s%2C%20friendly%20smile%2C%20business%20casual%20attire%2C%20modern%20tech%20office%20environment%20with%20computers&width=100&height=100&seq=testimonial-002&orientation=squarish',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      position: 'Marketing Director, GrowthCorp',
      company: 'GrowthCorp',
      testimonial: 'The mobile app TechFlow developed for us has been incredibly successful. User engagement increased by 60% and our app store ratings are consistently 4.8+. Highly recommended!',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Latina%20female%20marketing%20director%20in%20her%20early%2030s%2C%20warm%20smile%2C%20stylish%20business%20attire%2C%20creative%20marketing%20office%20with%20campaign%20materials&width=100&height=100&seq=testimonial-003&orientation=squarish',
      rating: 5
    },
    {
      name: 'David Thompson',
      position: 'Founder, E-commerce Plus',
      company: 'E-commerce Plus',
      testimonial: 'TechFlow rebuilt our e-commerce platform and the results speak for themselves. Sales increased by 85% and our site speed improved dramatically. Their attention to detail is remarkable.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Caucasian%20male%20entrepreneur%20in%20his%20late%2030s%2C%20confident%20business%20leader%2C%20casual%20executive%20attire%2C%20modern%20startup%20office%20environment&width=100&height=100&seq=testimonial-004&orientation=squarish',
      rating: 5
    }
  ];

  return (
    <section id="testimonials-section" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with TechFlow
          </p>
        </div>

        <div className={`max-w-4xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-xl mx-1"></i>
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].testimonial}"
              </blockquote>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover object-top mr-4"
              />
              <div className="text-left">
                <h4 className="text-lg font-semibold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-600">
                  {testimonials[currentTestimonial].position}
                </p>
                <p className="text-blue-600 font-medium">
                  {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer ${
                  index === currentTestimonial ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className={`mt-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-center text-blue-100 mb-8">Trusted by leading companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-white font-bold text-lg">TechCorp</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-white font-bold text-lg">InnovateCo</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-white font-bold text-lg">FutureTech</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-white font-bold text-lg">NextGen</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}