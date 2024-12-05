import { Card, CardBody } from "@nextui-org/card"
import { Divider } from "@nextui-org/divider"

export default function BookingSummary() {
  return (
    <div className="py-4">
      <Card>
        <CardBody>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-default-500">Room Rate</span>
              <span className="font-semibold">$299/night</span>
            </div>
            <div className="flex justify-between">
              <span className="text-default-500">Taxes & Fees</span>
              <span className="font-semibold">$45</span>
            </div>
            <Divider />
            <div className="flex justify-between">
              <span className="font-bold">Total</span>
              <span className="font-bold">$344</span>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
