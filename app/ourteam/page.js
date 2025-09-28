import React from "react";
import { Heart, Leaf, Award, Coffee } from "lucide-react";
import Image from "next/image";

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-25">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-500 to-red-700">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Meet the Minds
              <span className="block bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text text-transparent">
                Growing FitFruit Foods
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
              Two passionate visionaries who transformed a simple love for
              apples into a revolutionary snacking experience
            </p>
            <div className="mt-8 flex justify-center">
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-6 py-3 backdrop-blur-sm">
                <Heart className="h-5 w-5 text-red-200" />
                <span className="text-black font-medium">
                  Crafted with passion since 2024
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <div className="w-32 h-32 bg-yellow-300 rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-20 right-20 opacity-20">
          <div className="w-48 h-48 bg-red-300 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Team Members */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Co-Founder 1 */}
          <div className="group">
            <div className="relative">
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <div className="relative mb-8 flex justify-center items-center">
                  <div className="relative">
                    <Image
                      src="/founder1.jpg"
                      alt="Founder 2"
                      width={300}
                      height={300}
                      // className="rounded-full object-cover"
                      className= 'h-[300px] w-[300px] rounded-full object-cover'
                    />
                    <div className="absolute -top-4 -right-4 bg-green-500 rounded-full p-3 shadow-lg">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Faizan Abass Wani
                  </h3>
                  <p className="text-xl text-amber-600 font-semibold mb-4">
                    Co-Founder
                  </p>
                </div>

                <div className="text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Faizan Abass Wani began his career in Marketing Management,
                    gaining expertise in brand strategy and business growth
                    before transitioning into the U.S. Federal Recruitment
                    industry.
                  </p>
                  <p className="mb-4">
                    Holding a Master’s in Marketing Management, he now applies
                    his business insight and leadership skills to co-building
                    Fitfruit Foods, an emerging FMCG venture.
                  </p>
                  <p className="text-amber-700 font-medium">
                    His focus is on creating healthy snack alternatives while
                    supporting local orchards and generating employment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Co-Founder 2 */}
          <div className="group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <div className="relative mb-8 flex justify-center">
                  <Image
                    src="/founder2.jpg"
                    alt="Founder 2"
                    width={300}
                    height={300}
                    className= 'h-[300px] w-[300px] rounded-full object-cover'
                  />
                  <div className="absolute -top-4 -right-4 bg-blue-500 rounded-full p-3 shadow-lg">
                    <Coffee className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Sahil Ali
                  </h3>
                  <p className="text-xl text-red-600 font-semibold mb-4">
                    Co-Founder
                  </p>
                </div>

                <div className="text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Sahil, a mechanical engineering graduate from Visvesvaraya
                    Technological University, Karnataka, brings 5 years of
                    experience from Bangalore’s fast-paced startup ecosystem.
                  </p>
                  <p className="mb-4">
                    With expertise in product design, prototyping, and scaling
                    products from concept to market, he now drives growth and
                    innovation as co-founder of Fitfruit Foods.
                  </p>
                  <p className="text-red-700 font-medium">
                    As co-founder of Fitfruit Foods, Sahil promotes healthy
                    snacking, empowers communities, and supports sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Story Section */}
        <div className="mt-24">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-orange-100 rounded-3xl"></div>
            <div className="relative bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Story Together
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
              </div>

              <div className="max-w-4xl mx-auto text-center">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Our story starts in 2014 when Faizan and Sahil became friends
                  in 11th grade. We went through high school together, sharing
                  interests and studying for exams. Although we chose different
                  paths – Faizan in business studies and Sahil in engineering –
                  our entrepreneurial spirit stayed strong. As we noticed people
                  wanting healthier options, we saw a chance to make a
                  difference. We were inspired by the challenges faced by
                  orchard owners and decided to start Fitfruit Foods. Our goal
                  is to create healthier snacks and drinks, driven by our
                  friendship and commitment to a better future.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Leaf className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      100% Natural
                    </h3>
                    <p className="text-gray-600">
                      No artificial anything, just pure apple goodness
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Made with Love
                    </h3>
                    <p className="text-gray-600">
                      Every batch crafted with care and attention
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Award Winning
                    </h3>
                    <p className="text-gray-600">
                      Recognized for taste and sustainability
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to taste the difference?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers who've discovered what real apple
            chips should taste like
          </p>
          <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Shop Our Apple Chips
          </button>
        </div>
      </div>
    </div>
  );
}
