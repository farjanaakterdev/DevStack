import { NAV_LINKS } from './links'

type MobileMenuProps = {
  onClose: () => void
}

function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="border-t border-purple-100 bg-white px-4 pb-4 pt-2 md:hidden">
      <ul className="flex flex-col gap-1">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-purple-50 hover:text-purple-600"
              onClick={onClose}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileMenu