import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/footer'
import Hero from './components/hero'
import Navbar from './components/navbar'
import TechnologiesSection from './components/technology'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TechnologiesSection />
      </main>
      <Footer />
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  )
}

export default App