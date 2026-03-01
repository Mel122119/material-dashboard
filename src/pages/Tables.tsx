import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const authors = [
  {
    name: "John Michael",
    email: "john@email.com",
    role: "Manager",
    department: "Organization",
    status: "Online",
    employed: "23/04/18",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    name: "Emma Roberts",
    email: "emma@email.com",
    role: "Programator",
    department: "Developer",
    status: "Offline",
    employed: "11/01/19",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    name: "Laurent Perrier",
    email: "laurent@email.com",
    role: "Executive",
    department: "Projects",
    status: "Offline",
    employed: "19/09/17",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
  {
    name: "Michael Levi",
    email: "michael@email.com",
    role: "Programator",
    department: "Developer",
    status: "Online",
    employed: "24/12/08",
    avatar: "https://i.pravatar.cc/40?img=4",
  },
  {
    name: "Richard Gran",
    email: "richard@email.com",
    role: "Manager",
    department: "Executive",
    status: "Offline",
    employed: "04/10/21",
    avatar: "https://i.pravatar.cc/40?img=5",
  },
  {
    name: "Miriam Eric",
    email: "miriam@email.com",
    role: "Programator",
    department: "Developer",
    status: "Offline",
    employed: "14/09/20",
    avatar: "https://i.pravatar.cc/40?img=6",
  },
]

const projects = [
  {
    name: "Material XD Version",
    budget: "$14,000",
    status: "Working",
    completion: 60,
  },
  {
    name: "Add Progress Track",
    budget: "$3,000",
    status: "Working",
    completion: 45,
  },
  {
    name: "Fix Platform Errors",
    budget: "Not Set",
    status: "Done",
    completion: 100,
  },
  {
    name: "Launch our Mobile App",
    budget: "$20,500",
    status: "Done",
    completion: 80,
  },
  {
    name: "Add the New Pricing Page",
    budget: "$500",
    status: "Working",
    completion: 35,
  },
  {
    name: "Redesign New Online Shop",
    budget: "$2,000",
    status: "Working",
    completion: 50,
  },
]

export default function Tables() {
  return (
    <div className="p-8 bg-muted/30 min-h-screen space-y-8">

      {/* AUTHORS TABLE */}
      <Card className="rounded-xl shadow-sm border bg-card">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-1">Authors Table</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Browse and manage authors
          </p>

          <div className="rounded-lg border overflow-hidden">
            <Table>
              <TableHeader className="bg-muted/40">
                <TableRow>
                  <TableHead>Author</TableHead>
                  <TableHead>Function</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Employed</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {authors.map((author, index) => (
                  <TableRow key={index} className="hover:bg-muted/30 transition">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <img
                          src={author.avatar}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-medium">{author.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {author.email}
                          </div>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell>
                      <div className="text-sm font-medium">{author.role}</div>
                      <div className="text-xs text-muted-foreground">
                        {author.department}
                      </div>
                    </TableCell>

                    <TableCell>
                      <Badge
                        className={
                          author.status === "Online"
                            ? "bg-green-500/10 text-green-600 border-green-500/20"
                            : "bg-gray-500/10 text-gray-600 border-gray-500/20"
                        }
                      >
                        {author.status}
                      </Badge>
                    </TableCell>

                    <TableCell className="text-sm text-muted-foreground">
                      {author.employed}
                    </TableCell>

                    <TableCell className="text-right">
                      <Button size="sm" variant="outline" className="h-8 px-3 text-xs">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* PROJECTS TABLE */}
      <Card className="rounded-xl shadow-sm border bg-card">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-1">Projects Table</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Overview of ongoing projects
          </p>

          <div className="rounded-lg border overflow-hidden">
            <Table>
              <TableHeader className="bg-muted/40">
                <TableRow>
                  <TableHead>Project</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Completion</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {projects.map((project, index) => (
                  <TableRow key={index} className="hover:bg-muted/30 transition">
                    <TableCell className="font-medium">
                      {project.name}
                    </TableCell>

                    <TableCell>{project.budget}</TableCell>

                    <TableCell>
                      <Badge
                        className={
                          project.status === "Done"
                            ? "bg-green-500/10 text-green-600 border-green-500/20"
                            : "bg-blue-500/10 text-blue-600 border-blue-500/20"
                        }
                      >
                        {project.status}
                      </Badge>
                    </TableCell>

                    <TableCell>
                      <div className="w-full">
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-black dark:bg-white"
                            style={{ width: `${project.completion}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground ml-2">
                          {project.completion}%
                        </span>
                      </div>
                    </TableCell>

                    <TableCell className="text-right">
                      <Button size="sm" variant="outline" className="h-8 px-3 text-xs">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}