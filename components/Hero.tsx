import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-32 pb-24 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-green-50/20 -z-10" />
      
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl mb-8 leading-tight">
              We make apps that help neighbors help each other.
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Currently running Karma Farm and Write-It-Down on iOS.
            </p>
            <p className="text-xl text-gray-600">
              Working on a time management app.
            </p>
          </div>
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <Image
                src="/logo.png"
                alt="Karma Farm Logo"
                fill
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}