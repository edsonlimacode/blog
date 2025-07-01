import { Button } from "@/components/button"

export const dynamic = "force-dynamic"

export default function New() {
  return (
    <div className="flex gap-2">
      <Button variant="default">default</Button>
      <Button variant="danger">danger</Button>
      <Button variant="ghost">ghost</Button>
    </div>
  )
}
