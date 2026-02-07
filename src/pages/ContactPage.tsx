import { Link } from "react-router-dom"
import { ArrowRight, Phone, Mail, Users, Info, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MobileNav } from "@/components/mobile-nav"

const staffGroups = [
  {
    mediator: "ורוניקה",
    mediatorPhone: "03-9114896",
    workers: [
      { name: "אירנה", phone: "03-9114886" },
      { name: "נירית", phone: "03-9114888" },
      { name: "רחלי", phone: "03-9114889" },
      { name: "שרי", phone: "03-9114895" },
      { name: "צביקה", phone: "03-9114893" },
    ],
  },
  {
    mediator: "מלי",
    mediatorPhone: "03-9114904",
    workers: [
      { name: "אייל", phone: "03-9114894" },
      { name: "לאורה", phone: "03-9114885" },
      { name: "מזל", phone: "03-9114855" },
      { name: "תמר", phone: "03-9114725" },
      { name: "הדס", phone: "03-9114943" },
      { name: "חיים", phone: "03-9114929" },
    ],
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link to="/" className="text-sm font-bold text-primary transition-colors hover:text-primary/80">
            {"שיקום מקצועי | המדריך שלך"}
          </Link>
          <Button variant="ghost" size="sm" className="gap-2 text-sm text-muted-foreground hover:text-foreground" asChild>
            <Link to="/benefits">
              <ArrowRight className="h-4 w-4" />
              {"כל הזכאויות"}
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary px-4 py-16 md:py-24">
        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-primary-foreground/5" />
        <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-primary-foreground/5" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/15">
            <Phone className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-5xl">
            {"פרטי קשר"}
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
            {"כיצד ליצור קשר עם עובד/ת השיקום המטפל/ת"}
          </p>
        </div>
      </section>

      {/* Main content */}
      <main className="mx-auto max-w-4xl px-4 py-10 md:py-16">
        <div className="flex flex-col gap-10">

          {/* Contact methods */}
          <section className="flex flex-col gap-6">
            <h2 className="text-xl font-bold text-foreground">{"איך ליצור קשר?"}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="flex items-start gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base font-bold text-foreground">{"טלפון"}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {"ניתן לפנות לעובד/ת השיקום בטלפון"}
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="flex items-start gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base font-bold text-foreground">{"דואר אלקטרוני"}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {"ניתן לשלוח פניות ומסמכים במייל לעובד/ת השיקום"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Staff directory */}
          <section className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-bold text-foreground">{"רשימת עובדי שיקום"}</h2>
            </div>

            <p className="text-sm text-muted-foreground">
              {"הטלפונים מוצגים בפורמט: 03-911XXXX (שלוחה)."}
            </p>

            <div className="flex flex-col gap-6">
              {staffGroups.map((group) => (
                <Card key={group.mediator} className="overflow-hidden border border-border">
                  {/* Mediator header */}
                  <div className="flex items-center gap-3 border-b border-border bg-secondary/50 px-5 py-3">
                    <Badge variant="secondary" className="gap-1.5 rounded-full bg-accent/15 text-xs font-bold text-accent">
                      {"מגשרת"}
                    </Badge>
                    <span className="text-base font-bold text-foreground">{group.mediator}</span>
                    <span className="mr-auto text-sm text-muted-foreground" dir="ltr">{group.mediatorPhone}</span>
                  </div>

                  {/* Workers list */}
                  <CardContent className="p-0">
                    <div className="divide-y divide-border">
                      {group.workers.map((worker) => (
                        <div key={worker.name} className="flex items-center justify-between px-5 py-3 transition-colors hover:bg-secondary/30">
                          <span className="text-base font-medium text-foreground">{worker.name}</span>
                          <a
                            href={`tel:${worker.phone}`}
                            className="flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/70"
                            dir="ltr"
                          >
                            <Phone className="h-3.5 w-3.5" />
                            {worker.phone}
                          </a>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Email fields */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-foreground">{"שדות דוא\"ל"}</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-foreground">{"דוא\"ל עובד/ת"}</span>
                  <span className="text-xs text-muted-foreground">{"\u2014"}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-foreground">{"דוא\"ל מגשרת"}</span>
                  <span className="text-xs text-muted-foreground">{"\u2014"}</span>
                </div>
              </div>
            </div>
          </section>

          {/* What is a mediator */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <HelpCircle className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-bold text-foreground">{"מה תפקיד המגשרת?"}</h2>
            </div>
            <Card className="border border-border">
              <CardContent className="flex items-start gap-4 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15">
                  <Info className="h-5 w-5 text-accent" />
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {"לכל עובד שיקום יש מגשרת שמסייעת לו בעבודתו. בהקשר של ליווי סטודנטים להשכלה גבוהה, המגשרת אחראית על קבלה וטיפול במסמכים, טיפול בתשלומים בהתאם לזכאויות שנקבעו ועוד."}
                </p>
              </CardContent>
            </Card>
          </section>
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
