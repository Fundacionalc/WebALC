"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const proyectos = [
  {
    title: "Construyamos Transparencia",
    // image: "/ilust 3.png",
     image: "/img2.jpg",
    description: (
      <>
        La lucha contra la corrupción también se construye desde la educación. <strong>Construyamos Transparencia</strong> es un programa de talleres en escuelas que busca acercar a estudiantes herramientas para comprender qué es la corrupción, cómo afecta la vida cotidiana y por qué la <strong>participación ciudadana</strong> es clave para prevenirla.
        <br></br>
        A través de espacios dinámicos de formación cívica, promovemos valores de <strong>integridad, transparencia y responsabilidad pública</strong>. Creemos que una democracia más sólida comienza con ciudadanos informados, críticos y comprometidos desde edades tempranas.
      </>
    ),
  },
  {
    title: "Equipo de Divulgación y Prensa",
    //  image: "/ilust 1.png",
    image: "/img6.jpg",
    description: (
      <>
        El <strong>Equipo de Divulgación y Prensa</strong> tiene como objetivo investigar y comunicar casos de corrupción y problemáticas institucionales que muchas veces permanecen fuera del debate público. Nuestro equipo interdisciplinario —integrado por politólogos, antropólogos, abogados y comunicadores— analiza información, contextualiza los hechos y los acerca a la sociedad a través de <strong>redes sociales y contenidos accesibles</strong>.
        <br></br>
        La transparencia también depende de que la información circule y llegue a la ciudadanía de manera clara y rigurosa.
      </>
    ),
  },
  {
    title: "Monitoreo Social de Datos Públicos",
    // image: "/ilust 2.png",
     image: "/img3.jpg",
    description: (
      <>
        El <strong>Programa de Monitoreo Social de Datos Públicos (MSDP)</strong> investiga cómo se produce, se comunica y se interpreta la información pública. A través de pedidos formales de acceso a la información, obtenemos datos oficiales que luego analizamos y contrastamos con su tratamiento mediático y político. El objetivo es detectar <strong>inconsistencias, posibles manipulaciones o vacíos informativos</strong>. Cuando la información es denegada, incompleta o silenciada, también lo documentamos.
        <br></br>
        Los resultados se transforman en <strong>informes técnicos públicos y recomendaciones institucionales</strong> que buscan fortalecer la transparencia y el acceso ciudadano a la información.
      </>
    ),
  },
]

function ProyectoCard({ proyecto }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      key={proyecto.title}
      className="w-[85%] md:w-[28%] bg-[#FAFAFA] rounded-lg overflow-hidden shadow-md"
    >
      <div className="p-4">
        <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
          <img
            src={proyecto.image}
            alt={proyecto.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="px-10 pb-10">
        <h3 className="text-xl font-semibold text-center text-[#134E76] mb-6">
          {proyecto.title}
        </h3>
        
        {/* Desktop: Always show description */}
        <div className="hidden md:block">
          <p className="text-sm font-normal text-[#134E76]">
            {proyecto.description}
          </p>
        </div>

        {/* Mobile: Expandable description */}
        <div className="md:hidden">
          {isExpanded && (
            <p className="text-sm font-normal text-[#134E76] mb-4">
              {proyecto.description}
            </p>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-[#134E76] text-white rounded-lg hover:bg-[#134E76]/90 transition-colors"
          >
            <ChevronDown
              size={20}
              className={`transform transition-transform ${isExpanded ? "rotate-180" : ""}`}
            />
            {isExpanded ? "Ocultar" : "Ver"}
          </button>
        </div>
      </div>
    </div>
  )
}

export function Proyectos() {
  return (
    <section id="proyectos" className="py-8 md:py-24 bg-[#f67f01]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#FFFFFF] mb-8">
          Proyectos
        </h2>

        {/* Projects Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {proyectos.map((proyecto) => (
            <ProyectoCard key={proyecto.title} proyecto={proyecto} />
          ))}
        </div>
      </div>
    </section>
  )
}
