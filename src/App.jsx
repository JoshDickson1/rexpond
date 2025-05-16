import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeroS from './components/HeroS'
import FeatureShowcase from './components/FeatureShowcase'
import Why from './components/Why'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-black">
      <HeroS />
      <FeatureShowcase />
      <Why />
    </div>
  )
}

export default App
