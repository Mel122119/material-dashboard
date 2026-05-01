"use client"

import { AppSidebar } from "@/components/ui/Sidebar"
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"

export default function DashboardLayout() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-50 dark:bg-gray-900">

      {/* Sidebar */}
      <AppSidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 w-full">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 w-full overflow-y-auto p-6 md:p-8">
          <Outlet />
        </main>

      </div>

    </div>
  )
}