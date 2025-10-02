"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Leaf, ShoppingBag, Heart } from "lucide-react";
import Link from "next/Link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/ourstory" },
    { name: "Our Team", href: "/ourteam" },
    { name: "Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contactus" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-gradient-to-r from-red-50/80 via-amber-50/80 to-lime-50/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
          <Image  src='/icon.png' height={300} width={200} objectFit="contain" alt="logo" className="h-[300px] w-[220px] "/> 
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`relative font-medium transition-all duration-300 group ${
                      isScrolled
                        ? "text-gray-700 hover:text-gray-900"
                        : "text-gray-800 hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link href='/products' className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 cursor-pointer">
              <ShoppingBag className="h-4 w-4" />
              <span>Shop Now</span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled ? "hover:bg-gray-100" : "hover:bg-white/50"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X
                className={`w-6 h-6 transition-colors duration-300 ${
                  isScrolled ? "text-gray-700" : "text-gray-800"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 transition-colors duration-300 ${
                  isScrolled ? "text-gray-700" : "text-gray-800"
                }`}
              />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-200`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex items-center space-x-3 p-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:via-yellow-50 hover:to-green-50 hover:text-gray-900 transition-all duration-300 group"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="font-medium">{link.name}</span>
            </a>
          ))}

          {/* Mobile CTA */}
          <div className="pt-4 border-t border-gray-200">
            <button
              className="w-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 hover:from-red-600 hover:via-yellow-500 hover:to-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Shop Our Apple Chips</span>
            </button>

            {/* Mobile Tagline */}
            <div className="text-center mt-4 p-4 bg-gradient-to-r from-red-50 via-yellow-50 to-green-50 rounded-xl">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Heart className="h-4 w-4 text-red-500" />
                <span className="text-sm font-medium text-gray-600">
                  Made with Love
                </span>
              </div>
              <p className="text-xs text-gray-500 italic">
                Zero Junk. All Joy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
