import { Shield, Scale, Award, Users } from "lucide-react"

const valores = [
  {
    icon: Shield,
    title: "Transparencia",
    description: "Promovemos la apertura de información y la rendición de cuentas en todos los niveles.",
  },
  {
    icon: Scale,
    title: "Justicia",
    description: "Trabajamos para que la ley se aplique de forma igualitaria e imparcial.",
  },
  {
    icon: Award,
    title: "Ética",
    description: "Fomentamos la integridad y los valores éticos en la función pública.",
  },
  {
    icon: Users,
    title: "Participación ciudadana",
    description: "Empoderamos a la sociedad civil como agente de cambio y control.",
  },
]

export function QuienesSomos() {
  return (
    <section id="quienes-somos" className="py-16 md:py-24 bg-[#F2F2F2]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#134E76] mb-6">
          Quiénes somos
        </h2>
        <p className="text-center font-normal text-[#134E76]/80 max-w-3xl mx-auto mb-12">
          Somos una organización sin fines de lucro, independiente y apartidaria, dedicada a combatir
          la corrupción en Argentina mediante la promoción de la transparencia institucional y la
          participación ciudadana activa.
        </p>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {valores.map((valor) => (
            <div
              key={valor.title}
              className="bg-white rounded-lg p-6 text-center shadow-sm"
            >
              <div className="w-12 h-12 bg-[#ED6325] rounded-full flex items-center justify-center mx-auto mb-4">
                <valor.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#ED6325] mb-2">
                {valor.title}
              </h3>
              <p className="text-sm font-normal text-[#134E76]/70">
                {valor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
