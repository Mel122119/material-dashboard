"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Settings,
  MessageSquare,
  LayoutGrid,
  Pencil,
} from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-muted/40 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Page Title */}
        <div>
          <h1 className="text-2xl font-semibold">Profile</h1>
          <p className="text-muted-foreground text-sm">
            Manage your account settings and personal information
          </p>
        </div>

        {/* Top Profile Card */}
        <Card className="bg-linear-to-r from-zinc-900 to-zinc-800 text-white rounded-2xl border-0">
          <CardContent className="flex items-center justify-between p-6">
            
            {/* Left */}
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="https://i.pravatar.cc/150?img=12" />
                <AvatarFallback>RD</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-semibold">Richard Davis</h2>
                <p className="text-sm text-zinc-300">CEO / Co-Founder</p>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="flex gap-3">
              <Button variant="secondary" className="gap-2">
                <LayoutGrid size={16} />
                App
              </Button>
              <Button variant="secondary" className="gap-2">
                <MessageSquare size={16} />
                Message
              </Button>
              <Button variant="secondary" className="gap-2">
                <Settings size={16} />
                Settings
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Grid Section */}
        <div className="grid gap-6 md:grid-cols-3">
          
          {/* LEFT - Platform Settings */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Platform Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div>
                <p className="text-xs font-semibold text-muted-foreground mb-3">
                  ACCOUNT
                </p>
                <div className="space-y-4">
                  <SettingItem label="Email me when someone follows me" defaultChecked />
                  <SettingItem label="Email me when someone answers on my post" />
                  <SettingItem label="Email me when someone mentions me" defaultChecked />
                </div>
              </div>

              <Separator />

              <div>
                <p className="text-xs font-semibold text-muted-foreground mb-3">
                  APPLICATION
                </p>
                <div className="space-y-4">
                  <SettingItem label="New launches and projects" />
                  <SettingItem label="Monthly product updates" defaultChecked />
                  <SettingItem label="Subscribe to newsletter" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CENTER - Profile Info */}
          <Card className="rounded-2xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Profile Information</CardTitle>
              <Button size="icon" variant="ghost">
                <Pencil size={16} />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <p className="text-muted-foreground">
                Hi, I'm Alec Thompson. Decisions: If you can't decide, the answer is no.
                If two equally difficult paths, choose the one more painful in the
                short term (pain avoidance is creating an illusion of equality).
              </p>

              <Separator />

              <InfoItem label="Full Name" value="Richard Davis" />
              <InfoItem label="Mobile" value="(44) 123 1234 123" />
              <InfoItem label="Email" value="richarddavis@mail.com" />
              <InfoItem label="Location" value="USA" />

              <Separator />

              <div>
                <p className="text-muted-foreground mb-2">Social</p>
                <div className="flex gap-3">
                  <SocialIcon label="F" />
                  <SocialIcon label="X" />
                  <SocialIcon label="I" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* RIGHT - Messages */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Platform Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <MessageItem
                name="Alexander"
                message="Awesome work, can you..."
              />
              <MessageItem
                name="Ivanna"
                message="About file I can..."
              />
              <MessageItem
                name="Peterson"
                message="Have a great afternoon"
              />
              <MessageItem
                name="Bruce Mars"
                message="Hi! I need more information..."
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

/* ---------------- Components ---------------- */

function SettingItem({
  label,
  defaultChecked = false,
}: {
  label: string
  defaultChecked?: boolean
}) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-sm text-muted-foreground">{label}</p>
      <Switch defaultChecked={defaultChecked} />
    </div>
  )
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-muted-foreground text-xs">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  )
}

function SocialIcon({ label }: { label: string }) {
  return (
    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium cursor-pointer hover:bg-muted/70 transition">
      {label}
    </div>
  )
}

function MessageItem({
  name,
  message,
}: {
  name: string
  message: string
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <Avatar className="h-9 w-9">
          <AvatarImage src={`https://i.pravatar.cc/150?u=${name}`} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-muted-foreground truncate max-w-35">
            {message}
          </p>
        </div>
      </div>
      <Button size="sm" variant="outline">
        Reply
      </Button>
    </div>
  )
}