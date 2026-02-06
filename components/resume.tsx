"use client"

import { Download, Briefcase, GraduationCap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function Resume() {
  return (
    <section id="resume" className="py-24 px-4 bg-gradient-to-b from-black/0 to-black/40">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16"
        >
          <div>
            <h2 className="text-4xl font-bold mb-2">Trajetória <span className="text-primary">Profissional</span></h2>
            <p className="text-muted-foreground">Minha caminhada acadêmica e experiências.</p>
          </div>
          <Button 
            className="group bg-white text-black hover:bg-gray-200 transition-all rounded-full px-8 py-6 text-lg font-medium"
            onClick={() => window.open("/Curriculo-willyan.pdf", "_blank")}
          >
            <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            Baixar CV PDF
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Timeline Esquerda */}
          <div className="space-y-8">
            <motion.div 
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-3 bg-primary/20 rounded-lg"><Briefcase className="text-primary" size={24}/></div>
              <h3 className="text-2xl font-bold">Experiência</h3>
            </motion.div>

            <Card className="bg-transparent border-none shadow-none relative pl-8 border-l-2 border-white/10">
              <div className="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-primary ring-4 ring-black" />
              <CardContent className="p-0">
                <span className="text-sm font-mono text-primary mb-2 block">2023 - Atualmente</span>
                <h4 className="text-xl font-bold text-white">Designer Gráfico & Web</h4>
                <p className="text-muted-foreground mb-2">New Start - Agência de Mídia Digital</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Responsável pela criação de identidades visuais impactantes e desenvolvimento de materiais digitais, 
                  integrando conceitos de design com a funcionalidade web.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Timeline Direita */}
          <div className="space-y-8">
            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-3 bg-primary/20 rounded-lg"><GraduationCap className="text-primary" size={24}/></div>
              <h3 className="text-2xl font-bold">Educação</h3>
            </motion.div>

            <div className="space-y-10 border-l-2 border-white/10 ml-3 pl-8 relative">
              {[
                {
                  year: "2025 - Atual",
                  course: "Análise e Desenv. de Sistemas",
                  school: "UEPB - Universidade Estadual da Paraíba",
                  desc: "Foco em engenharia de software e arquitetura de sistemas."
                },
                {
                  year: "2023 - 2024",
                  course: "Técnico em Tecnologia da Informação",
                  school: "Escola Lourdinas",
                  desc: "Base sólida em lógica, redes e suporte."
                }
              ].map((edu, i) => (
                <div key={i} className="relative">
                  <div className="absolute left-[-37px] top-1 w-3 h-3 rounded-full bg-white/20 ring-4 ring-black group-hover:bg-primary transition-colors" />
                  <span className="text-sm font-mono text-primary mb-1 block">{edu.year}</span>
                  <h4 className="text-lg font-bold text-white">{edu.course}</h4>
                  <p className="text-muted-foreground text-sm">{edu.school}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}