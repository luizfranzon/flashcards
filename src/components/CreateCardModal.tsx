import { ReactNode } from "react"

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

interface CreateCardModalProps {
  children: ReactNode
}

export function CreateCardModal({ children }: CreateCardModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Criar novo flashcard</DialogTitle>
          <DialogDescription>
            Escreva o topíco e o texto que deseja memorizar. Após preencher clique em &apos;&apos;Criar&apos;&apos;.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <div className="flex flex-col gap-2">
            <Label className="ml-1" htmlFor="title">
              Título:
            </Label>
            <Input
              id="title"
              className="col-span-3"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="ml-1" htmlFor="text">
              Texto:
            </Label>
            <Textarea rows={6} id="text" className="col-span-3" required />
          </div>
          <DialogFooter>
            <Button type="submit">Criar</Button>
          </DialogFooter>
        </form>

      </DialogContent>
    </Dialog>
  )
}
