import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EligibilityContent } from "@/components/eligibility/eligibility-content"
import { MobileNav } from "@/components/mobile-nav"

export default function EligibilityPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link
            to="/"
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
            <Link to="/">
              <ArrowRight className="h-4 w-4" />
              {"חזרה לדף הבית"}
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-primary/[0.02] to-transparent px-4 pb-8 pt-10 md:pb-14 md:pt-20">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-3 text-center">
          <h1 className="text-balance text-2xl font-extrabold leading-tight text-foreground md:text-4xl">
            {"איך בודקים אם אושרה זכאותך לשיקום מקצועי?"}
          </h1>
          <p className="mx-auto max-w-xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
            {"מדריך שלב אחר שלב לבדיקת מצב הזכאות שלך"}
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-4 py-8 md:py-14">
        <EligibilityContent />
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
