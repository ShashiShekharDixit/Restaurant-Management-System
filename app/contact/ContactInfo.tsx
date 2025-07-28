'use client';

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: 'ri-mail-line',
      title: 'Email Support',
      primary: 'support@restaurantpro.com',
      secondary: 'sales@restaurantpro.com',
      description: 'Get help with technical issues or sales inquiries',
      color: 'bg-blue-500'
    },
    {
      icon: 'ri-phone-line',
      title: 'Phone Support',
      primary: '+1 (555) 123-4567',
      secondary: '+1 (555) 987-6543',
      description: '24/7 support for Enterprise customers',
      color: 'bg-green-500'
    },
    {
      icon: 'ri-chat-3-line',
      title: 'Live Chat',
      primary: 'Available 9 AM - 6 PM EST',
      secondary: 'Monday to Friday',
      description: 'Get instant help from our support team',
      color: 'bg-purple-500'
    }
  ];

  const offices = [
    {
      city: 'New York',
      address: '123 Restaurant Avenue, Suite 100',
      location: 'New York, NY 10001',
      phone: '+1 (555) 123-4567'
    },
    {
      city: 'San Francisco',
      address: '456 Tech Street, Floor 5',
      location: 'San Francisco, CA 94105',
      phone: '+1 (555) 987-6543'
    },
    {
      city: 'Chicago',
      address: '789 Business Plaza, Suite 200',
      location: 'Chicago, IL 60601',
      phone: '+1 (555) 456-7890'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Multiple ways to reach us. We're here to help you succeed.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className={`w-14 h-14 ${method.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <i className={`${method.icon} text-white text-xl`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <div className="space-y-1">
                    <p className="text-orange-500 font-medium">{method.primary}</p>
                    <p className="text-gray-600 text-sm">{method.secondary}</p>
                  </div>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    {method.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Our Offices
          </h3>
          <div className="space-y-6">
            {offices.map((office, index) => (
              <div key={index} className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">
                  {office.city}
                </h4>
                <p className="text-gray-600 text-sm mb-1">
                  {office.address}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  {office.location}
                </p>
                <p className="text-orange-500 text-sm font-medium">
                  {office.phone}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white">
            <h3 className="text-xl font-bold mb-2">Need Immediate Help?</h3>
            <p className="mb-4 text-orange-100">
              Enterprise customers get priority support with dedicated account managers
            </p>
            <a 
              href="tel:+15551234567" 
              className="inline-block bg-white text-orange-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              Call Now: (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}