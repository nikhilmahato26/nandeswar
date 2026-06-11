import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import LanguageSwitcher from './components/ui/LanguageSwitcher'
import FloatingActions from './components/ui/FloatingActions'
import Home from './pages/Home'

function Page({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen bg-sacred-white font-sans text-temple-dark antialiased">
      <Navbar />

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <Page>
                  <Home />
                </Page>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />

      {/* Floating chrome */}
      <LanguageSwitcher />
      <FloatingActions />
    </div>
  )
}
