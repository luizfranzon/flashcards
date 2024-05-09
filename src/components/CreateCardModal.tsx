"use client"

import { FormEvent, ReactNode, useContext, useState } from "react"

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
import { CardData, CardDataContext } from "../context/CardDataContext"

interface CreateCardModalProps {
  children: ReactNode
  setCardData: (cardData: CardData[]) => void
  isEdit?: boolean;
}

export function CreateCardModal({ children, isEdit = false }: CreateCardModalProps) {

  const [isOpen, setIsOpen] = useState(false)

  const { cardData, setCardData } = useContext(CardDataContext)

  const [newCardTitle, setNewCardTitle] = useState('')
  const [newCardContent, setNewCardContent] = useState('')

  function handleAddNewCard(event: FormEvent) {
    event.preventDefault()
    const newCardData = {
      id: cardData.length + 1 + Math.random(),
      title: newCardTitle,
      content: newCardContent
    }

    setCardData([...cardData, newCardData])

    localStorage.setItem('cardData', JSON.stringify([...cardData, newCardData]))

    setNewCardTitle('')
    setNewCardContent('')
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isEdit ? 'Editar flashcard' : 'Criar novo flashcard'}</DialogTitle>
          {
            isEdit ? (
              <DialogDescription>
                Edite o nome e conteúdo do card.
              </DialogDescription>
            ) : (
              <DialogDescription>
                Escreva o topíco e o texto que deseja memorizar. <br />Após preencher clique em &apos;&apos;Criar&apos;&apos;.
              </DialogDescription>
            )
          }
        </DialogHeader>
        <form onSubmit={(event) => handleAddNewCard(event)} id="new-card-form" className="grid gap-4">
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
            <Button type="submit">Criar</Button>
          </DialogFooter>
        </form>

      </DialogContent>
    </Dialog>
  )
}
