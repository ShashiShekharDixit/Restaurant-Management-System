'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-logo text-blue-400 mb-4">TechFlow</div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering businesses with cutting-edge technology solutions and innovative digital transformations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors duration-300 cursor-pointer">
                <i className="ri-twitter-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300 cursor-pointer">
                <i className="ri-instagram-fill text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/web-development" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-solutions" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="text-gray-300 hover:text-white transition-colors duration-300">
                  IT Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="ri-map-pin-line text-blue-400 mt-1 mr-3"></i>
                <div>
                  <p className="text-gray-300">123 Tech Street</p>
                  <p className="text-gray-300">Silicon Valley, CA 94025</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="ri-phone-line text-blue-400 mr-3"></i>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <i className="ri-mail-line text-blue-400 mr-3"></i>
                <p className="text-gray-300">hello@techflow.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 TechFlow Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}