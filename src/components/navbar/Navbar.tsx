import { useState } from 'react'
import AuthButtons from './AuthButtons'
import BrandLogo from './BrandLogo'
import MobileMenu from './MobileMenu'
import MobileMenuToggle from './MobileMenuToggle'
import NavLinks from './NavLinks'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-100 bg-white/80 backdrop-blur-md">
      <nav className="grid h-16 grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start">
          <MobileMenuToggle
            open={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          />
          <BrandLogo className="hidden md:flex" />
        </div>

        <div className="flex items-center justify-center">
          <BrandLogo className="flex md:hidden" />
          <NavLinks className="hidden md:flex" />
        </div>

        <div className="flex items-center justify-end">
          <AuthButtons />
        </div>
      </nav>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </header>
  )
}

export default Navbar