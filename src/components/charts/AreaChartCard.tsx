"use client"

import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
} from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "Jan", revenue: 400 },
  { month: "Feb", revenue: 300 },
  { month: "Mar", revenue: 500 },
  { month: "Apr", revenue: 400 },
  { month: "May", revenue: 600 },
  { month: "Jun", revenue: 550 },
]

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#6366f1", // nice indigo
  },
}

export default function AreaChartCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-75 w-full">

          <AreaChart data={chartData}>
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
            />

            <ChartTooltip content={<ChartTooltipContent />} />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="var(--color-revenue)"
              fill="var(--color-revenue)"
              fillOpacity={0.2}
            />
          </AreaChart>

        </ChartContainer>
      </CardContent>
    </Card>
  )
}