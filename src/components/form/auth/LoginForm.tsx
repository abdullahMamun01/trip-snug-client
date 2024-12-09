"use client";

import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";

import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";
import React from "react";
import FormInput from "../FormInput";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@nextui-org/input";
import { TLoginType } from "@/types/auth.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "@/validations/auth.validation";
import { loginUser } from "@/services/auth.service";
import { catchError } from "@/lib/catchError";
import toast from "react-hot-toast";
import { loginAction } from "@/actions/auth.action";

export default function LoginForm() {
  const [isVisible, setIsVisible] = React.useState(false);
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<TLoginType>({
    resolver: zodResolver(loginValidationSchema),
  });
  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = async (formData: TLoginType) => {
    try {
      const data = await loginAction(formData);
      toast.success(data.message, { position: "top-right" });
    } catch (error: any) {
      catchError(error);
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <FormInput
          name="email"
          placeholder="Enter your email"
          type="email"
          control={control}
          label="Email"
          errorMessage=""
        />
        <span className="no-flex flex-row py-0 text-sm text-red-500">
          {errors.email?.message}
        </span>
      </div>

      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input
            {...field}
            endContent={
              <button type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <Eye className="pointer-events-none text-2xl text-default-400" />
                ) : (
                  <EyeClosed className="pointer-events-none text-2xl text-default-400" />
                )}
              </button>
            }
            name="password"
            placeholder="Enter your password"
            type={isVisible ? "text" : "password"}
            variant="bordered"
          />
        )}
      />
      <span className="no-flex flex-row py-0 text-sm text-red-500">
        {errors.password?.message}
      </span>

      <div className="flex items-center justify-between px-1 py-2">
        <Checkbox name="remember" size="sm">
          Remember me
        </Checkbox>
        <Link className="text-default-500" href="#">
          Forgot password?
        </Link>
      </div>
      <Button color="primary" type="submit">
        Log In
      </Button>
    </form>
  );
}
