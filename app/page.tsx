import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { QuienesSomos } from "@/components/quienes-somos"
import { Mision } from "@/components/mision"
import { QueHacemos } from "@/components/que-hacemos"
import { Proyectos } from "@/components/proyectos"
import { Contacto } from "@/components/contacto"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <QuienesSomos />
        <Mision />
        <QueHacemos />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}
