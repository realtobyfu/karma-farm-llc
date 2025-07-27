export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="text-container">
          <h1 className="text-4xl mb-12">Contact</h1>
          
          <p className="text-lg mb-6">
            Questions? Partnerships? Bug reports?
          </p>
          
          <p className="text-lg mb-8">
            Email: <a href="mailto:3tobiasfu@gmail.com" className="text-blue hover:underline">3tobiasfu@gmail.com</a><br />
            We typically respond within 1-2 business days.
          </p>
          
          <div className="border-t border-gray-200 pt-8">
            <p className="text-lg mb-4">For app support, please include:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>App name and version</li>
              <li>Device type</li>
              <li>Description of the issue</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}