"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const filters = [
  { id: "todos", label: "Todos los proyectos" },
  { id: "documental", label: "Documentales" },
  { id: "fotografia", label: "Fotografía" },
  { id: "cronica", label: "Crónicas" },
]

export function ProjectsFilter() {
  const [activeFilter, setActiveFilter] = useState("todos")

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2 justify-center">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? "default" : "outline"}
            onClick={() => setActiveFilter(filter.id)}
            className="text-sm"
          >
            {filter.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
