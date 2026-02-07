import { useState } from "react"
import { Link } from "react-router-dom"
import { Home, Sparkles, FileCheck, Phone, Navigation, X, HelpCircle, MessageCircleQuestion } from "lucide-react"

const siteLinks = [
  { to: "/", label: "דף הבית", icon: Home },
  { to: "/benefits", label: "כל הזכאויות", icon: Sparkles },
  { to: "/application", label: "הגשת בקשה", icon: FileCheck },
  { to: "/faq", label: "שאלות נפוצות", icon: MessageCircleQuestion },
  { to: "/eligibility", label: "בדיקת זכאות", icon: HelpCircle },
  { to: "/contact", label: "פרטי קשר", icon: Phone },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden">
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="פתח ניווט"
        className="fixed bottom-5 left-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-primary shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        <Navigation className="h-5 w-5" />
      </button>

      {/* Overlay + Bottom Sheet */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setOpen(false)
            }}
            role="button"
            tabIndex={0}
            aria-label="סגור ניווט"
          />
          <nav
            aria-label="ניווט"
            className="fixed bottom-0 left-0 right-0 z-50 max-h-[70vh] overflow-y-auto rounded-t-2xl border-t border-border bg-card px-5 pb-8 pt-4 shadow-2xl animate-in slide-in-from-bottom duration-200"
          >
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-bold text-muted-foreground">
                {"ניווט באתר"}
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="סגור"
                className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-border" />

            <ul className="flex flex-col gap-1">
              {siteLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    <link.icon className="h-4 w-4 shrink-0 text-primary" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </div>
  )
}
