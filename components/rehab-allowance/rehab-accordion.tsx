"use client"

import {
  CheckCircle2,
  Info,
  AlertTriangle,
  ShieldCheck,
  Clock,
  Calculator,
  Wallet,
  GraduationCap,
  Banknote,
  CalendarCheck,
  ExternalLink,
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export function RehabAccordion() {
  return (
    <Accordion type="multiple" defaultValue={["eligibility"]} className="flex flex-col gap-4">
      {/* ========== ELIGIBILITY CONDITIONS ========== */}
      <AccordionItem
        value="eligibility"
        id="eligibility"
        className="scroll-mt-20 overflow-hidden rounded-xl border border-border bg-card shadow-sm"
      >
        <AccordionTrigger className="px-5 py-4 transition-colors hover:bg-secondary/50 hover:no-underline">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <ShieldCheck className="h-5 w-5 text-primary" />
            </div>
            <span className="text-right text-lg font-bold text-foreground">
              {"תנאי הזכאות לדמי שיקום"}
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-5 pb-5">
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-base leading-relaxed text-muted-foreground">
              {"קבלת דמי השיקום מותנית בעמידה בשלושה תנאים עיקריים שנקבעו באגף השיקום."}
            </p>

            {/* Condition 1 */}
            <div className="rounded-xl border border-border bg-secondary/20 p-5">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {"1"}
                </span>
                <h4 className="text-base font-bold text-foreground">{"שיעור הקצבה לה הנך זכאי"}</h4>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {"דמי השיקום משלימים ל-100% את הקצבה המשולמת לך."}
              </p>
              <div className="mt-3 flex items-start gap-3 rounded-lg border border-border bg-card p-3">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm text-foreground/80">
                  {"לפיכך, אם משולמת לך קצבה מלאה \u2013 אינך זכאי לדמי שיקום."}
                </p>
              </div>
            </div>

            {/* Condition 2 */}
            <div className="rounded-xl border border-border bg-secondary/20 p-5">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {"2"}
                </span>
                <h4 className="text-base font-bold text-foreground">{"עומס לימודי"}</h4>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {"דמי השיקום נועדו לתמוך כלכלית במי שלומד בהיקף שעות שפוגע ביכולתו להשתכר. לכן תנאי סף לקבלת הזכאות הוא לימודים בהיקף של לפחות "}
                <strong className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">{"16 שעות שבועיות"}</strong>
                {"."}
              </p>
              <p className="mb-3 text-sm font-medium text-foreground">{"ההיקף הזה יכול להיקבע באחת משתי הדרכים:"}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-border bg-card p-4">
                  <h5 className="mb-2 text-sm font-bold text-foreground">{"דרך ראשונה"}</h5>
                  <p className="text-sm text-muted-foreground">
                    {"מערכת שעות הכוללת לפחות 16 שעות לימוד בפועל בשבוע."}
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <h5 className="mb-2 text-sm font-bold text-foreground">{"דרך שנייה"}</h5>
                  <p className="text-sm text-muted-foreground">
                    {"מערכת לימודים הכוללת לפחות 12 שעות שבועיות, ובנוסף שעות מעטפת (כגון שיעורי עזר) המשלימות יחד ל-16 שעות שבועיות."}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-3 rounded-lg border-2 border-accent/30 bg-accent/5 p-4">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm leading-relaxed text-foreground/80">
                  <strong className="text-foreground">{"שים/י לב: "}</strong>
                  {"במקרה שבו הגעה ל-16 שעות מתבססת על שעות מעטפת, יהיה עליך להגיש הצהרה מפורטת וחתומה על שעות אלה."}
                </p>
              </div>
            </div>

            {/* Condition 3 */}
            <div className="rounded-xl border border-border bg-secondary/20 p-5">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {"3"}
                </span>
                <h4 className="text-base font-bold text-foreground">{"הכנסות"}</h4>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {"בבדיקת הזכאות לתשלום דמי שיקום נלקחות בחשבון קצבאות מחליפות שכר (אבטלה, מילואים, דמי לידה) והכנסות שלא מעבודה."}
              </p>
            </div>

            {/* Important note about active periods */}
            <div className="flex items-start gap-3 rounded-lg border-2 border-destructive/30 bg-destructive/5 p-4">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-destructive">{"שים/י לב"}</span>
                <p className="text-sm leading-relaxed text-foreground/80">
                  {"הזכאות לדמי שיקום ניתנת רק בתקופות לימודים פעילות. לכן אין זכאות לתשלום דמי שיקום בתקופות חופשה \u2013 למשל, בחופשת הקיץ או בין שנות לימוד."}
                </p>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* ========== HOW HOURS ARE CALCULATED ========== */}
      <AccordionItem
        value="hours-calculation"
        id="hours-calculation"
        className="scroll-mt-20 overflow-hidden rounded-xl border border-border bg-card shadow-sm"
      >
        <AccordionTrigger className="px-5 py-4 transition-colors hover:bg-secondary/50 hover:no-underline">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <span className="text-right text-lg font-bold text-foreground">
              {"איך מחושב היקף שעות הלימוד שלך?"}
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-5 pb-5">
          <div className="flex flex-col gap-5 pt-2">
            <p className="text-base leading-relaxed text-muted-foreground">
              {"במסלולי לימודים אקדמיים, היקף שעות הלימוד שלך מחושב לפי "}
              <strong className="text-foreground">{"הערך הגבוה"}</strong>
              {" מבין השניים:"}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-secondary/30 p-5">
                <div className="mb-2 flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  <h4 className="text-sm font-bold text-foreground">{"סך השעות השבועיות"}</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  {"סך השעות השבועיות המופיעות במערכת השעות שלך."}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-secondary/30 p-5">
                <div className="mb-2 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h4 className="text-sm font-bold text-foreground">{"סך נקודות הזכות"}</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  {"סך נקודות הזכות של הקורסים הרשומים במערכת."}
                </p>
              </div>
            </div>

            {/* Open University */}
            <div className="rounded-xl border border-border bg-muted/30 p-5">
              <div className="mb-3 flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h4 className="text-sm font-bold text-foreground">{"אוניברסיטה פתוחה"}</h4>
              </div>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                {"אם אתה לומד באוניברסיטה הפתוחה, החישוב נעשה לפי סך נקודות הזכות הרשומות לסמסטר. לכן עליך להציג מסמך רשמי מהאוניברסיטה הכולל:"}
              </p>
              <ul className="flex flex-col gap-2 pr-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{"רשימת הקורסים שאליהם נרשמת באותו סמסטר"}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{"סך נקודות הזכות של הקורסים"}</span>
                </li>
              </ul>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* ========== AMOUNT CALCULATION WITH TABS ========== */}
      <AccordionItem
        value="amount-calculation"
        id="amount-calculation"
        className="scroll-mt-20 overflow-hidden rounded-xl border border-border bg-card shadow-sm"
      >
        <AccordionTrigger className="px-5 py-4 transition-colors hover:bg-secondary/50 hover:no-underline">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Calculator className="h-5 w-5 text-primary" />
            </div>
            <span className="text-right text-lg font-bold text-foreground">
              {"חישוב גובה דמי השיקום"}
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-5 pb-5">
          <div className="flex flex-col gap-5 pt-2">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {"בחר את סוג הנכות הרלוונטי לך כדי לראות את פרטי חישוב דמי השיקום:"}
            </p>

            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="general">{"נכה כללי"}</TabsTrigger>
                <TabsTrigger value="work-injury">{"נפגע עבודה"}</TabsTrigger>
              </TabsList>

              {/* === GENERAL DISABILITY TAB === */}
              <TabsContent value="general" className="mt-5">
                <div className="flex flex-col gap-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {"גובה דמי השיקום נקבע לפי 3 פרמטרים מרכזיים:"}
                  </p>

                  {/* Parameter 1 */}
                  <div className="rounded-xl border border-border bg-secondary/20 p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        {"1"}
                      </span>
                      <h4 className="text-sm font-bold text-foreground">{"דרגת אובדן הכושר שנקבעה לך"}</h4>
                    </div>
                    <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                      {"דמי השיקום נועדו להשלים את הכנסתך כך שתגיע לגובה קצבת נכות מלאה."}
                    </p>
                    <div className="flex flex-col gap-2">
                      {[
                        {
                          label: "איבדת 100% מכושרך",
                          desc: "זכאי לקצבת נכות מלאה \u2013 לא ישולמו דמי שיקום.",
                          color: "border-muted-foreground/30 bg-muted/20",
                        },
                        {
                          label: "לא איבדת כלל מכושרך",
                          desc: "לא זכאי לקצבת נכות \u2013 ישולמו דמי שיקום בגובה קצבת נכות מלאה.",
                          color: "border-primary/30 bg-primary/5",
                        },
                        {
                          label: "איבדת את כושרך באופן חלקי",
                          desc: "זכאי לקצבה חלקית \u2013 דמי השיקום ישלימו את ההפרש עד גובה קצבת נכות מלאה.",
                          color: "border-accent/30 bg-accent/5",
                        },
                      ].map((item) => (
                        <div key={item.label} className={`rounded-lg border p-3 ${item.color}`}>
                          <p className="text-sm font-semibold text-foreground">{item.label}</p>
                          <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Parameter 2 */}
                  <div className="rounded-xl border border-border bg-secondary/20 p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        {"2"}
                      </span>
                      <h4 className="text-sm font-bold text-foreground">{"מצבך המשפחתי"}</h4>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {"גובה קצבת נכות מלאה משתנה לפי המצב המשפחתי (מספר ילדים, בן/בת זוג)."}
                    </p>
                    <div className="mt-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
                      <p className="text-sm text-foreground">
                        {"עבור רווק ללא ילדים, גובה הקצבה המלאה (נכון לינואר 2026) הוא "}
                        <strong className="text-lg text-primary">{"4,711 \u20AA"}</strong>
                      </p>
                      <a
                        href="https://www.btl.gov.il/benefits/Disability/Pages/%D7%A9%D7%99%D7%A2%D7%95%D7%A8%D7%99%20%D7%94%D7%A7%D7%A6%D7%91%D7%94.aspx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        {"בדוק את הסכום המתאים למצבך המשפחתי"}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Parameter 3 */}
                  <div className="rounded-xl border border-border bg-secondary/20 p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        {"3"}
                      </span>
                      <h4 className="text-sm font-bold text-foreground">{"הכנסותיך"}</h4>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {"השפעת ההכנסות על גובה דמי השיקום משתנה בהתאם לסטטוס הזכאות."}
                    </p>

                    {/* Sub-section A */}
                    <div className="mb-4 rounded-lg border border-border bg-card p-4">
                      <h5 className="mb-3 text-sm font-bold text-foreground">
                        {"א. אם אינך זכאי לקצבת נכות כללית"}
                      </h5>
                      <p className="mb-3 text-xs text-muted-foreground">{"הסכומים נכונים ל-12.25:"}</p>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-start gap-3 rounded-lg bg-primary/5 p-3">
                          <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                          <p className="text-sm text-foreground">
                            {"הכנסה נמוכה מ-"}
                            <strong className="text-primary">{"6,689 \u20AA"}</strong>
                            {" \u2013 דמי שיקום בגובה קצבת נכות מלאה"}
                          </p>
                        </div>
                        <div className="flex items-start gap-3 rounded-lg bg-accent/5 p-3">
                          <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                          <p className="text-sm text-foreground">
                            {"הכנסה בין "}
                            <strong className="text-accent">{"6,689 \u20AA"}</strong>
                            {" ל-"}
                            <strong className="text-accent">{"7,790 \u20AA"}</strong>
                            {" \u2013 דמי שיקום מופחתים בהדרגה"}
                          </p>
                        </div>
                        <div className="flex items-start gap-3 rounded-lg bg-destructive/5 p-3">
                          <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-destructive" />
                          <p className="text-sm text-foreground">
                            {"הכנסה גבוהה מ-"}
                            <strong className="text-destructive">{"7,790 \u20AA"}</strong>
                            {" \u2013 אין זכאות לדמי שיקום"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Sub-section B */}
                    <div className="rounded-lg border border-border bg-card p-4">
                      <h5 className="mb-3 text-sm font-bold text-foreground">
                        {"ב. אם אתה זכאי לקצבת נכות חלקית"}
                      </h5>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {"ההפחתה מדמי השיקום עקב הכנסותיך תיעשה לפי טבלה ייעודית."}
                      </p>
                      <a
                        href="https://www.btl.gov.il/benefits/Disability/Pages/100per.aspx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        {"צפה בטבלת ההפחתות"}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* === WORK INJURY TAB === */}
              <TabsContent value="work-injury" className="mt-5">
                <div className="flex flex-col gap-5">
                  {/* Main principle */}
                  <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-5">
                    <div className="mb-3 flex items-center gap-2">
                      <Banknote className="h-5 w-5 text-primary" />
                      <h4 className="text-base font-bold text-foreground">{"הכלל המנחה: השלמה ל-100% נכות"}</h4>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {"דמי השיקום הם ההפרש בין הקצבה שאתה מקבל כיום לבין הקצבה שהיית מקבל אילו נקבעו לך 100% נכות. כיוון שקצבת נכות מעבודה מחושבת לפי השכר האישי שלך לפני הפגיעה, גובה דמי השיקום משתנה מאדם לאדם."}
                    </p>
                  </div>

                  {/* Income deduction */}
                  <div className="rounded-xl border border-border bg-secondary/20 p-5">
                    <h4 className="mb-3 text-sm font-bold text-foreground">{"הכנסה מעבודה והשפעתה על דמי השיקום"}</h4>
                    <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                      {"מדמי השיקום שאתה מקבל כנפגע עבודה מנכים את כל ההכנסות שלך מעבודה ומקצבאות מחליפות שכר (כגון אבטלה, מילואים או לידה)."}
                    </p>
                    <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-3">
                      <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <p className="text-sm text-foreground/80">
                        <strong>{"העיקרון: "}</strong>
                        {"דמי השיקום נועדו להשלים את הכנסתך עד לרמת קצבה של 100% ולא מעבר לכך. לכן, אם כבר הגעת לסכום הזה באמצעות עבודה או קצבאות אחרות \u2013 דמי השיקום יופחתו בהתאם."}
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* ========== AMOUNT CALCULATION - WORK INJURY ========== */}
      <AccordionItem
        value="amount-work-injury"
        id="amount-work-injury"
        className="scroll-mt-20 overflow-hidden rounded-xl border border-border bg-card shadow-sm"
      >
        <AccordionTrigger className="px-5 py-4 transition-colors hover:bg-secondary/50 hover:no-underline">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Banknote className="h-5 w-5 text-primary" />
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="text-right text-lg font-bold text-foreground">
                {"חישוב גובה דמי השיקום"}
              </span>
              <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                {"נפגע עבודה"}
              </span>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-5 pb-5">
          <div className="flex flex-col gap-5 pt-2">
            {/* Main principle */}
            <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-5">
              <div className="mb-3 flex items-center gap-2">
                <Banknote className="h-5 w-5 text-primary" />
                <h4 className="text-base font-bold text-foreground">{"הכלל המנחה: השלמה ל-100% נכות"}</h4>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {"דמי השיקום הם ההפרש בין הקצבה שאתה מקבל כיום לבין הקצבה שהיית מקבל אילו נקבעו לך 100% נכות. כיוון שקצבת נכות מעבודה מחושבת לפי השכר האישי שלך לפני הפגיעה, גובה דמי השיקום משתנה מאדם לאדם."}
              </p>
            </div>

            {/* Income deduction */}
            <div className="rounded-xl border border-border bg-secondary/20 p-5">
              <h4 className="mb-3 text-sm font-bold text-foreground">{"הכנסה מעבודה והשפעתה על דמי השיקום"}</h4>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                {"מדמי השיקום שאתה מקבל כנפגע עבודה מנכים את כל ההכנסות שלך מעבודה ומקצבאות מחליפות שכר (כגון אבטלה, מילואים או לידה)."}
              </p>
              <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-3">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm text-foreground/80">
                  <strong>{"העיקרון: "}</strong>
                  {"דמי השיקום נועדו להשלים את הכנסתך עד לרמת קצבה של 100% ולא מעבר לכך. ��כן, אם כבר הגעת לסכום הזה באמצעות עבודה או קצבאות אחרות \u2013 דמי השיקום יופחתו בהתאם."}
                </p>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* ========== WHEN IS IT PAID ========== */}
      <AccordionItem
        value="payment-schedule"
        id="payment-schedule"
        className="scroll-mt-20 overflow-hidden rounded-xl border border-border bg-card shadow-sm"
      >
        <AccordionTrigger className="px-5 py-4 transition-colors hover:bg-secondary/50 hover:no-underline">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Wallet className="h-5 w-5 text-primary" />
            </div>
            <span className="text-right text-lg font-bold text-foreground">
              {"מתי משולמים דמי השיקום?"}
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-5 pb-5">
          <div className="flex flex-col gap-4 pt-2">
            <p className="text-base leading-relaxed text-muted-foreground">
              {"אם אתה עומד בתנאי הזכאות לדמי שיקום, עובד השיקום יוודא שהתשלום יועבר אליך באופן אוטומטי."}
            </p>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-secondary/20 p-5">
              <CalendarCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-foreground">{"אחת לחודש"}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {"על פי רוב עד לעשירי לחודש, עבור החודש הקודם."}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-accent/10 p-4">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <p className="text-sm leading-relaxed text-foreground/80">
                {"לעיתים תשלום דמי השיקום מתעכב בשל עדכון גובה הכנסותיך מעבודה."}
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* ========== SEMESTER END ========== */}
      <AccordionItem
        value="semester-end"
        id="semester-end"
        className="scroll-mt-20 overflow-hidden rounded-xl border border-border bg-card shadow-sm"
      >
        <AccordionTrigger className="px-5 py-4 transition-colors hover:bg-secondary/50 hover:no-underline">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
              <CalendarCheck className="h-5 w-5 text-accent" />
            </div>
            <span className="text-right text-lg font-bold text-foreground">
              {"תזכורת: סיום סמסטר"}
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-5 pb-5">
          <div className="flex flex-col gap-4 pt-2">
            <div className="flex items-start gap-3 rounded-lg border-2 border-accent/30 bg-accent/5 p-4">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <p className="text-sm leading-relaxed text-foreground/80">
                {"בסיום כל סמסטר עליך להגיש גיליון ציונים ומערכת שעות מעודכנת לסמסטר הבא. המשך קבלת התמיכות מותנה בעמידה בדרישות הלימודים ובהצלחה במבחני הסמסטר הקודם."}
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
