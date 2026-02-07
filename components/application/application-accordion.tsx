"use client"

import { useState } from "react"
import {
  CheckCircle2,
  Info,
  AlertTriangle,
  ClipboardList,
  Shield,
  Users,
  HelpCircle,
  Footprints,
  FileText,
  Search,
  Clock3,
  CalendarClock,
  Mail,
  ArrowLeft,
  Send,
  ChevronLeft,
  XCircle,
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

/* ============================================================
   SHARED SUB-COMPONENTS
   ============================================================ */

// Visual phase separator with connected step indicator
function PhaseDivider({
  stepNumber,
  title,
  subtitle,
  variant = "default",
}: {
  stepNumber: number
  title: string
  subtitle: string
  variant?: "default" | "decision" | "final"
}) {
  const colors = {
    default: "bg-primary text-primary-foreground border-primary",
    decision: "bg-accent text-accent-foreground border-accent",
    final: "bg-primary text-primary-foreground border-primary",
  }

  return (
    <div className="relative flex flex-col items-center gap-3 py-6">
      {/* Connecting line top */}
      <div className="h-8 w-px bg-border" />

      {/* Step circle */}
      <div className={`flex h-14 w-14 items-center justify-center rounded-full border-4 ${colors[variant]} shadow-md`}>
        {variant === "decision" ? (
          <ChevronLeft className="h-6 w-6" />
        ) : (
          <span className="text-lg font-bold">{stepNumber}</span>
        )}
      </div>

      {/* Labels */}
      <div className="flex flex-col items-center gap-1 text-center">
        <span className="text-base font-bold text-foreground">{title}</span>
        <span className="text-sm text-muted-foreground">{subtitle}</span>
      </div>

      {/* Connecting line bottom */}
      <div className="h-8 w-px bg-border" />
    </div>
  )
}

// Document requirement card
function DocumentCard({
  title,
  items,
}: {
  title: string
  items: string[]
}) {
  return (
    <div className="flex flex-col gap-0 overflow-hidden rounded-xl border-2 border-primary/30 shadow-sm">
      <div className="flex items-center gap-3 bg-primary px-5 py-3.5">
        <FileText className="h-5 w-5 shrink-0 text-primary-foreground" />
        <h4 className="text-base font-bold text-primary-foreground">{title}</h4>
      </div>
      <div className="flex flex-col gap-0 bg-card">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 border-b border-border px-5 py-3 last:border-b-0"
          >
            <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
            <span className="text-base leading-relaxed text-foreground">{item}</span>
          </div>
        ))}
      </div>
      <div className="flex items-start gap-3 bg-destructive/10 px-5 py-3.5">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
        <p className="text-sm font-medium leading-relaxed text-destructive">
          {"מסמכים חסרים, מטושטשים או חלקיים לא יתקבלו לטיפול. ודא/י שכל הפרטים מופיעים לפני השליחה."}
        </p>
      </div>
    </div>
  )
}

