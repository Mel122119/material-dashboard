import { BrowserRouter, Routes, Route } from "react-router-dom"
import DashboardLayout from "./components/layout/DashboardLayout"

import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import Tables from "./pages/Tables"
import Notifications from "./pages/Notifications"
import Subscriptions from "./pages/Subscriptions"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Documentation from "./pages/Documentation"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* AUTH PAGES (No sidebar layout) */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* DASHBOARD LAYOUT */}
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/tables" element={<Tables />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App