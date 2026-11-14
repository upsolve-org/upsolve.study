import { SiteFooter } from "@/core/components/layout/site-footer"
import { SiteHeader } from "@/core/components/layout/site-header"
import { HomePage } from "@/features/home"

export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <HomePage />
      <SiteFooter />
    </div>
  )
}

export default App
