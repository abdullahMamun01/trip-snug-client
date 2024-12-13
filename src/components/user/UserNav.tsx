"use client";

import { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import { Avatar } from "@nextui-org/avatar";

import {
  User,
  Calendar,
  Award,
  Wallet,
  Star,
  Bookmark,
  LogOut,
} from "lucide-react";
import { Button } from "@nextui-org/button";
import useAuth from "@/stores/auth.store";
import { logoutAction } from "@/actions/auth.action";
import Link from "next/link";

export default function UserNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { token, user, logout } = useAuth();
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const img =
    user?.image ||
    `https://ui-avatars.com/api/?name=${user?.firstName.slice(0, 1)}&background=random&size=100` ||
    "";

  const handleLogout = async () => {
    await logoutAction();
    logout();
  };

  return (
    <div className="relative">
      <Popover
        isOpen={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
        placement="bottom-end"
      >
        <PopoverTrigger>
          <Button
            className="h-12 min-w-[auto] bg-gray-100 px-2"
            variant="light"
            radius="full"
          >
            <Avatar
              name="M"
              src={img}
              className="bg-blue-600 text-white"
              size="sm"
            />
            <div className="ml-2 flex flex-col items-start text-left">
              <span className="text-sm font-medium">
                {user?.firstName.toUpperCase()} {user?.lastName.toUpperCase()}
              </span>
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex w-56 flex-col px-1 py-2">
            <Link href="/account">
              <Button
                variant="light"
                className="flex h-12 items-center justify-start gap-3 rounded-none px-4  hover:bg-gray-100"
                startContent={<User className="h-4 w-4" />}
              >
                My account
              </Button>
            </Link>
            <Button
              variant="light"
              className="flex h-12 items-center justify-start gap-3 rounded-none px-4 hover:bg-gray-100"
              startContent={<Calendar className="h-4 w-4" />}
            >
              Bookings & Trips
            </Button>

            <Button
              variant="light"
              className="flex h-12 items-center justify-start gap-3 rounded-none px-4 hover:bg-gray-100"
              startContent={<Star className="h-4 w-4" />}
            >
              Reviews
            </Button>
            <Button
              variant="light"
              className="flex h-12 items-center justify-start gap-3 rounded-none px-4 hover:bg-gray-100"
              startContent={<Bookmark className="h-4 w-4" />}
            >
              Saved
            </Button>
            <hr className="my-2" />
            <Button
              variant="light"
              className="flex h-12 items-center justify-start gap-3 rounded-none px-4 text-red-500 hover:bg-gray-100"
              startContent={<LogOut className="h-4 w-4" />}
              onClick={handleLogout}
            >
              Sign out
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
