"use client"

import { useState } from "react"

import "../styles/flip-animation.css"
import { ScrollArea } from "@/components/ui/scroll-area"


export interface CardProps {
  title: string
  content: string
}

export function Card({ title, content }: CardProps) {

  const [isActive, setIsActive] = useState(false)

  function handleShowAnwser() {
    setIsActive(!isActive)
  }

  return (
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
  )
}