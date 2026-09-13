import Hero from './components/hero'
import Navbar from './components/navbar'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to Dev Stack</h1>
        <p className="mt-4 text-gray-600">
          Scroll down to see the sticky navbar in action.
        </p>
      </main>
    </div>
  )
}

export default App