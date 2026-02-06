import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Resume } from "@/components/resume"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { SpaceBackground } from "@/components/space-background"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden selection:bg-primary/30 selection:text-white">
      
      {/* Background Espacial */}
      <SpaceBackground />
      
      {/* Conteúdo sobreposto */}
      <div className="relative z-10">
        <Header />
        <Hero />
        
        {/* Espaçamento grande entre seções */}
        <div className="space-y-32 pb-32">
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Contact />
        </div>
        
        <Footer />
      </div>
    </main>
  )
}