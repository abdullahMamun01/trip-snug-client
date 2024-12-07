import HotelSearchForm from "@/components/form/HotelSearchForm";
import React, { ReactNode } from "react";

export default function HotelLayout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      {/* sticky top-0 z-50 */}
      <div className="my-6 flex w-full flex-col items-center justify-center">
        <HotelSearchForm />
      </div>
      {children}
    </div>
  );
}
