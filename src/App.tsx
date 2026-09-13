import Hero from './components/hero'
import Navbar from './components/navbar'
import TechnologiesSection from './components/technology'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TechnologiesSection />
    </div>
  )
}

export default App