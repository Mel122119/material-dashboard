"use client"

import {
  Card,
} from "@/components/ui/card"

import {
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts"

type Props = {
  title: string
  value: string
  change: string
  data: number[]
}

export default function MiniChartCard({
  title,
  value,
  change,
  data,
}: Props) {
  const chartData = data.map((v, i) => ({
    name: i,
    value: v,
  }))

  return (
    <Card className="p-4">
      <div className="space-y-1 mb-2">
        <p className="text-xs text-muted-foreground">
          {title}
        </p>

        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            {value}
          </h3>

          <span className="text-xs text-green-500">
            {change}
          </span>
        </div>
      </div>

      <div className="h-14">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <Bar
              dataKey="value"
              fill="#3b82f6"
              radius={[3, 3, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}