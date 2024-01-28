import { CreateCardModal } from "./CreateCardModal";

export function CreateCardArea() {
  return (
    <CreateCardModal>
      <div className="h-36 w-72 border-2 border-dashed rounded-lg flex items-center justify-center p-2 cursor-pointer bg-background hover:brightness-125 transition-all">
        <span className="font-semibold text-white/60">Criar novo flashcard</span>
      </div>
    </CreateCardModal>
  )
}