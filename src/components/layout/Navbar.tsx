"use client"

import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function Navbar() {
  const [dark, setDark] = useState(false)
  const location = useLocation()

  /* -------- PAGE TITLES -------- */
  const pageTitles: Record<string, string> = {
    "/": "Dashboard",
    "/profile": "Profile",
    "/tables": "Tables",
    "/notifications": "Notifications",
    "/subscriptions": "Subscriptions",
    "/documentation": "Documentation",
    "/signin": "Sign In",
    "/signup": "Sign Up",
  }

  const title = pageTitles[location.pathname] || "Dashboard"

  /* -------- DARK MODE -------- */
  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark"
    setDark(isDark)
    document.documentElement.classList.toggle("dark", isDark)
  }, [])

  const toggleDark = () => {
    const newTheme = !dark
    setDark(newTheme)
    document.documentElement.classList.toggle("dark", newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  return (
    <div className="w-full flex items-center justify-between px-6 py-4 border-b bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">

      {/* LEFT (Dynamic Title) */}
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
        {title}
      </h2>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        <button
          onClick={toggleDark}
          className="px-3 py-1 text-sm rounded-md border 
          hover:bg-gray-100 dark:hover:bg-gray-800 
          text-gray-700 dark:text-white"
        >
          {dark ? "Light" : "Dark"}
        </button>

        <div className="w-9 h-9 flex items-center justify-center rounded-full 
          bg-gray-200 dark:bg-gray-700 
          text-sm font-medium 
          text-gray-700 dark:text-white">
          RD
        </div>

      </div>

    </div>
  )
}