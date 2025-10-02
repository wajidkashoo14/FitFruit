"use client";
import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Play,
  Star,
  Leaf,
  Heart,
  Award,
  ChevronDown,
  Users,
} from "lucide-react";
import { Zap } from "lucide-react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Pure Apple Goodness",
      subtitle: "Crispy. Natural. Delicious.",
      description:
        "Experience the perfect crunch with our premium chips, baked to golden perfection with zero artificial additives.",
      cta: "Shop",
      image: "/hero1.jpg",
    },
    {
      title: "From Orchard to You",
      subtitle: "Farm Fresh Quality",
      description:
        "Sourced directly from local Kashmir orchards, each chip captures the essence of tree-ripened apples.",
      cta: "Our Story",
      image: "/hero2.jpg",
    },
    {
      title: "Healthy Never Tasted This Good",
      subtitle: "Zero Junk. All Joy.",
      description:
        "Guilt-free snacking that satisfies your cravings while nourishing your body with natural fruit goodness.",
      cta: "Learn More",
      image: "/hero3.jpg",
    },
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    document
      .getElementById("next-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Head>
        <title>FitFruit - Healthy Snacking Made Simple</title>
        <meta
          name="description"
          content="Real fruits, baked to crunchy perfection. No artificial colors, flavors, or preservatives."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-30">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={heroSlides[currentSlide].image}
              alt="FitFruit Apple Chips Hero"
              className="w-full h-full object-cover object-center transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-green-900/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-green-800/30 via-transparent to-green-600/20"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-20 w-32 h-32 bg-red-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div
              className="absolute top-40 right-32 w-24 h-24 bg-yellow-400 rounded-full blur-2xl opacity-25 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-32 left-40 w-40 h-40 bg-green-400 rounded-full blur-3xl opacity-15 animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Top Badge */}
            <div className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg animate-fadeIn">
              <Award className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-gray-800 font-semibold text-sm">
                Award-Winning Natural Snacks
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slideUp">
              {heroSlides[currentSlide].title}
              <span className="block bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 bg-clip-text text-transparent mt-2">
                {heroSlides[currentSlide].subtitle}
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed animate-slideUp"
              style={{ animationDelay: "0.2s" }}
            >
              {heroSlides[currentSlide].description}
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slideUp"
              style={{ animationDelay: "0.4s" }}
            >
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <span>{heroSlides[currentSlide].cta}</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:border-white/50 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2 group">
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>Watch Our Story</span>
              </button>
            </div>

            {/* Features Row */}
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16 animate-slideUp"
              style={{ animationDelay: "0.6s" }}
            >
              {[
                {
                  icon: <Heart className="h-6 w-6" />,
                  title: "100% Natural",
                  description: "No artificial preservatives",
                  color: "from-red-400 to-red-500",
                },
                {
                  icon: <Leaf className="h-6 w-6" />,
                  title: "Farm Fresh",
                  description: "Sourced from local orchards",
                  color: "from-green-400 to-green-500",
                },
                {
                  icon: <Star className="h-6 w-6" />,
                  title: "Premium Quality",
                  description: "Baked to perfection",
                  color: "from-yellow-400 to-yellow-500",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-3 mb-8">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 scale-125"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={scrollToNext}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30 hover:border-white/50 transition-all duration-300 group"
            >
              <ChevronDown className="h-6 w-6 text-white group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Custom CSS for animations */}
          <style jsx>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes slideUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .animate-fadeIn {
              animation: fadeIn 0.8s ease-out;
            }

            .animate-slideUp {
              animation: slideUp 0.8s ease-out both;
            }
          `}</style>
        </section>

        {/* Story Section */}
        <div className="min-h-screen">
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 via-amber-50 to-lime-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-red-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-yellow-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-15"></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg">
            <Heart className="h-5 w-5 text-red-500 mr-2" />
            <span className="text-gray-800 font-semibold">Our Journey</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our
            <span className="block bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 bg-clip-text text-transparent">
              Story
            </span>
          </h2>
          
          <p className="text-2xl sm:text-3xl text-gray-600 font-light mb-4">
            Born From Simple
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Card */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-3xl blur opacity-20"></div>
          <div className="relative bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-2xl">
            
            {/* Story Content */}
            <div className="space-y-8 text-center max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                FitFruit Foods is a health-focused startup offering 
                <span className="font-semibold text-red-600"> natural</span>, 
                <span className="font-semibold text-yellow-600"> nutritious</span>, and 
                <span className="font-semibold text-green-600"> delicious</span> snack alternatives. 
                Our flagship product, apple chips, is a guilt-free, dried (not fried) snack made from 
                locally sourced apples—free from artificial additives.
              </p>

              <div className="flex justify-center my-8">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>

              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                By working directly with local orchards, we ensure freshness while empowering farmers 
                and boosting the horticulture economy. Our mission is to promote 
                <span className="font-semibold text-green-600"> healthy living</span>, 
                empower <span className="font-semibold text-yellow-600">rural communities</span>, 
                and drive <span className="font-semibold text-red-600">sustainable food production</span>.
              </p>

              {/* Values Icons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
                {[
                  {
                    icon: <Heart className="h-8 w-8" />,
                    title: "Healthy Living",
                    color: "from-red-500 to-red-600"
                  },
                  {
                    icon: <Users className="h-8 w-8" />,
                    title: "Rural Communities",
                    color: "from-yellow-500 to-yellow-600"
                  },
                  {
                    icon: <Leaf className="h-8 w-8" />,
                    title: "Sustainable Production",
                    color: "from-green-500 to-green-600"
                  }
                ].map((value, index) => (
                  <div key={index} className="flex flex-col items-center group">
                    <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{value.title}</h3>
                  </div>
                ))}
              </div>

              {/* Signature Quote */}
              <div className="bg-gradient-to-r from-red-50 via-yellow-50 to-green-50 rounded-2xl p-8 border-l-4 border-gradient-to-b border-red-400">
                <p className="text-2xl md:text-3xl font-bold italic text-gray-900 mb-4">
                  "Zero Junk. All Joy."
                </p>
                <p className="text-lg text-gray-600">
                  Our commitment to pure, natural ingredients that bring happiness to every bite.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-8">
                <Link href="/ourstory"
                  className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                >
                  <span className="mr-3">Read Our Full Story</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { number: "100%", label: "Natural Ingredients" },
            { number: "50+", label: "Local Farmers" },
            { number: "0", label: "Artificial Additives" },
            { number: "∞", label: "Love & Care" }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 via-yellow-600 to-green-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-green-50 to-emerald-50">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-green-100 rounded-full px-6 py-2 mb-6">
                  <Leaf className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-green-800 font-semibold">
                    Farm to Snack
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Orchips
                </h2>
                <p className="text-xl sm:text-2xl text-gray-600 font-light mb-8">
                  Just real fruit. Nothing else needed.
                </p>

                {/* Enhanced Description */}
                <div className="max-w-4xl mx-auto">
                  {/* <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Our apple chips are more than just a snack – they're a
                    celebration of nature's perfect design. Each slice is
                    carefully selected from local orchards, gently baked to
                    preserve nutrients, and crafted to deliver that satisfying
                    crunch you love.
                  </p> */}

                  {/* Feature Pills */}
                  <div className="flex flex-wrap justify-center gap-3 mb-12">
                    <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-green-100">
                      <Heart className="h-4 w-4 text-red-500 mr-2" />
                      <span className="text-sm font-medium text-gray-700">
                        Heart Healthy
                      </span>
                    </div>
                    <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-green-100">
                      <Zap className="h-4 w-4 text-yellow-500 mr-2" />
                      <span className="text-sm font-medium text-gray-700">
                        Natural Energy
                      </span>
                    </div>
                    <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-green-100">
                      <Award className="h-4 w-4 text-purple-500 mr-2" />
                      <span className="text-sm font-medium text-gray-700">
                        Award Winning
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA Section */}
              <div className="text-center">
                <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto">
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      Ready to Experience Real Fruit Snacking?
                    </h3>
                    <p className="text-lg text-gray-600 mb-8">
                      Discover why thousands choose FitFruit for their healthy
                      snacking needs. Each bag is packed with nutrients, flavor,
                      and that perfect satisfying crunch.
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        100%
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        Natural
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        0
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        Preservatives
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        Local
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        Sourced
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        Fresh
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        Baked
                      </div>
                    </div>
                  </div>

                  {/* Main CTA */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                      href="/products"
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center"
                    >
                      <span className="mr-2">Shop All Products</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                    <Link
                      href="/ourstory"
                      className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
                    >
                      Learn Our Story
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* Newsletter Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Stay Connected
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Get the latest updates on new products and healthy living tips.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
