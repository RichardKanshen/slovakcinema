"use client"

import { useLanguage } from "@/app/contexts/language-context"
import translations from "@/app/translations"
import { motion } from "framer-motion"
import Image from "next/image"

export default function TrencinCastlePage() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  return (
    <div className="max-w-4xl mx-auto py-12">
      {/* YouTube video */}
      <motion.div
        className="relative w-full h-64 md:h-96 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/CMAPGJQFlmg"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        />
      </motion.div>
      {/* Nadpis */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-6 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {t.trencinCastle.pageTitle}
      </motion.h1>
      {/* Popis */}
      <motion.p
        className="text-lg mb-6 text-center whitespace-pre-line"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t.trencinCastle.description}
      </motion.p>
      {/* Mapa – obrázok */}
      <motion.div
        className="relative w-full h-64 md:h-96"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Image
          src="/trencin-map.png"
          alt="Mapa Trenčianskeho hradu"
          fill
          className="object-cover rounded-lg"
        />
      </motion.div>
    </div>
  )
}
