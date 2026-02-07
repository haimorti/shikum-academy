import React from "react"
import type { Metadata } from 'next'
import { Rubik, Heebo } from 'next/font/google'

import './globals.css'

const rubik = Rubik({ subsets: ['hebrew', 'latin'], variable: '--font-sans' })
const heebo = Heebo({ subsets: ['hebrew', 'latin'], variable: '--font-heebo' })

export const metadata: Metadata = {
  title: 'שיקום מקצועי לסטודנטים | המדריך שלך',
  description: 'המדריך המלא לסטודנטים עם מוגבלות בשיקום מקצועי - מהגשת הבקשה ועד מימוש כל הזכאויות',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${rubik.variable} ${heebo.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
