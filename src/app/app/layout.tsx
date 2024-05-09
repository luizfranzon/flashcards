import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { CardDataProvider } from "@/context/CardDataContext"

export default function AppLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <CardDataProvider>
      <div className="relative">
        <Header />
        <div className="p-5">{children}</div>
        <Footer />
      </div>
    </CardDataProvider>
  )
}