import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative">
      <Header />
      <div className="p-5">{children}</div>
      <Footer />
    </div>
  )
}