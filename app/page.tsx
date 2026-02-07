import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FileCheck, Sparkles, HelpCircle, GraduationCap } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "שיקום מקצועי לסטודנטים | המדריך שלך",
  description: "המדריך המלא לסטודנטים עם מוגבלות בשיקום מקצועי - מהגשת הבקשה ועד מימוש כל הזכאויות",
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Minimal header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center px-4 py-3">
          <span className="text-sm font-bold text-primary">
            {"שיקום מקצועי | המדריך שלך"}
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-primary/[0.02] to-transparent px-4 pb-6 pt-8 md:pb-12 md:pt-20">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "32px 32px" }} />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-4 text-center md:gap-6">
          {/* Icon */}
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 md:h-16 md:w-16">
            <GraduationCap className="h-6 w-6 text-primary md:h-8 md:w-8" />
          </div>

          {/* Title */}
          <div className="flex flex-col gap-2 md:gap-3">
            <h1 className="text-balance text-2xl font-extrabold leading-tight text-foreground md:text-4xl lg:text-5xl">
              {"שיקום מקצועי לסטודנטים"}
              <br />
              {"בהשכלה גבוהה"}
            </h1>
            <p className="mx-auto max-w-xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
              {"המדריך שלך כסטודנט/ית עם מוגבלות \u2013 מהצעד הראשון ועד מיצוי מלוא הזכאויות והתמיכות לאורך תקופת הלימודים."}
            </p>
          </div>

          {/* Eligibility question - subtle link */}
          <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground">
            <HelpCircle className="h-4 w-4 shrink-0 text-primary" />
            <span>{"לא בטוח/ה אם אושרה לך זכאות לשיקום?"}</span>
            <Link href="/eligibility" className="font-semibold text-primary underline underline-offset-2 hover:text-primary/80">
              {"בדוק/בדקי כאן"}
            </Link>
          </div>
        </div>
      </section>

      {/* Path selection */}
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-6 md:py-16">
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Section title */}
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              {"איפה את/ה בתהליך?"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {"בחר/י את המסלול שמתאים לך כרגע"}
            </p>
          </div>

          {/* Two path cards */}
          <div className="grid gap-5 md:grid-cols-2">
            {/* Path 1: Beginning */}
            <Link href="/application" className="group">
              <Card className="relative h-full overflow-hidden border-2 border-border transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                <CardContent className="flex flex-col gap-5 p-6 md:p-8">
                  {/* Step indicator */}
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {"1"}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {"שלב ראשון"}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <FileCheck className="h-7 w-7 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {"בתחילת הדרך"}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {"טרם הגשת בקשה או ממתין/ה לאישור? כאן תלמד/י איך להגיש בקשה לאישור הלימודים כתוכנית שיקום מקצועי."}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto flex items-center gap-2 pt-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">
                    {"התחל/י כאן"}
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  </div>

                  {/* Bottom accent bar */}
                  <div className="absolute bottom-0 left-0 h-1 w-full origin-right scale-x-0 bg-primary transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
                </CardContent>
              </Card>
            </Link>

            {/* Path 2: Already approved */}
            <Link href="/benefits" className="group">
              <Card className="relative h-full overflow-hidden border-2 border-border transition-all duration-300 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5">
                <CardContent className="flex flex-col gap-5 p-6 md:p-8">
                  {/* Step indicator */}
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                      {"2"}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {"שלב הבא"}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                    <Sparkles className="h-7 w-7 text-accent" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {"הלימודים שלי אושרו"}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {"קיבלת אישור? מגיעות לך זכאויות כמו שכר לימוד, נסיעות, ציוד לימודי ועוד. גלה/י מה רלוונטי אליך ואיך לממש."}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto flex items-center gap-2 pt-2 text-sm font-semibold text-accent transition-all group-hover:gap-3">
                    {"לעמוד מימוש הזכאויות"}
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  </div>

                  {/* Bottom accent bar */}
                  <div className="absolute bottom-0 left-0 h-1 w-full origin-right scale-x-0 bg-accent transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
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
