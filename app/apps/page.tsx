import Link from 'next/link'

export default function AppsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="text-container">
          <h1 className="text-4xl mb-12">Apps</h1>
          
          {/* Karma Farm */}
          <section className="mb-16">
            <h2 className="text-2xl mb-4">🌱 Karma Farm</h2>
            <p className="text-gray-600 mb-2">Available on iOS</p>
            
            <p className="text-lg mb-6">
              A skill-sharing app for local communities. Help your neighbors, earn karma points, spend them on services you need.
            </p>
            
            <h3 className="text-xl mb-4">How it works:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-6">
              <li>List skills you can offer</li>
              <li>Help neighbors and earn karma</li>
              <li>Spend karma on services from others</li>
              <li>Build a stronger local community</li>
            </ol>
            
            <Link href="#" className="text-blue hover:underline">
              Download on App Store →
            </Link>
          </section>
          
          {/* Write-It-Down */}
          <section className="mb-16 border-t border-gray-200 pt-16">
            <h2 className="text-2xl mb-4">✏️ Write-It-Down</h2>
            <p className="text-gray-600 mb-2">Available on iOS</p>
            
            <p className="text-lg mb-6">
              Note-taking that syncs everywhere without the folder maze. Simple, fast, reliable.
            </p>
            
            <h3 className="text-xl mb-4">How it works:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-6">
              <li>Write notes in plain text or markdown</li>
              <li>Everything syncs automatically</li>
              <li>Search finds anything instantly</li>
              <li>Works offline, syncs when connected</li>
            </ol>
            
            <Link href="#" className="text-blue hover:underline">
              Download on App Store →
            </Link>
          </section>
          
          {/* Focus Flow */}
          <section className="border-t border-gray-200 pt-16">
            <h2 className="text-2xl mb-4">⏱️ Focus Flow</h2>
            <p className="text-gray-600 mb-2">Coming Q2 2025</p>
            
            <p className="text-lg mb-6">
              Time tracking that shows where your hours actually go. No judgement, just data.
            </p>
            
            <h3 className="text-xl mb-4">How it will work:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Start timer when you begin a task</li>
              <li>Categorize your activities</li>
              <li>See weekly and monthly reports</li>
              <li>Identify where time gets lost</li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  )
}