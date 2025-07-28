'use client';

export default function DemoFeatures() {
  const demoFeatures = [
    {
      icon: 'ri-dashboard-line',
      title: 'Live Dashboard Demo',
      description: 'See real-time analytics and reporting in action with sample restaurant data'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile POS System',
      description: 'Experience our intuitive mobile point-of-sale system with live order processing'
    },
    {
      icon: 'ri-database-line',
      title: 'Inventory Management',
      description: 'Watch how automated inventory tracking prevents stockouts and reduces waste'
    },
    {
      icon: 'ri-team-line',
      title: 'Staff Management',
      description: 'Explore scheduling, performance tracking, and team communication tools'
    },
    {
      icon: 'ri-calendar-check-line',
      title: 'Reservation System',
      description: 'See how table management and online bookings work seamlessly together'
    },
    {
      icon: 'ri-bar-chart-line',
      title: 'Financial Reports',
      description: 'Review comprehensive financial insights and profit optimization features'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What You'll See in the Demo
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our expert will walk you through all the key features that make RestaurantPro the #1 choice for restaurants
          </p>
        </div>

        <div className="space-y-6">
          {demoFeatures.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className={`${feature.icon} text-white text-xl`}></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Bonus: Custom Integration Consultation</h3>
          <p className="text-orange-100">
            Learn how to integrate RestaurantPro with your existing systems and workflows
          </p>
        </div>
      </div>
    </section>
  );
}