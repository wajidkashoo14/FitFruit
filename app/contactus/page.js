"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
  Send,
  Heart,
  Leaf,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-amber-50 to-lime-50">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-40 right-20 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-green-200 rounded-full blur-3xl opacity-15 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg">
            <Heart className="h-5 w-5 text-red-500 mr-2" />
            <span className="text-gray-800 font-semibold">
              We'd Love to Hear From You
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Get in
            <span className="block bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Have a question about our products or just want to say hi? We're
            here to help and would love to connect with you!
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="w-7 h-7" />,
                  title: "Email Us",
                  info: "fitfruitfoodsinfo@gmail.com",
                  subtitle: "We'll respond within 24 hours",
                  color: "from-red-500 to-red-600",
                  bgColor: "from-red-50 to-red-100",
                },
                {
                  icon: <Phone className="w-7 h-7" />,
                  title: "Call Us",
                  info: "+91 6005393956",
                  subtitle: "Mon-Fri, 9 AM - 6 PM IST",
                  color: "from-yellow-500 to-yellow-600",
                  bgColor: "from-yellow-50 to-yellow-100",
                },
                {
                  icon: <MapPin className="w-7 h-7" />,
                  title: "Visit Us",
                  info: "Barji, Harwan Rd, Srinagar, New Theed,, J&K, India",
                  subtitle: "Our headquarters in beautiful Kashmir",
                  color: "from-green-500 to-green-600",
                  bgColor: "from-green-50 to-green-100",
                },
              ].map((contact, index) => (
                <div key={index} className="group relative">
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${contact.color} rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300`}
                  ></div>
                  <div
                    className={`relative bg-gradient-to-br ${contact.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`bg-gradient-to-r ${contact.color} rounded-full p-3 shadow-lg`}
                      >
                        <div className="text-white">{contact.icon}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {contact.title}
                        </h3>
                        <p className="text-lg font-medium text-gray-800 mb-1">
                          {contact.info}
                        </p>
                        <p className="text-sm text-gray-600">
                          {contact.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Leaf className="h-6 w-6 text-green-500 mr-2" />
                Follow Our Journey
              </h3>
              <p className="text-gray-600 mb-6">
                Stay updated with our latest products, behind-the-scenes
                content, and healthy living tips!
              </p>
              <div className="flex space-x-4">
                {[
                  {
                    icon: <Instagram className="w-6 h-6" />,
                    href: "https://www.instagram.com/fitfruitfoods?igsh=MXBwYm5zMjRxNHQ3YQ==",
                    color: "from-pink-500 to-purple-500",
                    label: "Instagram",
                  },
                  {
                    icon: <Linkedin className="w-6 h-6" />,
                    href: "#",
                    color: "from-blue-500 to-blue-600",
                    label: "LinkedIn",
                  },
                  {
                    icon: <Facebook className="w-6 h-6" />,
                    href: "https://www.facebook.com/share/19Dw7oSTGB/",
                    color: "from-blue-600 to-blue-700",
                    label: "Facebook",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative bg-gradient-to-r ${social.color} p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                  >
                    <div className="text-white">{social.icon}</div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {social.label}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-3xl blur opacity-30"></div>
            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                      Send us a Message
                    </h2>
                    <p className="text-gray-600">
                      We'd love to hear your thoughts, questions, or feedback!
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-3 text-lg">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-4 text-lg focus:border-red-400 focus:outline-none transition-colors duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-3 text-lg">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-4 text-lg focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-3 text-lg">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-4 text-lg focus:border-green-400 focus:outline-none transition-colors duration-300 resize-none"
                        placeholder="Tell us what's on your mind..."
                      ></textarea>
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out! We've received your message and
                    will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="max-w-7xl mx-auto mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Us on the Map
            </h2>
            <p className="text-lg text-gray-600">
              Located in the heart of beautiful Kashmir, we're easy to reach and
              always happy to welcome visitors.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-3xl blur opacity-20"></div>
            <div className="relative bg-white rounded-3xl p-4 shadow-2xl overflow-hidden">
              {/* Map Container */}
              <div className="w-full h-96 md:h-[500px] rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d105641.69748527039!2d74.82420452583219!3d34.16416886738194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x38e187dfb5ff5ba3%3A0x357d98a64f5ecd84!2sBarji%2C%20Harwan%20Rd%2C%20Srinagar%2C%20New%20Theed%2C%20Jammu%20and%20Kashmir%20191121!3m2!1d34.1641964!2d74.9066057!5e0!3m2!1sen!2sin!4v1759057292645!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                  title="FitFruit Location Map"
                ></iframe>
              </div>

              {/* Map Info Cards */}
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border-l-4 border-red-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <MapPin className="h-6 w-6 text-red-500 mr-2" />
                    Our Location
                  </h3>
                  <p className="text-gray-700 mb-2 font-medium">
                  Barji, Harwan Rd, Srinagar, New Theed
                  </p>
                  <p className="text-gray-700 mb-2">Jammu & Kashmir, India</p>
                  <p className="text-gray-600 text-sm">
                    In the heart of Kashmir's beautiful Srinagar city,
                    surrounded by the region's famous apple orchards.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <Phone className="h-6 w-6 text-green-500 mr-2" />
                    Visit Us
                  </h3>
                  <p className="text-gray-700 mb-2 font-medium">
                    Office Hours:
                  </p>
                  <p className="text-gray-700 mb-1">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-700 mb-2">
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                  <p className="text-gray-600 text-sm">
                    Call ahead to schedule a visit and get a behind-the-scenes
                    look at our apple chip production!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Try Our Apple Chips?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Don't forget to check out our delicious, healthy apple chips while
              you're here!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Shop Now
              </Link>
              <Link  href='/' className="border-2 border-gray-300 hover:border-red-400 text-gray-700 hover:text-red-600 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
