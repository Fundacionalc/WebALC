"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  const handleScrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/congreso.png-5Iy0rN6kPUCqOOCYrIp3maJ0qdSlym.jpeg')",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
        <h1 className="font-[family-name:var(--font-montserrat)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance max-w-4xl mx-auto drop-shadow-lg">
          Construyendo una<br />
          Argentina Libre de Corrupción
        </h1>
        <p className="font-[family-name:var(--font-montserrat)] text-lg md:text-xl font-semibold text-gray-100 max-w-2xl mx-auto mb-8 drop-shadow-md">
          Promovemos la transparencia, la ética pública y la participación
          ciudadana para fortalecer las instituciones democráticas.
        </p>
        <Button 
          size="lg" 
          onClick={handleScrollToContact}
          className="font-[family-name:var(--font-montserrat)] bg-white text-[#134E76] font-semibold px-8 py-3 rounded-md border-2 border-white transition-all duration-300 hover:bg-transparent hover:text-white hover:border-white"
        >
          Sumate
        </Button>
      </div>
    </section>
  )
}
