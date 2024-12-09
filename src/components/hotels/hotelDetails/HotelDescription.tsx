import { Button } from "@nextui-org/button";
import React from "react";

interface IPorps {
  description: string
}
export default function HotelDescription({description} : IPorps) {
  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold text-gray-900">About this property</h2>
      <p className="text-gray-700">
       {description}
      </p>
     
      <Button className="mt-4" variant="light" color="primary">
        Show more
      </Button>
    </div>
  );
}
