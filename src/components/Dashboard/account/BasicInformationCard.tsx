"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Edit2 } from "lucide-react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import ProfileForm from "@/components/form/auth/ProfileForm";

export default function BasicInformationCard() {
  const { isOpen, onOpenChange,onOpen,onClose } = useDisclosure();
  return (
    <Card className="rounded-sm p-3 shadow-sm">
      <CardHeader className="flex justify-between">
        <h2 className="text-xl font-semibold text-blue-800">
          Basic information
        </h2>
        <Button
          size="sm"
          variant="light"
          color="primary"
          startContent={<Edit2 className="h-4 w-4" />}
          onPress={onOpen}
        >
          Edit
        </Button>
      </CardHeader>
      {/* edit profile modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent >
          {(onclose) => (
            <ModalBody >
              <ModalHeader className="flex flex-col gap-1">Edit Basic Information</ModalHeader>
              <ProfileForm  onClose={onClose}/>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
      <CardBody className="space-y-4">
        <p className="text-sm text-default-500">
          Make sure this information matches your travel ID, like your passport
          or license.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="font-medium text-blue-600">Name</h3>
            <p className="text-default-500">Md Abdullah Mamun</p>
          </div>
          <div></div>
          <div>
            <h3 className="font-medium text-blue-600">Date of birth</h3>
            <p className="text-default-500">Not provided</p>
          </div>
          <div>
            <h3 className="font-medium text-blue-600">Gender</h3>
            <p className="text-default-500">Not provided</p>
          </div>
          <div>
            <h3 className="font-medium text-blue-600">Address</h3>
            <p className="text-default-500">Not provided</p>
          </div>
          <div>
            <h3 className="font-medium text-blue-600">Currency</h3>
            <p className="text-default-500">Not provided</p>
          </div>
          <div>
            <h3 className="font-medium text-blue-600">City</h3>
            <p className="text-default-500">Not provided</p>
          </div>
          <div>
            <h3 className="font-medium text-blue-600">Country</h3>
            <p className="text-default-500">Not provided</p>
          </div>
          <div>
            <h3 className="font-medium text-blue-600">Phone</h3>
            <p className="text-default-500">Not provided</p>
          </div>
        </div>
      </CardBody>
      {/* <div className="space-y-6 px-3 py-2">
        <div className="grid gap-6">
          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <div className="font-medium">Name</div>
              <div className="text-gray-600">John Doe</div>
            </div>
            <Button variant="ghost" className="text-blue-600">
              Edit
            </Button>
          </div>

          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <div className="font-medium">Display name</div>
              <div className="text-gray-600">Choose a display name</div>
            </div>
            <Button variant="ghost" className="text-blue-600">
              Edit
            </Button>
          </div>

          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <div className="font-medium">Email address</div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">example@email.com</span>
                <Badge className="border-green-200 bg-green-50 text-green-700">
                  Verified
                </Badge>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                This is the email address you use to sign in. It's also where we
                send your booking confirmations.
              </p>
            </div>
            <Button variant="ghost" className="text-blue-600">
              Edit
            </Button>
          </div>

          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <div className="font-medium">Phone number</div>
              <div className="text-gray-600">Add your phone number</div>
              <p className="mt-1 text-sm text-gray-500">
                Properties or attractions you book will use this number if they
                need to contact you.
              </p>
            </div>
            <Button variant="ghost" className="text-blue-600">
              Edit
            </Button>
          </div>

          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <div className="font-medium">Date of birth</div>
              <div className="text-gray-600">Enter your date of birth</div>
            </div>
            <Button variant="ghost" className="text-blue-600">
              Edit
            </Button>
          </div>

          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <div className="font-medium">Nationality</div>
              <div className="text-gray-600">
                Select the country/region you're from
              </div>
            </div>
            <Button variant="ghost" className="text-blue-600">
              Edit
            </Button>
          </div>

          <div className="flex items-center justify-between pb-4">
            <div>
              <div className="font-medium">Gender</div>
              <div className="text-gray-600">Select your gender</div>
            </div>
            <Button variant="ghost" className="text-blue-600">
              Edit
            </Button>
          </div>
        </div>
      </div> */}
    </Card>
  );
}
