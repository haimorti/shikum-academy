import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EquipmentHero } from "@/components/equipment/equipment-hero"
import { EquipmentSummary } from "@/components/equipment/equipment-summary"
import { EquipmentAccordion } from "@/components/equipment/equipment-accordion"
import { EquipmentTableOfContents } from "@/components/equipment/equipment-toc"
import { ImportantNote } from "@/components/important-note"
import { MobileNav } from "@/components/mobile-nav"
import { Breadcrumb } from "@/components/breadcrumb"

export default function EquipmentPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link to="/" className="text-sm font-bold text-primary transition-colors hover:text-primary/80">{"שיקום מקצועי | המדריך שלך"}</Link>
          <Button variant="ghost" size="sm" className="gap-2 text-sm text-muted-foreground hover:text-foreground" asChild>
            <Link to="/benefits">
              <ArrowRight className="h-4 w-4" />
              {"כל הזכאויות"}
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <EquipmentHero />

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-10 md:py-16">
        <div className="flex flex-col gap-10 lg:flex-row-reverse lg:gap-12">
          {/* Sidebar - Table of Contents (desktop only) */}
          <aside className="hidden lg:block lg:w-64 lg:shrink-0">
            <div className="lg:sticky lg:top-20">
              <EquipmentTableOfContents />
            </div>
          </aside>

          {/* Mobile floating nav */}
          <MobileNav />

          {/* Main Content Area */}
          <div className="flex flex-1 flex-col gap-8">
            <Breadcrumb current="ציוד לימודי" />

            {/* Summary */}
            <EquipmentSummary />

            {/* Accordion Sections */}
            <EquipmentAccordion />

            <ImportantNote />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <p className="text-sm text-muted-foreground">
            {"המידע מוגש לנוחות הסטודנט בלבד ואינו מהווה תחליף לייעוץ מקצועי. לבירור מלא יש לפנות לעובד השיקום."}
          </p>
        </div>
      </footer>
    </div>
  )
}
