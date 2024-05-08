import { useContext } from "react";
import { CreateCardModal } from "./CreateCardModal";
import { CardDataContext } from "./context/CardDataContext";

export function CreateCardArea() {

  const { cardData, setCardData } = useContext(CardDataContext)

  return (
    <CreateCardModal setCardData={setCardData}>
      <div className="h-48 group hover:bg-white min-w-96 border-[2px] border-dashed rounded-lg flex items-center justify-center p-2 cursor-pointer transition-colors hover:border-none">
        <span className="group-hover:text-black font-bold text-xl select-none">Criar novo flashcard.</span>
      </div>
    </CreateCardModal>
  )
}