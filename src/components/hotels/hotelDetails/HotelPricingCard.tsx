
import { Button } from "@nextui-org/button"
import { Card, CardBody } from "@nextui-org/card"
import { Info, Calendar, Check } from "lucide-react"
interface IPorps {
  price: number
}
export default function HotelPricingCard({price} : IPorps) {
  return (
    <Card className="sticky top-20 my-10">
      <CardBody className="p-6">
        <div className="space-y-6">
          {/* OneKeyCash Promo */}
          <div className="bg-navy-900 text-white p-4 rounded-xl">
     
            <Button color="primary" className="w-full mt-1">
              Sign in
            </Button>
          </div>

          {/* Pricing */}
          <div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-bold">${price}</span>
              <span className="text-gray-600">per night</span>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-1 text-green-600 mb-1">
                <span className="font-medium">Fully refundable</span>
                <Info className="w-4 h-4" />
              </div>
              <span className="text-sm text-gray-600">Before Fri, Nov 8</span>
            </div>

            <div className="flex items-center gap-1 text-green-600 mb-4">
              <Check className="w-4 h-4" />
              <span>Your dates are available</span>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-6">
              <div className="border rounded-lg p-3">
                <div className="text-sm text-gray-600 mb-1">Start date</div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span>Nov 22</span>
                </div>
              </div>
              <div className="border rounded-lg p-3">
                <div className="text-sm text-gray-600 mb-1">End date</div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span>Nov 24</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 border-t pt-4">
              <div className="flex justify-between">
                <div>
                  <div>2 nights</div>
                  <div className="text-sm text-gray-600">$457 per night</div>
                </div>
                <span>$914</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <span>Taxes & fees</span>
                  <Info className="w-4 h-4" />
                </div>
                <span>$135</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <span>Service fee</span>
                  <Info className="w-4 h-4" />
                </div>
                <span>$168</span>
              </div>
              <div className="flex justify-between">
                <span>Host fee</span>
                <span>$265</span>
              </div>
              <div className="flex justify-between pt-3 border-t font-semibold">
                <span>Total</span>
                <span>$1,482</span>
              </div>
            </div>

            <Button 
              color="primary" 
              className="w-full bg-blue-600 hover:bg-blue-700"
              size="lg"
            >
              Reserve
            </Button>
            <div className="text-center text-sm text-gray-600 mt-2">
              You will not be charged yet
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}