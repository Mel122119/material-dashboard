import { NavLink } from "react-router-dom"
import {
  Home,
  User,
  Table,
  Bell,
  CreditCard,
  LogIn,
  UserPlus,
  BookOpen,
} from "lucide-react"

export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-700 text-zinc-200 flex flex-col p-6">

      <h2 className="text-xl font-semibold text-white mb-8">
        Material Shadcn
      </h2>

      <nav className="space-y-2">

        {/* MAIN */}
        <NavLink to="/" className={linkStyle}>
          <Home size={18} />
          Dashboard
        </NavLink>

        <NavLink to="/profile" className={linkStyle}>
          <User size={18} />
          Profile
        </NavLink>

        <NavLink to="/tables" className={linkStyle}>
          <Table size={18} />
          Tables
        </NavLink>

        <NavLink to="/notifications" className={linkStyle}>
          <Bell size={18} />
          Notifications
        </NavLink>

        <NavLink to="/subscriptions" className={linkStyle}>
          <CreditCard size={18} />
          Subscriptions
        </NavLink>

        {/* AUTH SECTION */}
        <div className="pt-6 mt-6 border-t border-zinc-600">
          <p className="text-xs uppercase text-zinc-400 mb-3">
            Auth Pages
          </p>

          <NavLink to="/signin" className={linkStyle}>
            <LogIn size={18} />
            Sign In
          </NavLink>

          <NavLink to="/signup" className={linkStyle}>
            <UserPlus size={18} />
            Sign Up
          </NavLink>
        </div>

        {/* DOCUMENTATION */}
        <div className="pt-6 mt-6 border-t border-zinc-600">
          <NavLink to="/documentation" className={linkStyle}>
            <BookOpen size={18} />
            Documentation
          </NavLink>
        </div>

      </nav>
    </aside>
  )
}

const linkStyle = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
    isActive
      ? "bg-zinc-800 text-white"
      : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
  }`