import {
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts"

import { Card, CardContent } from "@/components/ui/card"
import { Typography } from "@/components/ui/typography"

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

          <Typography
            variant="p"
            className="text-sm text-muted-foreground"
          >
            {title}
          </Typography>

          {icon && (
            <div className="p-2 rounded-lg bg-muted flex items-center justify-center">
              {icon}
            </div>
          )}

        </div>

        {/* Value */}
        <Typography
          variant="h2"
          className="text-3xl font-bold"
        >
          {value}
        </Typography>

        {/* Mini Chart */}
        <div className="h-16">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={miniData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#7c3aed"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Description */}
        <Typography
          variant="p"
          className="text-sm text-muted-foreground"
        >
          {description}
        </Typography>

      </CardContent>
    </Card>
  )
}