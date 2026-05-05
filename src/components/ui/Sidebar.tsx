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
  Menu,
} from "lucide-react"

/* ================= TYPES ================= */

type Props = {
  children: React.ReactNode
}

type SidebarContextType = {
  collapsed: boolean
  toggle: () => void
}

/* ================= CONTEXT ================= */

const SidebarContext = React.createContext<SidebarContextType | null>(null)

export function useSidebar() {
  const ctx = React.useContext(SidebarContext)
  if (!ctx) throw new Error("useSidebar must be used inside SidebarProvider")
  return ctx
}

export function SidebarProvider({ children }: Props) {
  const [collapsed, setCollapsed] = React.useState(false)

  const toggle = () => setCollapsed(prev => !prev)

  return (
    <SidebarContext.Provider value={{ collapsed, toggle }}>
      <div className="flex w-full min-h-screen">{children}</div>
    </SidebarContext.Provider>
  )
}

/* ================= BASE ================= */

function Sidebar({ children }: Props) {
  const { collapsed } = useSidebar()

  return (
    <aside
      className={`${
        collapsed ? "w-18" : "w-57.5"
      } transition-all duration-300 ease-in-out
      bg-white dark:bg-gray-900 border-r
      h-screen flex flex-col`}
    >
      {children}
    </aside>
  )
}

function SidebarContent({ children }: Props) {
  return <div className="flex flex-col h-full">{children}</div>
}

/* ================= MENU ================= */

function SidebarMenu({ children }: Props) {
  return <ul className="space-y-1 px-2">{children}</ul>
}

function SidebarMenuItem({ children }: Props) {
  return <li>{children}</li>
}

function SidebarMenuButton({
  to,
  icon,
  label,
}: {
  to: string
  icon: React.ReactNode
  label: string
}) {
  const location = useLocation()
  const { collapsed } = useSidebar()

  const isActive = location.pathname === to

  return (
    <Link
      to={to}
      className={`flex items-center ${
        collapsed ? "justify-center" : "gap-3"
      } px-3 py-2 rounded-lg text-sm transition-all
      ${
        isActive
          ? "bg-black text-white dark:bg-white dark:text-black"
          : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
      }`}
    >
      {icon}

      {!collapsed && (
        <span className="whitespace-nowrap">{label}</span>
      )}
    </Link>
  )
}

/* ================= SIDEBAR ================= */

export function AppSidebar() {
  const { collapsed, toggle } = useSidebar()

  return (
    <Sidebar>
      <SidebarContent>

        {/* TOP */}
        <div className="p-3 flex items-center justify-between">
          {!collapsed && (
            <h1 className="text-sm font-semibold text-gray-800 dark:text-white">
              Material Dashboard
            </h1>
          )}

          <button
            onClick={toggle}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            <Menu size={18} className="text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* MENU */}
        <div className="flex-1 flex flex-col justify-between">

          {/* MAIN LINKS */}
          <div>
            <SidebarMenu>

              <SidebarMenuItem>
                <SidebarMenuButton
                  to="/"
                  icon={<LayoutDashboard size={18} />}
                  label="Dashboard"
                />
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  to="/profile"
                  icon={<User size={18} />}
                  label="Profile"
                />
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  to="/tables"
                  icon={<Table size={18} />}
                  label="Tables"
                />
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  to="/notifications"
                  icon={<Bell size={18} />}
                  label="Notifications"
                />
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  to="/subscriptions"
                  icon={<CreditCard size={18} />}
                  label="Subscriptions"
                />
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  to="/documentation"
                  icon={<BookOpen size={18} />}
                  label="Documentation"
                />
              </SidebarMenuItem>

            </SidebarMenu>
          </div>

          {/* AUTH (BOTTOM) */}
          <div className="mb-4">
            {!collapsed && (
              <p className="text-[10px] text-gray-400 px-3 mb-2">
                AUTH
              </p>
            )}

            <SidebarMenu>

              <SidebarMenuItem>
                <SidebarMenuButton
                  to="/signin"
                  icon={<LogIn size={18} />}
                  label="Sign In"
                />
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  to="/signup"
                  icon={<UserPlus size={18} />}
                  label="Sign Up"
                />
              </SidebarMenuItem>

            </SidebarMenu>
          </div>

        </div>

      </SidebarContent>
    </Sidebar>
  )
}