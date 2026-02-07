import type { Metadata } from "next"
import Link from "next/link"
import { Sparkles, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ApplicationHero } from "@/components/application/application-hero"

import { ApplicationAccordion } from "@/components/application/application-accordion"
import { ApplicationTableOfContents } from "@/components/application/application-toc"
import { MobileNav } from "@/components/mobile-nav"

export const metadata: Metadata = {
  title: "הגשת בקשה לאישור לימודים | זכויות סטודנטים",
  description:
    "מידע על תהליך הגשת בקשה לאישור לימודי השכלה גבוהה כתוכנית שיקום, צעד אחר צעד",
}

export default function ApplicationPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link href="/" className="text-sm font-bold text-primary transition-colors hover:text-primary/80">
            {"שיקום מקצועי | המדריך שלך"}
          </Link>
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 text-sm text-muted-foreground hover:text-foreground"
            asChild
          >
            <Link href="/benefits">
              {"מימוש זכאויות"}
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <ApplicationHero />

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-10 md:py-16">
        <div className="flex flex-col gap-10 lg:flex-row-reverse lg:gap-12">
          {/* Sidebar - Table of Contents (desktop only) */}
          <aside className="hidden lg:block lg:w-64 lg:shrink-0">
            <div className="lg:sticky lg:top-20">
              <ApplicationTableOfContents />
            </div>
          </aside>

          {/* Mobile floating nav */}
          <MobileNav />

          {/* Main Content Area */}
          <div className="flex flex-1 flex-col gap-8">
            {/* Full content */}
            <ApplicationAccordion />
          </div>
        </div>
      </main>

      {/* CTA to benefits */}
      <section className="border-t border-border bg-primary/5 px-4 py-12 md:py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
            <Sparkles className="h-7 w-7 text-primary" />
          </div>
          <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
            {"קיבלת אישור? הגיע הזמן לממש את הזכאויות שלך"}
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
            {"אחרי שקיבלת אישור לימודים, יש לך מגוון זכאויות: שכר לימוד, הוצאות נסיעה, ציוד לימודי, שיעורי עזר ועוד. גלה/י מה מגיע לך ואיך לממש."}
          </p>
          <Button size="lg" className="mt-2 gap-2 rounded-full px-8" asChild>
            <Link href="/benefits">
              {"לעמוד מימוש זכאויות"}
              <ArrowLeft className="h-4 w-4" />
            </Link>
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
