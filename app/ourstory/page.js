import React from 'react';
import { Heart, Leaf, Users, Award, ArrowDown } from 'lucide-react';
import Link from 'next/Link';

export default function OurStory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50 py-25">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-lime-200 rounded-full blur-3xl opacity-20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-green-100 rounded-full px-6 py-3 mb-8">
                <Leaf className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-green-800 font-semibold">From Farm to Your Heart</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight">
                Our
                <span className="block bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                  Story
                </span>
              </h1>
              
              <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
                <p>
                  At FitFruit Foods, we believe that snacking should be as 
                  <span className="font-semibold text-green-600"> healthy </span>
                  as it is 
                  <span className="font-semibold text-green-600"> delicious</span>. 
                  Our journey began with a simple idea—to transform farm-fresh fruits 
                  into wholesome alternatives that people can enjoy without guilt.
                </p>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-green-500">
                  <p className="text-2xl font-bold italic text-gray-900">
                    "FitFruit Foods—Zero Junk. All Joy"
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-lime-400 rounded-3xl blur opacity-30"></div>
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl">
                <img
                  src="/apple1.jpg"
                  alt="Apple orchards"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-green-500 rounded-full p-4 shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-lime-500 rounded-full p-4 shadow-lg">
                <Leaf className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-8 w-8 text-green-600" />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl blur opacity-30"></div>
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl">
                <img
                  src="/apple2.jpg"
                  alt="Apple orchards"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 bg-orange-500 rounded-full p-4 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-red-500 rounded-full p-4 shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
            </div>
            
            {/* Right Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="inline-flex items-center bg-orange-100 rounded-full px-6 py-3">
                <Users className="h-5 w-5 text-orange-600 mr-2" />
                <span className="text-orange-800 font-semibold">Empowering Communities</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Beyond Just
                <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Healthy Products
                </span>
              </h2>
              
              <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
                <p>
                  But our mission goes beyond just creating healthy products. By working 
                  directly with local orchards, we ensure unmatched freshness while also 
                  <span className="font-semibold text-orange-600"> empowering farmers </span>
                  and strengthening the horticulture economy.
                </p>
                
                <p>
                  Every pack of FitFruit not only supports a healthier lifestyle but also 
                  <span className="font-semibold text-orange-600"> uplifts rural communities </span>
                  and drives sustainable food practices.
                </p>
                
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border-l-4 border-orange-500">
                  <p className="text-lg font-medium text-gray-800">
                    We started FitFruit Foods to offer the best from nature, in its purest 
                    form—snacks that are real, honest, and crafted with care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Because we believe that when you eat better, you live better.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="group text-center">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Health First</h3>
              <p className="text-gray-600 leading-relaxed">
                Every product is crafted with your wellbeing in mind, using only the finest natural ingredients.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="group text-center">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Supporting local farmers and rural communities through direct partnerships and fair practices.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="group text-center">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                Committed to eco-friendly practices and sustainable food production for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-lime-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Be part of a movement that's transforming snacking while supporting communities and sustainable practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Shop Our Products
            </Link>
            <Link href="/" className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}