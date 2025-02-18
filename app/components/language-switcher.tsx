"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/app/contexts/language-context"

const languages = [
  { code: "en", name: "English", flag: "https://flagcdn.com/w80/us.png" },
  { code: "sk", name: "Slovenčina", flag: "https://flagcdn.com/w80/sk.png" },
]

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0]

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2 bg-black/30 backdrop-blur-md rounded-md px-3 py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src={currentLanguage.flag || "/placeholder.svg"} alt={currentLanguage.name} width={24} height={18} />
        <span>{currentLanguage.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute bottom-full left-0 mb-2 bg-black/30 backdrop-blur-md rounded-md overflow-hidden"
          >
            {languages
              .filter((lang) => lang.code !== language)
              .map((lang) => (
                <button
                  key={lang.code}
                  className="flex items-center space-x-2 w-full px-3 py-2 hover:bg-violet-600/50 transition-colors"
                  onClick={() => {
                    setLanguage(lang.code)
                    setIsOpen(false)
                  }}
                >
                  <Image src={lang.flag || "/placeholder.svg"} alt={lang.name} width={24} height={18} />
                  <span>{lang.name}</span>
                </button>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

