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
      <div className="mx-auto max-w-242.5">
        <Breadcrumb pageName="Profile" />

        <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          {isPending && (
            <div className="mx-a fixed inset-0 z-50 grid h-full w-full place-items-center bg-gray-500 bg-opacity-50">
              <Spinner />
            </div>
          )}
          <div className="relative z-20 h-35 md:h-65">
            <div className="absolute bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4">
              <label
                htmlFor="cover"
                className="flex cursor-pointer items-center justify-center gap-2 rounded bg-primary px-2 py-1 text-sm font-medium text-white hover:bg-opacity-80 xsm:px-4"
              >
                <input
                  type="file"
                  name="cover"
                  id="cover"
                  className="sr-only"
                />
                <span>
                  <svg
                    className="fill-current"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.99992 5.83329C6.03342 5.83329 5.24992 6.61679 5.24992 7.58329C5.24992 8.54979 6.03342 9.33329 6.99992 9.33329C7.96642 9.33329 8.74992 8.54979 8.74992 7.58329C8.74992 6.61679 7.96642 5.83329 6.99992 5.83329ZM4.08325 7.58329C4.08325 5.97246 5.38909 4.66663 6.99992 4.66663C8.61075 4.66663 9.91659 5.97246 9.91659 7.58329C9.91659 9.19412 8.61075 10.5 6.99992 10.5C5.38909 10.5 4.08325 9.19412 4.08325 7.58329Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span>Edit</span>
              </label>
            </div>
          </div>
          <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
            <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
              <div className="relative drop-shadow-2">
                <Avatar
                  src={img}
                  size="lg"
                  className="h-full w-full rounded-full object-cover"
                />
                <label
                  htmlFor="profile"
                  className="absolute bottom-0 right-0 flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2"
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
            </div>
            <div className="mt-4">
              <div className="mt-4 space-y-4">
                <h3 className="text-2xl font-semibold text-black dark:text-white">
                  {user?.firstName} {user?.lastName}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {user?.email}
                </p>
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-black dark:text-white">
                      Role:
                    </span>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                      {user?.role}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-black dark:text-white">
                      {user?.phone && "Phone:"}
                    </span>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                      {user?.phone}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-black dark:text-white">
                      {user?.country && "Country:"}
                    </span>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                      {user?.country}
                    </span>
                  </div>
                </div>
                <Button
                  onPress={onOpen}
                  className="mt-4 inline-block rounded bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80"
                >
                  Edit Profile
                </Button>
              </div>
             
              <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                  {(onclose) => (
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
