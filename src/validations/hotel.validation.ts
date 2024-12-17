import { z } from "zod";



const hotelValidateSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  images: z
    .array(
      z
        .object({
          file: z.instanceof(File, {
            message: "Each image must be a valid file.",
          }),
        })
        .refine((data) => data.file.name !== "", {
          message: "File name cannot be empty.",
        }),
    )
    .min(1, { message: "You must upload at least one image." }),
  location: z.object({
    country: z.string().min(2, "Country is required"),
    city: z.string().min(2, "City is required"),
    zipCode: z.string().min(4, "Zip code must be valid"),
    address: z.string().min(5, "Address is required"),
    latitude: z.number().optional(),
    longitude: z.number().optional(),
  }),
  contactInfo: z.string().min(5, "Contact information is required"),
  pricePerNight: z.number().min(1, "Price must be at least 1"),
  totalRooms: z.number().min(1, "Total Rooms must be at least 1"),
  availableRooms: z.number().min(1, "Available Rooms must be at least 1"),
  amenities: z
    .string()
    .optional()
    .transform((input) => input?.split(",").map((tag) => tag.trim()) || [])
    .refine(
      (tags) => Array.isArray(tags) && tags.every((tag) => tag.length > 0),
      "Ameneties must be valid, non-empty strings",
    ),
  tags: z
    .string()
    .optional()
    .transform((input) => input?.split(",").map((tag) => tag.trim()) || [])
    .refine(
      (tags) => Array.isArray(tags) && tags.every((tag) => tag.length > 0),
      "Tags must be valid, non-empty strings",
    ),
  currency: z.string().min(1, "Currency is required"),
  policies: z.object({
    checkIn: z.string().min(5, "Check-in time is required"),
    checkOut: z.string().min(5, "Check-out time is required"),
    cancellationPolicy: z.string().min(5, "Cancellation policy is required"),
  }),
  classification: z.string().optional(),

  // discount: z
  //   .object({
  //     percentage: z
  //       .string()
  //       .transform((val) => parseFloat(val))
  //       .refine(
  //         (val) => !isNaN(val),
  //         "Discount percentage must be a valid number",
  //       ),
  //     description: z.string().optional(),
  //     validUntil: z.string().optional(),
  //   })
  //   .optional(),
});



export {
    hotelValidateSchema
}