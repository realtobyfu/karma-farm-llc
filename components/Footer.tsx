export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container py-8">
        <div className="text-center">
          <p className="text-gray-600">
            © {currentYear} Karma Farm LLC
          </p>
        </div>
      </div>
    </footer>
  )
}