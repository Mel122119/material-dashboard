import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts"

/* ---------------- Chart Data ---------------- */

const miniChartData = [
  { name: "M", value: 200 },
  { name: "T", value: 400 },
  { name: "W", value: 300 },
  { name: "T", value: 500 },
  { name: "F", value: 450 },
]

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
      <main className="flex-1 p-6 space-y-6 max-w-7xl mx-auto w-full">

        {/* ✅ HERO SECTION (SMALLER + FIXED GRADIENT) */}
       
           

            <img
              src="/images/team.png"
              alt="Team Illustration"
              className="w-350 h-50"
            />
        

        {/* ✅ STAT CARDS (COLORED MINI BARS) */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: "Website Views", value: "4,254", color: "#22c55e" },
            { title: "Daily Sales", value: "9,109", color: "#3b82f6" },
            { title: "Completed Tasks", value: "8,530", color: "#f97316" },
            { title: "Orders", value: "9,881", color: "#6366f1" },
          ].map((item, index) => (
            <Card key={index} className="rounded-2xl shadow-sm">
              <CardContent className="p-5 space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {item.title}
                  </p>
                  <p className="text-2xl font-bold">
                    {item.value}
                  </p>
                </div>

                <ResponsiveContainer width="100%" height={60}>
                  <BarChart data={miniChartData}>
                    <Bar
                      dataKey="value"
                      fill={item.color}
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* PROJECTS */}
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>

          <CardContent className="space-y-5">
            {[
              { name: "Material UI Version", budget: "$14,000", progress: 60 },
              { name: "Add Progress Track", budget: "$3,000", progress: 30 },
              { name: "Fix Platform Errors", budget: "$800", progress: 80 },
              { name: "Launch Mobile App", budget: "$5,000", progress: 50 },
            ].map((project, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{project.name}</span>
                  <span className="text-muted-foreground">
                    {project.budget}
                  </span>
                </div>
                <Progress value={project.progress} />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* ✅ IMPROVED CHARTS */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* SALES OVERVIEW */}
          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
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
              <CardTitle>Quarterly Performance</CardTitle>
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