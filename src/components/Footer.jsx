import React from "react";
import { motion } from "framer-motion";
import {
  Copyright,
  Facebook,
  Github,
  Instagram,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="mt-10 flex flex-col gap-8 relative px-4 md:px-10">
      {/* Gradient Blob Background */}
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-b from-gray-950 via-blue-900 to-gray-950 opacity-30 blur-3xl z-0" />

      {/* CTA Section */}
      <motion.div
        className="flex flex-col gap-6 text-center items-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1
          className="bg-gradient-to-b from-white via-gray-700 to-gray-200 inline-block text-transparent bg-clip-text font-bold text-4xl md:text-6xl lg:text-7xl max-w-full leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ready to Try Rexpond AI?
        </motion.h1>

        <motion.p
          className="text-sm md:text-base lg:text-lg text-gray-300 max-w-[90%] md:max-w-[70%]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get Early Access to Rexpond and Start Managing Emails the AI Way. No
          Spam, Just Smarter Productivity
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-4 items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Waitlist Badge */}
          <div className="z-10 w-max h-9 rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-end px-2">
            <a
              href="https://forms.gle/LQPw3Lr1y1jQN8kv5"
              className="flex items-center gap-2 bg-white px-4 py-1 rounded-full"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                className="h-4 w-4"
                alt="Gmail"
              />
              <p className="text-sm text-black font-medium">Join The Waitlist</p>
            </a>
          </div>
          <Button className="rounded-full"><a href="#news">Subscribe to our Newsletter</a></Button>
        </motion.div>
      </motion.div>

      {/* Bottom Footer */}
      <div className="mt-10 px-2 gap-2 flex flex-col">
        <hr className="border border-gray-900" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5 items-center text-center md:text-left">
          {/* Left: Links and Socials */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6">
            <div className="flex gap-4">
              <a href="https://x.com/Dickson53194258"><Twitter className="h-6 text-white/70" /></a>
              <a href="https://www.facebook.com/profile.php?id=100089006016145"><Facebook className="h-6 text-white/70" /></a>
              <a href="https://www.instagram.com/_dickson378/"><Instagram className="h-6 text-white/70" /></a>
              <a href="https://github.com/JoshDickson1"><Github className="h-6 text-white/70" /></a>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <Button className="text-white/70">Privacy Policy</Button>
              <Button className="text-white/70">Terms & Conditions</Button>
              <Button className="text-white/70">Support</Button>
            </div>
          </div>

          {/* Right: Copyright */}
          <div className="flex justify-center md:justify-end items-center gap-2 text-white/50 text-sm whitespace-nowrap">
            <Copyright className="h-4" />
            <span>2025 Rexpond.ai || All rights reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
