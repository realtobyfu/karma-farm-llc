import Link from 'next/link'

interface AppCardProps {
  name: string
  description: string
  icon: string
  status: 'available' | 'coming-soon'
  appStoreUrl?: string
  releaseDate?: string
}

const appColors = {
  'Karma Farm': 'from-green-50 to-green-100/50 border-green-200 hover:border-green-300',
  'Write-It-Down': 'from-blue-50 to-blue-100/50 border-blue-200 hover:border-blue-300',
  'Focus Flow': 'from-purple-50 to-purple-100/50 border-purple-200 hover:border-purple-300'
}

const iconColors = {
  'Karma Farm': 'bg-green-100 text-green-600',
  'Write-It-Down': 'bg-blue-100 text-blue-600',
  'Focus Flow': 'bg-purple-100 text-purple-600'
}

export default function AppCard({
  name,
  description,
  icon,
  status,
  appStoreUrl,
  releaseDate
}: AppCardProps) {
  const colorClasses = appColors[name as keyof typeof appColors] || 'from-gray-50 to-gray-100/50 border-gray-200 hover:border-gray-300'
  const iconColorClasses = iconColors[name as keyof typeof iconColors] || 'bg-gray-100 text-gray-600'

  return (
    <div className={`relative bg-gradient-to-br ${colorClasses} border rounded-xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group`}>
      {/* Icon with background */}
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${iconColorClasses} mb-6 transition-transform duration-300 group-hover:scale-110`}>
        <span className="text-3xl">{icon}</span>
      </div>
      
      {/* App name */}
      <h3 className="text-2xl font-medium mb-3">{name}</h3>
      
      {/* Description */}
      <p className="text-gray-700 mb-6 leading-relaxed">
        {description}
      </p>
      
      {/* Status/Link */}
      <div className="mt-auto">
        {status === 'available' && appStoreUrl ? (
          <Link 
            href={appStoreUrl} 
            className="inline-flex items-center text-gray-900 font-medium hover:gap-3 transition-all duration-200 gap-2"
          >
            Available on iOS 
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        ) : (
          <p className="text-gray-500 font-medium">
            {releaseDate || 'Coming Soon'}
          </p>
        )}
      </div>
    </div>
  )
}