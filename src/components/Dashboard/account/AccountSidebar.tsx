"use client";
import React, { useEffect } from "react";

import {
  UserCircle,
  CreditCard,
  CalendarDays,
  Globe,
  Users,
  Settings,
  Lock,
  Book,
} from "lucide-react";

import Link from "next/link";

import { Card } from "@nextui-org/card";
import { usePathname, useRouter } from "next/navigation";

export function AccountSidebar() {
  const pathname = usePathname();

  const getIcon = (icon: string) => {
    switch (icon) {
      case "user":
        return <UserCircle size={20} />;
      case "credit-card":
        return <CreditCard size={20} />;
      case "calendar":
        return <CalendarDays size={20} />;
      default:
        return null;
    }
  };

  return (
    <nav className="space-y-2">
      <Card className="p-4">
        {[
          {
            href: "/account",
            icon: <Users />,
            label: "Personal details",
          },
          {
            href: "/account/bookings",
            icon: <Book />,
            label: "My Bookings",
          },
          {
            href: "/account/payments",
            icon: <CreditCard />,
            label: "Payments",
          },
        ].map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={{
                pathname: item.href,
              }}
              prefetch={true}
              className={`flex items-center gap-3 ${
                isActive
                  ? "bg-blue-50 font-medium text-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              } rounded-lg p-2`}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </Card>
    </nav>
  );
}
