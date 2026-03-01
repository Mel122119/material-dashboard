import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"

export default function Subscriptions() {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Subscriptions
        </h1>
        <p className="text-muted-foreground mt-1">
          Manage your billing, plans, and subscription settings
        </p>
      </div>

      {/* Current Subscription */}
      <Card>
        <CardHeader>
          <CardTitle>Current Subscription</CardTitle>
        </CardHeader>

        <CardContent className="grid md:grid-cols-3 gap-6">

          {/* Plan Details */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Plan</p>
            <Badge>Professional</Badge>

            <p className="text-sm text-muted-foreground mt-4">Status</p>
            <Badge variant="secondary">Active</Badge>

            <p className="text-sm text-muted-foreground mt-4">Next Billing</p>
            <p>Jan 15, 2025</p>

            <p className="text-sm text-muted-foreground mt-4">Amount</p>
            <p className="font-semibold">$29.00</p>
          </div>

          {/* Usage */}
          <div>
            <p className="text-sm text-muted-foreground">Projects</p>
            <p className="font-medium">8 / Unlimited</p>

            <p className="text-sm text-muted-foreground mt-4">Storage</p>
            <div className="h-2 bg-muted rounded-full mt-2">
              <div className="h-2 w-[45%] bg-primary rounded-full" />
            </div>
            <p className="text-sm mt-2">45GB / 100GB</p>
          </div>

          {/* Settings */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p>Auto-renewal</p>
              <Switch defaultChecked />
            </div>

            <Button variant="outline" className="w-full">
              Update Payment Method
            </Button>

            <Button variant="outline" className="w-full">
              Download Invoice
            </Button>
          </div>

        </CardContent>
      </Card>

      {/* Plans */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* Basic */}
        <Card className="text-center p-6">
          <h3 className="text-lg font-semibold">Basic</h3>
          <p className="text-3xl font-bold mt-4">$9<span className="text-sm font-normal">/month</span></p>
          <p className="text-muted-foreground mt-2">Perfect for individuals</p>

          <Button className="mt-6 w-full" variant="outline">
            Get Started
          </Button>
        </Card>

        {/* Professional */}
        <Card className="text-center p-6 border-2 border-primary relative">
          <Badge className="absolute top-4 right-4">Most Popular</Badge>
          <h3 className="text-lg font-semibold">Professional</h3>
          <p className="text-3xl font-bold mt-4">$29<span className="text-sm font-normal">/month</span></p>
          <p className="text-muted-foreground mt-2">
            Best for growing teams
          </p>

          <Button className="mt-6 w-full">
            Upgrade Now
          </Button>
        </Card>

        {/* Enterprise */}
        <Card className="text-center p-6">
          <h3 className="text-lg font-semibold">Enterprise</h3>
          <p className="text-3xl font-bold mt-4">$99<span className="text-sm font-normal">/month</span></p>
          <p className="text-muted-foreground mt-2">
            For large organizations
          </p>

          <Button className="mt-6 w-full" variant="outline">
            Contact Sales
          </Button>
        </Card>

      </div>

      {/* Billing History */}
      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex justify-between border-b pb-3">
            <div>
              <p className="font-medium">Professional Plan - Monthly</p>
              <p className="text-sm text-muted-foreground">Dec 15, 2024</p>
            </div>
            <Badge variant="secondary">Paid</Badge>
            <p>$29.00</p>
          </div>

          <div className="flex justify-between border-b pb-3">
            <div>
              <p className="font-medium">Professional Plan - Monthly</p>
              <p className="text-sm text-muted-foreground">Nov 15, 2024</p>
            </div>
            <Badge variant="secondary">Paid</Badge>
            <p>$29.00</p>
          </div>

        </CardContent>
      </Card>

    </div>
  )
}