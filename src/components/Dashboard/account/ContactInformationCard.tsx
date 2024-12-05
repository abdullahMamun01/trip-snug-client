import { Card, CardBody, CardHeader } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import { Edit2 } from "lucide-react"

export default function ContactInformationCard() {
  return (
    <Card className="shadow-sm p-3">
      <CardHeader className="flex justify-between">
        <h2 className="text-xl font-semibold">Contact</h2>
        <Button
          size="sm"
          variant="light"
          color="primary"
          startContent={<Edit2 className="h-4 w-4" />}
        >
          Edit
        </Button>
      </CardHeader>
      <CardBody className="space-y-4">
        <p className="text-sm text-default-500">
          Receive account activity alerts and trip updates by sharing this information.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium">Mobile number</h3>
            <p className="text-default-500">Not provided</p>
          </div>
          <div>
            <h3 className="font-medium">Email</h3>
            <p className="text-default-500">abdullah.mamun.0110@gmail.com</p>
          </div>
          <div>
            <h3 className="font-medium">Emergency contact</h3>
            <p className="text-default-500">Not provided</p>
          </div>
          <div>
            <h3 className="font-medium">Address</h3>
            <p className="text-default-500">Not provided</p>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
