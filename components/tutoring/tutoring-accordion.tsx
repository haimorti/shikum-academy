"use client"

import {
  CheckCircle2,
  Info,
  AlertTriangle,
  Users,
  ClipboardList,
  FileText,
  Building,
  CreditCard,
  CalendarCheck,
} from "lucide-react"
import { InvoiceChecklist } from "@/components/invoice-checklist"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function TutoringAccordion() {
  return (
    <Accordion type="multiple" defaultValue={["eligibility"]} className="flex flex-col gap-4">
      {/* Eligibility */}
      <AccordionItem
        value="eligibility"
        id="eligibility"
        className="scroll-mt-20 overflow-hidden rounded-xl border border-border bg-card shadow-sm"
      >
        <AccordionTrigger className="px-5 py-4 transition-colors hover:bg-secondary/50 hover:no-underline">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <span className="text-right text-lg font-bold text-foreground">
              {"זכאות לשיעורי עזר"}
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-5 pb-5">
          <div className="flex flex-col gap-5 pt-2">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-base leading-relaxed text-foreground">
                {"שיעורי עזר נועדו לסייע בהשלמת פערים לימודיים ובחיזוק השליטה בחומר הנלמד."}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-base leading-relaxed text-foreground">
                {"היקף הזכאות לסיוע עומד על עד "}
                <strong className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">{"25% משעות הלימוד החודשיות"}</strong>
                {", כפי שמופיעות במערכת השעות."}
              </p>
            </div>
            <div className="rounded-lg border border-border bg-muted/50 p-4">
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">{"לדוגמה: "}</strong>
                {"אם אתה לומד 100 שעות בחודש \u2013 תהיה זכאי ל\u201325 שעות שיעורי עזר."}
              </p>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-2 border-destructive/30 bg-destructive/5 p-4">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-destructive">{"שים/י לב"}</span>
                <p className="text-sm leading-relaxed text-foreground/80">
                  {"כדי לממש את הזכאות עליך לפנות לעובד השיקום ולעדכן שיש לך צורך בשיעורי עזר. בניגוד לזכאויות אחרות, שיעורי עזר "}
                  <strong>{"לא יופיעו מראש"}</strong>
                  {" במכתב \"אישור לימודים לסמסטר\", ויאושרו רק לאחר פנייה לעובד השיקום."}
                </p>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* How to use - Franchisee */}
      <AccordionItem
        value="franchisee"
        id="franchisee"
        className="scroll-mt-20 overflow-hidden rounded-xl border border-border bg-card shadow-sm"
      >
        <AccordionTrigger className="px-5 py-4 transition-colors hover:bg-secondary/50 hover:no-underline">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <ClipboardList className="h-5 w-5 text-primary" />
            </div>
            <span className="text-right text-lg font-bold text-foreground">
              {"אפשרות א' \u2013 שירות דרך זכיין"}
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-5 pb-5">
          <div className="flex flex-col gap-5 pt-2">
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{"התהליך"}</h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-4 rounded-lg border border-border bg-muted/50 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {"1"}
                  </div>
                  <p className="pt-1 text-base leading-relaxed text-foreground">
                    {"פנה לעובד השיקום ועדכן על הצורך שלך בשיעורי עזר."}
                  </p>
                </div>
                <div className="flex items-start gap-4 rounded-lg border border-border bg-muted/50 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {"2"}
                  </div>
                  <p className="pt-1 text-base leading-relaxed text-foreground">
                    {"עובד השיקום מעביר לזכיין התחייבות לתשלום."}
                  </p>
                </div>
                <div className="flex items-start gap-4 rounded-lg border border-border bg-muted/50 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {"3"}
                  </div>
                  <p className="pt-1 text-base leading-relaxed text-foreground">
                    {"הזכיין יוצר איתך קשר ומתאם את המורים והשיעורים."}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg bg-accent/10 p-4">
              <CreditCard className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-foreground">{"שיטת תשלום"}</span>
                <p className="text-sm leading-relaxed text-foreground/80">
                  {"הביטוח הלאומי משלם ישירות לזכיין \u2013 אין צורך בתשלום מצדך."}
                </p>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* How to use - Learning Center */}
      <AccordionItem
        value="learning-center"
        id="learning-center"
        className="scroll-mt-20 overflow-hidden rounded-xl border border-border bg-card shadow-sm"
      >
        <AccordionTrigger className="px-5 py-4 transition-colors hover:bg-secondary/50 hover:no-underline">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Building className="h-5 w-5 text-primary" />
            </div>
            <span className="text-right text-lg font-bold text-foreground">
              {"אפשרות ב' \u2013 דרך מרכז התמיכה במוסד"}
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-5 pb-5">
          <div className="flex flex-col gap-5 pt-2">
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{"התהליך"}</h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-4 rounded-lg border border-border bg-muted/50 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {"1"}
                  </div>
                  <p className="pt-1 text-base leading-relaxed text-foreground">
                    {"עובד השיקום מאשר את היקף השעות."}
                  </p>
                </div>
                <div className="flex items-start gap-4 rounded-lg border border-border bg-muted/50 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {"2"}
                  </div>
                  <p className="pt-1 text-base leading-relaxed text-foreground">
                    {"אתה יוצר קשר עם מרכז הלמידה במוסד, מקבל מהם את השירות ומשלם להם ישירות."}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{"שיטת תשלום והחזר"}</h4>
              <div className="flex items-start gap-3">
                <CreditCard className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-base leading-relaxed text-foreground">
                  {"לאחר התשלום, עליך להגיש "}
                  <strong>{"אחת לחודש"}</strong>
                  {" את המסמכים הבאים:"}
                </p>
              </div>
              <ul className="flex flex-col gap-2 pr-4">
                <li className="flex items-start gap-3">
                  <FileText className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-base text-foreground">{"חשבונית / קבלה (ראו צ'קליסט למטה)"}</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-base text-foreground">{"טופס דיווח שיעורי עזר חתום על ידי מרכז הלמידה (טופס ב.ל. 395)"}</span>
                </li>
              </ul>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {"לאחר קבלת המסמכים, ההחזר ישולם לחשבונך."}
              </p>
            </div>

            <InvoiceChecklist
              items={[
                "שם מלא של הסטודנט",
                "מספר תעודת זהות",
                "תאריך הנפקה",
                "מספר קבלה / חשבונית",
                "פירוט השירות \u2013 שיעורי עזר",
              ]}
              title="צ'קליסט: מה חייב להופיע על החשבונית / קבלה עבור שיעורי עזר?"
            />

            <div className="flex items-start gap-3 rounded-lg border-2 border-destructive/30 bg-destructive/5 p-4">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-destructive">{"שים/י לב"}</span>
                <p className="text-sm leading-relaxed text-foreground/80">
                  {"גובה ההחזר לשעה נקבע לפי ההשכלה האקדמית של המורה. לכן, כאשר שיעורי העזר ניתנים דרך מרכז הלמידה, יש להעביר לפקיד השיקום את "}
                  <strong>{"אישור ההשכלה של המורה"}</strong>
                  {" לצורך קביעת תעריף ההחזר."}
                </p>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Submitting Documents */}
      <AccordionItem
        value="documents"
        id="documents"
        className="scroll-mt-20 overflow-hidden rounded-xl border border-border bg-card shadow-sm"
      >
        <AccordionTrigger className="px-5 py-4 transition-colors hover:bg-secondary/50 hover:no-underline">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <span className="text-right text-lg font-bold text-foreground">
              {"שליחת מסמכים לעו\"ס השיקום"}
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-5 pb-5">
          <div className="flex flex-col gap-5 pt-2">
            <p className="text-base leading-relaxed text-muted-foreground">
              {"ניתן לשלוח את המסמכים באופן מקוון דרך אתר הביטוח הלאומי, או ישירות לעובד/ת השיקום שלך."}
            </p>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{"המסמכים הנדרשים (בהתאם למסלול)"}</h4>
              <ul className="flex flex-col gap-2">
                {[
                  "חשבונית / קבלה על תשלום שיעורי עזר (ודאו שכוללת את כל הפרטים הנדרשים!)",
                  "טופס דיווח שיעורי עזר (ב.ל. 395) חתום",
                  "אישור השכלה של המורה (במסלול מרכז למידה)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-base text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <InvoiceChecklist
              items={[
                "שם מלא של הסטודנט",
                "מספר תעודת זהות",
                "תאריך הנפקה",
                "מספר קבלה / חשבונית",
                "פירוט השירות \u2013 שיעורי עזר",
              ]}
              title="תזכורת: מה חייב להופיע על החשבונית / קבלה?"
            />
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* End of Semester Reminder */}
      <AccordionItem
        value="semester-end"
        id="semester-end"
        className="scroll-mt-20 overflow-hidden rounded-xl border border-border bg-card shadow-sm"
      >
        <AccordionTrigger className="px-5 py-4 transition-colors hover:bg-secondary/50 hover:no-underline">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <CalendarCheck className="h-5 w-5 text-primary" />
            </div>
            <span className="text-right text-lg font-bold text-foreground">
              {"סיום סמסטר \u2013 מה חשוב לזכור?"}
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-5 pb-5">
          <div className="flex flex-col gap-4 pt-2">
            <div className="flex items-start gap-3 rounded-lg border-2 border-destructive/30 bg-destructive/5 p-4">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-destructive">{"שים/י לב"}</span>
                <p className="text-sm leading-relaxed text-foreground/80">
                  {"בסיום כל סמסטר עליך להגיש "}
                  <strong>{"גיליון ציונים"}</strong>
                  {" ו"}
                  <strong>{"מערכת שעות מעודכנת"}</strong>
                  {" לסמסטר הבא. המשך קבלת התמיכות מותנה בעמידה בדרישות הלימודים ובהצלחה במבחני הסמסטר הקודם."}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-accent/10 p-4">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <p className="text-sm leading-relaxed text-foreground/80">
                {"הקפד/י להגיש את המסמכים בזמן כדי להבטיח רצף בקבלת התמיכה בסמסטר הבא."}
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
