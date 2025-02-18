"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import GradientCards from "./components/gradient-cards"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion"
import LanguageSwitcher from "./components/language-switcher"
import { LanguageProvider, useLanguage } from "./contexts/language-context"
import translations from "./translations"
import InfrastructureSection from "./components/infrastructure-section"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

function Home() {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState("home")
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  // Stav pre animáciu tlačidla v sekcii Where we participated
  const [animateGalleryButton, setAnimateGalleryButton] = useState(false)

  const navigation = [
    { id: "home", name: t.home },
    { id: "participated", name: t.participated },
    { id: "cards", name: t.cards },
    { id: "infrastructure", name: t.infrastructure.title },
    { id: "contact", name: t.contact },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    navigation.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [navigation])

  const galleryImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hbo.jpg-62bf7DslSl73BylRkQzd6gC0Ko9LR0.jpeg",
      alt: "HBO Logo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eragon.jpg-ZTAbgElD4GFguWgdgOL4clZmQLa1Io.jpeg",
      alt: "Eragon Special Edition",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/got.jpg-dqo2afUUOMznP2ozqyGZhiBPq9HRLL.jpeg",
      alt: "Game of Thrones",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dragonheart.jpg-tldQ7ru6gxRuYvJ3ZF0QvtOTWh9Ldg.jpeg",
      alt: "Dragon Heart",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/emmy.jpg-8rbhtPzc8VXKyxfd3ktokqIHHoM3kJ.jpeg",
      alt: "Emmy Awards",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avatar.jpg-iNGPBU7De79ixaNC7Fe6eha3g7EzhX.jpeg",
      alt: "Avatar: The Way of Water",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hostel.jpg-prFbakj8RpldBADLSH1trFm4SVudlq.jpeg",
      alt: "Hostel",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amazonprime.jpg-32rZUXaMlf24Q5nQcI3pxM1dC1x3hv.jpeg",
      alt: "Amazon Prime Video",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/behindenemylines.jpg-tfOZHsWEFL2DAEnZJrCK9E5LuiLbIx.jpeg",
      alt: "Behind Enemy Lines",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jackryan.jpg-4ieKAthyYkF9atPXcKKhU2DBcYyZ7q.jpeg",
      alt: "Jack Ryan",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/knightstale.jpg-pwxioNjTJT8filgADhiS9LtzYcEoOJ.jpeg",
      alt: "A Knight's Tale",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/peacemaker.jpg-WxF3hbwI7OBAFF7BmS9eCvOTHoMGia.jpeg",
      alt: "The Peacemaker",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/netflix.jpg-vAUtfXhOa3oEE78KppmdDkZS9zzTsY.jpeg",
      alt: "Netflix",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oscar.jpg-EjGoRZ9jMeGVJ4VReN3vH167bpawfE.jpeg",
      alt: "The Oscars",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marvel.jpg-4wqAzItkdvYnVDrhmktTh8UBEoCxzv.jpeg",
      alt: "Marvel",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marcopolo.jpg-KeFdI6HqvcliizmnOXVjop1oYLIWxl.jpeg",
      alt: "Marco Polo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lastlegion.jpg-WFo1a9g1t4OX9XfMoScsfx5XOQRUN2.jpeg",
      alt: "The Last Legion",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 text-white">
      {/* Mobilná navigácia */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="bg-black/30 backdrop-blur-md border-violet-500">
              <Menu className="h-6 w-6 text-violet-300" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-64 bg-gray-900/95 backdrop-blur-md border-r border-violet-500 text-white"
          >
            <nav className="flex flex-col gap-2 mt-4">
              {navigation.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id)
                    const closeButton = document.querySelector("[data-radix-collection-item]") as HTMLButtonElement
                    if (closeButton) closeButton.click()
                  }}
                  className={`p-2 text-left rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-violet-600 text-white"
                      : "text-violet-200 hover:bg-violet-800/50 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              ))}
              <div className="mt-auto">
                <LanguageSwitcher />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop navigácia */}
      <nav className="hidden lg:flex w-64 flex-col fixed h-screen p-4 bg-black/30 backdrop-blur-md">
        {/* Logo ako odkaz na Home */}
        <Link href="/" className="mb-4">
          <Image src="/logo.png" alt="Logo" width={80} height={80} className="mx-auto" />
        </Link>
        {navigation.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`p-2 text-left rounded-lg mb-2 transition-all duration-300 ${
              activeSection === item.id ? "bg-violet-600 text-white" : "hover:bg-violet-800/50"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.name}
          </motion.button>
        ))}
        <div className="mt-auto">
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Hlavný obsah */}
      <main className="flex-1 lg:ml-64">
        {/* Home sekcia */}
        <motion.section
          id="home"
          className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-gradient-to-br from-blue-900 to-purple-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-7xl w-full">
            {/* Logo nad nadpisom */}
            <div className="flex justify-center mb-4">
              <Image src="/logo.png" alt="Logo" width={150} height={150} />
            </div>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-pink-300"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t.welcome}
            </motion.h1>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <motion.div
                className="flex-1 w-full"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/A_nqQYEKJa4?autoplay=1&mute=1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
              <motion.div
                className="flex-1"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <p className="text-lg text-gray-300">{t.homeDescription}</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Where we participated sekcia */}
        <motion.section
          id="participated"
          className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-gradient-to-br from-indigo-900 to-purple-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl w-full">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-violet-400"
              initial={{ y: -50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t.whereWeParticipated}
            </motion.h2>
            <motion.div
              className="overflow-hidden rounded-lg shadow-lg bg-black/20 backdrop-blur-sm"
              ref={emblaRef}
              onClick={() => {
                setAnimateGalleryButton(true)
                setTimeout(() => setAnimateGalleryButton(false), 500)
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex">
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] p-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative aspect-square overflow-hidden rounded-lg group">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="transform transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white text-lg font-medium">{image.alt}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="text-center mt-8"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={animateGalleryButton ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  onClick={() => router.push("/blog")}
                  className="px-6 py-3 text-xl bg-violet-600 hover:bg-violet-700 text-white transition-all duration-300 transform hover:scale-105"
                >
                  {t.learnMore}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Our Services sekcia */}
        <motion.section
          id="cards"
          className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-gradient-to-br from-purple-900 to-indigo-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl w-full">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-pink-300"
              initial={{ y: -50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t.ourServices}
            </motion.h2>
            <GradientCards />
          </div>
        </motion.section>

        {/* Infrastructure sekcia */}
        <motion.section
          id="infrastructure"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <InfrastructureSection />
        </motion.section>

        {/* Contact sekcia */}
        <motion.section
          id="contact"
          className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-gradient-to-br from-violet-900 to-indigo-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl w-full">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-violet-400"
              initial={{ y: -50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t.contactInformation}
            </motion.h2>
            <motion.p
              className="text-lg text-center text-gray-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t.contactDescription}
            </motion.p>
          </div>
        </motion.section>
      </main>
    </div>
  )
}

export default function WrappedHome() {
  return (
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  )
}
