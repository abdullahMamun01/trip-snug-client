import React from "react";
import FormInput from "../FormInput";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@nextui-org/button";
import { TProfile } from "@/types/user.type";
import useAuth from "@/stores/auth.store";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/high-res.css";
import SubmitBtn from "../SubmitBtn";
import useProfileMutation from "@/hooks/useProfileMutaiton";

interface IPorps {
  onClose: () => void;
}
export default function ProfileForm({ onClose }: IPorps) {
  const { user } = useAuth();
  const { control, handleSubmit , register } = useForm<TProfile>({
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      address: user?.address,
      country: user?.country,
      city: user?.city,
      dateOfBirth: user?.dateOfBirth,
      currency: user?.currency,
      phone: user?.phone || "",
    },
  });
  const {isPending ,mutateAsync} = useProfileMutation()
  const onSubmit = async (formData: TProfile) => {
    const updateFormData: Record<string, any> = {};

    for (const [key, value] of Object.entries(formData)) {
      if (value) {
        updateFormData[key] = value;
      }
    }
    console.log(updateFormData)
    await mutateAsync(updateFormData)
    onClose()
  };
  return (
    <>
      <form className="py-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <FormInput
            control={control}
            label="First Name"
            name="firstName"
            placeholder="Enter your full name"
            labelPlacement="inside"
            variant="faded"
          />
          <FormInput
            control={control}
            label="Last Name"
            name="lastName"
            placeholder="Enter your full name"
            labelPlacement="inside"
            variant="faded"
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormInput
              label="Date of Birth"
              name="dateOfBirth"
              placeholder="YYYY-MM-DD"
              type="date"
              control={control}
              labelPlacement="inside"
              variant="faded"
            />
            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <select
                id="gender"
                {...register('gender')}
                className="mt-1 block w-full rounded-md border-gray-300 bg-sky-50 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
        <div className="my-2">
          <FormInput
            label="Address"
            name="address"
            placeholder="Enter your address"
            labelPlacement="inside"
            variant="faded"
            control={control}
          />
        </div>
        <div className="my-2 grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormInput
            control={control}
            label="City"
            name="city"
            placeholder="Enter your city"
            labelPlacement="inside"
            variant="faded"
          />
          <FormInput
            control={control}
            label="Country"
            name="country"
            placeholder="Enter your country"
            labelPlacement="inside"
            variant="faded"
          />
        </div>
        <div className="my-2 grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* <FormInput
            control={control}
            label="Phone"
            name="phone"
            placeholder="Enter your phone number"
            labelPlacement="inside"
            variant="faded"
          /> */}

          <div className="col-span-1">
            <label htmlFor="" className="text-sm font-semibold text-gray-500">
              Phone
            </label>

            <Controller
              name="phone"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  country={"us"}
                  inputClass="bg-green-100 mt-3"
                  onChange={field.onChange}
                  inputStyle={{
                    width: "100%",
                    backgroundColor: "#f0f9ff",
                  }}
                />
              )}
            />
          </div>
          <div className="col-span-1">
            <label
              htmlFor="currency"
              className="block text-sm font-medium text-gray-700"
            >
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              className="mt-1 block w-full rounded-md border-gray-300 bg-sky-50 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option value="">Select preferred currency</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>
        <SubmitBtn isLoading={isPending} defaultText="update profile" loadingText="updateing..." className="w-full my-4"  />
      </form>
    </>
  );
}
