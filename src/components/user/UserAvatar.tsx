import { Avatar } from "@nextui-org/avatar";
import React from "react";

interface IProps {
  image: string | null | undefined;
  firstName: string;
}
export default function UserAvatar({ firstName, image }: IProps) {
  const img =
    image ||
    `https://ui-avatars.com/api/?name=${firstName.slice(0, 1)}&background=random&size=100`;
  return (
    <Avatar name={firstName} src={img} className="bg-blue-600 text-white" size="sm" />
  );
}
