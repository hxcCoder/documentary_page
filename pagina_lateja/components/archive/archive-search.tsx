"use client"

import { useState } from "react"
import { Search, Filter, Calendar, User, Tag } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ArchiveSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("todos")
  const [selectedYear, setSelectedYear] = useState("todos")
  const [selectedAuthor, setSelectedAuthor] = useState("todos")
  const [showFilters, setShowFilters] = useState(false)

  const types = [
    { value: "todos", label: "Todos los tipos" },
    { value: "fotografia", label: "Fotografía" },
    { value: "video", label: "Video" },
    { value: "audio", label: "Audio" },
    { value: "documento", label: "Documento" },
    { value: "mapa", label: "Mapa" },
  ]

  const years = [
    { value: "todos", label: "Todos los años" },
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
  ]

  const authors = [
    { value: "todos", label: "Todos los autores" },
    { value: "ana-garcia", label: "Ana García" },
    { value: "carlos-mendoza", label: "Carlos Mendoza" },
    { value: "maria-torres", label: "María Torres" },
    { value: "colectiva", label: "Colectiva Documentalista" },
  ]

  const activeFilters = [
    selectedType !== "todos" && {
      type: "type",
      value: selectedType,
      label: types.find((t) => t.value === selectedType)?.label,
    },
    selectedYear !== "todos" && { type: "year", value: selectedYear, label: selectedYear },
    selectedAuthor !== "todos" && {
      type: "author",
      value: selectedAuthor,
      label: authors.find((a) => a.value === selectedAuthor)?.label,
    },
  ].filter(Boolean)

  const clearFilter = (filterType: string) => {
    switch (filterType) {
      case "type":
        setSelectedType("todos")
        break
      case "year":
        setSelectedYear("todos")
        break
      case "author":
        setSelectedAuthor("todos")
        break
    }
  }

  const clearAllFilters = () => {
    setSearchTerm("")
    setSelectedType("todos")
    setSelectedYear("todos")
    setSelectedAuthor("todos")
  }

  return (
    <div className="mb-8 space-y-6">
      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar en el archivo por título, descripción o etiquetas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-3 text-base"
        />
      </div>

      {/* Filter Toggle */}
      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="inline-flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          {showFilters ? "Ocultar filtros" : "Mostrar filtros"}
        </Button>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="bg-card rounded-lg p-6 border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="text-sm font-medium text-card-foreground mb-2 flex items-center gap-2">
                <Tag className="h-4 w-4" />
                Tipo de contenido
              </label>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {types.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-card-foreground mb-2 flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Año
              </label>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year.value} value={year.value}>
                      {year.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-card-foreground mb-2 flex items-center gap-2">
                <User className="h-4 w-4" />
                Autor/a
              </label>
              <Select value={selectedAuthor} onValueChange={setSelectedAuthor}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {authors.map((author) => (
                    <SelectItem key={author.value} value={author.value}>
                      {author.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filters */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t">
              <span className="text-sm text-muted-foreground">Filtros activos:</span>
              {activeFilters.map((filter) => (
                <Badge
                  key={`${filter.type}-${filter.value}`}
                  variant="secondary"
                  className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                  onClick={() => clearFilter(filter.type)}
                >
                  {filter.label} ×
                </Badge>
              ))}
              <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-xs">
                Limpiar todo
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
