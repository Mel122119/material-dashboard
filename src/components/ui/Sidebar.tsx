"use client"

import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import {
  LayoutDashboard,
  User,
  Table,
  Bell,
  CreditCard,
  BookOpen,
  LogIn,
  UserPlus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

export function AppSidebar() {
  const location = useLocation()
  const [collapsed, setCollapsed] = React.useState(false)

  const menu = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "Profile", icon: User, path: "/profile" },
    { name: "Tables", icon: Table, path: "/tables" },
    { name: "Notifications", icon: Bell, path: "/notifications" },
    { name: "Subscriptions", icon: CreditCard, path: "/subscriptions" },
    { name: "Documentation", icon: BookOpen, path: "/documentation" },
    { name: "Sign In", icon: LogIn, path: "/signin" },
    { name: "Sign Up", icon: UserPlus, path: "/signup" },
  ]

  return (
    <aside
      className="
        w-56 
        h-screen 
        flex flex-col 
        px-3 py-4
        bg-white dark:bg-gray-900
        border-r border-gray-200 dark:border-gray-800
        transition-colors
      "
    >

      {/* TOP */}
      <div className="flex items-center justify-between px-3 py-4">
        {!collapsed && (
          <h1 className="text-sm font-semibold">
            Material Shadow
          </h1>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded hover:bg-gray-200"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* MENU */}
      <nav className="flex-1 px-2 space-y-1">
        {menu.map((item) => {
          const Icon = item.icon
          const active = location.pathname === item.path

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition
                ${
                  active
                    ? "bg-black text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
            >
              <Icon size={18} />

              {!collapsed && <span>{item.name}</span>}
            </Link>
          )
        })}
      </nav>

    </aside>
  )
}