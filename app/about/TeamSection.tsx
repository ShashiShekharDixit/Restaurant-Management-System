'use client';

import { useState, useEffect } from 'react';

export default function TeamSection() {
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

    const element = document.getElementById('team-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: 'Alex Martinez',
      position: 'CEO & Co-Founder',
      bio: 'Former restaurant owner with 15+ years experience. Led 3 successful restaurant chains before founding RestaurantPro.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Hispanic%20male%20CEO%20in%20his%2040s%2C%20confident%20business%20leader%20wearing%20dark%20suit%2C%20warm%20smile%2C%20modern%20office%20background%20with%20windows%20and%20professional%20lighting&width=400&height=400&seq=team-001&orientation=squarish',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Sarah Kim',
      position: 'CTO & Co-Founder',
      bio: 'Tech veteran with expertise in scalable systems. Previously led engineering teams at major fintech companies.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20female%20technology%20executive%20in%20her%2030s%2C%20wearing%20business%20casual%20attire%2C%20confident%20expression%2C%20modern%20tech%20office%20environment%20with%20computers%20and%20monitors&width=400&height=400&seq=team-002&orientation=squarish',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Marcus Johnson',
      position: 'VP of Product',
      bio: 'Product strategist with deep restaurant industry knowledge. Ensures our solutions solve real operational challenges.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20American%20male%20product%20executive%20in%20his%2030s%2C%20friendly%20demeanor%2C%20business%20casual%20attire%2C%20modern%20collaborative%20workspace%20with%20whiteboards%20and%20design%20materials&width=400&height=400&seq=team-003&orientation=squarish',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Head of Customer Success',
      bio: 'Dedicated to restaurant success with 10+ years in hospitality. Ensures every client achieves their goals.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Latina%20female%20customer%20success%20manager%20in%20her%20early%2030s%2C%20warm%20approachable%20smile%2C%20professional%20business%20attire%2C%20customer%20service%20office%20environment%20with%20team%20collaboration%20area&width=400&height=400&seq=team-004&orientation=squarish',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'David Chen',
      position: 'Lead Engineer',
      bio: 'Full-stack developer passionate about creating robust, user-friendly systems that restaurants can rely on daily.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20male%20software%20engineer%20in%20his%20late%2020s%2C%20casual%20tech%20attire%2C%20focused%20expression%2C%20modern%20development%20workspace%20with%20multiple%20monitors%20and%20coding%20environment&width=400&height=400&seq=team-005&orientation=squarish',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Lisa Thompson',
      position: 'Head of Marketing',
      bio: 'Marketing strategist with restaurant industry expertise. Helps connect our solutions with the right restaurant partners.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Caucasian%20female%20marketing%20executive%20in%20her%2030s%2C%20creative%20and%20energetic%20expression%2C%20stylish%20business%20attire%2C%20modern%20marketing%20office%20with%20campaign%20materials%20and%20creative%20displays&width=400&height=400&seq=team-006&orientation=squarish',
      linkedin: '#',
      twitter: '#'
    }
  ];

  return (
    <section id="team-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate professionals with restaurant and technology expertise, 
            dedicated to your success every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top"
                />
                
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                
                <p className="text-orange-500 font-medium mb-4">
                  {member.position}
                </p>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                
                <div className="flex justify-center space-x-4">
                  <a 
                    href={member.linkedin}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    <i className="ri-linkedin-fill text-lg"></i>
                  </a>
                  <a 
                    href={member.twitter}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    <i className="ri-twitter-fill text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Growing Team</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We're always looking for talented individuals who share our passion for helping restaurants succeed. 
              Check out our open positions and become part of the RestaurantPro family.
            </p>
            <a 
              href="/careers" 
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}