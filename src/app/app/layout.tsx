"use client"

import { CardData, CardDataContext } from "@/components/context/CardDataContext"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { useContext, useState } from "react"

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {

  const [cardData, setCardData] = useState<CardData[]>([])

  return (
    <CardDataContext.Provider value={{ cardData, setCardData }}>
      <div className="relative">
        <Header />
        <div className="p-5">{children}</div>
        <Footer />
      </div>
    </CardDataContext.Provider>
  )
}