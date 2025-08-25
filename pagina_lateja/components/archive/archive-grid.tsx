"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, MapPin, Clock, FileText, ImageIcon, Video, Headphones, Map } from "lucide-react"

// Mock data - in real app this would come from content/archive.json
const archiveItems = [
  {
    id: "territorio-campesino-2024",
    title: "Territorio Campesino - Serie Fotográfica",
    type: "fotografia",
    author: "Carlos Mendoza",
    date: "2024-03-15",
    year: 2024,
    description: "Registro fotográfico de la vida cotidiana en comunidades campesinas de la región andina.",
    tags: ["territorio", "campesino", "agricultura", "comunidad"],
    location: "Región Andina",
    image: "/documentary-collective-working-in-field-with-camer.png",
    project: "voces-del-territorio",
  },
  {
    id: "entrevistas-lideres-2023",
    title: "Entrevistas con Líderes Comunitarios",
    type: "audio",
    author: "Ana García",
    date: "2023-11-20",
    year: 2023,
    description: "Testimonios de líderes comunitarios sobre procesos organizativos y resistencia territorial.",
    tags: ["testimonios", "liderazgo", "organización", "resistencia"],
    location: "Múltiples regiones",
    duration: "2h 45min",
    project: "voces-del-territorio",
  },
  {
    id: "archivo-historico-barrio",
    title: "Archivo Histórico del Barrio",
    type: "documento",
    author: "María Torres",
    date: "2023-08-10",
    year: 2023,
    description: "Recopilación de documentos históricos sobre la formación y desarrollo del barrio popular.",
    tags: ["historia", "barrio", "urbano", "memoria"],
    location: "Ciudad Capital",
    image: "/rural-community-documentary-scene-with-people-shar.png",
    project: "memorias-urbanas",
  },
  {
    id: "video-testimonios-2023",
    title: "Video Testimonios - Mujeres Rurales",
    type: "video",
    author: "Ana García, Carlos Mendoza",
    date: "2023-09-15",
    year: 2023,
    description: "Testimonios audiovisuales de mujeres rurales sobre sus luchas y resistencias.",
    tags: ["mujeres", "rural", "testimonios", "género"],
    location: "Región Andina",
    duration: "45min",
    image: "/documentary-collective-working-in-field-with-camer.png",
    project: "voces-del-territorio",
  },
]

const typeIcons = {
  fotografia: ImageIcon,
  video: Video,
  audio: Headphones,
  documento: FileText,
  mapa: Map,
}

const typeLabels = {
  fotografia: "Fotografía",
  video: "Video",
  audio: "Audio",
  documento: "Documento",
  mapa: "Mapa",
}

export function ArchiveGrid() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  return (
    <div className="space-y-6">
      {/* View Toggle */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">Mostrando {archiveItems.length} elementos</p>
        <div className="flex gap-2">
          <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
            Cuadrícula
          </Button>
          <Button variant={viewMode === "list" ? "default" : "outline"} size="sm" onClick={() => setViewMode("list")}>
            Lista
          </Button>
        </div>
      </div>

      {/* Grid View */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {archiveItems.map((item) => {
            const TypeIcon = typeIcons[item.type as keyof typeof typeIcons]
            return (
              <Link key={item.id} href={`/archivo/${item.id}`} className="group">
                <article className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Item Image/Icon */}
                  <div className="aspect-video relative overflow-hidden bg-muted">
                    {item.image ? (
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <TypeIcon className="h-12 w-12 text-muted-foreground" />
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-black">
                        <TypeIcon className="h-3 w-3 mr-1" />
                        {typeLabels[item.type as keyof typeof typeLabels]}
                      </Badge>
                    </div>
                  </div>

                  {/* Item Content */}
                  <div className="p-4">
                    <h3 className="font-serif font-semibold text-lg text-card-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Meta Information */}
                    <div className="space-y-1 mb-3">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <User className="h-3 w-3" />
                        <span>{item.author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(item.date).toLocaleDateString("es-ES")}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{item.location}</span>
                      </div>
                      {item.duration && (
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{item.duration}</span>
                        </div>
                      )}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {item.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {item.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{item.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      )}

      {/* List View */}
      {viewMode === "list" && (
        <div className="space-y-4">
          {archiveItems.map((item) => {
            const TypeIcon = typeIcons[item.type as keyof typeof typeIcons]
            return (
              <Link key={item.id} href={`/archivo/${item.id}`} className="group">
                <article className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex gap-6">
                    {/* Thumbnail */}
                    <div className="w-32 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      {item.image ? (
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={128}
                          height={96}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <TypeIcon className="h-8 w-8 text-muted-foreground" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-serif font-semibold text-xl text-card-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <Badge variant="secondary">
                          <TypeIcon className="h-3 w-3 mr-1" />
                          {typeLabels[item.type as keyof typeof typeLabels]}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground mb-3 line-clamp-2">{item.description}</p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{item.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(item.date).toLocaleDateString("es-ES")}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{item.location}</span>
                        </div>
                        {item.duration && (
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{item.duration}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
