"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Desenvolvedor Front-end"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Olá, eu sou <span className="text-primary">Willyan Gabriel</span>
          </h1>

          <div className="text-2xl md:text-3xl text-muted-foreground mb-8 h-12">
            {text}
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            Sou Técnico em TI pela Lourdinas e atualmente cursando Análise e Desenvolvimento de Sistemas na UEPB.
            Apaixonado por criar experiências digitais incríveis com foco em front-end e backend.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" onClick={() => scrollToSection("projects")} className="text-lg px-8 py-3">
              Ver Projetos
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="text-lg px-8 py-3"
            >
              Entre em Contato
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Willyang10x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/willyan-gabriel-70b53b344"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://www.instagram.com/willdsg07/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={28} />
            </a>
            <a
              href="https://wg-designer.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
