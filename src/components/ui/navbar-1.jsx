"use client"

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, ArrowRight } from "lucide-react"

const Navbar1 = ({
  onLogoClick,
  onAboutClick,
  onFoundersClick,
  onPartnerClick,
  onContactClick
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (onLogoClick) onLogoClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    {
      label: "About Vyntiq",
      onClick: () => {
        if (onAboutClick) onAboutClick()
        const el = document.getElementById("about")
        if (el) el.scrollIntoView({ behavior: "smooth" })
      }
    },
    {
      label: "Founders & Leadership",
      onClick: () => {
        if (onFoundersClick) onFoundersClick()
        const el = document.getElementById("about")
        if (el) el.scrollIntoView({ behavior: "smooth" })
      }
    },
    {
      label: "OEM & Partners",
      onClick: () => {
        if (onPartnerClick) onPartnerClick()
      }
    }
  ]

  return (
    <header className="sticky top-0 z-50 flex justify-center w-full py-4 sm:py-6 px-4">
      <div className="flex items-center justify-between px-5 sm:px-7 py-3 bg-neutral-900/80 backdrop-blur-xl rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.6)] ring-1 ring-white/15 w-full max-w-4xl relative z-10">

        {/* Brand Logo */}
        <div className="flex items-center">
          <motion.a
            href="#"
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 group cursor-pointer"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src="/assets/logo-emblem.png"
              alt="Vyntiq Emblem"
              className="h-8 sm:h-9 w-auto object-contain drop-shadow-[0_2px_12px_rgba(59,130,246,0.4)]"
            />
            <div className="flex flex-col justify-center">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5 leading-none">
                VYNTIQ
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              </span>
              <span className="text-[8px] uppercase tracking-[0.2em] text-neutral-400 font-semibold mt-0.5 hidden sm:inline-block">
                Vision · Intelligence · Quality
              </span>
            </div>
          </motion.a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <button
                type="button"
                onClick={item.onClick}
                className="text-sm text-neutral-300 hover:text-white transition-colors font-medium cursor-pointer"
              >
                {item.label}
              </button>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <motion.div
          className="hidden sm:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <button
            type="button"
            onClick={onContactClick}
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-semibold text-black bg-gradient-to-r from-blue-400 via-blue-400 to-blue-300 rounded-full shadow-[0_4px_16px_rgba(59,130,246,0.3)] hover:opacity-90 transition-all cursor-pointer"
          >
            <span>Request Demo</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          type="button"
          className="md:hidden flex items-center p-2 rounded-full bg-white/5 text-white ring-1 ring-white/10"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle mobile menu"
        >
          <Menu className="h-5 w-5 text-white" />
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-neutral-950/95 backdrop-blur-2xl z-50 pt-20 px-6 md:hidden flex flex-col justify-between pb-8"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              type="button"
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white ring-1 ring-white/15"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-white" />
            </motion.button>

            <div className="flex flex-col space-y-6 mt-4">
              <div className="flex items-center gap-2 mb-2">
                <img
                  src="/assets/logo-emblem.png"
                  alt="Vyntiq"
                  className="h-7 w-auto"
                />
                <span className="text-lg font-bold text-white tracking-tight">VYNTIQ</span>
              </div>

              {navLinks.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 + 0.1 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      toggleMenu()
                      if (item.onClick) item.onClick()
                    }}
                    className="text-lg text-neutral-200 hover:text-white font-medium block py-1 text-left w-full"
                  >
                    {item.label}
                  </button>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              exit={{ opacity: 0, y: 20 }}
              className="pt-6 border-t border-white/10"
            >
              <button
                type="button"
                onClick={() => {
                  toggleMenu()
                  if (onContactClick) onContactClick()
                }}
                className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-semibold text-black bg-gradient-to-r from-blue-400 to-blue-300 rounded-full hover:opacity-90 transition-opacity shadow-lg"
              >
                Request Demo
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export { Navbar1 }
export default Navbar1
