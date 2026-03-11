import { StatCard } from "@/components/Statcard"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

import { Progress } from "@/components/ui/progress"
import { Typography } from "@/components/ui/typography"

import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts"

import {
  Eye,
  ShoppingCart,
  CheckCircle,
  ClipboardList,
} from "lucide-react"

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
    <div className="min-h-screen bg-muted/40 flex">

      <main className="flex-1 p-6 space-y-8 max-w-7xl mx-auto w-full">

        {/* PAGE HEADER */}

        <div className="flex items-center justify-between">
          <Typography variant="h1">
            Dashboard
          </Typography>
        </div>

        {/* HERO CARD */}

        

            <img
              src="/images/team.png"
              alt="Team Illustration"
              className="w-350 h-65"
            />

          

        {/* STAT CARDS */}

        <div className="grid md:grid-cols-4 gap-6">

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
            <CardTitle>
              <Typography variant="h3">
                Projects
              </Typography>
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">

            {[
              { name: "Material UI Version", budget: "$14,000", progress: 60 },
              { name: "Add Progress Track", budget: "$3,000", progress: 30 },
              { name: "Fix Platform Errors", budget: "$800", progress: 80 },
              { name: "Launch Mobile App", budget: "$5,000", progress: 50 },
            ].map((project, index) => (

              <div key={index} className="space-y-2">

                <div className="flex justify-between">

                  <Typography variant="p">
                    {project.name}
                  </Typography>

                  <Typography
                    variant="p"
                    className="text-muted-foreground"
                  >
                    {project.budget}
                  </Typography>

                </div>

                <Progress value={project.progress} />

              </div>

            ))}

          </CardContent>
        </Card>

        {/* CHARTS */}

        <div className="grid md:grid-cols-2 gap-6">

          {/* SALES OVERVIEW */}

          <Card className="rounded-2xl shadow-sm">

            <CardHeader>
              <CardTitle>
                <Typography variant="h3">
                  Sales Overview
                </Typography>
              </CardTitle>
            </CardHeader>

            <CardContent>

              <ResponsiveContainer width="100%" height={280}>

                <LineChart data={lineData}>

                  <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />

                  <XAxis dataKey="name" stroke="#6b7280" />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#22c55e"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />

                </LineChart>

              </ResponsiveContainer>

            </CardContent>

          </Card>

          {/* QUARTERLY PERFORMANCE */}

          <Card className="rounded-2xl shadow-sm">

            <CardHeader>
              <CardTitle>
                <Typography variant="h3">
                  Quarterly Performance
                </Typography>
              </CardTitle>
            </CardHeader>

            <CardContent>

              <ResponsiveContainer width="100%" height={280}>

                <BarChart data={performanceData}>

                  <XAxis dataKey="name" stroke="#6b7280" />

                  <Tooltip />

                  <Bar
                    dataKey="income"
                    fill="#22c55e"
                    radius={[6, 6, 0, 0]}
                  />

                  <Bar
                    dataKey="expense"
                    fill="#111827"
                    radius={[6, 6, 0, 0]}
                  />

                </BarChart>

              </ResponsiveContainer>

            </CardContent>

          </Card>

        </div>

      </main>

    </div>
  )
}