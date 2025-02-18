"use client"

import { useLanguage } from "@/app/contexts/language-context"
import translations from "@/app/translations"
import SubserviceCards from "../components/subservice-cards"

export default function StaffPage() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  // Definuj karty pre túto službu – napr. s nadpismi, obrázkami a odkazmi
  const cards = [
    {
      title: t.services.staffCard1Title, // prekladový kľúč pre názov karty
      imageUrl: "/kaskader.png",
      link: "https://docs.google.com/document/d/1T6wzNOnrOZbKvFDQgylSD1_7eMueijTV2UMGzGFyZpQ/edit?usp=sharing",
    },
    {
      title: t.services.staffCard2Title,
      imageUrl: "/horserider.png",
      link: "https://docs.google.com/document/d/1T6wzNOnrOZbKvFDQgylSD1_7eMueijTV2UMGzGFyZpQ/edit?usp=sharing",
    },
  ]

  return (
    <section className="p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-pink-300">
        {t.services.staffTitle}
      </h1>
      <SubserviceCards cards={cards} />
    </section>
  )
}
