'use client'
import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";
import React, { ReactNode } from "react";

interface LoadingButtonProps {
  isLoading: boolean; // Renamed for clarity
  className?: string;
  loadingText: string;
  defaultText: string; // Renamed for clarity
}

export default function SubmitBtn({
  isLoading,
  className,
  loadingText,
  defaultText,
}: LoadingButtonProps) {
  return (
    <Button color="primary" type="submit" className={`${className}`}>
      {isLoading ? (
        <>
          <Spinner color="default" size="sm" /> <span>{loadingText}</span>
        </>
      ) : (
        <span>{defaultText}</span>
      )}
    </Button>
  );
}
