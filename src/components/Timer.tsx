import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

const getTargetDate = () => {
  const now = dayjs()
  return now.add(3, 'month').startOf('day').toDate()
}

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  function getTimeRemaining() {
    const now = new Date()
    const total = getTargetDate().getTime() - now.getTime()

    const seconds = Math.floor((total / 1000) % 60)
    const minutes = Math.floor((total / 1000 / 60) % 60)
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
    const days = Math.floor(total / (1000 * 60 * 60 * 24))

    return { total, days, hours, minutes, seconds }
  }

  const timeVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  }

  return (
    <div className="w-full flex flex-col items-center justify-center py-5 px-5">
      {/* <h1 className="text-center text-4xl md:text-6xl font-bold text-white mb-10">
        Countdown to Launch
      </h1> */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, index) => {
          const value = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds][index]
          return (
            <div key={label} className="flex flex-col items-center bg-white/10 rounded-xl p-4 min-w-[80px] sm:min-w-[100px]">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={value}
                  variants={timeVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-semibold text-white"
                >
                  {value.toString().padStart(2, '0')}
                </motion.div>
              </AnimatePresence>
              <span className="mt-2 text-sm text-gray-300">{label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Timer
