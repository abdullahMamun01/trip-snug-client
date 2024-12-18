"use client";
import useDeletedHotel from "@/hooks/useDeletedHotel";
import { useHotelStore } from "@/stores/hotels/hotel.store";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import React from "react";
interface IProps {
  children: React.ReactNode;
}

export default function DeleteHotelDialog({ children }: IProps) {
  const { selectedHotelId } = useHotelStore();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { mutateAsync, isPending } = useDeletedHotel();
  const handleDelete = async () => {
    if (selectedHotelId) {
      await mutateAsync(selectedHotelId);
      onClose();
    }
  };
  return (
    <>
      <button onClick={onOpen}>{children}</button>
      <Modal
        backdrop="opaque"
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Delete Hotel
              </ModalHeader>
              <ModalBody className="text-red-500">
                Do you want to delete this Hotel? {selectedHotelId}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onClick={handleDelete}>
                  {isPending ? "deleting..." : "delete"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
