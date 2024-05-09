"use client"

import { createContext, useContext, useEffect, useState } from "react"

export interface CardData {
  id: number
  title: string
  content: string
}

interface CardDataProviderProps {
  children: React.ReactNode
}

interface CardDataContextProps {
  cardData: CardData[]
  setCardData: React.Dispatch<React.SetStateAction<CardData[]>>
}

export const CardDataContext = createContext({} as CardDataContextProps)

export function CardDataProvider({ children }: CardDataProviderProps) {

  const [cardData, setCardData] = useState<CardData[]>([])

  useEffect(() => {
    const cardData = localStorage.getItem('cardData')
    if (cardData) {
      return setCardData(JSON.parse(cardData))
    }

    return setCardData([])
  }, [setCardData])

  return (
    <CardDataContext.Provider value={{ cardData, setCardData }}>
      {children}
    </CardDataContext.Provider>
  )
}

export const useCardDataContext = () => useContext(CardDataContext)