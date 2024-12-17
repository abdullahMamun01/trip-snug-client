import { CloudDownload, X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useForm, useFieldArray, useFormContext } from "react-hook-form";

interface FormData {
  images: { file: File }[]; // Array to hold the selected images
}

const ImageUploadForm = () => {
  const {
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // Append the selected image file to the images array
      append({ file: e.target.files[0] });
     
      e.target.value = "";
    }
    setValue('images' , getValues('images') as FormData)
  };

  const images = getValues('images')

  return (
    <>
      {/* Image Input Field */}
      <div>
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700"
        >
          Select Image
        </label>
        <div className="flex w-full items-center justify-center">
          <label
            htmlFor="dropzone-file"
            className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600 dark:hover:bg-gray-800"
          >
            <div className="flex flex-col items-center justify-center pb-6 pt-5">
         
              <CloudDownload className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400" />
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            {/* <input id="dropzone-file" type="file" className="hidden" /> */}
            <input
              id="dropzone-file"
              type="file"
              //   id="image"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
          </label>
        
        </div>
        {
            errors.images && <span className="my-3 text-red-500">{ errors.images?.message as string}</span>
          }
      </div>

      {/* Display Selected Images */}
      <div className="grid grid-cols-12 gap-2 space-y-2">
        {images?.map((item :any, index : any) => (
          <div
            key={item.id}
            className="relative col-span-3 flex items-center justify-between rounded-md border p-2"
          >
            <div className="flex items-center space-x-4">
              {/* Image Preview */}
              {item?.file && (
                <Image
                  width={100}
                  height={100}
                  src={URL.createObjectURL(item.file)}
                  alt={`Selected ${index}`}
                  className="h-16 w-16 rounded object-cover"
                />
              )}
              {/* File Name */}
              <span className="text-sm text-gray-700">{item?.file?.name}</span>
            </div>
            {/* Remove Button */}
            <button
              type="button"
              onClick={() => remove(index)}
              className="absolute right-1 top-1 rounded-md px-3 py-1 text-red-500"
            >
              <X className="h-4 w-4 font-bold" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageUploadForm;
