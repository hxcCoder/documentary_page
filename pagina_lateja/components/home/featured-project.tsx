import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users } from "@/lib/icons"

export function FeaturedProject() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-card-foreground mb-4">Proyecto destacado</h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Project Image */}
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden">
              <Image
                src="/rural-community-documentary-scene-with-people-shar.png"
                alt="Voces del Territorio - Documental"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                En proceso
              </Badge>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif font-bold text-2xl md:text-3xl text-card-foreground mb-3">
                Voces del Territorio
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Un documental que explora las luchas por la tierra y el territorio en comunidades rurales, a través de
                testimonios y archivo fotográfico.
              </p>
            </div>

            {/* Project Meta */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>2024</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Región Andina</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>Ana García, Carlos Mendoza, María Torres</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {["Documental", "Territorio", "Comunidades"].map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <Button asChild className="w-full sm:w-auto">
              <Link href="/proyectos/voces-del-territorio">Ver proyecto completo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
