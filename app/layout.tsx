import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Willyan Gabriel - Desenvolvedor Front-End",
  description:
    "Portfólio de Willyan Gabriel, estudante de Análise e Desenvolvimento de Sistemas especializado em React, TypeScript e JavaScript."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <link rel="shortcut icon" href="logo-wg-Photoroom.png" type="image/x-icon" />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
