"use client"

import { Card, CardProps } from "@/components/Card";
import { CardDataContext } from "@/components/context/CardDataContext";
import { CreateCardArea } from "@/components/CreateCardArea";
import { useContext, useState } from "react";

interface CardData extends CardProps {
  id: number
}

export default function Dashboard() {

  const { cardData } = useContext(CardDataContext)

  return (
    <div className="max-w-7xl m-auto">
      <div className="grid grid-cols-3 gap-6">
        {
          cardData.map(card => {
            return (
              <Card key={card.id} title={card.title} content={card.content} />
            )
          })
        }
        <CreateCardArea />
      </div>
    </div>
  )
}