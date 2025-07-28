'use client';

import { useState } from 'react';

export default function DemoForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    restaurantName: '',
    restaurantType: 'casual-dining',
    currentSystem: '',
    preferredTime: '',
    challenges: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Schedule Your Demo
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Tell us about your restaurant and we'll customize the demo to your needs
          </p>
        </div>

        {submitStatus === 'success' ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-check-line text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">Demo Scheduled Successfully!</h3>
            <p className="text-green-700 mb-4">
              Thank you for scheduling a demo. Our team will contact you within 24 hours to confirm your preferred time.
            </p>
            <p className="text-green-600 text-sm">
              Check your email for confirmation details and a calendar invite.
            </p>
          </div>
        ) : (
          <form id="demo-form" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-sm"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-sm"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="restaurantName" className="block text-sm font-medium text-gray-700 mb-2">
                  Restaurant Name *
                </label>
                <input
                  type="text"
                  id="restaurantName"
                  name="restaurantName"
                  value={formData.restaurantName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-sm"
                  placeholder="Enter your restaurant name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="restaurantType" className="block text-sm font-medium text-gray-700 mb-2">
                  Restaurant Type *
                </label>
                <div className="relative">
                  <select
                    id="restaurantType"
                    name="restaurantType"
                    value={formData.restaurantType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-sm appearance-none"
                  >
                    <option value="casual-dining">Casual Dining</option>
                    <option value="fine-dining">Fine Dining</option>
                    <option value="fast-casual">Fast Casual</option>
                    <option value="food-truck">Food Truck</option>
                    <option value="cafe">Cafe</option>
                    <option value="bakery">Bakery</option>
                    <option value="pizza">Pizza Restaurant</option>
                    <option value="chain">Restaurant Chain</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Demo Time
                </label>
                <div className="relative">
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-sm appearance-none"
                  >
                    <option value="">Select preferred time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                    <option value="flexible">I'm flexible</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="currentSystem" className="block text-sm font-medium text-gray-700 mb-2">
                Current POS/Management System
              </label>
              <input
                type="text"
                id="currentSystem"
                name="currentSystem"
                value={formData.currentSystem}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-sm"
                placeholder="e.g., Square, Toast, or none"
              />
            </div>

            <div>
              <label htmlFor="challenges" className="block text-sm font-medium text-gray-700 mb-2">
                Current Challenges
              </label>
              <textarea
                id="challenges"
                name="challenges"
                value={formData.challenges}
                onChange={handleChange}
                rows={4}
                maxLength={500}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-sm resize-none"
                placeholder="What challenges are you facing with your current restaurant management?"
              />
              <div className="text-right text-xs text-gray-500 mt-1">
                {formData.challenges.length}/500 characters
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || formData.challenges.length > 500}
              className="w-full bg-orange-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Scheduling Demo...
                </span>
              ) : (
                'Schedule My Demo'
              )}
            </button>

            <p className="text-xs text-gray-500 text-center">
              By scheduling a demo, you agree to receive communication from RestaurantPro. 
              We respect your privacy and won't spam you.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}