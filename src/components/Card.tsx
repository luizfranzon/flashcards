"use client"

import { useContext, useState } from "react"

import "../styles/flip-animation.css"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Trash } from "phosphor-react"
import { CardData, CardDataContext } from "../context/CardDataContext"
import { toast } from "sonner"

import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuContent,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { Pencil } from "lucide-react"

export function Card({ title, content, id }: CardData) {

  const { cardData, setCardData } = useContext(CardDataContext)
  const [isActive, setIsActive] = useState(false)

  function handleFlipCard() {
    setIsActive(!isActive)
  }

  function handleDeleteCard(id: number) {
    const newCardData = cardData.filter(card => card.id !== id)
    setCardData(newCardData)
    toast("Flashcard apagado com sucesso!")

    localStorage.setItem('cardData', JSON.stringify(newCardData))
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="relative overflow-hidden">
          <div onClick={handleFlipCard} data-flipped={isActive} className="h-48 min-w-96 border-[2px] rounded-lg cursor-pointer border-none">
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
                  <ScrollArea className="h-full w-[390px] overflow-hidden">
                    <p className="text-white break-words w-full select-none">
                      {content}
                    </p>
                  </ScrollArea>
                </div>
              )
            }
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onClick={() => handleDeleteCard(id)}>
          <Trash size={20} className="mr-2" />
          Apagar
        </ContextMenuItem>
        <ContextMenuItem>
          <Pencil size={20} className="mr-2" />
          Editar
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}