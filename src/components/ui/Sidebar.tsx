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
} from "lucide-react"

/* ================= TYPES ================= */

type Props = {
  children: React.ReactNode
}

/* ================= PROVIDER ================= */

export function SidebarProvider({ children }: Props) {
  return <div className="flex w-full min-h-screen">{children}</div>
}

/* ================= BASE ================= */

function Sidebar({ children }: Props) {
  return (
    <aside className="w-56 bg-[#f8f9fa] border-r h-screen flex flex-col px-3 py-4">
      {children}
    </aside>
  )
}

/* 🔥 FIXED HERE */
function SidebarContent({ children }: Props) {
  return (
    <div className="flex flex-col gap-6">
      {children}
    </div>
  )
}

/* ================= MENU ================= */

function SidebarMenu({ children }: Props) {
  return <ul className="space-y-1">{children}</ul>
}

function SidebarMenuItem({ children }: Props) {
  return <li>{children}</li>
}

function SidebarMenuButton({
  children,
  to,
}: {
  children: React.ReactNode
  to: string
}) {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link
      to={to}
      className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm transition-all
        ${
          isActive
            ? "bg-black text-white"
            : "text-gray-700 hover:bg-gray-200"
        }`}
    >
      {children}
    </Link>
  )
}

/* ================= SIDEBAR ================= */

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>

        {/* TOP SECTION */}
        <div>
          {/* LOGO */}
          <h1 className="text-sm font-semibold px-2 mb-4">
            Material Shadow
          </h1>

          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton to="/">
                <LayoutDashboard size={18} />
                Dashboard
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton to="/profile">
                <User size={18} />
                Profile
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton to="/tables">
                <Table size={18} />
                Tables
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton to="/notifications">
                <Bell size={18} />
                Notifications
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton to="/subscriptions">
                <CreditCard size={18} />
                Subscriptions
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton to="/documentation">
                <BookOpen size={18} />
                Documentation
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>

        {/* AUTH SECTION (NOW MOVED UP) */}
        <div>
          <p className="text-[10px] text-gray-400 px-2 mb-2">
            AUTH
          </p>

          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton to="/signin">
                <LogIn size={18} />
                Sign In
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton to="/signup">
                <UserPlus size={18} />
                Sign Up
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>

      </SidebarContent>
    </Sidebar>
  )
}

/* ================= EXPORTS ================= */

export {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
}