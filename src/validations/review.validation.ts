import { z } from "zod";


const reviewSchema = z.object({
  rating: z
    .number()
    .min(1, "Rating is required")
    .max(5, "Rating must be between 1 and 5"),
  review: z
    .string()
    .min(10, "Review must be at least 10 characters long")
    .max(500, "Review cannot exceed 500 characters"),
});

export {
    reviewSchema
}