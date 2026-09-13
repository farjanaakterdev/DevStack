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

function Footer() {
  return (
    <footer className="border-t border-purple-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="max-w-sm">
            <a href="#" className="flex items-center">
              <img src={logoText} alt="Dev Stack" className="h-9 w-auto" />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              Curated tools, technologies, and resources for developers building
              modern software.
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