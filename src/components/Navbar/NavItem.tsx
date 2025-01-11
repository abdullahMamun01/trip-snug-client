"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,

} from "@nextui-org/navbar";
import Link from "next/link";
import React, { useRef } from "react";
import ToggleDark from "./ToggleDark";
import UserNav from "../user/UserNav";
import { User } from "lucide-react";
import useAuth from "@/stores/auth.store";

import LogoImage from "../LogoImage";
export default function NavItem() {
  const { token } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Hotels",
    "About",
    "Contact",
  ];
  const ref = useRef<any>();
  if (ref.current) console.log(ref);
  return (
    <Navbar
      maxWidth="full"
      className="w-full border-b bg-white dark:border-0 dark:bg-boxdark-2 dark:text-bodydark md:px-20 md:py-2"
      classNames={{
        wrapper: "px-8 gap-16",
      }}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <button
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        <NavbarBrand className="">
          <Link href="/">
            <LogoImage classNames=" object-cover w-34 h-34" />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="max-sm:hidden" justify="start">
        <NavbarBrand>
          <Link href="/">
            <LogoImage classNames="object-cover w-44 h-44" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="flex-start gap-8 max-sm:hidden"
        justify="center"
      >
        {menuItems.map((item) => (
          <NavbarItem key={item} >
            <Link
              className="text-md font-medium text-default-600 transition-colors hover:text-default-900"
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
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
      </NavbarContent>
      {/* <NavbarMenu className=" bg-white dark:bg-boxdark-2"  >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}`} >
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
      </NavbarMenu> */}

      {isMenuOpen && (
        <div className="absolute left-0 top-full w-full bg-white px-5 shadow-md dark:bg-gray-800 sm:hidden">
          <ul className="flex flex-col space-y-2 p-4">
            {menuItems.map((item) => (
              <li key={item}>
                <Link
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-md block font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300"
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <ToggleDark />
            </li>
          </ul>
        </div>
      )}
    </Navbar>
  );
}
