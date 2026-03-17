"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#134E76] py-2 md:py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between md:justify-center gap-2 md:gap-12 md:px-0 px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={handleLogoClick}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logofooter-97keyNteCHRpZz3EOzIlBM9Zuy3mh7.png"
              alt="Fundación Argentina Libre de Corrupción"
              width={280}
              height={90}
              className="h-16 md:h-34 w-auto"
            />
          </Link>

          {/* Copyright */}
          <p className="text-xs md:text-sm font-normal text-white/70 whitespace-nowrap mb-2">
            © 2026 Fundación Argentina Libre de Corrupción
          </p>
        </div>
      </div>
    </footer>
  )
}
