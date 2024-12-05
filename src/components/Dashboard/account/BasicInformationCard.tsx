import { Card, CardBody, CardHeader } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import { Edit2 } from "lucide-react"

export default function BasicInformationCard() {
  return (
    <Card className="shadow-sm p-3">
      <CardHeader className="flex justify-between">
        <h2 className="text-xl font-semibold">Basic information</h2>
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
          Make sure this information matches your travel ID, like your passport or license.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium">Name</h3>
            <p className="text-default-500">Md Abdullah Mamun</p>
          </div>
          <div>
            <h3 className="font-medium">Bio</h3>
            <p className="text-default-500">Not provided</p>
          </div>
          <div>
            <h3 className="font-medium">Date of birth</h3>
            <p className="text-default-500">Not provided</p>
          </div>
          <div>
            <h3 className="font-medium">Gender</h3>
            <p className="text-default-500">Not provided</p>
          </div>
          <div>
            <h3 className="font-medium">Accessibility needs</h3>
            <p className="text-default-500">Not provided</p>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
