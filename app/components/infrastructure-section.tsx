"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/app/contexts/language-context"
import translations from "@/app/translations"

export default function InfrastructureSection() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  const legendItems = [
    {
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/capital-1A0cNMaNjrZfYheS7GQwrsPdYkip3N.png",
      text: t.infrastructure.capital,
    },
    {
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/city-Vz0PggqxfiNKh8xgrNy6Gnsr6MDsDr.png",
      text: t.infrastructure.city,
    },
    {
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/road-fwe96f5kGB3F0PmZGnmhB4KGASImgu.png",
      text: t.infrastructure.highway,
    },
    {
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/airport-6VMSxdgHsio6pcJKvq1QCiF0oU9MOG.png",
      text: t.infrastructure.airport,
    },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-purple-900 to-indigo-900">
      <div className="max-w-7xl w-full">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-pink-300"
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t.infrastructure.title}
        </motion.h2>

        <motion.div
          className="relative w-full aspect-[16/9] mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slovakia-infrastructure-IpuK6E3yqZmfHfGQyEMZPGD1vC6fju.png"
            alt="Slovakia Infrastructure Map"
            fill
            className="object-contain opacity-75"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {legendItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative w-12 h-12">
                <Image src={item.icon || "/placeholder.svg"} alt="" fill className="object-contain opacity-75" />
              </div>
              <p className="text-violet-200 text-sm md:text-base">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

