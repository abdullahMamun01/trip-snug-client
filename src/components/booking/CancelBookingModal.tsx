"use client";

import useCancelBookings from "@/hooks/useCancelBookings";
import useBookingStore from "@/stores/booking.store";
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
import { MdCancel } from "react-icons/md";
interface IProps {
  bookingId: string;
}

export default function CancelBookingModal({ bookingId }: IProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const {mutateAsync ,isPending} = useCancelBookings()
  const handleCancelBookings = async () => {
    if (bookingId) {
      await mutateAsync(bookingId);
      onClose();
    }
  };
  return (
    <>
      <Button onClick={onOpen} size="sm" color="primary" variant="flat">
        <MdCancel className="h-3 w-3" />
        cancel
      </Button>
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
                Cancel Booking
              </ModalHeader>
              <ModalBody className="text-red-500">
                Do you want to cancel this Booking? {bookingId}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onClick={handleCancelBookings}>
                  {isPending ? "cancelling..." : "cancel"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
