import { Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function TuitionSummary() {
  return (
    <Card className="border-2 border-primary/20 bg-primary/5">
      <CardContent className="flex items-start gap-4 p-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
          <Zap className="h-5 w-5 text-primary" />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold text-foreground">{"בקצרה"}</h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            {"הינך זכאי להחזר שכר לימוד בסכום של עד "}
            <strong className="text-foreground">{"13,079 \u20AA"}</strong>
            {" לשנת לימודים. קבלת ההחזר מותנית בהצגת קבלות תשלום בפועל, ומוגבלת לתקרה של 50% מסך הזכאות השנתית בכל סמסטר. התשלום יבוצע בשתי פעימות: הראשונה בגין סמסטר א' והשנייה בגין סמסטר ב'."}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
