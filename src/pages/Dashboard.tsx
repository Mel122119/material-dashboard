"use client"

import { StatCard } from "@/components/Statcard"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

import { Progress } from "@/components/ui/progress"

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
} from "recharts"

import {
  Eye,
  ShoppingCart,
  CheckCircle,
  ClipboardList,
} from "lucide-react"

import AreaChartCard from "@/components/charts/AreaChartCard"

/* ---------------- Chart Data ---------------- */

const lineData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 600 },
  { name: "Mar", value: 800 },
  { name: "Apr", value: 700 },
  { name: "May", value: 900 },
  { name: "Jun", value: 750 },
]

const performanceData = [
  { name: "Q1", income: 4000, expense: 2400 },
  { name: "Q2", income: 3000, expense: 1398 },
  { name: "Q3", income: 5000, expense: 2800 },
  { name: "Q4", income: 4780, expense: 3908 },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-muted/40">
      <main className="w-full max-w-7xl mx-auto p-6 space-y-8">

        {/* HEADER */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold tracking-tight">
            Dashboard
          </h1>
        </div>

        {/* HERO IMAGE */}
        <img
  src="/images/team.png"
  alt="Team Illustration"
  className="w-full h-75 object-cover rounded-2xl"
/>

        {/* STAT CARDS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Website Views"
            value="4,254"
            description="+15% from last week"
            icon={<Eye size={20} />}
          />

          <StatCard
            title="Daily Sales"
            value="9,109"
            description="+12% today"
            icon={<ShoppingCart size={20} />}
          />

          <StatCard
            title="Completed Tasks"
            value="8,530"
            description="Last campaign performance"
            icon={<CheckCircle size={20} />}
          />

          <StatCard
            title="Orders"
            value="9,881"
            description="+8% this month"
            icon={<ClipboardList size={20} />}
          />
        </div>

        {/* PROJECTS */}
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            {[
              { name: "Material UI Version", budget: "$14,000", progress: 60 },
              { name: "Add Progress Track", budget: "$3,000", progress: 30 },
              { name: "Fix Platform Errors", budget: "$800", progress: 80 },
              { name: "Launch Mobile App", budget: "$5,000", progress: 50 },
            ].map((project, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <p>{project.name}</p>
                  <p className="text-muted-foreground">
                    {project.budget}
                  </p>
                </div>

                <Progress value={project.progress} />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* MAIN CHART (NEW AREA CHART) */}
        <AreaChartCard />

        {/* OTHER CHARTS */}
        <div className="grid gap-6 lg:grid-cols-2">

          {/* SALES OVERVIEW */}
          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
            </CardHeader>

            <CardContent>
              <ChartContainer
                config={{
                  value: {
                    label: "Sales",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="h-75"
              >
                <LineChart data={lineData}>
                  <CartesianGrid vertical={false} />

                  <XAxis
                    dataKey="name"
                    tickLine={false}
                    axisLine={false}
                  />

                  <ChartTooltip content={<ChartTooltipContent />} />

                 <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  fill="#3b82f6"
                  fillOpacity={0.1}
                  dot={{
                   r: 4,
                  stroke: "#3b82f6",
                  strokeWidth: 2,
                  fill: "white",
                   }}
                   />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* QUARTERLY PERFORMANCE */}
          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle>Quarterly Performance</CardTitle>
            </CardHeader>

            <CardContent>
              <ChartContainer
                config={{
                  income: {
                    label: "Income",
                    color: "hsl(var(--chart-2))",
                  },
                  expense: {
                    label: "Expense",
                    color: "#3b82f6",
                  },
                }}
                className="h-75"
              >
                <BarChart data={performanceData}>
                  <CartesianGrid vertical={false} />

                  <XAxis
                    dataKey="name"
                    tickLine={false}
                    axisLine={false}
                  />

                  <ChartTooltip content={<ChartTooltipContent />} />

                  <Bar
                    dataKey="income"
                    fill="var(--color-income)"
                    radius={[6, 6, 0, 0]}
                  />

                  <Bar
                    dataKey="expense"
                    fill="var(--color-expense)"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

        </div>

      </main>
    </div>
  )
}