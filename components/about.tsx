"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, GraduationCap, Code, Heart } from "lucide-react"
import { motion } from "framer-motion"

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  }

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Sobre <span className="text-primary text-glow">Mim</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conheça a jornada por trás do código.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6 text-lg text-muted-foreground">
              <p className="leading-relaxed">
                Mais do que apenas código, busco criar <span className="text-foreground font-semibold">experiências</span>. 
                Sou desenvolvedor front-end formado como Técnico em TI pelas Lourdinas e graduando em 
                <strong className="text-primary"> Análise e Desenvolvimento de Sistemas na UEPB</strong>.
              </p>
              <p className="leading-relaxed">
                Minha especialidade é transformar designs complexos em interfaces fluidas e performáticas. 
                No backend, utilizo MySQL para dar vida e funcionalidade às aplicações.
              </p>
              
              <div className="flex items-center gap-3 pt-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <MapPin size={24} />
                </div>
                <span className="text-foreground font-medium">Campina Grande - PB</span>
              </div>
            </motion.div>

            <motion.div variants={containerVariants} className="grid gap-4">
              {[
                { icon: GraduationCap, title: "Educação", desc: ["ADS - UEPB (Cursando)", "Técnico em TI","ECI - Ensino Médio"] },
                { icon: Code, title: "Foco", desc: ["Desenvolvimento Front-end & Backend"] },
                { icon: Heart, title: "Paixão", desc: ["Criar experiências digitais incríveis"] }
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants} whileHover={{ scale: 1.02 }} className="group">
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-6 flex items-center gap-5">
                      <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <item.icon className="text-primary w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-foreground mb-1">{item.title}</h3>
                        {item.desc.map((d, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm">{d}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}