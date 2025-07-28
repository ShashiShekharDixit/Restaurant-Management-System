'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center px-6">
      <div className="text-center text-white">
        <div className="mb-8">
          <h1 className="text-9xl font-bold mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 whitespace-nowrap cursor-pointer"
          >
            Back to Home
          </Link>
          <Link 
            href="/contact" 
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 whitespace-nowrap cursor-pointer"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}