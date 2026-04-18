import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Bell, CheckCircle2, AlertTriangle, UserPlus, Server } from "lucide-react"

const notifications = [
  {
    id: 1,
    title: "New project assigned",
    description: "You have been assigned to the Material XD version project",
    time: "2 min ago",
    icon: <Bell className="h-5 w-5 text-blue-500" />,
  },
  {
    id: 2,
    title: "Task completed",
    description: "Fix Platform Errors task has been completed successfully",
    time: "1 hour ago",
    icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
  },
  {
    id: 3,
    title: "Budget alert",
    description: "Project budget has exceeded 80% of allocated funds",
    time: "3 hours ago",
    icon: <AlertTriangle className="h-5 w-5 text-yellow-500" />,
  },
  {
    id: 4,
    title: "New team member",
    description: "Sophie B. has joined your team",
    time: "1 day ago",
    icon: <UserPlus className="h-5 w-5 text-blue-500" />,
  },
  {
    id: 5,
    title: "Server maintenance",
    description: "Scheduled maintenance will occur tonight from 2–4 AM",
    time: "2 days ago",
    icon: <Server className="h-5 w-5 text-red-500" />,
  },
]

export default function Notifications() {
  return (
    <div className="w-full space-y-8">

      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Notifications
        </h1>
        <p className="text-muted-foreground mt-1">
          Stay updated with your latest alerts and messages
        </p>
      </div>

      {/* Recent Notifications */}
      <Card className="border border-border shadow-sm bg-white dark:bg-gray-900">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Notifications</CardTitle>
          <Button variant="outline" size="sm">
            Mark all as read
          </Button>
        </CardHeader>

        <CardContent className="divide-y">

          {notifications.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-between py-4 hover:bg-muted/40 transition rounded-md px-2"
            >
              <div className="flex gap-4">
                <div className="p-2 rounded-full bg-muted">
                  {item.icon}
                </div>

                <div>
                  <p className="font-medium">
                    {item.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>

              <span className="text-sm text-muted-foreground whitespace-nowrap">
                {item.time}
              </span>
            </div>
          ))}

        </CardContent>
      </Card>

      {/* Settings */}
     <Card className="border border-border shadow-sm bg-white dark:bg-gray-900">
        <CardHeader>
          <CardTitle>Notifications Settings</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Email notifications</p>
              <p className="text-sm text-muted-foreground">
                Receive notifications via email
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Push notifications</p>
              <p className="text-sm text-muted-foreground">
                Receive push notifications in browser
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">SMS notifications</p>
              <p className="text-sm text-muted-foreground">
                Receive important updates via SMS
              </p>
            </div>
            <Switch />
          </div>

        </CardContent>
      </Card>

    </div>
  )
}