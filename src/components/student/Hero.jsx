import React from 'react'
import assets from '../../assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="text-center">
          {/* Main Heading */}
          <div className="relative inline-block">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              <span className="block mb-2">Unlock your</span>
              <span className="block relative">
                <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  potential
                </span>
                <img 
                  src={assets.sketch} 
                  alt="sketch decoration" 
                  className="absolute -top-2 -right-8 w-16 h-16 md:w-20 md:h-20 opacity-70 animate-bounce"
                />
              </span>
              <span className="block mt-2">with Kudzidza</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Learn anytime, from anywhere. 
            <br className="hidden md:block" />
            Real skills. Real mentors. Real success.
          </p>

          {/* Search Bar */}
          <div className="flex justify-center mb-12 py-6">
            <SearchBar />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-gray-600">Learners Enrolled</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Courses Offered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-gray-600">Top Mentors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">4.9</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-8 hidden lg:block">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-float">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">Live Classes</span>
          </div>
        </div>
      </div>

      <div className="absolute top-1/3 right-8 hidden lg:block">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-float delay-300">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">Expert Mentors</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-1/3 left-16 hidden lg:block">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-float delay-700">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">Certified Courses</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
