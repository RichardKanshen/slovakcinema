"use client"

import { useLanguage } from "@/app/contexts/language-context"
import translations from "@/app/translations"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function MedievalCastlesPage() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]
  const router = useRouter()

  const cards = [
    {
      title: t.medievalCastles.trencianskyHrad,
      imageUrl: "/trencin.png",
      link: "https://docs.google.com/document/d/1T6wzNOnrOZbKvFDQgylSD1_7eMueijTV2UMGzGFyZpQ/edit?tab=t.0",
    },
    {
      title: t.medievalCastles.hradBeckov,
      imageUrl: "/beckov.png",
      link: "https://docs.google.com/document/d/1T6wzNOnrOZbKvFDQgylSD1_7eMueijTV2UMGzGFyZpQ/edit?tab=t.0",
    },
    {
      title: t.medievalCastles.spisskyHrad,
      imageUrl: "/spis.png",
      link: "https://docs.google.com/document/d/1T6wzNOnrOZbKvFDQgylSD1_7eMueijTV2UMGzGFyZpQ/edit?tab=t.0",
    },
  ]

  return (
    <div className="p-4 md:p-8">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-pink-300"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t.medievalCastles.pageTitle}
      </motion.h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-48">
              <Image
                src={card.imageUrl}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 text-white">{card.title}</h3>
              {card.title === t.medievalCastles.trencianskyHrad ? (
                <button
                  onClick={() => router.push("/trencincastle")}
                  className="inline-block mt-2 px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition"
                >
                  {t.learnMoreButton}
                </button>
              ) : (
                <a
                  href={card.link}
                  target="_blank"
                  className="inline-block mt-2 px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition"
                >
                  {t.learnMoreButton}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
