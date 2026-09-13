import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import technologiesUrl from '../../data/technologies.json?url'
import TechnologyCard from './TechnologyCard'
import YourStack from './YourStack'
import type { Technology } from './types'

const EXCLUDED_TECH_ID = 'css3'

function TechnologiesSection() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selected, setSelected] = useState<Technology[]>([])

  useEffect(() => {
    let active = true

    fetch(technologiesUrl)
      .then((response) => response.json())
      .then((data: Technology[]) => {
        if (active) setTechnologies(data)
      })
      .finally(() => {
        if (active) setIsLoading(false)
      })

    return () => {
      active = false
    }
  }, [])

  const visibleTechnologies = technologies.filter(
    (technology) => technology.id !== EXCLUDED_TECH_ID,
  )

  const handleAdd = (technology: Technology) => {
    if (selected.some((item) => item.id === technology.id)) {
      toast.warn(`${technology.name} is already in your stack!`)
      return
    }
    setSelected((current) => [...current, technology])
    toast.success(`${technology.name} added to your stack!`)
  }

  const handleRemove = (technology: Technology) => {
    setSelected((current) => current.filter((item) => item.id !== technology.id))
    toast.info(`${technology.name} removed from your stack`)
  }

  const handleRemoveAll = () => {
    setSelected([])
    toast.info('All technologies removed from your stack')
  }

  if (isLoading) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explore Technologies
          </h2>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 py-24">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600" />
          <p className="text-gray-600">Loading technologies...</p>
        </div>
      </section>
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
          {visibleTechnologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              isSelected={selected.some((item) => item.id === technology.id)}
              onAdd={handleAdd}
            />
          ))}
        </div>

        <div className="lg:w-80 xl:w-96">
          <YourStack
            selected={selected}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </section>
  )
}

export default TechnologiesSection