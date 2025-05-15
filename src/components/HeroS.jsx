import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion"; // Corrected import path

const HeroS = () => {
  return (
    <div className="relative min-h-screen px-4 py-10 overflow-hidden bg-black text-white">
      {/* Gradient Circle Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-b from-gray-950 via-blue-900 to-gray-950 opacity-30 blur-3xl z-0" />

      {/* Logo */}
      <div className="absolute top-5 left-5 z-10">
        <img
          src="src/assets/rex-modified.png"
          className="h-12 w-12 rounded-full object-cover"
          alt="Rexpond Logo"
        />
      </div>

      {/* Waitlist Badge */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
        <div className="flex items-center gap-2 bg-white px-4 py-1 rounded-full shadow-md">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
            className="h-4 w-4"
            alt="Gmail"
          />
          <p className="text-xs text-black font-medium">Join Waitlist</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full mt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <Badge className="bg-gray-950 border border-gray-800 rounded-full px-4 py-2 text-gray-300 text-sm md:text-base mb-6">
            Coming Soon
          </Badge>

          <h1 className="bg-gradient-to-b from-white via-gray-700 to-gray-400 inline-block text-transparent bg-clip-text font-bold text-4xl md:text-6xl lg:text-7xl max-w-[90%] md:max-w-[70%] leading-tight mb-4">
            Your AI-Powered Inbox Is Almost Here
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-sm md:text-base lg:text-lg text-gray-300 max-w-[90%] md:max-w-[60%] mt-4"
          >
            Get ready to conquer email overload with smart summaries, replies, outreach tools & deliverability insights—all powered by AI.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroS;
