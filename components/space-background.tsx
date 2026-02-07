"use client"

import { useEffect, useRef } from "react"

export function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let stars: { x: number; y: number; radius: number; alpha: number; speed: number }[] = []
    let prevWidth = window.innerWidth // Para rastrear mudança de largura

    const initStars = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      
      canvas.width = width
      canvas.height = height

      const isMobile = width < 768
      const densityDivisor = isMobile ? 12000 : 4000 // Menos estrelas no mobile
      const starCount = Math.floor((width * height) / densityDivisor)
      
      stars = []
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * (isMobile ? 1.2 : 1.5),
          alpha: Math.random(),
          speed: Math.random() * (isMobile ? 0.1 : 0.2) + 0.05,
        })
      }
    }

    const drawStars = () => {
      // Usa clearRect em vez de re-pintar fundo para performance
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`
        ctx.fill()

        star.y -= star.speed
        
        // Cintilação simplificada
        if (Math.random() > 0.99) {
          star.alpha = Math.random()
        }

        if (star.y < 0) {
          star.y = canvas.height
          star.x = Math.random() * canvas.width
        }
      })

      animationFrameId = requestAnimationFrame(drawStars)
    }

    const handleResize = () => {
      // TRUQUE: Só recria as estrelas se a LARGURA mudar.
      // Ignora a mudança de altura causada pela barra de endereço do celular.
      if (window.innerWidth !== prevWidth) {
        prevWidth = window.innerWidth
        initStars()
      }
    }

    initStars()
    drawStars()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-black"
    />
  )
}