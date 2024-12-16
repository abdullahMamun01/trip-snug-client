import { Textarea } from "@nextui-org/input";
import { Star } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { IReview, IUserReview } from "@/types/review.type";
import { reviewSchema } from "@/validations/review.validation";
import useReviewHotel from "@/hooks/useReviewHotel";
import SubmitBtn from "./SubmitBtn";

interface IProps {
  onClose: () => void;
  hotelId: string;
}
export default function ReviewHotelForm({ onClose, hotelId }: IProps) {
  const [rating, setRating] = useState(0);
  const { isPending, mutateAsync } = useReviewHotel();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IUserReview>({
    resolver: zodResolver(reviewSchema),
  });

  const onSubmit = async (formData: IUserReview) => {
    console.log(hotelId , ' aaa')

    await mutateAsync({...formData , hotelId})
    
    onClose()
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className="focus:outline-none"
            onClick={() => {
              setRating(star);
              setValue("rating", star); // Set rating in form state
            }}
          >
            <Star
              className={`h-8 w-8 ${
                star <= rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-200 text-gray-200"
              } transition-colors`}
            />
          </button>
        ))}
      </div>
      {errors.rating && (
        <p className="text-sm text-red-500">{errors.rating.message}</p>
      )}

      <div className="mt-4 space-y-2">
        <label className="text-sm font-medium">Your Review</label>
        <Textarea
          placeholder="Share your experience..."
          minRows={4}
          size="lg"
          {...register("review")}
        />
        {errors.review && (
          <p className="text-sm text-red-500">{errors.review.message}</p>
        )}
      </div>

      <div className="py-5">
        <Button
          onClick={onClose}
          type="button"
          color="danger"
          variant="light"
          onPress={onClose}
        >
          Cancel
        </Button>
        <SubmitBtn
          defaultText="Submit Review"
          isLoading={isPending}
          loadingText="review..."
        />
      </div>
    </form>
  );
}
