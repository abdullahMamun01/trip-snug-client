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

export default function NavItem() {
  return (
    <Navbar
      maxWidth="full"
      className="dark:bg-boxdark-2 dark:text-bodydark w-full border-b bg-white py-2 md:px-20"
      classNames={{
        wrapper: "px-8 gap-16",
      }}
    >
      <NavbarBrand>
        <Link href='/'><p className="font-serif text-2xl font-bold">Trip-<span className="text-blue-500 font-bold">Snug</span> </p></Link>
      </NavbarBrand>
      <NavbarContent className="gap-8" justify="center">
        {[
          "Home",
          "About",
          "Rooms",
          "Restaurant",
          "Blog",
          "Shop",
          "Contact",
        ].map((item) => (
          <NavbarItem key={item}>
            <Link
              className="text-md font-medium text-default-600 transition-colors hover:text-default-900"
              href="#"
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
          {/* <Button
            radius="full"
            className="bg-[#4F46E5] px-8 text-sm font-normal text-white"
          >
            Book now
          </Button> */}
          <UserNav/>
        </NavbarItem>
        <NavbarItem>
          <Button isIconOnly variant="light" radius="full"></Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
