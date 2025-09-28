"use client"
import React, { useState } from 'react';
import { X, ZoomIn, Heart, Leaf, Star, Camera, Filter, Grid3X3, Grid2X2 } from 'lucide-react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [layout, setLayout] = useState('masonry');

  // Sample gallery data - replace with your actual images
  const galleryItems = [
    {
      id: 1,
      src: "/card.jpg",
      alt: "Fresh Apple Chips - Just Apple",
      category: "products",
      title: "Just Apple Chips",
      description: "Pure, crispy apple slices baked to golden perfection"
    },
    {
      id: 2,
      src: "/story.png",
      alt: "Apple Orchard in Kashmir",
      category: "process",
      title: "Kashmir Orchards",
      description: "Where our premium apples are sourced from local farmers"
    },
    {
      id: 3,
      src: "/hero1.jpg",
      alt: "Granny Smith Apple Chips",
      category: "products",
      title: "Granny Smith Variety",
      description: "Tangy green apple chips with perfect tart-sweet balance"
    },
    {
      id: 4,
      src: "/apple1.jpg",
      alt: "Apple harvesting process",
      category: "process",
      title: "Harvesting Process",
      description: "Hand-picked apples ensuring the highest quality"
    },
    {
      id: 5,
      src: "/apple2.jpg",
      alt: "Baking process",
      category: "process",
      title: "Baking Excellence",
      description: "Our gentle baking process preserves nutrients and flavor"
    },
    {
      id: 6,
      src: "/image1.jpg",
      alt: "Lime & Chilli Apple Chips",
      category: "products",
      title: "Lime & Chilli",
      description: "Zesty twist with lime and gentle chili warmth"
    },
    {
      id: 7,
      src: "/image4.jpg",
      alt: "Farm to table",
      category: "story",
      title: "Farm to Table",
      description: "Supporting local communities through sustainable practices"
    },
    {
      id: 8,
      src: "/image3.jpg",
      alt: "Quality control",
      category: "process",
      title: "Quality Control",
      description: "Every batch tested for perfection before packaging"
    },
    {
      id: 9,
      src: "/image2.jpg",
      alt: "Packaging",
      category: "story",
      title: "Eco-Friendly Packaging",
      description: "Sustainable packaging that keeps chips fresh"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos', count: galleryItems.length },
    { id: 'products', name: 'Products', count: galleryItems.filter(item => item.category === 'products').length },
    { id: 'process', name: 'Our Process', count: galleryItems.filter(item => item.category === 'process').length },
    { id: 'story', name: 'Our Story', count: galleryItems.filter(item => item.category === 'story').length }
  ];

  const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.category === filter);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

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
            <Camera className="h-5 w-5 text-red-500 mr-2" />
            <span className="text-gray-800 font-semibold">Visual Journey</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Our
            <span className="block bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Explore the journey from orchard to snack through our collection of beautiful moments, 
            processes, and products that make FitFruit special.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { number: galleryItems.length, label: "Photos", icon: <Camera className="h-5 w-5" /> },
              { number: "3", label: "Categories", icon: <Filter className="h-5 w-5" /> },
              { number: "100%", label: "Natural", icon: <Leaf className="h-5 w-5" /> },
              { number: "∞", label: "Memories", icon: <Heart className="h-5 w-5" /> }
            ].map((stat, index) => (
              <div key={index} className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="text-red-500">{stat.icon}</div>
                  <span className="text-2xl font-bold text-gray-900">{stat.number}</span>
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 cursor-pointer ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg scale-105'
                    : 'bg-white bg-opacity-70 backdrop-blur-sm text-gray-700 hover:bg-opacity-90 hover:scale-105 shadow-md'
                }`}
              >
                <span>{category.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  filter === category.id ? 'bg-white/30' : 'bg-gray-200'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Layout Toggle */}
          <div className="flex items-center space-x-3">
            <span className="text-gray-600 font-medium">Layout:</span>
            <div className="flex bg-white bg-opacity-70 backdrop-blur-sm rounded-lg p-1 shadow-md">
              <button
                onClick={() => setLayout('masonry')}
                className={`p-2 rounded-md transition-all duration-300 cursor-pointer ${
                  layout === 'masonry' 
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <Grid3X3 className="h-5 w-5" />
              </button>
              <button
                onClick={() => setLayout('grid')}
                className={`p-2 rounded-md transition-all duration-300 cursor-pointer ${
                  layout === 'grid' 
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <Grid2X2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className={`grid gap-6 ${
          layout === 'masonry' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                layout === 'masonry' 
                  ? index % 3 === 0 ? 'md:row-span-2' : ''
                  : 'aspect-square'
              }`}
              onClick={() => openModal(item)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200 text-sm">{item.description}</p>
                </div>
                
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <ZoomIn className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold capitalize">
                {item.category}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="relative max-w-5xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform z-10 cursor-pointer"
            >
              <X className="h-6 w-6 text-gray-800" />
            </button>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              
              <div className="p-6 bg-gradient-to-r from-red-50 via-yellow-50 to-green-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-700 text-lg">{selectedImage.description}</p>
                <div className="mt-4 flex items-center space-x-4">
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 py-2 rounded-full text-sm font-semibold capitalize">
                    {selectedImage.category}
                  </span>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Star className="h-4 w-4 fill-current text-yellow-500" />
                    <span className="text-sm">Premium Quality</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}