import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="fixed z-10 bottom-0 border-t w-full p-4 select-none bg-[#030712]">
      <div className="m-auto max-w-7xl flex items-center justify-between">
        <a target="_blank" href="https://luizfranzon.dev" className="font-medium text-[#63656c] hover:underline hover:text-white transition-colors" >luizfranzon.dev</a>
        <div>
          <div className="flex items-center gap-3">
            <a target="_blank" className="font-medium text-[#63656c] hover:underline hover:text-white transition-colors" href="https://github.com/luizfranzon/flashcards"><Github /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}