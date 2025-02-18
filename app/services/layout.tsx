"use client"

import React, { ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import LanguageSwitcher from "../components/language-switcher"
import translations from "@/app/translations"
import { LanguageProvider, useLanguage } from "@/app/contexts/language-context"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

function ServicesLayoutInner({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  // Očakávame, že URL bude vo formáte /services/[serviceId]
  const segments = pathname.split("/")
  const currentService = segments[1] === "services" && segments[2] ? segments[2] : null

  const goHome = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 text-white flex">
      {/* Mobilná navigácia */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="bg-black/30 backdrop-blur-md border-violet-500"
            >
              <Menu className="h-6 w-6 text-violet-300" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-64 bg-gray-900/95 backdrop-blur-md border-r border-violet-500 text-white"
          >
            <nav className="flex flex-col gap-2 mt-4">
              <Link href="/">
                <motion.button className="p-2 text-left rounded-lg transition-all duration-300 hover:bg-violet-800/50">
                  {t.home}
                </motion.button>
              </Link>
              {currentService && (
                <motion.button
                  className="p-2 text-left rounded-lg bg-violet-600 text-white cursor-default"
                  disabled
                >
                  {t.services && t.services[currentService + "Title"]
                    ? t.services[currentService + "Title"]
                    : currentService}
                </motion.button>
              )}
              <div className="mt-auto">
                <LanguageSwitcher />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop navigácia */}
      <nav className="hidden lg:flex w-64 flex-col p-4 bg-black/30 backdrop-blur-md">
        {/* Logo ako odkaz na Home */}
        <Link href="/" className="mb-4">
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="mx-auto"
          />
        </Link>
        {currentService && (
          <motion.button
            className="p-2 text-left rounded-lg mb-2 bg-violet-600 text-white cursor-default"
            disabled
          >
            {t.services && t.services[currentService + "Title"]
              ? t.services[currentService + "Title"]
              : currentService}
          </motion.button>
        )}
        <motion.button
          onClick={goHome}
          className="p-2 text-left rounded-lg mb-2 transition-all duration-300 hover:bg-violet-800/50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t.home}
        </motion.button>
        <div className="mt-auto">
          <LanguageSwitcher />
        </div>
      </nav>

      <main className="flex-1 p-4 lg:ml-64">
        {children}
      </main>
    </div>
  )
}

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <ServicesLayoutInner>{children}</ServicesLayoutInner>
    </LanguageProvider>
  )
}
