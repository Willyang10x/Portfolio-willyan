"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram, ExternalLink, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Desenvolvedor Front-end"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) clearInterval(timer)
    }, 100)
    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
      {/* Glow central sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tighter leading-tight">
            Olá, eu sou <br className="hidden md:block"/>
            <span className="animate-gradient-x text-glow">
              Willyan Gabriel
            </span>
          </h1>

          <div className="text-2xl md:text-4xl text-gray-400 mb-8 h-12 flex justify-center items-center gap-2 font-light">
            <span>{text}</span>
            <motion.span 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-[2px] h-8 bg-primary block"
            />
          </div>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Técnico em TI e estudante de Análise e Desenvolvimento de Sistemas na UEPB.
            Transformo ideias em <span className="text-primary font-bold">realidade digital</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("projects")} 
              className="group text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all hover:scale-105"
            >
              Ver Projetos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="text-lg px-8 py-6 rounded-full border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all hover:scale-105 text-white"
            >
              Entre em Contato
            </Button>
          </div>

          <div className="flex justify-center space-x-8">
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
                whileHover={{ y: -5, scale: 1.1, color: "#a855f7" }}
                className="text-gray-400 transition-colors p-2"
              >
                <social.icon size={32} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}