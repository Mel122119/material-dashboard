"use client"

import * as React from "react"
import { Link } from "react-router-dom"
import { Slot } from "@radix-ui/react-slot"
import {
  LayoutDashboard,
  User,
  Table,
  Bell,
  CreditCard,
  BookOpen,
} from "lucide-react"
import { LogIn, UserPlus } from "lucide-react"

/* ================= TYPES ================= */

type Props = {
  children: React.ReactNode
}

/* ================= PROVIDER ================= */

const SidebarContext = React.createContext<{} | null>(null)

export function SidebarProvider({ children }: Props) {
  return (
    <SidebarContext.Provider value={{}}>
      <div className="flex w-full min-h-screen">{children}</div>
    </SidebarContext.Provider>
  )
}

/* ================= BASE ================= */

function Sidebar({ children }: Props) {
  return (
    <div className="w-64 bg-white text-black border-r h-screen">
      {children}
    </div>
  )
}

function SidebarContent({ children }: Props) {
  return <div className="p-4 space-y-2">{children}</div>
}

/* ================= MENU ================= */

function SidebarMenu({ children }: Props) {
  return <ul className="space-y-2">{children}</ul>
}

function SidebarMenuItem({ children }: Props) {
  return <li>{children}</li>
}

function SidebarMenuButton({
  children,
  asChild = false,
}: {
  children: React.ReactNode
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp className="flex items-center gap-2 w-full p-2 rounded-md hover:bg-gray-100 cursor-pointer">
      {children}
    </Comp>
  )
}


export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>

        <SidebarMenu>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/">
                <LayoutDashboard />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/profile">
                <User />
                <span>Profile</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/tables">
                <Table />
                <span>Tables</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/notifications">
                <Bell />
                <span>Notifications</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/subscriptions">
                <CreditCard />
                <span>Subscriptions</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/documentation">
                <BookOpen />
                <span>Documentation</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

        </SidebarMenu>

        {/* AUTH SECTION */}
        <div className="mt-6 text-xs font-semibold text-gray-500 px-2">
          AUTH
        </div>

        <SidebarMenu>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/signin">
                <LogIn />
                <span>Sign In</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/signup">
                <UserPlus />
                <span>Sign Up</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

        </SidebarMenu>

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