const TEXT_BUTTON_CLASSES =
  'px-2 py-1.5 text-sm font-semibold text-gray-700 transition-colors hover:text-purple-600 sm:px-3'
const PILL_BUTTON_CLASSES =
  'rounded-full bg-purple-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-purple-700 sm:px-5'

function AuthButtons() {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <a href="#" className={TEXT_BUTTON_CLASSES}>
        Sign In
      </a>
      <a href="#" className={PILL_BUTTON_CLASSES}>
        Sign Up
      </a>
    </div>
  )
}

export default AuthButtons