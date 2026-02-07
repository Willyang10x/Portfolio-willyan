"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram, ExternalLink, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Desenvolvedor Front-end"

  useEffect(() => {
    // Pequeno delay inicial para garantir que a página carregou antes de começar
    const startDelay = setTimeout(() => {
      let currentIndex = 0
      const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setText(fullText.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(interval)
        }
      }, 100) // Velocidade da digitação

      return () => clearInterval(interval)
    }, 500) // Espera 0.5s antes de começar

    return () => clearTimeout(startDelay)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  // Variantes para garantir que o texto apareça suavemente
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Glow central reduzido para mobile para evitar lag */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-primary/20 rounded-full blur-[80px] md:blur-[120px] -z-10" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto text-center z-10"
      >
        <div className="max-w-5xl mx-auto">
          
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tighter leading-tight">
            Olá, eu sou <br className="hidden md:block"/>
            <span className="animate-gradient-x text-glow block md:inline mt-2 md:mt-0">
              Willyan Gabriel
            </span>
          </h1>

          {/* Área da digitação com altura fixa para evitar pulos na tela */}
          <div className="text-2xl md:text-4xl text-muted-foreground mb-8 h-12 flex justify-center items-center gap-2">
            <span className="font-light min-h-[40px]">{text}</span>
            <motion.span 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-[3px] h-8 bg-primary block"
            />
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            Técnico em TI e estudante de Análise e Desenvolvimento de Sistemas na UEPB.
            Transformo ideias complexas em interfaces digitais <span className="text-primary font-semibold">impecáveis</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 px-4">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("projects")} 
              className="group text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] transition-all hover:scale-105 w-full sm:w-auto"
            >
              Ver Projetos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="text-lg px-8 py-6 rounded-full border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all hover:scale-105 w-full sm:w-auto"
            >
              Entre em Contato
            </Button>
          </div>

          <div className="flex justify-center gap-6 md:gap-8 flex-wrap">
            {[
              { icon: Github, href: "https://github.com/Willyang10x" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/willyan-gabriel-70b53b344" },
              { icon: Instagram, href: "https://www.instagram.com/willdsg07/" },
              { icon: ExternalLink, href: "https://wg-designer.netlify.app/" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1, color: "var(--primary)" }}
                className="text-muted-foreground transition-colors p-2"
              >
                <social.icon size={32} />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}