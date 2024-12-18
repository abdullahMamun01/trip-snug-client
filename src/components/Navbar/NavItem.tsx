"use client";
import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Link from "next/link";
import React from "react";
import ToggleDark from "./ToggleDark";
import UserNav from "../user/UserNav";
import { User } from "lucide-react";
import useAuth from "@/stores/auth.store";

export default function NavItem() {
  const { token } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "About",
    "Hotels",
    "Restaurant",
    "Blog",
    "Shop",
    "Contact",
  ];
  const AcmeLogo = () => {
    return (
      <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
        <path
          clipRule="evenodd"
          d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    );
  };

  return (
    <Navbar
      maxWidth="full"
      className="w-full border-b bg-white py-2 dark:bg-boxdark-2 dark:text-bodydark md:px-20 dark:border-0"
      classNames={{
        wrapper: "px-8 gap-16",
      }}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand>
          <Link href="/">
            <p className="font-serif max-sm:text-md text-2xl font-bold uppercase">
              Trip-<span className="font-bold text-blue-500">Snug</span>{" "}
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="" justify="start">
        <NavbarBrand>
          <Link href="/">
            <p className="font-serif max-sm:text-md text-2xl font-bold uppercase">
              Trip-<span className="font-bold text-blue-500">Snug</span>{" "}
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="flex-start gap-8 max-sm:hidden"
        justify="center"
      >
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
                className="text-md rounded-md py-2 font-medium text-gray-700 hover:text-blue-600  dark:text-gray-300"
              >
                Login
              </Link>
              <span className="px-1.5 font-semibold text-red-400">/</span>
              <Link
                href="/register"
                className="text-md rounded-md py-2 font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300"
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
      <NavbarMenu className="mt-4 bg-white dark:bg-boxdark-2">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="text-md font-medium text-default-600 transition-colors hover:text-default-900"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <ToggleDark />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
