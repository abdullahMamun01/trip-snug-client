"use client";
import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import React from "react";
import ToggleDark from "./ToggleDark";
import UserNav from "../user/UserNav";
import { User } from "lucide-react";
import useAuth from "@/stores/auth.store";

export default function NavItem() {
  const { token } = useAuth();
  return (
    <Navbar
      maxWidth="full"
      className="w-full border-b bg-white py-2 dark:bg-boxdark-2 dark:text-bodydark md:px-20"
      classNames={{
        wrapper: "px-8 gap-16",
      }}
    >
      <NavbarBrand>
        <Link href="/">
          <p className="font-serif text-2xl font-bold">
            Trip-<span className="font-bold text-blue-500">Snug</span>{" "}
          </p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="gap-8" justify="center">
        {[
          "Home",
          "About",
          "Hotels",
          "Restaurant",
          "Blog",
          "Shop",
          "Contact",
        ].map((item) => (
          <NavbarItem key={item}>
            <Link
              className="text-md font-medium text-default-600 transition-colors hover:text-default-900"
              href={`/${item.toLowerCase()}`}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}

        <NavbarItem>
          <ToggleDark />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="gap-4">
        <NavbarItem>
          {token ? (
            <UserNav />
          ) : (
            <div>
              <User className="mr-1 inline h-5 w-5" />
              <Link
                href="/login"
                className="text-md rounded-md py-2 font-medium dark:text-gray-300 text-gray-700  hover:text-blue-600"
              >
                Login
              </Link>
              <span className="px-1.5 text-red-400 font-semibold">/</span>
              <Link
                href="/register"
                className="text-md rounded-md py-2 font-medium dark:text-gray-300 text-gray-700 hover:text-blue-600"
              >
                Register
              </Link>
            </div>
          )}
          {/* <Link href="/login">
            <User className="mr-1 inline h-5 w-5" />
            Login / Register
          </Link> */}
        </NavbarItem>
        <NavbarItem>
          <Button isIconOnly variant="light" radius="full"></Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
