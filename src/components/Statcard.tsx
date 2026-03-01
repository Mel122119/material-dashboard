import {
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts"

import { Card, CardContent } from "@/components/ui/card"


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
    <Card className="shadow-sm border border-border">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">
            {title}
          </p>
          {icon}
        </div>

        <h2 className="text-2xl font-bold">
          {value}
        </h2>

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

        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}