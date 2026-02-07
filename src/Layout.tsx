import React from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen font-sans antialiased">{children}</div>
}
