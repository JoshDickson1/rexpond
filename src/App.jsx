import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeroS from './components/HeroS'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroS />
    </>
  )
}

export default App
