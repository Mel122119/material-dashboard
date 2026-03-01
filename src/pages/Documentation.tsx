export default function Documentation() {
  return (
    <div className="space-y-6 max-w-3xl">

      <h1 className="text-3xl font-semibold">
        Documentation
      </h1>

      <p className="text-muted-foreground">
        This dashboard is built using:
      </p>

      <ul className="list-disc ml-6 space-y-2">
        <li>React + Vite</li>
        <li>Tailwind CSS</li>
        <li>Shadcn UI</li>
        <li>Recharts</li>
      </ul>

    </div>
  )
}