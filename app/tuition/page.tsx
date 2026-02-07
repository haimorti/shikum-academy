import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TuitionHero } from "@/components/tuition/tuition-hero"
import { TuitionSummary } from "@/components/tuition/tuition-summary"
import { TuitionAccordion } from "@/components/tuition/tuition-accordion"
import { TuitionTableOfContents } from "@/components/tuition/tuition-toc"
import { ImportantNote } from "@/components/important-note"
import { MobileNav } from "@/components/mobile-nav"
import { Breadcrumb } from "@/components/breadcrumb"

export default function TuitionPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link href="/" className="text-sm font-bold text-primary transition-colors hover:text-primary/80">{"שיקום מקצועי | המדריך שלך"}</Link>
          <Button variant="ghost" size="sm" className="gap-2 text-sm text-muted-foreground hover:text-foreground" asChild>
            <Link href="/benefits">
              <ArrowRight className="h-4 w-4" />
              {"כל הזכאויות"}
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <TuitionHero />

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-10 md:py-16">
        <div className="flex flex-col gap-10 lg:flex-row-reverse lg:gap-12">
          {/* Sidebar - Table of Contents (desktop only) */}
          <aside className="hidden lg:block lg:w-64 lg:shrink-0">
            <div className="lg:sticky lg:top-20">
              <TuitionTableOfContents />
            </div>
          </aside>

          {/* Mobile floating nav */}
          <MobileNav />

          {/* Main Content Area */}
          <div className="flex flex-1 flex-col gap-8">
            <Breadcrumb current="שכר לימוד" />

            {/* Summary */}
            <TuitionSummary />

            {/* Accordion Sections */}
            <section id="refund-details" className="scroll-mt-20">
              <TuitionAccordion />
            </section>

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
