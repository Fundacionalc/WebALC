import { Search, GraduationCap, ShieldAlert, Building2 } from "lucide-react"

const servicios = [
  {
    icon: Search,
    title: "Investigación y monitoreo",
    description: "Analizamos y monitoreamos la gestión pública para detectar irregularidades.",
  },
  {
    icon: GraduationCap,
    title: "Educación y concientización",
    description: "Programas educativos para promover la cultura de la transparencia.",
  },
  {
    icon: ShieldAlert,
    title: "Recepción de denuncias",
    description: "Canal seguro y confidencial para recibir denuncias de actos de corrupción.",
  },
  {
    icon: Building2,
    title: "Asesoramiento institucional",
    description: "Asistencia técnica a organismos públicos en materia de integridad.",
  },
]

export function QueHacemos() {
  return (
    <section id="que-hacemos" className="py-16 md:py-24 bg-[#F2F2F2]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#134E76] mb-4">
          Qué hacemos
        </h2>
        <p className="text-center font-normal text-[#134E76]/80 max-w-2xl mx-auto mb-12">
          Trabajamos en múltiples frentes para combatir la corrupción y fortalecer la democracia.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {servicios.map((servicio) => (
            <div
              key={servicio.title}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <div className="w-10 h-10 bg-[#134E76] rounded-lg flex items-center justify-center mb-4">
                <servicio.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#134E76] mb-2">
                {servicio.title}
              </h3>
              <p className="text-sm font-normal text-[#134E76]/70">
                {servicio.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
