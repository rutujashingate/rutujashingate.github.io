"use client"

import { motion } from "framer-motion"
import { Figma } from "lucide-react"

export default function Loading() {
  return (
    <div className="h-screen bg-[#F1F2F4] flex items-center justify-center">
      <div className="text-center">
        {/* Figma Logo Animation */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-16 h-16 bg-[#0D99FF] rounded-2xl flex items-center justify-center mx-auto shadow-lg">
            <Figma className="w-8 h-8 text-white" />
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.h1
          className="text-2xl font-semibold text-[#2C2D30] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Loading Rutuja's Portfolio
        </motion.h1>

        {/* Loading Bar */}
        <div className="w-64 h-1 bg-[#E5E5E5] rounded-full mx-auto overflow-hidden">
          <motion.div
            className="h-full bg-[#0D99FF] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
          />
        </div>

        {/* Loading Steps */}
        <motion.div
          className="mt-6 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {["Initializing design system...", "Loading components...", "Preparing magic..."].map((step, index) => (
            <motion.p
              key={step}
              className="text-sm text-[#8B8D98]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + index * 0.3, duration: 0.4 }}
            >
              {step}
            </motion.p>
          ))}
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#7B68EE] rounded-full"
            animate={{ y: [-10, 10, -10], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#FF6B6B] rounded-full"
            animate={{ y: [10, -10, 10], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#0D99FF] rounded-full"
            animate={{ y: [-5, 5, -5], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
          />
        </div>
      </div>
    </div>
  )
}
