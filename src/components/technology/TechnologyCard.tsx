import type { Technology } from './types'

type TechnologyCardProps = {
  technology: Technology
  isSelected: boolean
  onAdd: (technology: Technology) => void
}

const DIFFICULTY_STYLES: Record<Technology['difficulty'], string> = {
  'Beginner-Friendly': 'bg-emerald-50 text-emerald-700',
  Intermediate: 'bg-amber-50 text-amber-700',
  Advanced: 'bg-rose-50 text-rose-700',
}

function TechnologyCard({ technology, isSelected, onAdd }: TechnologyCardProps) {
  return (
    <>
      <article className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:hidden">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-emerald-50 p-2.5">
              <img
                src={technology.icon}
                alt={`${technology.name} icon`}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </span>
            <h3 className="text-xl font-bold text-gray-900">{technology.name}</h3>
          </div>
          <span className="shrink-0 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
            {technology.badge}
          </span>
        </div>

        <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
          {technology.description}
        </p>

        <div className="my-4 border-t border-gray-200" />

        <div className="flex items-center justify-between gap-2">
          <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
            {technology.category}
          </span>
          <span className="text-sm text-gray-500">{technology.difficulty}</span>
          <span className="flex items-center gap-1 text-sm font-semibold text-orange-600">
            <svg className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 1l2.6 5.3 5.9.9-4.3 4.1 1 5.9L10 14.9l-5.2 2.3 1-5.9L1.5 7.2l5.9-.9L10 1z" />
            </svg>
            {technology.rating}
          </span>
        </div>

        <button
          type="button"
          aria-disabled={isSelected}
          onClick={() => onAdd(technology)}
          className={`relative left-1/2 mt-3 h-11 w-screen -translate-x-1/2 rounded-[10px] text-sm font-semibold text-white transition-colors ${
            isSelected
              ? 'cursor-not-allowed bg-emerald-100 text-emerald-700'
              : 'bg-gray-900 hover:bg-gray-800'
          }`}
        >
          {isSelected ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </article>

      <article className="hidden flex-col rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:flex">
        <div className="flex items-start justify-between">
          <img
            src={technology.icon}
            alt={`${technology.name} icon`}
            className="h-12 w-12 rounded-xl bg-purple-50 p-2 object-contain"
            loading="lazy"
          />
          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
            {technology.badge}
          </span>
        </div>

        <h3 className="mt-4 text-lg font-bold text-gray-900">{technology.name}</h3>

        <div className="mt-2">
          <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600">
            {technology.category}
          </span>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
          {technology.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${DIFFICULTY_STYLES[technology.difficulty]}`}
          >
            {technology.difficulty}
          </span>
          <span className="flex items-center gap-1 text-sm font-semibold text-gray-900">
            <svg className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 1l2.6 5.3 5.9.9-4.3 4.1 1 5.9L10 14.9l-5.2 2.3 1-5.9L1.5 7.2l5.9-.9L10 1z" />
            </svg>
            {technology.rating}
          </span>
        </div>

        <button
          type="button"
          aria-disabled={isSelected}
          onClick={() => onAdd(technology)}
          className={`mt-4 w-full rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
            isSelected
              ? 'cursor-not-allowed bg-emerald-100 text-emerald-700'
              : 'bg-gradient-brand text-white hover:opacity-90'
          }`}
        >
          {isSelected ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </article>
    </>
  )
}

export default TechnologyCard