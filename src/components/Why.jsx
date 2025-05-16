import React from "react";
import { motion } from "framer-motion";

const Why = () => {
  return (
    <div className="flex flex-col items-center justify-between px-4 md:px-6 py-6 text-black relative overflow-hidden">
      {/* Background blur gradients */}
      <div className="absolute top-70 -left-10 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-gray-950 via-blue-900 to-gray-950 opacity-30 blur-3xl z-0" />
      <div className="absolute -bottom-40 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-gray-950 via-blue-900 to-gray-950 opacity-30 blur-3xl z-0" />
      <div className="absolute top-0 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-gray-950 via-blue-900 to-gray-950 opacity-30 blur-3xl z-0" />

      {/* Left side - Images */}
      <motion.div
        className="relative w-full md:w-1/2 flex justify-center mb-12 md:mb-0"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src="./him1.jpg"
          alt="Person 1"
          className="md:w-92 md:h-80 h-52 w-72 object-cover yin shadow-lg z-10 relative -ml-20"
        />
        <img
          src="./him2.jpg"
          alt="Person 2"
          className="md:w-92 md:h-80 h-52 w-72 object-cover yan shadow-md absolute md:top-60 top-44 md:-right-20 right-0 z-0"
        />
      </motion.div>

      {/* Right side - Text and Card */}
      <div className="w-full flex flex-col items-center relative mt-72">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold bg-gradient-to-b mb-10 md:mb-4 from-white via-gray-500 to-gray-50 inline-block text-transparent bg-clip-text relative z-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Why You Should Join Now
        </motion.h1>

        {/* Card */}
        <motion.div
          className="bg-white/5 text-white p-6 rounded-xl shadow-xl relative z-10 -mt-8 w-full md:w-[70%]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <ul className="space-y-4 list-disc list-inside text-gray-200">
            <li>Access to exclusive features</li>
            <li>Early adopter community perks</li>
            <li>Priority support and onboarding</li>
            <li>Smart tools that save hours</li>
            <li>Be part of shaping the platform</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Why;
