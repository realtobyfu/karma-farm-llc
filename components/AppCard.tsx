import Image from 'next/image'
import Link from 'next/link'

interface AppCardProps {
  name: string
  description: string
  icon?: string
  color: string
  features: string[]
  status: 'available' | 'coming-soon'
  appStoreUrl?: string
}

export default function AppCard({
  name,
  description,
  icon,
  color,
  features,
  status,
  appStoreUrl
}: AppCardProps) {

  return (
    <div className="card group hover:scale-[1.02] transition-all duration-500">
      <div className="relative">
        {/* Status Badge */}
        {status === 'coming-soon' && (
          <div className="absolute -top-3 -right-3 z-10">
            <div className="bg-gradient-to-r from-primary-orange to-pink-500 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg animate-pulse-glow">
              Coming Soon
            </div>
          </div>
        )}

        {/* Icon and Header */}
        <div className="mb-6">
          <div className={`w-20 h-20 ${color} rounded-3xl flex items-center justify-center text-white text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
            {icon}
          </div>
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">{name}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Features */}
        <div className="mb-8">
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Features</h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li 
                key={index} 
                className="flex items-start gap-3 group/item opacity-80 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300"
                style={{ 
                  transitionDelay: `${index * 50}ms`
                }}
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary-green to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-gray-700 group-hover/item:text-gray-900 transition-colors">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="pt-6 border-t border-gray-100">
          {status === 'available' && appStoreUrl ? (
            <Link
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white font-semibold py-4 px-6 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 group"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span>Download on App Store</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          ) : (
            <div className="text-center">
              <p className="text-gray-500 font-medium mb-2">Get notified when it launches</p>
              <button className="text-primary-green font-semibold hover:text-primary-blue transition-colors group">
                <span className="flex items-center gap-2">
                  Join the waitlist
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}