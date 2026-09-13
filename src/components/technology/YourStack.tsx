import type { Technology } from './types'

type YourStackProps = {
  selected: Technology[]
  onRemove: (technology: Technology) => void
}

function YourStack({ selected, onRemove }: YourStackProps) {
  return (
    <aside className="lg:sticky lg:top-24 rounded-2xl border border-purple-100 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>
      <p className="mt-1 text-sm text-gray-500">
        {selected.length === 1
          ? '1 Technology Selected'
          : `${selected.length} Technology Selected`}
      </p>

      {selected.length === 0 ? (
        <p className="mt-6 rounded-xl bg-purple-50 px-4 py-6 text-center text-sm text-gray-500">
          No technologies yet. Add some from the grid to build your stack.
        </p>
      ) : (
        <ul className="mt-4 flex flex-col gap-2">
          {selected.map((technology) => (
            <li
              key={technology.id}
              className="flex items-center gap-3 rounded-xl border border-purple-100 px-3 py-2"
            >
              <img
                src={technology.icon}
                alt={`${technology.name} icon`}
                className="h-8 w-8 rounded-lg bg-purple-50 p-1 object-contain"
                loading="lazy"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-gray-900">
                  {technology.name}
                </p>
                <p className="truncate text-xs text-gray-500">
                  {technology.category}
                </p>
              </div>
              <button
                type="button"
                aria-label={`Remove ${technology.name} from stack`}
                className="rounded-full p-1.5 text-gray-400 transition-colors hover:bg-rose-50 hover:text-rose-600"
                onClick={() => onRemove(technology)}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}

export default YourStack