// Disability type tabs
function DisabilityTabs() {
  const [activeTab, setActiveTab] = useState<"general" | "work">("general")

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setActiveTab("general")}
          className={`flex-1 rounded-lg px-4 py-3 text-sm font-bold transition-colors ${
            activeTab === "general"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-muted text-muted-foreground hover:bg-secondary"
          }`}
        >
          {"נכה כללי"}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("work")}
          className={`flex-1 rounded-lg px-4 py-3 text-sm font-bold transition-colors ${
            activeTab === "work"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-muted text-muted-foreground hover:bg-secondary"
          }`}
        >
          {"נפגע עבודה"}
        </button>
      </div>

      {activeTab === "general" ? (
        <div className="flex flex-col gap-4">
          <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-5">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-primary" />
              <h5 className="text-base font-bold text-foreground">{"תוכנית שיקום מלאה"}</h5>
            </div>
            <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{"מתאימה למי שנקבעו לו:"}</p>
            <ul className="mb-3 flex flex-col gap-2">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-foreground">{"נכות רפואית של 60% ומעלה"}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-foreground">{"נכות רפואית של 40% ומעלה, כאשר יש לפחות ליקוי בודד אחד בשיעור 25% ומעלה"}</span>
              </li>
            </ul>
            <div className="rounded-lg border border-border bg-card p-3">
              <p className="text-sm text-foreground/80">
                {"תוכנית מלאה מאפשרת קבלת סיוע "}
                <strong className="text-foreground">{"לכל תקופת הלימודים"}</strong>
                {" המקובלת במסלול הלימודים הנבחר."}
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-muted/30 p-5">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-accent" />
              <h5 className="text-base font-bold text-foreground">{"תוכנית שיקום חלקית \u2013 שנת לימודים אחת"}</h5>
            </div>
            <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{"מתאימה למי שנקבעו לו:"}</p>
            <ul className="mb-3 flex flex-col gap-2">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="text-sm text-foreground">{"נכות רפואית נמוכה מ\u200E-40%"}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="text-sm text-foreground">{"נכות רפואית בין 40% ל\u200E-59%, אך ללא ליקוי בודד בשיעור 25% לפחות"}</span>
              </li>
            </ul>
            <div className="rounded-lg border border-border bg-card p-3">
              <p className="text-sm text-foreground/80">
                {"בתוכנית חלקית הסיוע מוגבל ל"}
                <strong className="text-foreground">{"שנת ��ימודים אחת בלבד"}</strong>
                {". שנה זו תהיה שנת הלימודים האחרונה."}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-5">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-primary" />
              <h5 className="text-base font-bold text-foreground">{"תוכנית שיקום מלאה"}</h5>
            </div>
            <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{"מתאימה למי שנקבעו לו מעל 20% נכות."}</p>
            <div className="rounded-lg border border-border bg-card p-3">
              <p className="text-sm text-foreground/80">
                {"תוכנית מלאה מאפשרת קבלת סיוע "}
                <strong className="text-foreground">{"לכל תקופת הלימודים"}</strong>
                {" המקובלת במסלול הלימודים הנבחר."}
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-muted/30 p-5">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-accent" />
              <h5 className="text-base font-bold text-foreground">{"תוכנית שיקום חלקית \u2013 שנת לימודים אחת"}</h5>
            </div>
            <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{"מתאימה למי שנקבעו לו בין 10% ל\u200E-19% נכות."}</p>
            <div className="rounded-lg border border-border bg-card p-3">
              <p className="text-sm text-foreground/80">
                {"בתוכנית חלקית הסיוע מוגבל ל"}
                <strong className="text-foreground">{"שנת לימודים אחת בלבד"}</strong>
                {". שנה זו תהיה שנת הלימודים האחרונה."}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/* ============================================================
   MAIN ACCORDION COMPONENT
   ============================================================ */

export function ApplicationAccordion() {
  return (
    <div className="flex flex-col gap-0">

      {/* =========== INTRO SECTION =========== */}
      <section id="building-plan" className="scroll-mt-20 flex flex-col gap-5">
        <h2 className="text-xl font-bold text-foreground">{"בניית תוכנית השיקום האישית שלך"}</h2>
        <div className="flex flex-col gap-4">
          <p className="text-base leading-relaxed text-muted-foreground">
            {"לאחר שנמצאת זכאי לשיקום מקצועי, הגיע הזמן לגבש את תוכנית השיקום האישית שלך. תוכנית השיקום יכולה לכלול מגוון מסלולים \u2013 סיוע בהשמה, אבחון והכוונה תעסוקתית, סדנאות, הכשרות מקצועיות ועוד."}
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            {"אם הופנת לאתר זה על ידי העו\"ס המלווה אותך, ייתכן שאתה מעוניין בלימודי השכלה גבוהה ומבקש שאלה יוכרו כתוכנית השיקום שלך. במקרה כזה, הצעד הבא הוא פניה לעו\"ס השיקום שלך והגשת בקשה."}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-base font-bold text-foreground">
            {"למה חשוב שהלימודים יאושרו כתוכנית השיקום?"}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {"האישור מאפשר לך לקבל תמיכות במהלך תקופת הלימודים, ביניהן:"}
          </p>
          <div className="flex flex-wrap gap-2">
            {["דמי שיקום", "שכר לימוד", "שכר דירה", "נסיעות", "ציוד לימודי", "שיעורי עזר", "הנגשות"].map(
              (item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =========== PRE-STEP ACCORDIONS =========== */}
      <Accordion type="multiple" className="mt-8 flex flex-col gap-4">
        <AccordionItem
          value="who-can-apply"
          id="who-can-apply"
          className="scroll-mt-20 overflow-hidden rounded-xl border border-border bg-card shadow-sm"
        >
          <AccordionTrigger className="px-5 py-4 transition-colors hover:bg-secondary/50 hover:no-underline">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <span className="text-right text-lg font-bold text-foreground">
                {"מי יכול להגיש בקשה לאישור לימודים?"}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5">
            <div className="flex flex-col gap-5 pt-2">
              <p className="text-base leading-relaxed text-muted-foreground">
                {"תוכל להגיש בקשה אם מתקיימים שני התנאים הבאים:"}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-3 rounded-xl border border-border p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {"1"}
                  </div>
                  <h4 className="text-base font-bold text-foreground">{"אושרה לך זכאות לשיקום מקצועי"}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {"הגשת תביעה לשיקום מקצועי וזכאותך אושרה ע\"י עו\"ס שיקום."}
                  </p>
                </div>
                <div className="flex flex-col gap-3 rounded-xl border border-border p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {"2"}
                  </div>
                  <h4 className="text-base font-bold text-foreground">{"התקבלת ללימודים אקדמיים"}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {"התקבלת ללימודי השכלה גבוהה, או שאתה כבר לומד בפועל, ואתה מבקש שהלימודים יוכרו כחלק מתוכנית השיקום."}
                  </p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="still-deciding"
          id="still-deciding"
          className="scroll-mt-20 overflow-hidden rounded-xl border border-border bg-card shadow-sm"
        >
          <AccordionTrigger className="px-5 py-4 transition-colors hover:bg-secondary/50 hover:no-underline">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <HelpCircle className="h-5 w-5 text-primary" />
              </div>
              <span className="text-right text-lg font-bold text-foreground">
                {"מתעניין בלימודים אך טרם החלטת? הנה מה לעשות"}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5">
            <div className="flex flex-col gap-4 pt-2">
              <div className="flex items-start gap-4 rounded-lg border border-border bg-muted/50 p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {"1"}
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-bold text-foreground">{"התייעצות עם עובד/ת השיקום"}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {"פנה לעובד השיקום לשיחת הכוונה. בפגישה תוכלו לבחון יחד את האפשרויות ולקבל הכוונה ראשונית."}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-lg border border-border bg-muted/50 p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {"2"}
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-bold text-foreground">{"אבחון והכוונה מקצועית"}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {"במידת הצורך, עו\"ס השיקום יפנה אותך לאבחון ולהכוונה מקצועית במכון אבחון. תהליך זה יסייע לך לבחור מסלול לימודים מדויק התואם את כישוריך, שאיפותיך ומצבך הרפואי."}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-accent/10 p-4">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm leading-relaxed text-foreground/80">
                  {"במקרים מסוימים, אתה עשוי להיות זכאי לסיוע בלימודים ��נדרשים לצורך עמידה בתנאי הקבלה \u2013 כגון מכינה קדם\u200E-אקדמית, השלמת בגרויות והכנה למבחן הפסיכומטרי."}
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* =====================================================
          PHASE 1: STEP 1 - SUBMIT ADMISSION LETTER
          ===================================================== */}
      <PhaseDivider
        stepNumber={1}
        title="צעד ראשון"
        subtitle="הגשת אישור קבלה ללימודים"
        variant="default"
      />

      <Accordion type="multiple" defaultValue={["step1-docs"]} className="flex flex-col gap-4">
        <AccordionItem
          value="step1-docs"
          id="step1-docs"
          className="scroll-mt-20 overflow-hidden rounded-xl border-2 border-primary/20 bg-card shadow-sm"
        >
          <AccordionTrigger className="px-5 py-4 transition-colors hover:bg-secondary/50 hover:no-underline">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Footprints className="h-5 w-5 text-primary" />
              </div>
              <span className="text-right text-lg font-bold text-foreground">
                {"מה צריך להגיש?"}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5">
            <div className="flex flex-col gap-5 pt-2">
              <p className="text-base leading-relaxed text-muted-foreground">
                {"עם קבלתך ללימודים, הגיש/י את המסמך הבא לעו\"ס השיקום. ניתן להגיש גם אם שנת הלימודים עדיין לא התחילה."}
              </p>

              <DocumentCard
                title="אישור קבלה ללימודים"
                items={[
                  "שם מלא ומספר ת.ז",
                  "שם המוסד האקדמי",
                  "שם המסלול / התואר",
                  "שנת הלימודים והסמסטר",
                  "סטטוס קבלה: מן המניין / על תנאי",
                ]}
              />

              <div className="flex items-start gap-3 rounded-lg bg-accent/10 p-4">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm leading-relaxed text-foreground/80">
                  <strong className="text-foreground">{"התקבלת על תנאי?"}</strong>
                  {" יש לצרף מסמך ממוסד הלימודים המפרט את התנאי, מאחר שהוא רלוונטי להחלטה על אישור התוכנית."}
                </p>
              </div>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 text-base font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg active:scale-[0.98]"
              >
                <Send className="h-5 w-5" />
                {"שלח אישור קבלה ללימודים לעו\"ס השיקום"}
              </button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* =====================================================
          PHASE: DECISION BY SOCIAL WORKER
          ===================================================== */}
      <PhaseDivider
        stepNumber={0}
        title="החלטת עו&quot;ס השיקום"
        subtitle="בחינת הבקשה וקבלת החלטה"
        variant="decision"
      />

      <Accordion type="multiple" className="flex flex-col gap-4">
        <AccordionItem
          value="after-submission"
          id="after-submission"
          className="scroll-mt-20 overflow-hidden rounded-xl border border-accent/30 bg-card shadow-sm"
        >
          <AccordionTrigger className="px-5 py-4 transition-colors hover:bg-secondary/50 hover:no-underline">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <Search className="h-5 w-5 text-accent" />
              </div>
              <span className="text-right text-lg font-bold text-foreground">
                {"מה בודקים? כך מתקבלת ההחלטה"}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5">
            <div className="flex flex-col gap-5 pt-2">
              <p className="text-base leading-relaxed text-muted-foreground">
                {"לאחר שהמסמכים נקלטו במערכת, עו\"ס השיקום יבחן את הבקשה לפי שלושה שיקולים מרכזיים:"}
              </p>

              <div className="flex flex-col gap-3">
                {[
                  {
                    title: "בחינת החלטת הוועדה הרפואית",
                    desc: "לרבות אחוזי הנכות שנקבעו לך, מאחר שאלה משפיעים על היקף הסיוע שניתן לאשר.",
                  },
                  {
                    title: "התאמה למצבך התפקודי והבריאותי",
                    desc: "נבדקת מידת ההתאמה של תחום הלימודים ליכולותיך הפיזיות, הקוגניטיביות או הנפשיות.",
                  },
                  {
                    title: "היתכנות תעסוקתי��",
                    desc: "האם המקצוע המבוקש עשוי לאפשר לך תעסוקה יציבה בתום הלימודים.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 rounded-lg border border-border bg-muted/50 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div className="flex flex-col gap-1">
                      <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-3 rounded-lg bg-accent/10 p-4">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm leading-relaxed text-foreground/80">
                  {"במקרים מסוימים ייתכן שעו\"ס השיקום יבקש ממך מסמכים נוספים או יזמן אותך לשיחה לצורך בחינה של התוכנית המבוקשת."}
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="eligibility-period"
          id="eligibility-period"
          className="scroll-mt-20 overflow-hidden rounded-xl border border-accent/30 bg-card shadow-sm"
        >
          <AccordionTrigger className="px-5 py-4 transition-colors hover:bg-secondary/50 hover:no-underline">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <CalendarClock className="h-5 w-5 text-accent" />
              </div>
              <span className="text-right text-lg font-bold text-foreground">
                {"תקופת הזכאות: כך נקבע משך הסיוע"}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5">
            <div className="flex flex-col gap-5 pt-2">
              <p className="text-base leading-relaxed text-muted-foreground">
                {"היקף הסיוע שתקבל נקבע על-פי שיעור הנכות הרפואית. בחר/י את סוג הנכות שלך כדי לראות את התוכניות הרלוונטיות:"}
              </p>

              <DisabilityTabs />

              <div className="flex items-start gap-3 rounded-lg border-2 border-destructive/30 bg-destructive/5 p-4">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-destructive">{"נכות זמנית"}</span>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    {"כאשר הנכות שנקבעה היא זמנית, התוכנית תאושר עד לתום תקופת הזמניות בלבד. בתום התקופה, המשך הסיוע מותנה בהחלטת ועדה רפואית שתבחן מחדש את אחוזי הנכות."}
                  </p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="approval-result"
          id="approval-result"
          className="scroll-mt-20 overflow-hidden rounded-xl border border-accent/30 bg-card shadow-sm"
        >
          <AccordionTrigger className="px-5 py-4 transition-colors hover:bg-secondary/50 hover:no-underline">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <span className="text-right text-lg font-bold text-foreground">
                {"איך אדע אם הבקשה אושרה?"}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5">
            <div className="flex flex-col gap-5 pt-2">
              <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <h4 className="text-base font-bold text-foreground">{"הבקשה אושרה"}</h4>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {"יישלח אליך לאזור האישי באתר הביטוח הלאומי מכתב החלטה תחת הכותרת: "}
                  <strong className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">{"אישור לימודים להשכלה גבוהה"}</strong>
                  {". מכתב זה מהווה אישור רשמי לכך שהמסלול האקדמי שבחרת אושר כתוכנית השיקום."}
                </p>
                <div className="flex items-start gap-4 rounded-lg border border-primary/20 bg-card p-4">
                  <ArrowLeft className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div className="flex flex-col gap-1">
                    <h4 className="text-sm font-bold text-foreground">{"אושר? זה הצעד הבא שלך"}</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {"כדי שנוכל לאשר את הזכאויות, עליך להגיש את מערכת השעות מיד עם קבלתה מהמוסד הלימודי."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border-2 border-destructive/20 bg-destructive/5 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-destructive" />
                  <h4 className="text-base font-bold text-foreground">{"כאשר התוכנית אינה עומדת בקריטריונים"}</h4>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {"במקרה שבו עולים שיקולים שעשויים להוביל לדחיית התוכנית, עו\"ס השיקום ישוחח איתך על נימוקי הדחייה ותיבדקנה יחד אפשרויות נוספות שיכולות להתאים לך."}
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* =====================================================
          PHASE 2: STEP 2 - SUBMIT SCHEDULE
          ===================================================== */}
      <PhaseDivider
        stepNumber={2}
        title="צעד שני"
        subtitle="הגשת מערכת שעות"
        variant="default"
      />

      <Accordion type="multiple" defaultValue={["step2-schedule"]} className="flex flex-col gap-4">
        <AccordionItem
          value="step2-schedule"
          id="step2-schedule"
          className="scroll-mt-20 overflow-hidden rounded-xl border-2 border-primary/20 bg-card shadow-sm"
        >
          <AccordionTrigger className="px-5 py-4 transition-colors hover:bg-secondary/50 hover:no-underline">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <ClipboardList className="h-5 w-5 text-primary" />
              </div>
              <span className="text-right text-lg font-bold text-foreground">
                {"מה צריך להגיש?"}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5">
            <div className="flex flex-col gap-5 pt-2">
              <p className="text-base leading-relaxed text-muted-foreground">
                {"שלב זה מתבצע לקראת תחילת כל סמסטר, כאשר יש בידך מערכת שעות רשמית. רק לאחר הגשת מערכת השעות נבחנות ונקבעות הזכאויות."}
              </p>

              <DocumentCard
                title="מערכת שעות מלאה ומעודכנת"
                items={[
                  "שמך המלא ומספר תעודת הזהות שלך",
                  "שנת הלימודים והסמסטר",
                  "שמות הקורסים",
                  "ימי הלימוד ושעותיהם עבור כל קורס",
                  "סך שעות הלימוד הסמסטריאליות ונקודות הזכות",
                ]}
              />

              <div className="flex items-start gap-3 rounded-lg bg-accent/10 p-4">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm leading-relaxed text-foreground/80">
                  {"אם כבר יש בידך גם אישור קבלה וגם מערכת שעות, ניתן כמובן להגיש את שני המסמכים יחד."}
                </p>
              </div>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 text-base font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg active:scale-[0.98]"
              >
                <Send className="h-5 w-5" />
                {"שלח מערכת שעות לעו\"ס השיקום"}
              </button>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="entitlements-result"
          id="entitlements-result"
          className="scroll-mt-20 overflow-hidden rounded-xl border border-border bg-card shadow-sm"
        >
          <AccordionTrigger className="px-5 py-4 transition-colors hover:bg-secondary/50 hover:no-underline">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <span className="text-right text-lg font-bold text-foreground">
                {"איך אדע מהן הזכאויות שנקבעו לי?"}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5">
            <div className="flex flex-col gap-5 pt-2">
              <p className="text-base leading-relaxed text-muted-foreground">
                {"לאחר בדיקת מערכת השעות, יישלח אליך לאזור האישי מכתב: "}
                <strong className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">{"אישור לימודים לסמסטר"}</strong>
                {" בו יפורטו הזכאויות שאושרו עבורך."}
              </p>

              <div className="flex flex-col gap-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{"מה מופיע במכתב?"}</h4>
                {[
                  { title: "פרטי הסמסטר", desc: "שם הסמסטר, תאריך התחלה ותאריך סיום." },
                  { title: "היקף הלימודים", desc: "פירוט ימי הלימוד ומכסת השעות השבועית שלך." },
                  { title: "פירוט הזכאויות", desc: "סכומי התמיכה שאושרו לך כגון: שכר לימוד, דמי שיקום, נסיעות, ציוד לימודי, שיעורי עזר, הנגשות ועוד." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 rounded-lg border border-border bg-muted/50 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div className="flex flex-col gap-1">
                      <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-3 rounded-lg border-2 border-destructive/30 bg-destructive/5 p-4">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-destructive">{"שים/י לב"}</span>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    {"כל סמסטר מאושר בנפרד. בסיום כל סמסטר עליך להגיש גיליון ציונים ומערכת שעות מעודכנת לסמסטר הבא. המשך התמיכות מותנה בעמידה בדרישות הלימודים."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg bg-accent/10 p-4">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm leading-relaxed text-foreground/80">
                  {"לא כל סטודנט זכאי לכל סוגי הסיוע הקיימים \u2013 הזכאות נקבעת באופן אישי, בהתאם לנהלים וקריטריונים שנקבעו לכל זכאות."}
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="find-letters"
          id="find-letters"
          className="scroll-mt-20 overflow-hidden rounded-xl border border-border bg-card shadow-sm"
        >
          <AccordionTrigger className="px-5 py-4 transition-colors hover:bg-secondary/50 hover:no-underline">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Clock3 className="h-5 w-5 text-primary" />
              </div>
              <span className="text-right text-lg font-bold text-foreground">
                {"איפה מוצאים את המכתבים שנשלחו אלי?"}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5">
            <div className="flex flex-col gap-4 pt-2">
              <p className="text-base leading-relaxed text-muted-foreground">
                {"מכתבים ישלחו ל"}
                <strong className="text-foreground">{"אזור האישי שלך באתר הביטוח הלאומי"}</strong>
                {"."}
              </p>
              <div className="flex items-start gap-3 rounded-lg bg-accent/10 p-4">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm leading-relaxed text-foreground/80">
                  {"היכנס לאזור האישי באתר הביטוח הלאומי ובדוק את תיבת המכתבים שלך באופן שוטף."}
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>


    </div>
  )
}
