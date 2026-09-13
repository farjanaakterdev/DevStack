import type { Technology } from './types'

type YourStackProps = {
  selected: Technology[]
  onRemove: (technology: Technology) => void
  onRemoveAll: () => void
}

function YourStack({ selected, onRemove, onRemoveAll }: YourStackProps) {
  const isCountPlural = selected.length !== 1

  return (
    <aside className="lg:sticky lg:top-24 rounded-2xl border border-purple-100 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>
      <p className="mt-1 text-sm text-gray-500">
        {selected.length === 0
          ? 'No technologies selected yet'
          : `${selected.length} Technology${isCountPlural ? 's' : ''} Selected`}
      </p>

      {selected.length === 0 ? (
        <div className="mt-6 rounded-2xl border-2 border-dashed border-purple-200 bg-purple-50/50 px-6 py-10 text-center">
          <p className="text-sm text-gray-500">Your stack is empty</p>
        </div>
      ) : (
        <>
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
          <button
            type="button"
            className="mt-4 w-full rounded-full border border-rose-200 px-5 py-2.5 text-sm font-semibold text-rose-600 transition-colors hover:bg-rose-50"
            onClick={onRemoveAll}
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  )
}

export default YourStack