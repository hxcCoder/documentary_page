"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users } from "lucide-react"

// Mock data - in real app this would come from content/projects.json
const projects = [
  {
    id: "voces-del-territorio",
    title: "Voces del Territorio",
    type: "documental",
    year: 2024,
    status: "en-proceso",
    description: "Un documental que explora las luchas por la tierra y el territorio en comunidades rurales.",
    image: "/rural-community-documentary-scene-with-people-shar.png",
    tags: ["territorio", "comunidades", "resistencia"],
    location: "Región Andina",
    team: ["Ana García", "Carlos Mendoza", "María Torres"],
  },
  {
    id: "memorias-urbanas",
    title: "Memorias Urbanas",
    type: "fotografia",
    year: 2023,
    status: "finalizado",
    description: "Serie fotográfica sobre la transformación del espacio urbano y sus habitantes.",
    image: "/documentary-collective-working-in-field-with-camer.png",
    tags: ["urbano", "gentrificación", "memoria"],
    location: "Ciudad Capital",
    team: ["Luis Ramírez", "Sofia Herrera"],
  },
]

export function ProjectsGrid() {
  const [filter, setFilter] = useState<string>("todos")

  const filteredProjects = projects.filter((project) => {
    if (filter === "todos") return true
    return project.type === filter
  })

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project) => (
        <Link key={project.id} href={`/proyectos/${project.id}`} className="group">
          <article className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Project Image */}
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge className={statusColors[project.status as keyof typeof statusColors]}>
                  {statusLabels[project.status as keyof typeof statusLabels]}
                </Badge>
                <Badge variant="outline" className="bg-white/90 text-black">
                  {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                </Badge>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="font-serif font-bold text-xl text-card-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

              {/* Project Meta */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Users className="h-3 w-3" />
                  <span>{project.team.length} miembros del equipo</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {project.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{project.tags.length - 3}
                  </Badge>
                )}
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  )
}
