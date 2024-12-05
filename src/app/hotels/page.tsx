"use client";

import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";
import {
  Heart,
  Search,
  ChevronLeft,
  ChevronRight,
  Waves,
  PenTool,
} from "lucide-react";
import Image from "next/image";
import HotelImage from "@/assests/popular-hotel.jpg";
import FilterSidebar from "@/components/hotels/FilterSidebar";
import HotelsCard from "@/components/hotels/HotelsCard";
import { Pagination } from "@nextui-org/pagination";
export default function HotelPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6 bg-white p-6 md:flex-row">
      {/* Left Sidebar */}
      <FilterSidebar />

      {/* Main Content */}
      <div>
        <HotelsCard />
        <div className="mt-10 w-full flex justify-center">
          <Pagination isCompact showControls total={20} initialPage={1} className="p-4" />
        </div>
      </div>
    </div>
  );
}
