const SOCIAL_LINKS = ['GitHub', 'Twitter', 'LinkedIn']

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand text-sm font-bold text-white">
              DS
            </span>
            <span className="text-lg font-semibold tracking-tight text-gray-900">
              Dev <span className="text-pink-600">Stack</span>
            </span>
          </a>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-500">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="mt-6 flex items-center gap-3 text-sm font-medium text-gray-600">
            {SOCIAL_LINKS.map((social, index) => (
              <div key={social} className="flex items-center gap-3">
                {index > 0 && <span className="text-gray-300">•</span>}
                <a href="#" className="transition-colors hover:text-purple-600">
                  {social}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl border-t border-gray-200" />

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-sm text-gray-400">
            <a href="#" className="transition-colors hover:text-gray-700">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-gray-700">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer