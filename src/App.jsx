import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Contact from './components/Contact'

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Stack />
        <Contact />
        <footer className="py-12 text-center text-sm text-gray-500 bg-gray-50">
          © {new Date().getFullYear()} • Built for a Go backend engineer
        </footer>
      </main>
    </div>
  )
}

export default App
