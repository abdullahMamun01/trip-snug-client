"use client";

import { Star } from "lucide-react";
import { Chip } from "@nextui-org/chip";

interface HotelRatingProps {
  rating: number;
  totalReviews?: number;
  classification: string;
}

export function HotelRating({ rating, totalReviews, classification }: HotelRatingProps) {
  return (
    <div className="flex items-center gap-2 my-0.5">
      <div className="flex items-center">
        {[...Array(Math.floor(rating))].map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 text-yellow-400 fill-current" />
        ))}
        <span className="ml-1 text-xs text-default-500">{rating}</span>
      </div>
      <span className="text-xs text-default-400">({totalReviews} reviews)</span>
      <Chip
        size="sm"
        variant="flat"
        className="text-xs bg-primary-100 text-primary"
      >
        {classification}
      </Chip>
    </div>
  );
}