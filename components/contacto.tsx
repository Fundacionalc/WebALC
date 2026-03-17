import { Mail, Instagram, Linkedin } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hola@fundacionalc.org",
    href: "mailto:hola@fundacionalc.org",
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@fundacionalc",
    href: "https://instagram.com/fundacionalc",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "company/fundacionalc",
    href: "https://linkedin.com/company/fundacionalc",
  },
]

export function Contacto() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-[#F2F2F2] border-t border-[#134E76]/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#134E76] mb-4">
          Contacto
        </h2>
        <p className="text-center font-normal text-[#134E76]/80 max-w-2xl mx-auto mb-12">
          ¿Tenés dudas sobre nuestra labor? ¿Querés sumarte como voluntario o realizar una
          consulta institucional? No dudes en contactarnos a través de nuestros canales oficiales.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {contactInfo.map((contact) => {
            const isEmail = contact.title === "Email"
            return (
              <a
                key={contact.title}
                href={contact.href}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-[#134E76]/10"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <contact.icon className="h-5 w-5 text-[#134E76]" />
                  <span className="font-semibold text-[#134E76]">{contact.title}</span>
                </div>
                <p className="text-sm font-normal text-[#134E76]/70">{contact.value}</p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
