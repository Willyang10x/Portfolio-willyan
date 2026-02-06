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

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    const initStars = () => {
      // Ajuste o divisor (4000) para ter mais ou menos estrelas
      const starCount = Math.floor((canvas.width * canvas.height) / 4000)
      stars = []
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.2, // Estrelas pequenas e delicadas
          alpha: Math.random(),
          speed: Math.random() * 0.15 + 0.02, // Velocidade lenta e suave
        })
      }
    }

    const drawStars = () => {
      // Limpa o canvas mantendo a transparência (o fundo preto vem do CSS global)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`
        ctx.fill()

        // Movimento suave para cima
        star.y -= star.speed

        // Efeito de cintilação (Twinkle)
        if (Math.random() > 0.995) {
          star.alpha = Math.random()
        }

        // Resetar estrela quando sair da tela
        if (star.y < 0) {
          star.y = canvas.height
          star.x = Math.random() * canvas.width
        }
      })

      animationFrameId = requestAnimationFrame(drawStars)
    }

    resizeCanvas()
    drawStars()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
      style={{ background: "transparent" }} // O fundo preto real será o do body
    />
  )
}