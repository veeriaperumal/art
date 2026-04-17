import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState, lazy, Suspense } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Loader from './components/Loader'
import ScrollToTop from './components/ScrollToTop'

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'))
const Courses = lazy(() => import('./pages/Courses'))
const CourseDetail = lazy(() => import('./pages/CourseDetail'))
const About = lazy(() => import('./pages/About'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Contact = lazy(() => import('./pages/Contact'))

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <Suspense fallback={<Loader />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  // Immediate render for better LCP
  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) return <Loader />

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <AnimatedRoutes />
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
