import { Button } from "@nextui-org/button";
import React from "react";

export default function HotelDescription() {
  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold text-gray-900">About this property</h2>
      <p className="text-gray-700">
        Welcome to Cascade Vista, a stunning modern retreat perfect for families
        and small groups. Nestled in the heart of nature, this thoughtfully
        designed home offers breathtaking views and all the amenities you need
        for a memorable stay.
      </p>
      <p className="mt-2 text-gray-600">
        Featuring a spacious open-concept living area, a fully equipped gourmet
        kitchen, and a private hot tub with mountain views, Cascade Vista
        provides the perfect blend of comfort and luxury. Enjoy complimentary
        use of the golf cart and e-bikes to explore the surrounding area.
      </p>
      <Button className="mt-4" variant="light" color="primary">
        Show more
      </Button>
    </div>
  );
}
