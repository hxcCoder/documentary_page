"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Filter, Eye } from "lucide-react"

const mapData = [
  {
    id: "region-andina",
    name: "Región Andina",
    coordinates: { lat: 4.7, lng: -74.2 },
    projects: [
      {
        id: "voces-del-territorio",
        title: "Voces del Territorio",
        type: "documental",
        status: "en-proceso",
        year: 2024,
      },
      {
        id: "video-testimonios-2023",
        title: "Video Testimonios - Mujeres Rurales",
        type: "video",
        status: "finalizado",
        year: 2023,
      },
    ],
  },
  {
    id: "ciudad-capital",
    name: "Ciudad Capital",
    coordinates: { lat: 4.6, lng: -74.1 },
    projects: [
      {
        id: "memorias-urbanas",
        title: "Memorias Urbanas",
        type: "fotografia",
        status: "finalizado",
        year: 2023,
      },
    ],
  },
  {
    id: "multiples-regiones",
    name: "Múltiples Regiones",
    coordinates: { lat: 4.0, lng: -73.0 },
    projects: [
      {
        id: "mapeo-conflictos-2024",
        title: "Mapeo de Conflictos Territoriales",
        type: "mapa",
        status: "finalizado",
        year: 2024,
      },
      {
        id: "formacion-colectiva",
        title: "Formación en Metodologías Colaborativas",
        type: "formacion",
        status: "finalizado",
        year: 2022,
      },
    ],
  },
]

const typeColors = {
  documental: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  fotografia: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  video: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  mapa: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  formacion: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
}

const statusColors = {
  "en-proceso": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  finalizado: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "pre-produccion": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
}

export function InteractiveMap() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [filterType, setFilterType] = useState<string>("todos")

  const filteredRegions = mapData.map((region) => ({
    ...region,
    projects: region.projects.filter((project) => filterType === "todos" || project.type === filterType),
  }))

  const allTypes = ["todos", "documental", "fotografia", "video", "mapa", "formacion"]

  return (
    <div className="bg-card rounded-lg p-8">
      <div className="text-center mb-8">
        <h2 className="font-serif font-bold text-3xl text-card-foreground mb-4">Mapa de Proyectos</h2>
        <p className="text-muted-foreground">Explora nuestros proyectos por ubicación geográfica</p>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {allTypes.map((type) => (
          <Button
            key={type}
            variant={filterType === type ? "default" : "outline"}
            size="sm"
            onClick={() => setFilterType(type)}
            className="text-xs"
          >
            <Filter className="h-3 w-3 mr-1" />
            {type === "todos" ? "Todos" : type.charAt(0).toUpperCase() + type.slice(1)}
          </Button>
        ))}
      </div>

      {/* Map Visualization */}
      <div className="relative bg-background rounded-lg p-8 mb-8 min-h-[400px] overflow-hidden">
        {/* Simplified Map Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg" />

        {/* Map Points */}
        <div className="relative h-full">
          {filteredRegions.map((region) => {
            if (region.projects.length === 0) return null

            return (
              <div
                key={region.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                  selectedRegion === region.id ? "scale-110 z-10" : "hover:scale-105"
                }`}
                style={{
                  left: `${((region.coordinates.lng + 78) / 8) * 100}%`,
                  top: `${((6 - region.coordinates.lat) / 4) * 100}%`,
                }}
                onClick={() => setSelectedRegion(selectedRegion === region.id ? null : region.id)}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors ${
                    selectedRegion === region.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center">
                  <div className="bg-background border rounded-lg px-3 py-1 shadow-sm whitespace-nowrap">
                    <p className="text-sm font-medium text-foreground">{region.name}</p>
                    <p className="text-xs text-muted-foreground">{region.projects.length} proyectos</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Map Legend */}
        <div className="absolute bottom-4 left-4 bg-background border rounded-lg p-4 shadow-sm">
          <h4 className="font-medium text-foreground mb-2 text-sm">Leyenda</h4>
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full" />
              <span className="text-muted-foreground">Región con proyectos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 border-2 border-primary rounded-full" />
              <span className="text-muted-foreground">Región seleccionada</span>
            </div>
          </div>
        </div>
      </div>

      {/* Region Details */}
      {selectedRegion && (
        <div className="bg-background rounded-lg p-6">
          {(() => {
            const region = filteredRegions.find((r) => r.id === selectedRegion)
            if (!region) return null

            return (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif font-bold text-xl text-foreground">{region.name}</h3>
                  <Badge variant="outline">{region.projects.length} proyectos</Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {region.projects.map((project) => (
                    <div key={project.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-foreground">{project.title}</h4>
                        <div className="flex gap-1">
                          <Badge className={typeColors[project.type as keyof typeof typeColors]} variant="secondary">
                            {project.type}
                          </Badge>
                          <Badge className={statusColors[project.status as keyof typeof statusColors]}>
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{project.year}</span>
                        <Button variant="ghost" size="sm" asChild>
                          <a href={`/proyectos/${project.id}`}>
                            <Eye className="h-4 w-4 mr-1" />
                            Ver proyecto
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })()}
        </div>
      )}
    </div>
  )
}
