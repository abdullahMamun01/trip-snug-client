

import { AccountSidebar } from "@/components/Dashboard/account/AccountSidebar";
import React, { ReactNode } from "react";

export default function AccountPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="container mx-auto my-2 bg-gray-100 w-full">
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <AccountSidebar/>
        </div>
        <div className="col-span-9">{children}</div>
      </div>
    </div>
  );
}
