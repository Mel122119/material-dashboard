import * as React from "react"

type TypographyProps = {
  variant?: "h1" | "h2" | "h3" | "p"
  children: React.ReactNode
  className?: string
}

export function Typography({
  variant = "p",
  children,
  className = "",
}: TypographyProps) {
  const styles = {
    h1: "text-3xl font-bold",
    h2: "text-2xl font-semibold",
    h3: "text-xl font-semibold",
    p: "text-sm text-muted-foreground",
  }

  const Component = variant

  return (
    <Component className={`${styles[variant]} ${className}`}>
      {children}
    </Component>
  )
} 