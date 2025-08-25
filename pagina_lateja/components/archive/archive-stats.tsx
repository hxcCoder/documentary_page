import { FileText, ImageIcon, Video, Headphones, Map, Calendar } from "lucide-react"

export function ArchiveStats() {
  const stats = [
    {
      icon: ImageIcon,
      label: "Fotografías",
      count: "1,247",
    },
    {
      icon: Video,
      label: "Videos",
      count: "89",
    },
    {
      icon: Headphones,
      label: "Audios",
      count: "156",
    },
    {
      icon: FileText,
      label: "Documentos",
      count: "324",
    },
    {
      icon: Map,
      label: "Mapas",
      count: "23",
    },
    {
      icon: Calendar,
      label: "Años",
      count: "5",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <div key={index} className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div className="font-serif font-bold text-2xl text-card-foreground">{stat.count}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        )
      })}
    </div>
  )
}
