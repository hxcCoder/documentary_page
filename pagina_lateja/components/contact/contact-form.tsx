"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="bg-card rounded-lg p-8">
      <h2 className="font-serif font-bold text-2xl text-card-foreground mb-6">Envíanos un mensaje</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
              Nombre *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre completo"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
              Email *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-card-foreground mb-2">
            Asunto *
          </label>
          <Input
            id="subject"
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="¿De qué quieres hablarnos?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
            Mensaje *
          </label>
          <Textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Cuéntanos sobre tu proyecto, idea o propuesta de colaboración..."
            rows={6}
          />
        </div>

        <Button type="submit" className="w-full">
          <Send className="h-4 w-4 mr-2" />
          Enviar mensaje
        </Button>
      </form>
    </div>
  )
}
