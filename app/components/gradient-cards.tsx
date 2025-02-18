"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { Building2, RouteIcon as Road, TreesIcon as Tree, Users, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/app/contexts/language-context"
import translations from "@/app/translations"
import { useRouter } from "next/navigation"

const cardIcons = {
  architecture: Building2,
  transport: Road,
  nature: Tree,
  staff: Users,
}

const cardImages = {
  architecture:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/architecture-lfcIimlQlh5m2MIdcr6tvJYwg0YNQP.png",
  transport: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/transport-13k99ED1OCRaOKl1UtWDyOzU5dMIfi.png",
  nature: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nature-fD6mi3U1zbZQ9nRd7zFysyE353EWMZ.png",
  staff: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/staff-61JD5o9w3fDVHNhfIWxHLB9B3jmpzk.png",
}

export default function GradientCards() {
  const router = useRouter()
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  const cards = [
    { id: "architecture", image: cardImages.architecture },
    { id: "transport", image: cardImages.transport },
    { id: "nature", image: cardImages.nature },
    { id: "staff", image: cardImages.staff },
  ]

  // Mapovanie id na URL podstránky
  const cardRoutes: Record<string, string> = {
    architecture: "/services/architecture",
    transport: "/services/transport",
    nature: "/services/nature",
    staff: "/services/staff",
  }

  // Pri kliknutí nastavíme activeCard, ktorá na 500ms spustí animáciu tlačidla
  useEffect(() => {
    if (activeCard !== null) {
      const timer = setTimeout(() => {
        setActiveCard(null)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [activeCard])

  const handleCardClick = (index: number) => {
    setActiveCard(index)
  }

  const handleArrowClick = (e: React.MouseEvent, cardId: string) => {
    e.stopPropagation()
    const route = cardRoutes[cardId] || "/"
    router.push(route)
  }

  return (
    <motion.div
      className="w-full mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => {
          const CardIcon = cardIcons[card.id as keyof typeof cardIcons]
          return (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg aspect-[3/2] cursor-pointer bg-gradient-to-br from-violet-800 to-indigo-900 shadow-lg"
              onClick={() => handleCardClick(index)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <Image
                src={card.image || "/placeholder.svg"}
                alt={t.cardTitles[card.id as keyof typeof t.cardTitles]}
                fill
                className="object-cover z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
              <div className="absolute top-4 left-4 z-20 flex items-center space-x-2">
                <CardIcon className="w-8 h-8 text-violet-400" />
                <h2 className="text-2xl font-bold text-white">
                  {t.cardTitles[card.id as keyof typeof t.cardTitles]}
                </h2>
              </div>
              <div className="absolute bottom-4 left-4 z-20 space-y-1">
                {t.cardTexts[card.id as keyof typeof t.cardTexts].map((text, i) => (
                  <p key={i} className="text-violet-200 text-base md:text-lg">
                    {text}
                  </p>
                ))}
              </div>
              {/* Tlačidlo "Learn more" je vždy viditeľné a pri kliknutí animuje scale */}
              <motion.div
                className="absolute bottom-4 right-4 z-30 bg-violet-600 rounded-full p-4 cursor-pointer flex items-center space-x-2 text-lg"
                onClick={(e) => handleArrowClick(e, card.id)}
                animate={activeCard === index ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-white font-medium">{t.learnMoreButton}</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
