import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { Skeleton } from "@nextui-org/skeleton";

const TableLoadingSkeleton = () => {
  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Hotel Name" },
    { key: "location", label: "Location" },
    { key: "rooms", label: "Rooms" },
    { key: "price", label: "Price per Night ($)" },
    { key: "email", label: "Contact Email" },
    { key: "edit", label: "Edit" },
    { key: "delete", label: "Delete" },
  ];

  return (
    <div>
      <Table aria-label="Table loading skeleton">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>
              <Skeleton className="w-[80%] h-[20px]" />
            </TableColumn>
          )}
        </TableHeader>
        <TableBody>
          {[...Array(5)].map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column, colIndex) => (
                <TableCell key={colIndex}>
                  <Skeleton className="w-full h-[20px]" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableLoadingSkeleton;
