const PRODUCT_LINKS = ['Features', 'Pricing', 'Integrations', 'Roadmap']
const COMPANY_LINKS = ['About', 'Blog', 'Careers', 'Contact']
const LEGAL_LINKS = ['Privacy Policy', 'Terms of Service', 'Cookie Policy']

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    href: '#',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.1 5.94a9.6 9.6 0 0 1-2.71.74 4.73 4.73 0 0 0 2.08-2.61 9.47 9.47 0 0 1-3 1.15 4.72 4.72 0 0 0-8.04 4.3A13.4 13.4 0 0 1 1.64 4.72a4.72 4.72 0 0 0 1.46 6.3 4.7 4.7 0 0 1-2.14-.59v.06a4.72 4.72 0 0 0 3.79 4.63 4.77 4.77 0 0 1-2.13.08 4.73 4.73 0 0 0 4.41 3.28A9.47 9.47 0 0 1 1.17 19.9a13.35 13.35 0 0 0 7.23 2.12c8.68 0 13.42-7.19 13.42-13.42 0-.2 0-.41-.01-.61A9.6 9.6 0 0 0 23.1 5.94z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
]

type FooterColumnProps = {
  title: string
  links: string[]
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm text-gray-600 transition-colors hover:text-purple-600"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-purple-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <a href="#" className="flex items-center gap-2">
              <img src="/favicon.svg" alt="Dev Stack logo" className="h-9 w-9" />
              <span className="text-lg font-bold tracking-tight text-gray-900">
                Dev<span className="text-gradient-brand font-normal">Stack</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              A modern development stack to help you discover, explore, and
              combine the best technologies for your next project.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="rounded-full border border-purple-100 p-2.5 text-gray-500 transition-colors hover:border-transparent hover:bg-gradient-brand hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3 lg:max-w-lg">
            <FooterColumn title="Product" links={PRODUCT_LINKS} />
            <FooterColumn title="Company" links={COMPANY_LINKS} />
            <FooterColumn title="Legal" links={LEGAL_LINKS} />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-purple-100 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Dev Stack. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-gray-500 transition-colors hover:text-purple-600"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 transition-colors hover:text-purple-600"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer