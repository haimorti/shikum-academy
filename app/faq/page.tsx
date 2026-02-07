import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaqContent } from "@/components/faq/faq-content"
import { MobileNav } from "@/components/mobile-nav"

export const metadata: Metadata = {
  title: "שאלות נפוצות | שיקום מקצועי לסטודנטים",
  description:
    "תשובות לשאלות שנשאלות לעתים קרובות בנושא שיקום מקצועי, לימודים וזכאויות",
}

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link
            href="/"
            className="text-sm font-bold text-primary transition-colors hover:text-primary/80"
          >
            {"שיקום מקצועי | המדריך שלך"}
          </Link>
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 text-sm text-muted-foreground hover:text-foreground"
            asChild
          >
            <Link href="/">
              <ArrowRight className="h-4 w-4" />
              {"חזרה לדף הבית"}
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-primary/[0.02] to-transparent px-4 pb-8 pt-10 md:pb-14 md:pt-20">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-3 text-center">
          <h1 className="text-balance text-2xl font-extrabold leading-tight text-foreground md:text-4xl">
            {"שאלות נפוצות"}
          </h1>
          <p className="mx-auto max-w-xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
            {"תשובות לשאלות שנשאלות לעתים קרובות"}
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-4 py-8 md:py-14">
        <FaqContent />
      </main>

      <MobileNav />

      {/* Contact CTA */}
      <section className="border-t border-border bg-primary/5 py-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 text-center">
          <p className="text-base font-semibold text-foreground">
            {"לא מצאת תשובה לשאלה שלך?"}
          </p>
          <p className="text-sm text-muted-foreground">
            {"פנה לעובד השיקום המטפל"}
          </p>
          <Button asChild>
            <Link href="/contact">{"יצירת קשר"}</Link>
          </Button>
        </div>
      </section>

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
