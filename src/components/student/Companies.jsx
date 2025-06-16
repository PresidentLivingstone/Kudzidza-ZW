import React from 'react'
import assets from '../../assets'

const Companies = () => {
  const companies = [
    { logo: assets.microsoft_logo, name: 'Microsoft', alt: 'Microsoft Logo' },
    { logo: assets.accenture_logo, name: 'Accenture', alt: 'Accenture Logo' },
    { logo: assets.walmart_logo, name: 'Walmart', alt: 'Walmart Logo' },
    { logo: assets.adobe_logo, name: 'Adobe', alt: 'Adobe Logo' },
    { logo: assets.paypal_logo, name: 'PayPal', alt: 'PayPal Logo' }
  ]

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            Trusted by learners from
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>


        {/* Marquee Animation (Large Screens Only) */}
        <div className="hidden lg:block mt-16">
          <div className="overflow-hidden">
            <div className="flex animate-marquee space-x-16">
              {[...companies, ...companies].map((company, index) => (
                <div key={`ticker-${index}`} className="flex-shrink-0">
                  <img
                    src={company.logo}
                    alt={company.alt}
                    className="w-24 h-auto object-contain opacity-60"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics Row */}
        <div className="mt-16 pt-12 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                10,000+
              </div>
              <p className="text-gray-600">Professionals Trained</p>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                500+
              </div>
              <p className="text-gray-600">Companies Partner</p>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                95%
              </div>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Style */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default Companies
