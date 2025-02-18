"use client"

import { useLanguage } from "@/app/contexts/language-context"
import translations from "@/app/translations"
import { motion } from "framer-motion"

export default function BlogPage() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  return (
    <div className="max-w-3xl mx-auto py-16">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t.blog.blogTitle}
      </motion.h1>
      <motion.p
        className="text-lg text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t.blog.blogContent}
      </motion.p>
    </div>
  )
}
