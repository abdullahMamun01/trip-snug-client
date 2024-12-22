import HotelSearchForm from "@/components/form/HotelSearchForm";
import QueryValidator from "@/components/QueryValidator";
import React, { ReactNode } from "react";

export default function HotelLayout({ children }: { children: ReactNode }) {
  return (
    <QueryValidator>
      <div className="min-h-screen">
        {/* sticky top-0 z-50 */}
        <div className="my-6 flex w-full flex-col items-center justify-center">
          <HotelSearchForm />
        </div>
        <div>{children}</div>
      </div>
    </QueryValidator>
  );
}
