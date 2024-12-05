
import AccountSidbar from "@/components/Dashboard/account/AccountSidbar";
import React, { ReactNode } from "react";

export default function AccountPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="container mx-auto my-2">
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <AccountSidbar />
        </div>
        <div className="col-span-9">{children}</div>
      </div>
    </div>
  );
}
