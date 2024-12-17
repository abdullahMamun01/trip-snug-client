"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { Button } from "@nextui-org/button";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Card } from "@nextui-org/card";
import ImageUploadForm from "@/components/form/ImageUploadInput";
import { hotelValidateSchema } from "@/validations/hotel.validation";
import { IHotelBase as IHotelFormData } from "@/types/hotel.types";
import useCreateHotel from "@/hooks/useCreateHotel";
import SubmitBtn from "@/components/form/SubmitBtn";
import { createHotelAction } from "@/actions/hotel.action";
import useAuth from "@/stores/auth.store";

const HotelManagePage = () => {
  const { mutateAsync, isPending } = useCreateHotel();
  const { token } = useAuth();
  const form = useForm<IHotelFormData>({
    resolver: zodResolver(hotelValidateSchema),
    defaultValues: {
      title: "Grand Ocean Resort",
      description:
        "A luxurious beachfront resort offering stunning ocean views, world-class amenities, and unparalleled service.",
      location: {
        country: "Thailand",
        city: "Phuket",
        zipCode: "83150",
        address: "123 Beachfront Ave, Patong Beach",
        latitude: 7.8804,
        longitude: 98.2955,
      },
      contactInfo: "+66 76 123 456",
      pricePerNight: 350,
      availableRooms: 20,
      amenities: ["Free WiFi"],
      tags: ["Beachfront", "Luxury"],
      currency: "USD",
      policies: {
        checkIn: "2:00 PM",
        checkOut: "12:00 PM",
        cancellationPolicy: "Free cancellation up to 48 hours before check-in.",
      },
      classification: "5-Star",
      totalRooms: 100,
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = async (data: IHotelFormData) => {
    console.log(data)
    const formData = new FormData();

    // Append primitive fields
    Object.entries(data).forEach(([key, value]) => {
      if (key === "images" && Array.isArray(value)) {
        value.forEach((image, index) => {
          if (image.file) {
            formData.append(`images-${index}`, image.file);
          }
        });
      } else if (key === "location" || key === "policies") {
        formData.append(key, JSON.stringify(value));
      } else if (key === "amenities" || key === "tags") {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, value);
      }
    });
    await mutateAsync(formData);
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Hotel Manage" />
      <Card className="p-6">
        <FormProvider {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Input
                  labelPlacement="outside"
                  label="Title"
                  placeholder="Enter hotel name"
                  {...register("title", { required: true })}
                />
                {errors.title && <span>{errors.title.message}</span>}
              </div>
              <div className="col-span-2">
                <Textarea
                  label="Description"
                  {...register("description")}
                  labelPlacement="outside"
                  placeholder="enter you hotel description"
                  required
                />
              </div>

              <div className="col-span-2">
                <ImageUploadForm />
              </div>
              <div className="col-span-1">
                <Input
                  label="Country"
                  labelPlacement="outside"
                  {...register("location.country")}
                  placeholder="enter country name"
                />
              </div>
              <div className="col-span-1">
                <Input
                  label="City"
                  {...register("location.city")}
                  required
                  placeholder="enter city"
                  labelPlacement="outside"
                />
              </div>
              <div className="col-span-1">
                <Input
                  label="Zip Code"
                  placeholder="enter hotel area zipcode"
                  labelPlacement="outside"
                  {...register("location.zipCode")}
                />
              </div>

              <div className="col-span-1">
                <Input
                  label="Address"
                  {...register("location.address")}
                  placeholder="enter hotel address"
                  labelPlacement="outside"
                />
              </div>

              <div className="con-span-1">
                <Input
                  label="Latitude"
                  type="number"
                  placeholder="enter lattitude code"
                  labelPlacement="outside"
                  {...register("location.latitude", { valueAsNumber: true })}
                />
              </div>
              <div className="col-span-1">
                <Input
                  label="Longitude"
                  type="number"
                  labelPlacement="outside"
                  placeholder="enter lognitude"
                  {...register("location.longitude", { valueAsNumber: true })}
                />
              </div>
              <div className="col-span-1">
                <Input
                  label="Contact Info"
                  {...register("contactInfo")}
                  placeholder="enter hotel contact info"
                  labelPlacement="outside"
                  // required
                />
              </div>
              <div className="col-span-1">
                {/* Price Per Night */}
                <Input
                  label="Price Per Night"
                  type="number"
                  {...register("pricePerNight", { valueAsNumber: true })}
                  placeholder="etner hotel starting price per night"
                  labelPlacement="outside"
                  required
                />
              </div>
              <div className="col-span-1">
                <Input
                  label="Total Rooms"
                  type="number"
                  {...register("totalRooms", { valueAsNumber: true })}
                  placeholder="enter amount of room available"
                  labelPlacement="outside"
                  required
                />
              </div>
              <div className="col-span-1">
                <Input
                  label="Available Rooms"
                  type="number"
                  {...register("availableRooms", { valueAsNumber: true })}
                  placeholder="enter amount of room available"
                  labelPlacement="outside"
                  required
                />
              </div>
              <div className="col-span-1">
                <Input
                  label="Tags"
                  {...register("tags")}
                  placeholder="hotel tags"
                  labelPlacement="outside"
                />
              </div>
              <div className="col-span-1">
                <Textarea
                  label="Amenities (comma-separated)"
                  {...register("amenities")}
                  placeholder="e.g., Free WiFi, Pool, Gym"
                />
              </div>
              <div className="col-span-1">
                <Select
                  {...register("classification")}
                  label="Classification"
                  labelPlacement="outside"
                  placeholder="classification"
                >
                  {[
                    "1-star",
                    "2-star",
                    "3-star",
                    "4-star",
                    "5-star",
                    "Luxury",
                    "Budget",
                    "Resort",
                    "Boutique",
                    "Business",
                    "Family-friendly",
                  ].map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className="col-span-1">
                <Select
                  label="Currency"
                  {...register("currency")}
                  labelPlacement="outside"
                  placeholder="currency"
                >
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                  <SelectItem value="BDT">BDT</SelectItem>
                </Select>
              </div>
              {/* <div className="col-span-1">
                <Input
                  label="Discount"
                  {...register("discount")}
                  placeholder="Check-In Time"
                  labelPlacement="outside"
                />
              </div> */}
              <div className="col-span-1">
                <Input
                  label="Check-In Time"
                  {...register("policies.checkIn")}
                  placeholder="Check-In Time"
                  labelPlacement="outside"
                />
              </div>
              <div className="col-span-1">
                <Input
                  label="Check-Out Time"
                  {...register("policies.checkOut")}
                  placeholder="Check-Out Time"
                  labelPlacement="outside"
                />
              </div>
              <div className="col-span-2">
                <Textarea
                  label="Cancellation Policy"
                  {...register("policies.cancellationPolicy")}
                  placeholder="enter cencelation policies"
                  labelPlacement="outside"
                  required
                />
              </div>
            </div>

            <SubmitBtn
              className="my-2 w-full bg-blue-600 uppercase text-white"
              defaultText="Create Hotel"
              isLoading={isPending}
              loadingText="creating..."
            />
          </form>
        </FormProvider>
      </Card>
    </DefaultLayout>
  );
};

export default HotelManagePage;
/* 






*/
