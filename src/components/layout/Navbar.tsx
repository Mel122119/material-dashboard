import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function Navbar() {
  const [dark, setDark] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [dark])

  // Get page name from URL
  const pageName =
    location.pathname === "/"
      ? "Dashboard"
      : location.pathname.replace("/", "").replace("-", " ")

  return (
    <div className="h-16 border-b flex items-center justify-between px-6 bg-background">
      <h1 className="text-xl font-semibold capitalize">
        {pageName}
      </h1>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setDark(!dark)}
          className="border px-3 py-1 rounded-md"
        >
          {dark ? "Light" : "Dark"}
        </button>

        <Avatar>
          <AvatarFallback>RD</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}