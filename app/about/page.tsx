import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              About Karma Farm LLC
            </h1>
            <p className="text-lg text-text-secondary">
              We're on a mission to build stronger communities through innovative technology 
              that brings people together and makes helping others rewarding.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-text-primary mb-6">Our Story</h2>
                <p className="text-text-secondary mb-4">
                  Karma Farm LLC was born from a simple observation: in our increasingly connected world, 
                  people feel more isolated than ever. We saw neighbors living side by side without 
                  knowing each other's names, and communities losing the spirit of mutual support that 
                  once defined them.
                </p>
                <p className="text-text-secondary mb-4">
                  Founded in 2024, we set out to change this narrative. Our first app, Karma Farm, 
                  reimagines how communities interact by making it fun and rewarding to help your neighbors. 
                  By gamifying acts of kindness and skill sharing, we're rebuilding the village one 
                  connection at a time.
                </p>
                <p className="text-text-secondary">
                  Today, we continue to develop applications that prioritize human connection, 
                  community building, and making everyday life a little bit better for everyone.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/logo.png"
                  alt="Karma Farm Logo"
                  width={300}
                  height={300}
                  className="animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
              Our Core Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🤝</span>
                </div>
                <h3 className="font-semibold text-xl text-text-primary mb-2">Community First</h3>
                <p className="text-text-secondary text-sm">
                  Every decision we make prioritizes building stronger, more connected communities.
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-primary-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">✨</span>
                </div>
                <h3 className="font-semibold text-xl text-text-primary mb-2">Innovation with Purpose</h3>
                <p className="text-text-secondary text-sm">
                  We innovate not for the sake of technology, but to solve real human problems.
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-primary-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🌍</span>
                </div>
                <h3 className="font-semibold text-xl text-text-primary mb-2">Positive Impact</h3>
                <p className="text-text-secondary text-sm">
                  We measure success by the positive difference we make in people's lives.
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-primary-purple bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🛡️</span>
                </div>
                <h3 className="font-semibold text-xl text-text-primary mb-2">Trust & Safety</h3>
                <p className="text-text-secondary text-sm">
                  Creating safe, trusted environments where everyone feels welcome.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Placeholder) */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-text-secondary mb-12">
              We're a passionate team of developers, designers, and community builders 
              working together to create meaningful technology.
            </p>
            
            <div className="bg-background-secondary rounded-2xl p-12">
              <p className="text-text-secondary">
                Our team is growing! If you're passionate about building community-focused 
                technology and want to make a real difference, we'd love to hear from you.
              </p>
              <a href="/contact" className="btn-primary inline-block mt-6">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-green to-primary-blue text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Join Us in Building Better Communities
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Whether you're a user, partner, or potential team member, there's a place 
              for you in the Karma Farm community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/apps" className="btn-secondary bg-white text-primary-green hover:bg-gray-100">
                Try Our Apps
              </a>
              <a href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-green">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}