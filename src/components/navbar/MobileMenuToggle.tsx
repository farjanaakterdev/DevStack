type MobileMenuToggleProps = {
  open: boolean
  onClick: () => void
}

function MobileMenuToggle({ open, onClick }: MobileMenuToggleProps) {
  return (
    <button
      type="button"
      aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
      aria-expanded={open}
      className="p-2 text-gray-700 transition-colors hover:text-purple-600 md:hidden"
      onClick={onClick}
    >
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        {open ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  )
}

export default MobileMenuToggle