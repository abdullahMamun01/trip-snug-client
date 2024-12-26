"use client";

import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";

import { Eye, EyeClosed, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import FormInput from "../FormInput";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@nextui-org/input";
import { TLoginType } from "@/types/auth.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "@/validations/auth.validation";
import { useRouter } from "next/navigation";
import { Spinner } from "@nextui-org/spinner";
import useLoginMutation from "@/hooks/useLoginMutation";
import { RiAdminFill } from "react-icons/ri";

export default function LoginForm() {
  const [isVisible, setIsVisible] = React.useState(false);
  const { mutateAsync, isPending } = useLoginMutation();


  const {
    control,
    formState: { errors },
    setValue ,
    handleSubmit,
  } = useForm<TLoginType>({
    resolver: zodResolver(loginValidationSchema),
  });
  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = async (formData: TLoginType) => {
    await mutateAsync(formData);
  };

  const handleCredential = (user: "admin" | "user") => {
    if (user === "admin") {
      setValue('email' , "admin@gmail.com")
      setValue("password" , "admin123")
    } else if (user === "user") {
      setValue('email' , "user1@gmail.com")
      setValue("password" , "abcd1234")
    }
  };


  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="dark:bg-boxdark-700 flex justify-center gap-2 dark:text-white">
        <button
          onClick={() => handleCredential("admin")}
          type="button"
          className="flex items-center gap-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none dark:bg-blue-700 dark:hover:bg-blue-800"
        >
          <RiAdminFill /> Admin
        </button>
        <button
          onClick={() => handleCredential("user")}
          type="button"
          className="flex items-center gap-2 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600 focus:outline-none dark:bg-green-700 dark:hover:bg-green-800"
        >
          <User className="h-4 w-4" /> User
        </button>
      </div>
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
        {isPending ? (
          <>
            <Spinner color="default" size="sm" /> <span>Login...</span>
          </>
        ) : (
          <span>Login</span>
        )}
      </Button>
    </form>
  );
}
