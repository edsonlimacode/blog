import { Button } from "@/components/button"
import { AlertCircleIcon } from "lucide-react"

export const dynamic = "force-dynamic"

export default function New() {
  return (
    <div className="flex gap-2">
      <Button variant="default">default</Button>
      <Button variant="danger">
        <AlertCircleIcon /> danger
      </Button>
      <Button variant="ghost">ghost</Button>
    </div>
  )
}
