import React from "react";
import { Controller, Control } from "react-hook-form";
import { Input } from "@nextui-org/input";

interface FormInputProps {
  name: string;
  control: Control<any>;
  label: string;
  placeholder: string;
  type?: string;
  variant?: "bordered" | "faded" | "flat" | "underlined";
  labelPlacement? : "inside" | "outside" | "outside-left"
  errorMessage?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  control,
  label,
  placeholder,
  type = "text",
  variant = "bordered",
  errorMessage,
  labelPlacement = "outside"
}) => {

  return (
    <div className="w-full">
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input
            {...field}
            label={label}
            name="firstName"
            placeholder={placeholder}
            labelPlacement={labelPlacement}
            errorMessage={errorMessage}
            type={type}
            classNames={{
              label: "font-bold",
              inputWrapper: "rounded-md",
            }}
            
            variant={variant}
          />
        )}
      />
      <span className="no-flex flex-row py-0 text-sm text-red-500">
        {errorMessage}
      </span>
    </div>
  );
};

export default FormInput;
