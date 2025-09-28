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

  // // Countdown timer effect
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimeLeft(prevTime => {
  //       if (prevTime.seconds > 0) {
  //         return { ...prevTime, seconds: prevTime.seconds - 1 };
  //       } else if (prevTime.minutes > 0) {
  //         return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
  //       } else if (prevTime.hours > 0) {
  //         return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
  //       } else if (prevTime.days > 0) {
  //         return { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 };
  //       }
  //       return prevTime;
  //     });
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

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
              Our Products
              <span className="block bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 bg-clip-text text-transparent">
                Coming Soon
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
              We're putting the finishing touches on our revolutionary apple chips. 
              Get ready for a snacking experience that's <span className="font-bold text-red-600">crispy</span>, 
              <span className="font-bold text-yellow-600"> natural</span>, and 
              <span className="font-bold text-green-600"> absolutely delicious</span>!
            </p>
          </div>

          {/* Countdown Timer
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Launch Countdown</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={item.label} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-6 shadow-xl">
                    <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                      {item.value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm md:text-base font-medium text-gray-600 uppercase tracking-wide">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

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

          {/* Email Subscription */}
          {/* <div className="mb-16">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
                <div className="flex items-center justify-center mb-6">
                  <Bell className="h-8 w-8 text-red-500 mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Be the First to Know</h2>
                </div>
                
                <p className="text-lg text-gray-600 mb-8">
                  Join our exclusive list and get notified the moment our apple chips are available, 
                  plus receive a special launch discount!
                </p>
                
                {!isSubscribed ? (
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:outline-none text-lg"
                      />
                    </div>
                    <button
                      onClick={handleSubscribe}
                      className="bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 hover:from-red-600 hover:via-yellow-500 hover:to-green-600 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                      <span className="mr-2">Notify Me</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-6 py-3 font-semibold">
                      <Heart className="h-5 w-5 mr-2" />
                      Thank you! You'll be the first to know!
                    </div>
                  </div>
                )}
                
                <p className="text-sm text-gray-500 mt-4">
                  * We promise not to spam. You can unsubscribe at any time.
                </p>
              </div>
            </div>
          </div> */}

          {/* Social Proof */}
          {/* <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">Join thousands of health-conscious snackers waiting for FitFruit</p>
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                <span>5,000+ Pre-orders</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                <span>Zero Artificial Ingredients</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span>Farm-to-Snack Fresh</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}