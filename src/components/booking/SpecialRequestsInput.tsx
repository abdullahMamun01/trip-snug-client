import { Input } from "@nextui-org/input"

export default function SpecialRequestsInput() {
  return (
    <div className="flex flex-col gap-2">
      <Input
        type="text"
        label="Special Requests"
        placeholder="Any special requirements?"
        className="w-full"
      />
      <span className="text-tiny text-default-400">
        Optional: Let us know if you have any special requests
      </span>
    </div>
  )
}
