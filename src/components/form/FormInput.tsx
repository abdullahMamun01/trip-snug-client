import React from "react";
import { Controller, Control } from "react-hook-form";
import { Input } from "@nextui-org/input";

interface FormInputProps {
  name: string;
  control: Control<any>;
  label: string;
  placeholder: string;
  type?: string;
  variant?: "bordered" | "underlined" | "filled";
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
          labelPlacement="outside"
          errorMessage={errorMessage}
          type={type}
          classNames={{
            label: 'font-bold' ,
            inputWrapper:"rounded-md"
          }}
          variant="bordered"
        />
      )}
    />
    <span className="text-red-500 py-0 text-sm flex-row no-flex" >{errorMessage}</span>
   </div>
  );
};

export default FormInput;
