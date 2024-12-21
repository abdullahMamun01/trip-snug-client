import FilterSidebar from "@/components/hotels/FilterSidebar";
import HotelList from "@/components/hotels/HotelList";
import DrawerComponent from "@/components/ui/drawer/DrawerComponent";
import getDateWithOffset from "@/lib/date";
import { fetchHotels } from "@/services/hotel.service";
import { Button } from "@nextui-org/button";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { redirect } from "next/navigation";

import { MdFilterList } from "react-icons/md";
type ISearchParams = {
  [key: string]: string;
};
export default async function HotelPage({
  searchParams,
}: {
  searchParams: ISearchParams;
}) {
  const queries = new URLSearchParams(searchParams).toString();
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["hotels", queries],
    queryFn: async () => await fetchHotels(queries),
  });

  // const chekIn = searchParams.checkIn as string;
  // const checkout = searchParams.checkOut as string;
  // if(!chekIn || !checkout) {
  //   redirect(`/hotels?checkIn=${getDateWithOffset()}&checkOut=${getDateWithOffset(1)}`)
  // }
  return (
    
    <div className="mx-auto flex max-w-7xl flex-col gap-6 bg-white p-6 md:flex-row">
      {/* Left Sidebar */}
      <div className="max-sm:hidden">
        <FilterSidebar />
      </div>

      <div className="md:hidden">
        <DrawerComponent
          title="Sort & Filter"
          drawerContent={<FilterSidebar />}
        >
          <span className="flex gap-2">
              <MdFilterList className="h-4 w-4" /> Sort & Filter
            </span>
        </DrawerComponent>
      </div>
      {/* Main Content */}

      <HydrationBoundary state={dehydrate(queryClient)}>
        <HotelList queries={queries} />
      </HydrationBoundary>
      {/* <HotelsCard /> */}
    </div>
  );
}
