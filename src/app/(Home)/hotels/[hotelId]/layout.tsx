import HotelSearchForm from "@/components/form/HotelSearchForm";
import QueryValidator from "@/components/QueryValidator";
import React, { ReactNode } from "react";

export default function HotelDetailsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <QueryValidator>
      <div className="shadow-b-md w-full border-b bg-white py-1 md:py-4">
        {children}
      </div>
    </QueryValidator>
  );
}
