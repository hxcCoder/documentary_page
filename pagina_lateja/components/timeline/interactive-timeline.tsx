"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ChevronLeft, ChevronRight } from "lucide-react"

const timelineData = [
  {
    year: 2024,
    projects: [
      {
        id: "voces-del-territorio",
        title: "Voces del Territorio",
        type: "documental",
        status: "en-proceso",
        description: "Documental sobre luchas territoriales en comunidades rurales",
        image: "/rural-community-documentary-scene-with-people-shar.png",
        location: "Región Andina",
        team: ["Ana García", "Carlos Mendoza", "María Torres"],
        date: "2024-03-15",
      },
      {
        id: "mapeo-conflictos-2024",
        title: "Mapeo de Conflictos Territoriales",
        type: "mapa",
        status: "finalizado",
        description: "Cartografía colaborativa de conflictos por el territorio",
        image: "/documentary-collective-working-in-field-with-camer.png",
        location: "Nacional",
        team: ["Colectiva Documentalista"],
        date: "2024-01-30",
      },
    ],
  },
  {
    year: 2023,
    projects: [
      {
        id: "memorias-urbanas",
        title: "Memorias Urbanas",
        type: "fotografia",
        status: "finalizado",
        description: "Serie fotográfica sobre transformación urbana",
        image: "/documentary-collective-working-in-field-with-camer.png",
        location: "Ciudad Capital",
        team: ["Luis Ramírez", "Sofia Herrera"],
        date: "2023-08-10",
      },
      {
        id: "video-testimonios-2023",
        title: "Video Testimonios - Mujeres Rurales",
        type: "video",
        status: "finalizado",
        description: "Testimonios audiovisuales de mujeres rurales",
        image: "/rural-community-documentary-scene-with-people-shar.png",
        location: "Región Andina",
        team: ["Ana García", "Carlos Mendoza"],
        date: "2023-09-15",
      },
    ],
  },
  {
    year: 2022,
    projects: [
      {
        id: "formacion-colectiva",
        title: "Formación en Metodologías Colaborativas",
        type: "formacion",
        status: "finalizado",
        description: "Talleres de formación en documentalismo colaborativo",
        image: "/documentary-collective-working-in-field-with-camer.png",
        location: "Múltiples regiones",
        team: ["Colectiva Documentalista"],
        date: "2022-06-20",
      },
    ],
  },
]

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

const typeLabels = {
  documental: "Documental",
  fotografia: "Fotografía",
  video: "Video",
  mapa: "Mapa",
  formacion: "Formación",
}

export function InteractiveTimeline() {
  const [selectedYear, setSelectedYear] = useState(2024)
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const currentYearData = timelineData.find((item) => item.year === selectedYear)
  const years = timelineData.map((item) => item.year).sort((a, b) => b - a)

  const navigateYear = (direction: "prev" | "next") => {
    const currentIndex = years.indexOf(selectedYear)
    if (direction === "prev" && currentIndex > 0) {
      setSelectedYear(years[currentIndex - 1])
    } else if (direction === "next" && currentIndex < years.length - 1) {
      setSelectedYear(years[currentIndex + 1])
    }
    setSelectedProject(null)
  }

  return (
    <div className="bg-card rounded-lg p-8">
      <div className="text-center mb-8">
        <h2 className="font-serif font-bold text-3xl text-card-foreground mb-4">Timeline de Proyectos</h2>
        <p className="text-muted-foreground">Explora nuestros proyectos organizados cronológicamente</p>
      </div>

      {/* Year Navigation */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigateYear("prev")}
          disabled={years.indexOf(selectedYear) === 0}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex gap-2">
          {years.map((year) => (
            <Button
              key={year}
              variant={selectedYear === year ? "default" : "outline"}
              onClick={() => {
                setSelectedYear(year)
                setSelectedProject(null)
              }}
              className="min-w-[80px]"
            >
              {year}
            </Button>
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => navigateYear("next")}
          disabled={years.indexOf(selectedYear) === years.length - 1}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Timeline Content */}
      {currentYearData && (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="font-serif font-bold text-2xl text-card-foreground mb-2">{selectedYear}</h3>
            <p className="text-muted-foreground">{currentYearData.projects.length} proyectos realizados</p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentYearData.projects.map((project) => (
              <div
                key={project.id}
                className={`bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer ${
                  selectedProject === project.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              >
                {/* Project Image */}
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className={statusColors[project.status as keyof typeof statusColors]}>
                      {statusLabels[project.status as keyof typeof statusLabels]}
                    </Badge>
                    <Badge variant="outline" className="bg-white/90 text-black">
                      {typeLabels[project.type as keyof typeof typeLabels]}
                    </Badge>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h4 className="font-serif font-semibold text-lg text-foreground mb-2">{project.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(project.date).toLocaleDateString("es-ES")}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span>{project.team.join(", ")}</span>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {selectedProject === project.id && (
                    <div className="pt-4 border-t space-y-3">
                      <div>
                        <h5 className="font-medium text-foreground mb-2">Equipo del proyecto</h5>
                        <div className="flex flex-wrap gap-1">
                          {project.team.map((member) => (
                            <Badge key={member} variant="secondary" className="text-xs">
                              {member}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button asChild className="w-full">
                        <Link href={`/proyectos/${project.id}`}>Ver proyecto completo</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
