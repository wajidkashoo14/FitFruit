'use client'
import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, Search, Tag, Heart, Leaf, Apple, TrendingUp } from 'lucide-react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "The Science Behind Apple Chips: Why Baked is Better Than Fried",
      excerpt: "Discover how our unique baking process preserves nutrients while creating the perfect crunch. Learn about the health benefits that make our apple chips a superior snacking choice.",
      content: "When we started FitFruit, we faced a crucial decision: how do we create the perfect apple chip while preserving maximum nutrition? The answer lay in understanding the science behind different preparation methods...",
      author: "Dr. Sarah Mitchell",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "nutrition",
      image: "/hero1.jpg",
      tags: ["health", "nutrition", "baking", "science"],
      featured: true
    },
    {
      id: 2,
      title: "From Kashmir Orchards to Your Kitchen: Our Sourcing Journey",
      excerpt: "Take a behind-the-scenes look at how we work with local farmers in Kashmir to source the finest apples for our chips. Sustainability meets quality in every bite.",
      content: "The journey of our apple chips begins in the pristine orchards of Kashmir, where generations of farmers have perfected the art of growing exceptional apples. Our partnership with these local communities...",
      author: "Marcus Chen",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "sustainability",
      image: "/apple1.jpg",
      tags: ["sustainability", "farming", "kashmir", "community"],
      featured: false
    },
    {
      id: 3,
      title: "5 Creative Ways to Enjoy Apple Chips Beyond Snacking",
      excerpt: "Apple chips aren't just for snacking! Discover innovative ways to incorporate our crispy apple chips into your meals, desserts, and daily nutrition routine.",
      content: "While our apple chips are perfect on their own, we've discovered that our customers love getting creative with them. From breakfast toppings to dessert garnishes, here are five delicious ways...",
      author: "Chef Priya Sharma",
      date: "2024-01-08",
      readTime: "4 min read",
      category: "recipes",
      image: "/image1.jpg",
      tags: ["recipes", "cooking", "creative", "tips"],
      featured: false
    },
    {
      id: 4,
      title: "The Environmental Impact of Choosing Natural Snacks",
      excerpt: "Learn how choosing natural, locally-sourced snacks like our apple chips can make a positive impact on the environment and support sustainable agriculture.",
      content: "Every food choice we make has an environmental footprint. When you choose FitFruit apple chips, you're not just choosing a healthier snack – you're making a choice that supports...",
      author: "Dr. Sarah Mitchell",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "sustainability",
      image: "/image2.jpg",
      tags: ["environment", "sustainability", "impact", "natural"],
      featured: false
    },
    {
      id: 5,
      title: "Nutritional Comparison: Apple Chips vs Traditional Snacks",
      excerpt: "See how our apple chips stack up against traditional snack options. Spoiler alert: the results might surprise you!",
      content: "In a world full of processed snacks, it's important to understand what you're really putting in your body. Let's break down the nutritional profile of apple chips compared to...",
      author: "Nutritionist Lisa Park",
      date: "2024-01-03",
      readTime: "8 min read",
      category: "nutrition",
      image: "/image3.jpg",
      tags: ["nutrition", "comparison", "health", "analysis"],
      featured: false
    },
    {
      id: 6,
      title: "Building a Healthier Pantry: Smart Snacking Tips",
      excerpt: "Transform your pantry with smart snacking strategies. Learn how to stock healthy options that satisfy cravings without compromising your wellness goals.",
      content: "Creating a healthier lifestyle starts with the choices we make at home. Your pantry is the foundation of your daily nutrition, and with a few strategic changes...",
      author: "Wellness Coach Amy Johnson",
      date: "2024-01-01",
      readTime: "5 min read",
      category: "lifestyle",
      image: "/image4.jpg",
      tags: ["lifestyle", "wellness", "pantry", "tips"],
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', icon: <TrendingUp className="h-4 w-4" />, count: blogPosts.length },
    { id: 'nutrition', name: 'Nutrition', icon: <Apple className="h-4 w-4" />, count: blogPosts.filter(post => post.category === 'nutrition').length },
    { id: 'sustainability', name: 'Sustainability', icon: <Leaf className="h-4 w-4" />, count: blogPosts.filter(post => post.category === 'sustainability').length },
    { id: 'recipes', name: 'Recipes', icon: <Heart className="h-4 w-4" />, count: blogPosts.filter(post => post.category === 'recipes').length },
    { id: 'lifestyle', name: 'Lifestyle', icon: <User className="h-4 w-4" />, count: blogPosts.filter(post => post.category === 'lifestyle').length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-amber-50 to-lime-50">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-green-200 rounded-full blur-3xl opacity-15"></div>
      </div>

      {/* Header Section */}
      <div className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-white bg-opacity-80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg">
            <Heart className="h-5 w-5 text-red-500 mr-2" />
            <span className="text-gray-800 font-semibold">Health & Wellness Insights</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            FitFruit
            <span className="block bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover the latest insights on healthy eating, sustainable farming, and living your best life through better nutrition choices.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles, topics, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-lg focus:border-red-400 focus:outline-none transition-colors duration-300"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  selectedCategory === category.id ? 'bg-white/30' : 'bg-gray-300'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'all' && (
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Article</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{featuredPost.author}</p>
                      </div>
                    </div>
                    
                    <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Posts Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article key={post.id} className="group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                  
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500/80 to-yellow-500/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold capitalize">
                      {post.category}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-red-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Author and CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{post.author}</span>
                      </div>
                      
                      <button className="text-red-500 hover:text-red-600 font-semibold text-sm flex items-center space-x-1 transition-colors">
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 opacity-50">
              <Search className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No articles found</h3>
            <p className="text-gray-600 mb-8">Try adjusting your search terms or selecting a different category.</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedCategory('all');}}
              className="bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 hover:from-red-600 hover:via-yellow-500 hover:to-green-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
            >
              Show All Articles
            </button>
          </div>
        )}
      </div>

      {/* Newsletter Signup */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Never Miss an Article</h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter and get the latest health tips, recipes, and insights delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-400 focus:outline-none transition-colors duration-300"
            />
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}