import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { Chip } from "@nextui-org/chip";
import { Select, SelectItem } from "@nextui-org/select";
const MultiSelectTag = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const options = ["Apple", "Banana", "Cherry", "Date", "Grapes"];

  // Handle selection change (multiple options selected)
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = [...selectedItems , e.target.value];
    setSelectedItems(selectedValues);
  };

  // Handle removal of a tag
  const handleRemove = (item: string) => {
    setSelectedItems(selectedItems.filter((selected) => selected !== item));
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Dropdown with <select> tag for multi-selection */}
      <Select
        multiple
        value={selectedItems}
        onChange={handleSelectChange}
        className="w-full rounded-lg border p-2"
      >
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </Select>

      {/* Input Box with Selected Tags */}
      <div className="flex flex-wrap gap-2">
        {selectedItems.map((item) => (
          <Chip
            key={item}
            className="cursor-pointer"
            onClose={() => handleRemove(item)}
          >
            {item}
          </Chip>
        ))}
      </div>
    </div>
  );
};

export default MultiSelectTag;
