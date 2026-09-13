import logoText from '../../assets/logo-text.png'

const PRODUCT_LINKS = ['Home', 'Technologies', 'Projects']
const COMPANY_LINKS = ['About', 'Contact', 'Careers']
const LEGAL_LINKS = ['Privacy Policy', 'Terms of Service']
const SOCIAL_LINKS = ['GitHub', 'Twitter', 'LinkedIn']

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

function FooterBottomBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-t border-gray-200 py-5 sm:gap-x-4 sm:py-6">
      <p className="text-[11px] whitespace-nowrap text-gray-500 sm:text-xs">
        © 2026 Dev Stack. All rights reserved.
      </p>
      <div className="flex flex-nowrap items-center gap-4 sm:gap-5">
        <a
          href="#"
          className="text-[11px] whitespace-nowrap text-gray-500 transition-colors hover:text-gray-700 sm:text-xs"
        >
          Privacy
        </a>
        <a
          href="#"
          className="text-[11px] whitespace-nowrap text-gray-500 transition-colors hover:text-gray-700 sm:text-xs"
        >
          Terms
        </a>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-white">
      <div className="md:hidden">
        <div className="mx-auto h-px w-full bg-gray-200" />
      </div>

      <div className="hidden md:block">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <div className="max-w-sm">
              <a href="#" className="flex items-center">
                <img src={logoText} alt="Dev Stack" className="h-9 w-auto" />
              </a>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                Curated tools, technologies, and resources for developers
                building modern software.
              </p>
              <div className="mt-6 flex items-center gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-sm font-medium text-gray-600 transition-colors hover:text-purple-600"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            <FooterColumn title="Product" links={PRODUCT_LINKS} />
            <FooterColumn title="Company" links={COMPANY_LINKS} />
            <FooterColumn title="Legal" links={LEGAL_LINKS} />
          </div>

          <div className="mt-10">
            <FooterBottomBar />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer