import LoginForm from "@/components/form/auth/LoginForm";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import Link from "next/link";
import React from "react";
import { FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full">
      <div
        className="flex h-full w-full items-center justify-center "
        style={{
          backgroundImage: `url('https://arasari.studio/wp-content/projects/forny/templates/img/bg-03-02.svg') ,
        url('https://arasari.studio/wp-content/projects/forny/templates/img/bg-03-01.svg')`,
          backgroundSize: "content , content", // Adjusts the image to cover the entire element
          backgroundPosition: "center , center", // Centers the image
          backgroundRepeat: "no-repeat , no-repeat", // Ensures the image doesn't repeat
        }}
      >
        <div className="flex w-full max-w-md flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small py-20">
          <h1 className="text-2xl text-center font-bold">Trip-<span className="text-blue-700">Snug</span></h1>
          <p className="pb-2 text-center text-xl font-bold text-gray-800">
            Log In into your account
          </p>
          <p className="text-gray-400 mb-4">
            Use your credentials to access your account.
          </p>
          <LoginForm />
          <div className="flex items-center gap-4 py-2">
            <Divider className="flex-1" />
            <p className="shrink-0 text-tiny text-default-500">OR</p>
            <Divider className="flex-1" />
          </div>
          <div className="flex flex-col gap-2">
            <Button startContent={<FaGoogle className="text-blue-600"/>} variant="bordered">
              Continue with Google
            </Button>
          </div>
          <p className="text-center text-small">
            Need to create an account?&nbsp;
            <Link href="/register">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
