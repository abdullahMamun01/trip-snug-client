

import { AccountSidebar } from "@/components/Dashboard/account/AccountSidebar";
import DrawerComponent from "@/components/ui/drawer/DrawerComponent";
import React, { ReactNode } from "react";

import { RiMenuFold4Fill } from "react-icons/ri";
export default function AccountPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="md:container mx-auto my-2 dark:bg-[#1A222C] bg-gray-100 w-full">
      <div className="grid grid-cols-12 md:gap-4">
        <div className="col-span-3 max-sm:hidden">
          <AccountSidebar/>
        </div>
        <div className="col-span-12 px-5 md:hidden">
          <DrawerComponent title="Menu" drawerContent={<AccountSidebar/>}>
            <span className="flex gap-2">
            <RiMenuFold4Fill className="h-6 w-6" />
            </span>
          </DrawerComponent>
        </div>
        <div className="col-span-12 md:col-span-9">{children}</div>
      </div>
    </div>
  );
}
