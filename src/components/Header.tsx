import Link from "next/link";
import { Button } from "./ui/button";
import { CreateCardModal } from "./CreateCardModal";

export function Header() {
  return (
    <header className="border-b p-5">
      <nav className="m-auto max-w-7xl flex items-center justify-between">
        <Link href={"/dashboard"}>
          <h1 className="font-black text-2xl">FlashCards.</h1>
        </Link>
        <CreateCardModal>
          <Button className="font-bold">Criar Flashcard</Button>
        </CreateCardModal>
      </nav>
    </header>
  )
}