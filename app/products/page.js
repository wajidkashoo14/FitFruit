"use client"
import React, { useState, useEffect } from 'react';
import { Clock, Bell, Heart, Leaf, Star, ArrowRight, Mail } from 'lucide-react';

export default function ComingSoonPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 12,
    minutes: 45,
    seconds: 30
  });
  
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-amber-50 to-lime-100 relative overflow-hidden py-30">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-yellow-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-200 rounded-full blur-3xl opacity-15 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Floating apple elements */}
        <div className="absolute top-32 right-32 opacity-10">
          <div className="w-24 h-24 bg-red-400 rounded-full transform rotate-12"></div>
        </div>
        <div className="absolute bottom-48 left-32 opacity-10">
          <div className="w-32 h-32 bg-green-400 rounded-full transform -rotate-12"></div>
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Hero Content */}
          <div className="mb-16">
            {/* Badge */}
            <div className="inline-flex items-center bg-white bg-opacity-80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg">
              <Clock className="h-5 w-5 text-red-500 mr-2" />
              <span className="text-gray-800 font-semibold">Something Delicious is Coming</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight">
            From Orchards To You
              <span className="block bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 bg-clip-text text-transparent">
              Launching Soon...
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
              We're putting the finishing touches on our revolutionary apple chips. 
              Get ready for a snacking experience that's <span className="font-bold text-red-600">crispy</span>, 
              <span className="font-bold text-yellow-600"> natural</span>, and 
              <span className="font-bold text-green-600"> absolutely delicious</span>!
            </p>
          </div>

          {/* Features Preview */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">What to Expect</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: <Heart className="h-8 w-8" />,
                  title: "100% Natural",
                  description: "Made from real apples with no artificial additives",
                  color: "from-red-500 to-red-600"
                },
                {
                  icon: <Leaf className="h-8 w-8" />,
                  title: "Locally Sourced",
                  description: "Fresh from local orchards, supporting farmers",
                  color: "from-green-500 to-green-600"
                },
                {
                  icon: <Star className="h-8 w-8" />,
                  title: "Perfect Crunch",
                  description: "Baked to crispy perfection, not fried",
                  color: "from-yellow-500 to-yellow-600"
                }
              ].map((feature, index) => (
                <div key={index} className="group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}