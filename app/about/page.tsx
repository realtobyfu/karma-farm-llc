export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="text-container">
          <h1 className="text-4xl mb-12">About</h1>
          
          <p className="text-lg mb-6">
            Karma Farm LLC is a small software company focused on building community-oriented mobile applications.
          </p>
          
          <p className="text-lg mb-6">
            We noticed that neighbors often have skills that could help each other - one person might be great at fixing bikes, another at cooking, someone else at tutoring math. But modern life makes it awkward to connect these skills. That's why we built Karma Farm, an app that makes it easy and rewarding to help your neighbors.
          </p>
          
          <p className="text-lg mb-6">
            Since launching in 2024, we've been steadily growing and working on new tools that solve real problems for real people. No venture capital, no growth hacking, just useful apps that people actually want to use.
          </p>
          
          <h2 className="text-2xl mt-12 mb-6">Current apps:</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
            <li>Karma Farm: Skill-sharing for communities</li>
            <li>Write-It-Down: Simple note-taking that works</li>
          </ul>
          
          <p className="text-lg mb-6">
            We believe in sustainable growth and building products people actually want to use.
          </p>
          
          <p className="text-lg">
            Contact: <a href="mailto:3tobiasfu@gmail.com" className="text-blue hover:underline">3tobiasfu@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}