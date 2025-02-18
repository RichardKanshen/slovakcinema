"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/app/contexts/language-context"
import translations from "@/app/translations"

type SubCard = {
  title: string
  imageUrl: string
  link: string
}

interface SubserviceCardsProps {
  cards: SubCard[]
}

export default function SubserviceCards({ cards }: SubserviceCardsProps) {
  const router = useRouter()
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  return (
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
            {card.title === t.services.architectureCard1Title ? (
              <button
                onClick={() => router.push("/medievalcastles")}
                className="inline-block mt-2 px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition"
              >
                {t.learnMoreButton}
              </button>
            ) : (
              <Link
                href={card.link}
                target="_blank"
                className="inline-block mt-2 px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition"
              >
                {t.learnMoreButton}
              </Link>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
