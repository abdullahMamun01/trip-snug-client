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
import { hotelUpdateValidationSchema, hotelValidateSchema } from "@/validations/hotel.validation";
import { IHotelBase, IHotelBase as IHotelFormData } from "@/types/hotel.types";
import useCreateHotel from "@/hooks/useCreateHotel";
import SubmitBtn from "@/components/form/SubmitBtn";
import { createHotelAction } from "@/actions/hotel.action";
import useAuth from "@/stores/auth.store";
import { useHotelStore } from "@/stores/hotels/hotel.store";
import useHotelUpdate from "@/hooks/useHotelUpdate";

const HotelManagePage = () => {
  const { mutateAsync: createHotel, isPending: isAddingHotel } =
    useCreateHotel();
  const { mutateAsync: updateHotel, isPending: isUpdatingHotel } =
    useHotelUpdate();
  const { selectedHotel } = useHotelStore();
  type HotelType = typeof selectedHotel extends null ? Partial<IHotelFormData> : IHotelFormData;
  const HotelSchema = selectedHotel ? hotelUpdateValidationSchema : hotelValidateSchema

  const form = useForm<HotelType>({
    resolver: zodResolver(HotelSchema),
    defaultValues: {
      title: selectedHotel?.title,
      description: selectedHotel?.description,
      location: {
        country: selectedHotel?.location.country,
        city: selectedHotel?.location.city,
        zipCode: selectedHotel?.location.zipCode,
        address: selectedHotel?.location.address,
        latitude: selectedHotel?.location.latitude,
        longitude: selectedHotel?.location.longitude,
      },
      contactInfo: selectedHotel?.contactInfo,
      pricePerNight: selectedHotel?.pricePerNight,
      availableRooms: selectedHotel?.availableRooms,
      amenities:   [selectedHotel?.amenities?.join(',')],
      tags: selectedHotel?.tags,
      currency: selectedHotel?.currency,
      policies: {
        checkIn: selectedHotel?.policies.checkIn,
        checkOut: selectedHotel?.policies.checkOut,
        cancellationPolicy: selectedHotel?.policies.cancellationPolicy,
      },
      classification: selectedHotel?.classification,
      totalRooms: selectedHotel?.totalRooms,
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = async (data: IHotelFormData) => {
    console.log(data);
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
    if (selectedHotel) {
      await updateHotel({payload:formData , hotelId:selectedHotel.id} )
    } else {
      await createHotel(formData);
    }
  };
  console.log(selectedHotel?.id)

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
              defaultText={selectedHotel ? 'update hotel' : 'create hotel'}
              isLoading={selectedHotel ? isUpdatingHotel : isAddingHotel}
              loadingText={selectedHotel ? 'update....' : 'creating...'}
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
