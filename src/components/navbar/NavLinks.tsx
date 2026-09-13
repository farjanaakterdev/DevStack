import { NAV_LINKS } from './links'

type NavLinksProps = {
  className?: string
}

function NavLinks({ className = '' }: NavLinksProps) {
  return (
    <ul className={`flex items-center gap-8 ${className}`}>
      {NAV_LINKS.map((link) => (
        <li key={link}>
          <a
            href="#"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-purple-600"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks