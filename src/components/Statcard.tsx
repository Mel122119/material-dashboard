import { Card, CardContent } from "@/components/ui/card"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import { LineChart, Line } from "recharts"

interface StatCardProps {
  title: string
  value: string
  description: string
  icon?: React.ReactNode
}

const miniData = [
  { value: 10 },
  { value: 30 },
  { value: 20 },
  { value: 50 },
  { value: 40 },
  { value: 60 },
]

export function StatCard({ title, value, description, icon }: StatCardProps) {
  return (
    <Card className="shadow-sm rounded-2xl border border-border">
      <CardContent className="p-6 space-y-5">

        {/* Header */}
        <div className="flex items-center justify-between">

          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          {icon && (
            <div className="p-2 rounded-lg bg-muted flex items-center justify-center">
              {icon}
            </div>
          )}

        </div>

        {/* Value */}
        <h2 className="text-2xl font-bold">
          {value}
        </h2>

        {/* Mini Chart */}
        <ChartContainer
          config={{
            value: {
              label: "Value",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-16 w-full"
        >
          <LineChart data={miniData}>

            <ChartTooltip content={<ChartTooltipContent />} />

            <Line
              type="monotone"
              dataKey="value"
              stroke="var(--color-value)"
              strokeWidth={2}
              dot={false}
            />

          </LineChart>
        </ChartContainer>

        {/* Description */}
        <p className="text-sm text-muted-foreground">
          {description}
        </p>

      </CardContent>
    </Card>
  )
}