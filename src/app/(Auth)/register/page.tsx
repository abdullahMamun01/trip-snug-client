
import RegisterForm from "@/components/form/auth/RegisterForm";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import Link from "next/link";
import React from "react";
import { FaGoogle } from "react-icons/fa";

export default function RegisterPage() {
  return (
    <div className="min-h-screen w-full">

      <div
        className="flex h-full w-full items-center justify-center overflow-y-visible"
        style={{
          backgroundImage: `url('https://arasari.studio/wp-content/projects/forny/templates/img/bg-03-02.svg') ,
        url('https://arasari.studio/wp-content/projects/forny/templates/img/bg-03-01.svg')`,
          backgroundSize: "content , content", // Adjusts the image to cover the entire element
          backgroundPosition: "center , center", // Centers the image
          backgroundRepeat: "no-repeat , no-repeat", // Ensures the image doesn't repeat
        }}
      >
        <div className="flex w-full max-w-lg flex-col gap-4 rounded-large px-8 pb-10 pt-6 shadow-md mt-5 bg-white ">
          <h1 className="text-2xl text-center font-bold">Trip-<span className="text-blue-700">Snug</span></h1>
          <p className="text-center text-xl font-bold text-gray-800">
            Create an account
          </p>
        
          {/* register form */}
          <RegisterForm />
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
            <Link href="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
