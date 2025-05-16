import React, { useEffect, useState } from 'react'

const Landing = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 bg-black flex flex-col justify-center items-center text-white z-50">
      <div className="animate-spin rounded-full h-24 w-24 border-4 border-t-gray-500 border-b-gray-800 mb-6"></div>
    </div>
  )
}

export default Landing
