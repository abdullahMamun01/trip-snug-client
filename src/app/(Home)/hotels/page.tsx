import FilterSidebar from "@/components/hotels/FilterSidebar";
import HotelList from "@/components/hotels/HotelList";
import HotelsCard from "@/components/hotels/HotelsCard";
import { fetchHotels } from "@/services/hotel.service";

import { Pagination } from "@nextui-org/pagination";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
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
    queryKey: ["hotels" , queries],
    queryFn: async () => await fetchHotels(queries),
  });

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6 bg-white p-6 md:flex-row">
      {/* Left Sidebar */}
      <FilterSidebar />
      {/* Main Content */}

        <HydrationBoundary state={dehydrate(queryClient)}>
          <HotelList queries={queries}/>
        </HydrationBoundary>
        {/* <HotelsCard /> */}
        

    </div>
  );
}
