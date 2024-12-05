import Badge from "@/components/ui/Badge";
import { Avatar } from "@nextui-org/avatar";

import { CameraIcon } from "lucide-react";

export default function AccountHeader() {
  return (
    <div className="flex items-start gap-4 overflow-hidden">
      <Badge content="blue" color="primary">
        <Avatar
          src="/placeholder.svg?height=80&width=80"
          className="h-20 w-20"
          isBordered
          color="primary"
        />
      </Badge>
      <div>
        <h1 className="text-xl font-semibold">Hi, Md Abdullah</h1>
        <p className="text-default-500 text-sm">abc@gmail.com</p>
      </div>
    </div>
  );
}
