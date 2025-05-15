import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

// Calculate target date once: 3 months from now, at start of the day
const getTargetDate = () => {
  const now = dayjs()
  return now.add(3, 'month').startOf('day').toDate()
}

const targetDate = getTargetDate()

function getTimeRemaining() {
  const now = new Date()
  const total = targetDate.getTime() - now.getTime()

  if (total <= 0) {
    return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const seconds = Math.floor((total / 1000) % 60)
  const minutes = Math.floor((total / 1000 / 60) % 60)
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
  const days = Math.floor(total / (1000 * 60 * 60 * 24))

  return { total, days, hours, minutes, seconds }
}

const Timers = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const timeVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  }

  return (
    <div className="w-full md:w-[70%] flex flex-col items-center justify-center py-12 px-10 bg-black/40 rounded-xl relative z-10 overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute -top-10 -left-10 h-52 w-52 bg-white opacity-10 blur-2xl rounded-full z-0" />
      <div className="absolute -bottom-10 -right-10 h-52 w-52 bg-blue-500 opacity-10 blur-2xl rounded-full z-0" />

      <h1 className="text-center text-xl md:text-2xl font-bold text-white mb-10 z-10">
        Unlock AI Productivity In
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center z-10">
        {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, index) => {
          const value = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds][index]
          return (
            <div
              key={label}
              className="flex flex-col items-center min-w-[80px] sm:min-w-[100px] bg-white/5 rounded-xl p-4"
            >
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={value}
                  variants={timeVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.35 }}
                  layout="position"
                  className="text-4xl md:text-5xl font-semibold text-white"
                >
                  {value.toString().padStart(2, '0')}
                </motion.div>
              </AnimatePresence>
              <span className="mt-2 text-2xl text-gray-300">{label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Timers
