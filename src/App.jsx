import { useState, useEffect } from 'react'
import HeroS from './components/HeroS'
import FeatureShowcase from './components/FeatureShowcase'
import Why from './components/Why'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Not from './components/Not'

function App() {
  const [showLanding, setShowLanding] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(false)
    }, 5000) // 5 seconds

    return () => clearTimeout(timer)
  }, [])

  if (showLanding) {
    return (
      <div className="bg-black">
        <Landing />
      </div>
    )
  }

  return (
    <div className="bg-black">
      <HeroS />
      <FeatureShowcase />
      <Why />
      <Footer />
    </div>
  )
}

export default App
