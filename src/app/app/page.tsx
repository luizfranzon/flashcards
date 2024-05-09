"use client"

import { Card } from "@/components/Card";
import { CreateCardArea } from "@/components/CreateCardArea";
import { useCardDataContext } from "@/context/CardDataContext";
import { useEffect } from "react";

export default function App() {

  const { cardData } = useCardDataContext()

  return (
    <div className="max-w-7xl m-auto">
      <div className="grid grid-cols-3 gap-6">
        {
          cardData.map(card => {
            return (
              <Card key={card.id} id={card.id} title={card.title} content={card.content} />
            )
          })
        }
        <CreateCardArea />
      </div>
    </div>
  )
}