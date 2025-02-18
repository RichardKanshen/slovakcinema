"use client"

import { useLanguage } from "@/app/contexts/language-context"
import translations from "@/app/translations"
import SubserviceCards from "../components/subservice-cards"

export default function ArchitecturePage() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  // Definuj karty pre túto službu – napr. s nadpismi, obrázkami a odkazmi
  const cards = [
    {
      title: t.services.architectureCard1Title, // prekladový kľúč pre názov karty
      imageUrl: "/castle.png",
      link: "https://www.facebook.com",
    },
    {
      title: t.services.architectureCard2Title,
      imageUrl: "/oda.png",
      link: "https://docs.google.com/document/d/1T6wzNOnrOZbKvFDQgylSD1_7eMueijTV2UMGzGFyZpQ/edit?usp=sharing",
    },
  ]

  return (
    <section className="p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-pink-300">
        {t.services.architectureTitle}
      </h1>
      <SubserviceCards cards={cards} />
    </section>
  )
}
