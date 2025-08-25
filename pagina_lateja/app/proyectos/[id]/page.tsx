import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock, ArrowLeft } from "lucide-react"

// Mock data - in real app this would come from content/projects.json
const projects = [
  {
    id: "voces-del-territorio",
    title: "Voces del Territorio",
    type: "documental",
    year: 2024,
    status: "en-proceso",
    description: "Un documental que explora las luchas por la tierra y el territorio en comunidades rurales.",
    longDescription:
      "A través de testimonios directos y un extenso archivo fotográfico, este proyecto documenta las resistencias y luchas por la defensa del territorio en diferentes regiones del país. El documental se construye desde una perspectiva colaborativa, donde las comunidades son protagonistas de sus propias narrativas.",
    image: "/rural-community-documentary-scene-with-people-shar.png",
    gallery: [
      "/rural-community-documentary-scene-with-people-shar.png",
      "/documentary-collective-working-in-field-with-camer.png",
    ],
    tags: ["territorio", "comunidades", "resistencia"],
    location: "Región Andina",
    duration: "85 minutos",
    team: ["Ana García", "Carlos Mendoza", "María Torres"],
    collaborators: ["Comunidad El Rosal", "Colectivo Tierra Viva"],
  },
]

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  const statusColors = {
    "en-proceso": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    finalizado: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "pre-produccion": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  }

  const statusLabels = {
    "en-proceso": "En proceso",
    finalizado: "Finalizado",
    "pre-produccion": "Pre-producción",
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Back Navigation */}
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/proyectos" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver a proyectos
            </Link>
          </Button>
        </div>

        {/* Hero Image */}
        <section className="relative h-96 md:h-[500px]">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-8 left-0 right-0">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-3 mb-4">
                <Badge className={statusColors[project.status as keyof typeof statusColors]}>
                  {statusLabels[project.status as keyof typeof statusLabels]}
                </Badge>
                <Badge variant="outline" className="bg-white/90 text-black">
                  {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                </Badge>
              </div>
              <h1 className="font-serif font-black text-3xl md:text-5xl text-white mb-2">{project.title}</h1>
              <p className="text-white/90 text-lg max-w-2xl">{project.description}</p>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="font-serif font-bold text-2xl text-foreground mb-4">Sobre el proyecto</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">{project.longDescription}</p>
                </div>

                {/* Gallery */}
                {project.gallery && project.gallery.length > 0 && (
                  <div>
                    <h3 className="font-serif font-bold text-xl text-foreground mb-4">Galería</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.gallery.map((image, index) => (
                        <div key={index} className="aspect-video rounded-lg overflow-hidden">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${project.title} - Imagen ${index + 1}`}
                            width={600}
                            height={400}
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Collaborators */}
                {project.collaborators && project.collaborators.length > 0 && (
                  <div>
                    <h3 className="font-serif font-bold text-xl text-foreground mb-4">Colaboradores</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.collaborators.map((collaborator) => (
                        <Badge key={collaborator} variant="outline">
                          {collaborator}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-card rounded-lg p-6">
                  <h3 className="font-serif font-bold text-lg text-card-foreground mb-4">Detalles del proyecto</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Año:</span>
                      <span className="text-sm font-medium">{project.year}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Ubicación:</span>
                      <span className="text-sm font-medium">{project.location}</span>
                    </div>
                    {project.duration && (
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Duración:</span>
                        <span className="text-sm font-medium">{project.duration}</span>
                      </div>
                    )}
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <span className="text-sm text-muted-foreground block mb-1">Equipo:</span>
                        <div className="space-y-1">
                          {project.team.map((member) => (
                            <span key={member} className="text-sm font-medium block">
                              {member}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="bg-card rounded-lg p-6">
                  <h3 className="font-serif font-bold text-lg text-card-foreground mb-4">Etiquetas</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                  <h3 className="font-serif font-bold text-lg text-foreground mb-2">¿Te interesa este proyecto?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Contáctanos para más información o para colaborar.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/contacto">Contactar</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
