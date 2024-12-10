"use client";

import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import FormInput from "../FormInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerValidationSchema } from "@/validations/auth.validation";
import { TRegisterSchemaType } from "@/types/auth.type";
import { catchError } from "@/lib/catchError";
import { registerAction } from "@/actions/auth.action";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [isVisible, setIsVisible] = React.useState(false);
const router = useRouter()
  const toggleVisibility = () => setIsVisible(!isVisible);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TRegisterSchemaType>({
    resolver: zodResolver(registerValidationSchema),
  });

  const onSubmit = async (formData: TRegisterSchemaType) => {
    try {
      const response = await registerAction(formData);
      toast.success(response.message, { position: "top-right" });
      router.push('/login')
      router.refresh()
    } catch (error) {
      catchError(error);
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex  gap-1">
        <FormInput
          label="First Name"
          name="firstName"
          placeholder="Enter your first name"
          errorMessage={errors.firstName?.message}
          type="text"
          variant="bordered"
          control={control}
        />
        <FormInput
          label="Last Name"
          name="lastName"
          placeholder="Enter your last name "
          type="text"
          variant="bordered"
          control={control}
          errorMessage={errors.lastName?.message}
        />
      </div>

      <FormInput
        name="email"
        label="Email"
        placeholder="Enter your email"
        type="email"
        variant="bordered"
        control={control}
        errorMessage={errors.email?.message}
      />
      <FormInput
        label="Password"
        name="password"
        placeholder="Enter your password"
        type="password"
        variant="bordered"
        control={control}
      />
      <FormInput
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        placeholder="Confirm password"
        variant="bordered"
        control={control}
        errorMessage={errors.confirmPassword?.message}
      />
      <FormInput
        label="Coutnry"
        name="country"
        type="text"
        placeholder="country name"
        variant="bordered"
        control={control}
        errorMessage={errors.country?.message}
      />
      <Button color="primary" type="submit">
        Sign Up
      </Button>
    </form>
  );
}
