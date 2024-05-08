"use client"

import { useContext, useState } from "react"

import "../styles/flip-animation.css"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Trash } from "phosphor-react"
import { CardData, CardDataContext } from "./context/CardDataContext"

export function Card({ title, content, id }: CardData) {

  const { cardData, setCardData } = useContext(CardDataContext)

  const [isActive, setIsActive] = useState(false)

  function handleShowAnwser() {
    setIsActive(!isActive)
  }

  function handleDeleteCard(id: number) {
    const newCardData = cardData.filter(card => card.id !== id)
    setCardData(newCardData)
  }

  return (
    <div className="relative overflow-hidden">
      <div onClick={handleShowAnwser} data-flipped={isActive} className="h-48 min-w-96 border-[2px] rounded-lg cursor-pointer border-none">
        {
          !isActive && (
            <div className="front flex items-center justify-center h-full bg-white rounded-lg">
              <span className="text-black font-bold text-xl break-words w-full text-center select-none">{title}</span>
            </div>
          )
        }
        {
          isActive && (
            <div className="back h-full border-2 rounded-lg p-4">
              <ScrollArea className="h-40 w-96 overflow-hidden">
                <p className="text-white break-words w-full select-none">
                  {content}
                </p>
              </ScrollArea>
            </div>
          )
        }

      </div>
      <button onClick={() => handleDeleteCard(id)} className="absolute bottom-0">
        <Trash size={36} className={`${!isActive ? 'text-black' : 'text-white'} transition-colors hover:bg-red-500 rounded p-1`} />
      </button>
    </div>
  )
}