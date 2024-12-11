

import { z } from "zod";

// Define the complete schema
export const profileSchema= z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  dateOfBirth: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Date of birth must be YYYY-MM-DD" }),
  gender: z.enum(["male", "female", "other"]).optional(),
  address: z.string().min(1, { message: "Address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .regex(/^\+?\d+$/, { message: "Invalid phone number format" }),
  currency: z.enum(["USD", "EUR", "GBP"]).optional(),
});

// Create a partial schema for partial updates
export const updateProfileValidation  = profileSchema.partial();

// Infer TypeScript type for the partial schema

