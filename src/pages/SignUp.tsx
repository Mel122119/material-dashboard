import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200 dark:from-zinc-900 dark:to-zinc-950 p-6">
      <Card className="w-full max-w-md border border-border shadow-lg">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-semibold">Sign Up</CardTitle>
          <CardDescription>
            Create your account to get started
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-5">
          {/* Name Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">First Name</label>
              <Input placeholder="John" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Last Name</label>
              <Input placeholder="Doe" />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input placeholder="your@email.com" />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <Input type="password" placeholder="••••••••" />
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Confirm Password</label>
            <Input type="password" placeholder="••••••••" />
          </div>

          {/* Terms */}
          <div className="flex items-center gap-2 text-sm">
            <Checkbox />
            <span>
              I agree to the{" "}
              <span className="text-primary hover:underline cursor-pointer">
                Terms and Conditions
              </span>
            </span>
          </div>

          {/* Main Button */}
          <Button className="w-full h-10 font-medium">
            Create Account
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex-1 h-px bg-border" />
            or continue with
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 h-10 rounded-lg border border-border bg-background hover:bg-muted/50 hover:shadow-md transition-all text-sm font-medium">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-4 w-4"
              />
              Google
            </button>

            <button className="flex items-center justify-center gap-2 h-10 rounded-lg border border-border bg-background hover:bg-muted/50 hover:shadow-md transition-all text-sm font-medium">
              <img
                src="https://www.svgrepo.com/show/475654/github-color.svg"
                alt="GitHub"
                className="h-4 w-4"
              />
              GitHub
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}