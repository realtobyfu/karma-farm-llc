'use client'

import Hero from '@/components/Hero'
import AppCard from '@/components/AppCard'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />

      {/* Featured Apps Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white"></div>
        <div className="container relative z-10">
          <div className="text-center mb-16 animate-slide-in-bottom">
            <span className="text-primary-green font-medium text-sm uppercase tracking-wider">Our Products</span>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-gray-900 mt-3 mb-4">
              Apps That Make a <span className="gradient-text">Difference</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each application is thoughtfully designed to solve real problems and create meaningful connections in your daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AppCard
              name="Karma Farm"
              description="Connect with neighbors, share skills, and earn karma by helping others in your community."
              icon="🌱"
              color="bg-gradient-to-br from-primary-green to-emerald-500"
              features={[
                "Location-based skill sharing",
                "Karma reward system",
                "Real-time chat",
                "Task marketplace"
              ]}
              status="available"
              appStoreUrl="#"
            />
            
            <AppCard
              name="Write-It-Down"
              description="A beautiful, intuitive note-taking app that helps you capture and organize your thoughts effortlessly."
              icon="✏️"
              color="bg-gradient-to-br from-primary-blue to-cyan-500"
              features={[
                "Rich text editing",
                "Cloud sync",
                "Folder organization",
                "Quick search"
              ]}
              status="coming-soon"
            />
            
            <AppCard
              name="Focus Flow"
              description="Master your time with our intelligent time management app that helps you stay productive and balanced."
              icon="⏱️"
              color="bg-gradient-to-br from-primary-purple to-pink-500"
              features={[
                "Pomodoro timer",
                "Task tracking",
                "Analytics dashboard",
                "Focus modes"
              ]}
              status="coming-soon"
            />
          </div>

          <div className="text-center mt-16">
            <Link href="/apps" className="btn-primary group">
              <span className="relative z-10 flex items-center justify-center gap-2">
                View All Apps
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section with Bento Grid */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="absolute inset-0 bg-pattern-dots opacity-40"></div>
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary-green font-medium text-sm uppercase tracking-wider">Our Mission</span>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-gray-900 mt-3 mb-4">
              Technology with a <span className="gradient-text">Purpose</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Large feature card */}
            <div className="lg:col-span-2 lg:row-span-2 group">
              <div className="h-full card hover:scale-[1.02] transition-transform duration-500">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-green to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Community First</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      We believe in the power of human connection. Every feature we build, every design decision we make, starts with one question: "How does this bring people together?"
                    </p>
                  </div>
                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Building stronger neighborhoods</span>
                      <svg className="w-5 h-5 text-primary-green group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium feature cards */}
            <div className="lg:col-span-2 group">
              <div className="h-full card hover:scale-[1.02] transition-transform duration-500">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-blue to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-xl">💡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation That Matters</h3>
                    <p className="text-gray-600">Creating unique solutions for everyday challenges</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 group">
              <div className="h-full card hover:scale-[1.02] transition-transform duration-500">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-purple to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-xl">🌟</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Positive Impact</h3>
                    <p className="text-gray-600">Making a real difference in people's lives</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats cards */}
            <div className="group">
              <div className="h-full card hover:scale-[1.02] transition-transform duration-500 text-center">
                <div className="text-4xl font-display font-extrabold gradient-text mb-2">3+</div>
                <p className="text-gray-600">Innovative Apps</p>
              </div>
            </div>

            <div className="group">
              <div className="h-full card hover:scale-[1.02] transition-transform duration-500 text-center">
                <div className="text-4xl font-display font-extrabold gradient-text mb-2">10k+</div>
                <p className="text-gray-600">Happy Users</p>
              </div>
            </div>

            <div className="lg:col-span-2 group">
              <div className="h-full card hover:scale-[1.02] transition-transform duration-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to join us?</h3>
                    <p className="text-gray-600">Start making meaningful connections today.</p>
                  </div>
                  <Link href="/contact" className="btn-primary !px-6 !py-3">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary-green font-medium text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-gray-900 mt-3 mb-4">
              What Our Users <span className="gradient-text">Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "Karma Farm has completely changed how I interact with my neighborhood. I've met amazing people and learned new skills!",
                author: "Sarah M.",
                role: "Karma Farm User",
                avatar: "S"
              },
              {
                quote: "The design and user experience is incredible. It feels like an app that actually cares about its users.",
                author: "Michael R.",
                role: "Beta Tester",
                avatar: "M"
              },
              {
                quote: "I love how these apps focus on bringing people together rather than keeping them glued to their screens.",
                author: "Emily L.",
                role: "Community Leader",
                avatar: "E"
              }
            ].map((testimonial, index) => (
              <div key={index} className="group">
                <div className="glass-card h-full hover:scale-[1.02] transition-transform duration-500">
                  <div className="flex items-start gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-green to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-green via-emerald-500 to-primary-blue"></div>
        <div className="absolute inset-0 bg-pattern-dots-light"></div>
        
        <div className="container relative z-10 text-center text-white">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold mb-6">
            Ready to Transform Your Community?
          </h2>
          <p className="text-xl sm:text-2xl mb-10 max-w-3xl mx-auto text-white/90">
            Join thousands of users who are already making meaningful connections.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/apps" className="inline-flex items-center justify-center gap-2 bg-white text-primary-green font-semibold py-4 px-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 group">
              <span>Download Our Apps</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-2xl border border-white/20 hover:bg-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}