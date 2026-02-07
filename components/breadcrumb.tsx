"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"

interface BreadcrumbProps {
  current: string
}

export function Breadcrumb({ current }: BreadcrumbProps) {
  return (
    <nav aria-label="ניווט" className="mb-2 flex items-center gap-1 text-sm text-muted-foreground">
      <Link href="/" className="transition-colors hover:text-foreground">
        {"דף הבית"}
      </Link>
      <ChevronLeft className="h-3.5 w-3.5" />
      <Link href="/benefits" className="transition-colors hover:text-foreground">
        {"זכאויות"}
      </Link>
      <ChevronLeft className="h-3.5 w-3.5" />
      <span className="font-medium text-foreground">{current}</span>
    </nav>
  )
}
