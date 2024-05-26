"use client"

import { FormEvent, useContext, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "./ui/textarea"
import { CardDataContext } from "../context/CardDataContext"

interface CreateCardModalProps {
  title: string
  content: string
  cardId: number
  isOpen: boolean
  setIsOpen: (state: boolean) => void
}

export function EditCardModal({ isOpen, setIsOpen, cardId, title, content }: CreateCardModalProps) {

  const { cardData, setCardData } = useContext(CardDataContext)

  const [newCardTitle, setNewCardTitle] = useState(title)
  const [newCardContent, setNewCardContent] = useState(content)

  function handleEditCard(event: FormEvent) {
    event.preventDefault()
    const newCardData = {
      id: cardId,
      title: newCardTitle,
      content: newCardContent
    }

    const newCardList = cardData.map(card => {
      if (card.id === cardId) {
        return newCardData
      }
      return card
    })

    setCardData(newCardList)

    localStorage.setItem('cardData', JSON.stringify(newCardList))

    setNewCardTitle('')
    setNewCardContent('')
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar flashcard</DialogTitle>

          <DialogDescription>
            Edite o nome e conteúdo do card.
          </DialogDescription>

        </DialogHeader>
        <form onSubmit={(event) => handleEditCard(event)} id="new-card-form" className="grid gap-4">
          <div className="flex flex-col gap-2">
            <Label className="ml-1" htmlFor="title">
              Título:
            </Label>
            <Input
              id="title"
              className="col-span-3"
              onChange={(event) => setNewCardTitle(event.target.value)}
              value={newCardTitle}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="ml-1" htmlFor="text">
              Conteúdo:
            </Label>
            <Textarea
              onChange={(event) => setNewCardContent(event.target.value)}
              value={newCardContent}
              rows={6} id="content"
              className="col-span-3"
              required
            />
          </div>
          <DialogFooter>
            <Button type="submit">Salvar</Button>
          </DialogFooter>
        </form>

      </DialogContent>
    </Dialog>
  )
}
