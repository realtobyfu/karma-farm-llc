'use client'

import Hero from '@/components/Hero'
import AppCard from '@/components/AppCard'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />

      {/* Apps Section */}
      <section className="relative">
        {/* Decorative element */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent pointer-events-none" />
        
        <div className="container relative">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl mb-4">Our Apps</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple tools designed to bring communities together and make life a little easier.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
            <AppCard
              name="Karma Farm"
              description="Trade skills with neighbors using karma points instead of money."
              icon="🌱"
              status="available"
              appStoreUrl="#"
            />
            
            <AppCard
              name="Write-It-Down"
              description="Note-taking that syncs everywhere without the folder maze."
              icon="✏️"
              status="available"
              appStoreUrl="#"
            />
            
            <AppCard
              name="Focus Flow"
              description="Time tracking that shows where your hours actually go."
              icon="⏱️"
              status="coming-soon"
              releaseDate="Coming Q2 2025"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative bg-gradient-to-b from-white via-gray-50/30 to-white">
        {/* Decorative divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        
        <div className="container">
          <div className="text-container animate-fade-in">
            <h2 className="mb-10">Why we exist</h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Your neighbor might be great at fixing bikes. You might be great at cooking. But modern life makes it awkward to connect these skills.
              </p>
              <p className="text-lg text-gray-700">
                We're building simple tools to fix that. Useful apps that solve real problems.
              </p>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-lg text-gray-600">
                  Founded 2024. Small team. Growing steadily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}