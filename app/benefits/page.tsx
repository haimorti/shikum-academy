import type { Metadata } from "next"
import Link from "next/link"
import { Home, FileCheck, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BenefitsHero } from "@/components/benefits/benefits-hero"
import { BenefitsGrid } from "@/components/benefits/benefits-grid"
import { MobileNav } from "@/components/mobile-nav"

export const metadata: Metadata = {
  title: "מימוש זכאויות | זכויות סטודנטים",
  description:
    "כל הזכאויות של סטודנטים עם מוגבלות בשיקום מקצועי - מידע מלא ואיך לממש",
}

export default function BenefitsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-primary/80">
            <Home className="h-4 w-4" />
            {"שיקום מקצועי | המדריך שלך"}
          </Link>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-sm text-muted-foreground hover:text-foreground"
              asChild
            >
              <Link href="/contact">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">{"פרטי קשר"}</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-sm text-muted-foreground hover:text-foreground"
              asChild
            >
              <Link href="/application">
                <FileCheck className="h-4 w-4" />
                <span className="hidden sm:inline">{"הגשת בקשה"}</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <BenefitsHero />

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-10 md:py-16">
        <BenefitsGrid />
      </main>

      <MobileNav />

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
