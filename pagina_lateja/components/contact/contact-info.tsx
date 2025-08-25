import { Mail, Send, MapPin, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif font-bold text-2xl text-foreground mb-6">Información de contacto</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Estamos siempre abiertos a nuevas colaboraciones y proyectos. No dudes en contactarnos por cualquiera de estos
          medios.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-1">Email</h3>
            <p className="text-muted-foreground">contacto@colectivadocumentalista.org</p>
            <p className="text-sm text-muted-foreground mt-1">Respuesta en 24-48 horas</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Send className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-1">Telegram</h3>
            <p className="text-muted-foreground">@colectivadoc</p>
            <p className="text-sm text-muted-foreground mt-1">Para conversaciones rápidas</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-1">Ubicación</h3>
            <p className="text-muted-foreground">Trabajamos en múltiples regiones</p>
            <p className="text-sm text-muted-foreground mt-1">Nos desplazamos según el proyecto</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-1">Horarios</h3>
            <p className="text-muted-foreground">Lunes a Viernes: 9:00 - 18:00</p>
            <p className="text-sm text-muted-foreground mt-1">Horario de Colombia (UTC-5)</p>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-lg p-6">
        <h3 className="font-serif font-semibold text-lg text-card-foreground mb-3">
          ¿Qué tipo de proyectos nos interesan?
        </h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Documentales colaborativos con comunidades</li>
          <li>• Proyectos de memoria histórica</li>
          <li>• Narrativas sobre territorio y medio ambiente</li>
          <li>• Historias de resistencia y organización social</li>
          <li>• Formación en metodologías documentales</li>
        </ul>
      </div>
    </div>
  )
}
