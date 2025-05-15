import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeroS from './components/HeroS'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-black">
      <HeroS />
    </div>
  )
}

export default App
