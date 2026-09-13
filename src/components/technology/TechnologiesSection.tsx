import { useState } from 'react'
import technologiesData from '../../data/technologies.json'
import TechnologyCard from './TechnologyCard'
import YourStack from './YourStack'
import type { Technology } from './types'

const technologies = technologiesData as Technology[]

function TechnologiesSection() {
  const [selected, setSelected] = useState<Technology[]>([])

  const handleToggle = (technology: Technology) => {
    setSelected((current) =>
      current.some((item) => item.id === technology.id)
        ? current.filter((item) => item.id !== technology.id)
        : [...current, technology],
    )
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Explore Technologies
        </h2>
        <p className="mt-3 text-gray-600">
          Pick the tools you love and build your ideal development stack.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-8 lg:flex-row">
        <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              isSelected={selected.some((item) => item.id === technology.id)}
              onToggle={handleToggle}
            />
          ))}
        </div>

        <div className="lg:w-80 xl:w-96">
          <YourStack
            selected={selected}
            onRemove={handleToggle}
            onRemoveAll={() => setSelected([])}
          />
        </div>
      </div>
    </section>
  )
}

export default TechnologiesSection