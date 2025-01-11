"use client";
import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { Heart, Star, MapPin } from "lucide-react";

import { Button } from "@nextui-org/button";

const hotels = [
  {
    id: 1,
    name: "Grand Plaza Resort",
    location: "Maldives",
    rating: 4.8,
    price: "$450",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    id: 2,
    name: "Mountain View Lodge",
    location: "Switzerland",
    rating: 4.9,
    price: "$380",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    id: 3,
    name: "Seaside Paradise Hotel",
    location: "Bali",
    rating: 4.7,
    price: "$320",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    id: 4,
    name: "Urban Luxury Suites",
    location: "Dubai",
    rating: 5.0,
    price: "$580",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=150&h=150",
  },
];

export default function FavoriteHotels() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id],
    );
  };

  const columns = [
    { name: "HOTEL", uid: "hotel" },
    { name: "LOCATION", uid: "location" },
    { name: "RATING", uid: "rating" },
    { name: "PRICE/NIGHT", uid: "price" },
    { name: "ACTIONS", uid: "actions" },
  ];

  return (
    <div className="w-full px-6 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Favorite Hotels</h1>
        <p className="text-gray-600">Discover and book your perfect stay</p>
      </div>
      <Table aria-label="Hotel list table" className="shadow-lg">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={hotels}>
          {(item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.location}</TableCell>
              <TableCell>{item.rating}</TableCell>
              <TableCell>{item.price}</TableCell>

              <TableCell className="flex gap-2 items-center">
                <Button isIconOnly size="sm" variant="light">
                  <Heart size={20} className={" text-red-500"} />
                </Button>

                <Button size="sm" color="primary">
                  Book Now
                </Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
