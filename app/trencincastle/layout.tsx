"use client"

import React, { ReactNode } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import LanguageSwitcher from "@/app/components/language-switcher"
import translations from "@/app/translations"
import { LanguageProvider, useLanguage } from "@/app/contexts/language-context"

function TrencinCastleLayoutInner({ children }: { children: ReactNode }) {
  const router = useRouter()
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

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
              <Link href="/medievalcastles">
                <motion.button className="p-2 text-left rounded-lg transition-all duration-300 hover:bg-violet-800/50">
                  {t.medievalCastles.pageTitle}
                </motion.button>
              </Link>
              <Link href="/services/architecture">
                <motion.button className="p-2 text-left rounded-lg transition-all duration-300 hover:bg-violet-800/50">
                  {t.services.architectureTitle}
                </motion.button>
              </Link>
              <motion.button
                className="p-2 text-left rounded-lg bg-violet-600 text-white cursor-default"
                disabled
              >
                {t.trencinCastle.pageTitle}
              </motion.button>
              <div className="mt-auto">
                <LanguageSwitcher />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop navigácia */}
      <nav className="hidden lg:flex w-64 flex-col p-4 bg-black/30 backdrop-blur-md">
        {/* Logo – odkaz na Home */}
        <Link href="/" className="mb-4">
          <Image src="/logo.png" alt="Logo" width={80} height={80} className="mx-auto" />
        </Link>
        <motion.button
          onClick={goHome}
          className="p-2 text-left rounded-lg mb-2 transition-all duration-300 hover:bg-violet-800/50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t.home}
        </motion.button>
        <Link href="/medievalcastles">
          <motion.button
            className="p-2 text-left rounded-lg mb-2 transition-all duration-300 hover:bg-violet-800/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.medievalCastles.pageTitle}
          </motion.button>
        </Link>
        <Link href="/services/architecture">
          <motion.button
            className="p-2 text-left rounded-lg mb-2 transition-all duration-300 hover:bg-violet-800/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.services.architectureTitle}
          </motion.button>
        </Link>
        <motion.button
          className="p-2 text-left rounded-lg mb-2 bg-violet-600 text-white cursor-default"
          disabled
        >
          {t.trencinCastle.pageTitle}
        </motion.button>
        <div className="mt-auto">
          <LanguageSwitcher />
        </div>
      </nav>

      <main className="flex-1 p-4 lg:ml-64">{children}</main>
    </div>
  )
}

export default function TrencinCastleLayout({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <TrencinCastleLayoutInner>{children}</TrencinCastleLayoutInner>
    </LanguageProvider>
  )
}
