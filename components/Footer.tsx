export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {year} Shridhar D&apos;s Project. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Built with Next.js &amp; Cosmic
          </p>
        </div>
      </div>
    </footer>
  )
}