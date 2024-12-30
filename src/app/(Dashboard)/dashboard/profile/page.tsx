"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

import useAuth from "@/stores/auth.store";
import { Avatar } from "@nextui-org/avatar";
import { Building, Camera, Globe, Mail, MapPin, Phone } from "lucide-react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";
import ProfileForm from "@/components/form/auth/ProfileForm";
import { Button } from "@nextui-org/button";
import { updateProfileImage } from "@/services/user.service";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { catchError } from "@/lib/catchError";
import { Spinner } from "@nextui-org/spinner";
import ProfileCard from "@/components/Dashboard/account/ProfileCard";
import { use } from "react";
const Profile = () => {
  const { user, token, login } = useAuth();
  const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure();
  const img =
    user?.image ||
    `https://ui-avatars.com/api/?name=${user?.firstName.slice(0, 1)}&background=random&size=100` ||
    "";
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (payload: FormData) =>
      updateProfileImage(payload, token as string),
    onSuccess: (data) => {
      toast.success("profile image update success", { position: "top-right" });
    },
    onError: (error) => {
      catchError(error);
    },
  });
  const handleImageChange = async (e: any) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    try {
      const { data } = await mutateAsync(formData);
      login({ user: data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DefaultLayout>
      <div className="max-w-242 mx-auto">
        <Breadcrumb pageName="Profile" />

        {isPending && (
          <div className="mx-a fixed inset-0 z-50 grid h-full w-full place-items-center bg-gray-500 bg-opacity-50">
            <Spinner />
          </div>
        )}
        <div className="relative mx-auto max-w-7xl p-4 sm:p-6 md:p-8">
          <div className="overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>
            <div className="px-4 pb-8 sm:px-6 md:px-8">
              <div className="relative flex flex-col items-center justify-between md:flex-row">
                <div className="relative -top-16 drop-shadow-2">
                  <Avatar
                    src={img}
                    size="lg"
                    className="h-24 w-24 rounded-full object-cover sm:h-32 sm:w-32"
                  />
                  <label
                    htmlFor="profile"
                    className="absolute bottom-0 right-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2"
                  >
                    <Camera />
                    <input
                      onChange={handleImageChange}
                      type="file"
                      name="profile"
                      id="profile"
                      className="sr-only"
                    />
                  </label>
                </div>
                <div className="md:mt-4 text-center md:ml-8 md:text-left">
                  <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    {user?.firstName} {user?.lastName}
                  </h1>
                </div>
                <button
                  onClick={onOpen}
                  className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 md:mt-0"
                >
                  Edit Profile
                </button>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-gray-900">{user?.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-gray-900">{user?.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Country</p>
                      <p className="text-gray-900">{user?.country}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Building className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">City</p>
                      <p className="text-gray-900">{user?.city}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="text-gray-900">{user?.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                  {(onClose) => (
                    <ModalBody>
                      <ModalHeader className="flex flex-col gap-1">
                        Edit Basic Information
                      </ModalHeader>
                      <ProfileForm onClose={onClose} />
                    </ModalBody>
                  )}
                </ModalContent>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Profile;
