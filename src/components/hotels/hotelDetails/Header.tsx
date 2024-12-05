
import { Button } from "@nextui-org/button"
import { ArrowLeft, Heart, Share2 } from "lucide-react"

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-6">
      <Button
        variant="light"
        startContent={<ArrowLeft className="w-4 h-4" />}
        className="text-blue-600"
      >
        See all properties
      </Button>
      <div className="flex gap-2">
        <Button
          variant="bordered"
          startContent={<Share2 className="w-4 h-4" />}
        >
          Share
        </Button>
        <Button
          variant="bordered"
          startContent={<Heart className="w-4 h-4" />}
        >
          Save
        </Button>
      </div>
    </div>
  )
}