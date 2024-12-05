import React, { ReactNode, HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className = "",
  ...props
}: BadgeProps) {
  return (
    <span
      className={`rounded-lg px-2 py-0.5 text-sm font-medium  ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
