import { Star } from "lucide-react";
import React from "react";

export default function RatingStar({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
     {[...new Array(Math.floor(rating))].map((_, index) => (
  <Star key={index} className="h-3 w-3 fill-current text-yellow-400" />
))}
    </div>
  );
}
