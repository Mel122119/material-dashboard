"use client"

import { useEffect, useState } from "react"

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
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts"

/* ---------------- TYPES ---------------- */

type DashboardData = {
  users: number
  sales: number
  revenue: number
  orders: number
  monthly: { name: string; value: number }[]
  traffic: { name: string; value: number }[]
}

/* ---------------- COMPONENT ---------------- */

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/dashboard")
        const json = await res.json()
        setData(json)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <p className="p-6">Loading...</p>
  if (!data) return <p className="p-6">No data</p>

  const COLORS = ["#22c55e", "#3b82f6", "#111827"]

  return (
    <div className="min-h-screen bg-muted/40">
      <main className="max-w-7xl mx-auto px-6 py-6 space-y-6">

        {/* HERO */}
        <div className="rounded-2xl bg-linear-to-r from-black to-gray-800 text-white p-6 flex items-center justify-between">
          <div className="space-y-2">
          </div>

          <img
            src="/images/team.png"
            className="h-full w-full object-contain"
          />
        </div>

        {/* MINI CARDS (TOP ROW) */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MiniChartCard
            title="Users"
            value={data.users.toLocaleString()}
            change="+12%"
            data={[10, 20, 30, 40, 50]}
          />
          <MiniChartCard
            title="Sales"
            value={data.sales.toLocaleString()}
            change="+8%"
            data={[20, 40, 60, 30, 50]}
          />
          <MiniChartCard
            title="Revenue"
            value={data.revenue.toLocaleString()}
            change="+15%"
            data={[30, 60, 40, 80, 50]}
          />
          <MiniChartCard
            title="Orders"
            value={data.orders.toLocaleString()}
            change="+5%"
            data={[50, 30, 70, 40, 60]}
          />
        </div>

        {/* PROJECT TABLE */}
        <Card className="rounded-2xl shadow-sm border">
          <CardHeader>
            <CardTitle className="text-base">
              Projects
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            {data.monthly.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b pb-2 last:border-none"
              >
                <p className="text-sm">{item.name}</p>
                <p className="text-xs text-muted-foreground">
                  ${item.value}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* CHART GRID */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* AREA CHART */}
          <AreaChartCard />

          {/* LINE CHART */}
          <Card className="rounded-2xl shadow-sm border">
            <CardHeader>
              <CardTitle className="text-base">
                User Activity
              </CardTitle>
            </CardHeader>

            <CardContent className="h-72">
              <ChartContainer
                config={{
                  value: { label: "Users", color: "#22c55e" },
                }}
                className="h-full"
              >
               <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data.monthly}>
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

          {/* PIE CHART */}
          <Card className="rounded-2xl shadow-sm border">
            <CardHeader>
              <CardTitle className="text-base">
                Traffic Sources
              </CardTitle>
            </CardHeader>

            <CardContent className="h-72 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data.traffic}
                    innerRadius={70}
                    outerRadius={90}
                    dataKey="value"
                  >
                    {data.traffic.map((_, i) => (
                      <Cell key={i} fill={COLORS[i]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* BAR CHART */}
          <Card className="rounded-2xl shadow-sm border">
            <CardHeader>
              <CardTitle className="text-base">
                Monthly Revenue
              </CardTitle>
            </CardHeader>

            <CardContent className="h-72">
              <ChartContainer
                config={{
                  value: { label: "Revenue", color: "#3b82f6" },
                }}
                className="h-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data.monthly}>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="name" />
                    <ChartTooltip content={<ChartTooltipContent />} />

                    <Bar
                      dataKey="value"
                      fill="#3b82f6"
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

        </div>

      </main>
    </div>
  )
}