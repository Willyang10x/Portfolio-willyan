"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram, ExternalLink, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Desenvolvedor Front-end"

  useEffect(() => {
    const startDelay = setTimeout(() => {
      let currentIndex = 0
      const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setText(fullText.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(interval)
        }
      }, 100)
      return () => clearInterval(interval)
    }, 500)
    return () => clearTimeout(startDelay)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  // CORREÇÃO AQUI: Adicionado 'as const' para o TypeScript parar de chorar
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" as const } }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-24 pb-12 relative overflow-hidden">
      {/* Brilho de Fundo em tom azul combinando com seu tema */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
          
          {/* COLUNA ESQUERDA: Textos */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tighter leading-tight">
              Olá, eu sou <br className="hidden md:block"/>
              <span className="animate-gradient-x text-glow block mt-2">
                Willyan Gabriel
              </span>
            </h1>

            <div className="text-xl md:text-3xl text-muted-foreground mb-6 h-10 flex justify-center lg:justify-start items-center gap-2">
              <span className="font-light min-h-[40px]">{text}</span>
              <motion.span 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-[3px] h-6 md:h-8 bg-primary block"
              />
            </div>

            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-lg mx-auto lg:mx-0 text-pretty">
              Técnico em TI e estudante de Análise e Desenvolvimento de Sistemas na UEPB.
              Transformo ideias complexas em interfaces digitais <span className="text-primary font-semibold">impecáveis</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 px-4 lg:px-0">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("projects")} 
                className="group text-base md:text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(0,60,255,0.4)] transition-all hover:scale-105 w-full sm:w-auto"
              >
                Ver Projetos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="text-base md:text-lg px-8 py-6 rounded-full border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all hover:scale-105 w-full sm:w-auto text-white"
              >
                Entre em Contato
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start gap-6">
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
                  <social.icon size={28} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* COLUNA DIREITA: Apenas a Foto */}
          <div className="relative flex justify-center items-center min-h-[400px] lg:min-h-[600px] w-full order-1 lg:order-2">
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/20 shadow-[0_0_60px_rgba(0,60,255,0.4)] overflow-hidden z-10"
            >
              <Image 
                src="/perfil.png" 
                alt="Willyan Gabriel" 
                fill
                className="object-cover object-[center_15%] hover:scale-105 transition-transform duration-500"
                priority
                sizes="(max-width: 768px) 256px, 320px"
              />
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  )
}