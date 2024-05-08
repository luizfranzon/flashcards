import { createContext } from "react"

export interface CardData {
  id: number
  title: string
  content: string
}

interface CardDataContextProps {
  cardData: CardData[]
  setCardData: (cardData: CardData[]) => void
}

export const CardDataContext = createContext<CardDataContextProps>({} as CardDataContextProps)