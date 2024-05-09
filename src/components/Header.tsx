"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import { CreateCardModal } from "./CreateCardModal";
import { useCardDataContext } from "../context/CardDataContext";

export function Header() {
  const { setCardData } = useCardDataContext()

  return (
    <header className="border-b p-5">
      <nav className="m-auto max-w-7xl flex items-center justify-between">
        <Link href={"/app"}>
          <h1 className="font-black text-2xl">FlashCards.</h1>
        </Link>
        <CreateCardModal setCardData={setCardData}>
          <Button className="font-bold">Criar Flashcard</Button>
        </CreateCardModal>
      </nav>
    </header>
  )
}