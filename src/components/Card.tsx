"use client"

import { useState } from "react"

export function Card() {

  const [isActive, setIsActive] = useState(false)

  function handleShowAnwser() {
    setIsActive(!isActive)
  }

  return (
    <div onClick={handleShowAnwser} data-flipped={isActive} className="h-48 w-96 rounded-lg flex items-center justify-center p-2 cursor-pointer bg-white transition-all">
      <span className="font-bold text-xl text-black">Criar novo flashcard</span>
    </div>
  )
}