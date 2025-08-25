import Image from "next/image"
import { Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Ana García",
    role: "Directora y Documentalista",
    bio: "Comunicadora social con 10 años de experiencia en documentales sociales. Especializada en narrativas de género y territorio.",
    image: "/team/ana-garcia.jpg",
    contact: "ana@colectivadocumentalista.org",
  },
  {
    name: "Carlos Mendoza",
    role: "Fotógrafo y Editor",
    bio: "Fotógrafo documental enfocado en movimientos sociales y derechos humanos. Editor de video con experiencia en post-producción.",
    image: "/team/carlos-mendoza.jpg",
    contact: "carlos@colectivadocumentalista.org",
  },
  {
    name: "María Torres",
    role: "Investigadora y Productora",
    bio: "Antropóloga especializada en metodologías participativas. Coordina la investigación y producción de proyectos.",
    image: "/team/maria-torres.jpg",
    contact: "maria@colectivadocumentalista.org",
  },
]

export function TeamSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">Nuestro equipo</h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Member Photo */}
              <div className="aspect-square relative overflow-hidden">
                <Image src="/professional-portrait-of-documentary-filmmaker.png" alt={member.name} fill className="object-cover" />
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="font-serif font-bold text-xl text-card-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>

                {/* Contact */}
                <a
                  href={`mailto:${member.contact}`}
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {member.contact}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
