"use client"

import MiniChartCard from "@/components/charts/MiniChartCard"
import AreaChartCard from "@/components/charts/AreaChartCard"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

/* ---------------- DATA ---------------- */

const miniStats = [
  { title: "Website Views", value: "4,254", change: "+15%", data: [40,60,30,80,50,70] },
  { title: "Daily Sales", value: "9,109", change: "+12%", data: [20,40,60,30,70,50] },
  { title: "Completed Tasks", value: "8,530", change: "+8%", data: [90,50,40,60,30,70] },
  { title: "Orders", value: "9,881", change: "+5%", data: [30,70,50,40,60,20] },
]

const lineData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 600 },
  { name: "Mar", value: 800 },
  { name: "Apr", value: 700 },
  { name: "May", value: 900 },
  { name: "Jun", value: 750 },
]

const pieData = [
  { name: "Direct", value: 40 },
  { name: "Social", value: 30 },
  { name: "Referral", value: 30 },
]

const COLORS = ["#22c55e", "#3b82f6", "#111827"]

/* ---------------- COMPONENT ---------------- */

export default function Dashboard() {
  return (
    <div className="bg-muted/40 min-h-screen">
      <main className="max-w-300 mx-auto p-6 space-y-6">

        {/* HERO */}
        <div className="rounded-xl bg-black text-white px-6 py-5 flex justify-between items-center">
          <div className="space-y-2 max-w-md">
          </div>

          <img src="/images/team.png" className="h-full w-full" />
        </div>

        {/* MINI CARDS */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {miniStats.map((item, i) => (
            <MiniChartCard key={i} {...item} />
          ))}
        </div>

        {/* PROJECT TABLE */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">
              Projects
            </CardTitle>
          </CardHeader>

          <CardContent>

            {/* HEADERS */}
            <div className="grid grid-cols-5 text-xs text-muted-foreground pb-2 border-b">
              <span>Company</span>
              <span>Members</span>
              <span>Budget</span>
              <span>Status</span>
              <span>Completion</span>
            </div>

            {/* ROWS */}
            {[
              "Material UI Version",
              "Add Progress Track",
              "Fix Platform Errors",
              "Launch Mobile App",
              "Add Pricing Page",
            ].map((name, i) => (
              <div
                key={i}
                className="grid grid-cols-5 items-center py-3 border-b last:border-none"
              >
                <span className="text-sm">{name}</span>

                <div className="flex -space-x-2">
                  {[1,2,3,4].map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"
                    />
                  ))}
                </div>

                <span className="text-xs text-muted-foreground">
                  $4,000
                </span>

                <span className="text-xs">Working</span>

                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-black w-[60%] rounded-full" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* CHARTS */}
        <div className="grid gap-4 md:grid-cols-2">

          {/* AREA */}
          <AreaChartCard />

          {/* LINE */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">
                User Activity
              </CardTitle>
            </CardHeader>

            <CardContent className="h-64">
              <ChartContainer
                config={{
                  value: { label: "Users", color: "#22c55e" },
                }}
                className="h-full"
              >
                <ResponsiveContainer>
                  <LineChart data={lineData}>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="name" />

                    <ChartTooltip content={<ChartTooltipContent />} />

                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#22c55e"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* PIE */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">
                Traffic Sources
              </CardTitle>
            </CardHeader>

            <CardContent className="h-64 flex items-center justify-center">
              <ResponsiveContainer width={200} height={200}>
                <PieChart>
                  <Pie
                    data={pieData}
                    innerRadius={60}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {pieData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* BAR */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">
                Quarterly Performance
              </CardTitle>
            </CardHeader>

            <CardContent className="h-64">
              <ResponsiveContainer>
                <BarChart data={lineData}>
                  <XAxis dataKey="name" />
                  <Bar dataKey="value" fill="#22c55e" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

        </div>

      </main>
    </div>
  )
}