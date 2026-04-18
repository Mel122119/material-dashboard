import { useState, useEffect } from "react"

export default function Navbar() {
  const [dark, setDark] = useState(false)

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
    <div className="w-full flex items-center justify-between px-6 py-4 border-b bg-white dark:bg-gray-900">

      {/* LEFT */}
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
        Dashboard
      </h2>

      {/* RIGHT */}
      <div className="flex items-center gap-4 ml-auto">

        <button
          onClick={toggleDark}
          className="px-3 py-1 text-sm rounded-md border hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white"
        >
          {dark ? "Light" : "Dark"}
        </button>

        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-white">
          RD
        </div>

      </div>

    </div>
  )
}