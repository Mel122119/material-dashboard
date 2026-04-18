import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const data = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 5000 },
  { name: "Apr", revenue: 4780 },
  { name: "May", revenue: 5890 },
  { name: "Jun", revenue: 4390 },
  { name: "Jul", revenue: 6490 },
]

export default function DashboardChart() {
  return (
    <Card className="shadow-sm border border-border">
      <CardHeader>
        <CardTitle className="text-base font-semibold">
          Revenue Overview
        </CardTitle>
      </CardHeader>

      <CardContent className="h-70 w-full min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />

            <XAxis
              dataKey="name"
              tick={{ fontSize: 12 }}
              stroke="#9ca3af"
            />

            <YAxis
              tick={{ fontSize: 12 }}
              stroke="#9ca3af"
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#7c3aed"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}