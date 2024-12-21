'use client'
import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,

} from "@nextui-org/drawer";
import { useDisclosure } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";

interface ReusableDrawerProps {
  placement?: "left" | "right" | "top" | "bottom";
  title: string;
  children: React.ReactNode;
  drawerContent?: React.ReactNode | any; // Accepts JSX, strings, numbers, null, etc.
}
export default function DrawerComponent({
  children,
  drawerContent,
  title,
  placement = "left",
}: ReusableDrawerProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [drawerPlacement, setDrawerPlacement] = React.useState(placement);

  return (
    <>
      <Button onPress={onOpen} className="hidden max-sm:block" color="primary">
        {children}
      </Button>
      <Drawer
         isOpen={isOpen}
        placement={drawerPlacement}
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          <DrawerHeader className="flex flex-col gap-1">{title}</DrawerHeader>
          <DrawerBody>{drawerContent}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
