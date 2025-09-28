"use client"
import React from 'react';
import { Heart, Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter, ArrowUp } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-red-500 rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-400 rounded-full blur-3xl opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-green-500 rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Top Section */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
              
              {/* Brand Section */}
              <div className="lg:col-span-1 space-y-6">
                <div className="flex items-center space-x-3">
                <Image src="/footericon.png" alt='icon' height={200} width={400} objectFit='contain' className='h-[100px] w-[250px] object-cover' />
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Healthy snacking made simple with real fruits and natural ingredients. 
                  <span className="block mt-2 font-semibold italic text-yellow-400">
                    Zero Junk. All Joy.
                  </span>
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Heart className="h-4 w-4 text-red-400" />
                  <span>Made with love in Kashmir</span>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-xl font-bold mb-6 flex items-center">
                  <div className="w-2 h-6 bg-gradient-to-b from-red-400 to-red-600 rounded-full mr-3"></div>
                  Quick Links
                </h4>
                <ul className="space-y-4">
                  {[
                    { name: 'Home', href: '/' },
                    { name: 'Our Story', href: '/ourstory' },
                    { name: 'Products', href: '/products' },
                    { name: 'Our Team', href: '/ourteam' },
                    { name: 'Blog', href: '/blog' }
                  ].map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group"
                      >
                        <div className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-red-400 to-yellow-400 transition-all duration-300 mr-0 group-hover:mr-3 rounded-full"></div>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Customer Care */}
              <div>
                <h4 className="text-xl font-bold mb-6 flex items-center">
                  <div className="w-2 h-6 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full mr-3"></div>
                  Customer Care
                </h4>
                <ul className="space-y-4">
                  {[
                    { name: 'Contact Us', href: '/contact' },
                    { name: 'FAQ', href: '/faq' },
                    { name: 'Shipping', href: '/shipping' },
                    { name: 'Returns', href: '/returns' },
                    { name: 'Privacy Policy', href: '/privacy' }
                  ].map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group"
                      >
                        <div className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-yellow-400 to-green-400 transition-all duration-300 mr-0 group-hover:mr-3 rounded-full"></div>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact & Social */}
              <div>
                <h4 className="text-xl font-bold mb-6 flex items-center">
                  <div className="w-2 h-6 bg-gradient-to-b from-green-400 to-green-600 rounded-full mr-3"></div>
                  Get in Touch
                </h4>
                
                {/* Contact Info */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="h-5 w-5 text-red-400" />
                    <span className="text-sm">fitfruitfoodsinfo@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="h-5 w-5 text-yellow-400" />
                    <span className="text-sm">+91 6005393956</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="h-5 w-5 text-green-400" />
                    <span className="text-sm">Barji, Harwan Rd, Srinagar, New Theed, J and K 191121</span>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <p className="text-gray-400 text-sm mb-4">Follow our journey:</p>
                  <div className="flex space-x-4">
                    {[
                      { 
                        icon: <Facebook className="h-5 w-5" />, 
                        href: "https://www.facebook.com/share/19Dw7oSTGB/",
                        color: "from-blue-500 to-blue-600",
                        label: "Facebook"
                      },
                      { 
                        icon: <Instagram className="h-5 w-5" />, 
                        href: "https://www.instagram.com/fitfruitfoods?igsh=MXBwYm5zMjRxNHQ3YQ==",
                        color: "from-pink-500 to-purple-500",
                        label: "Instagram"
                      },
                      { 
                        icon: <Twitter className="h-5 w-5" />, 
                        href: "https://x.com/fitfruitfoods?t=l9SQddSjimSyeMubHcYoOA&s=08",
                        color: "from-blue-400 to-cyan-400",
                        label: "Twitter"
                      }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative bg-gradient-to-r ${social.color} p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110`}
                        aria-label={social.label}
                      >
                        <div className="text-white">
                          {social.icon}
                        </div>
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          {social.label}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-gradient-to-r from-red-500/10 via-yellow-500/10 to-green-500/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-gray-700">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-3">Stay Updated with FitFruit</h3>
                <p className="text-gray-300">Get the latest updates on new products, health tips, and special offers!</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors duration-300"
                />
                <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">
                  &copy; 2025 FitFruit. All rights reserved.
                </p>
                <div className="hidden md:flex items-center space-x-4 text-xs text-gray-500">
                  <a href="/terms" className="hover:text-gray-300 transition-colors">Terms</a>
                  <span>•</span>
                  <a href="/privacy" className="hover:text-gray-300 transition-colors">Privacy</a>
                  <span>•</span>
                  <a href="/cookies" className="hover:text-gray-300 transition-colors">Cookies</a>
                </div>
              </div>
              
              <button
                onClick={scrollToTop}
                className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-5 w-5 text-white group-hover:animate-bounce cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}