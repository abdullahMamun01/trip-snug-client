"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableLoadingSkeleton from "@/components/ui/skeleton/TableLoadingSkeleton";
import UserAvatar from "@/components/user/UserAvatar";
import useUserRoleUpdate from "@/hooks/useUserRoleUpdate";
import { fetchAllUser } from "@/services/user.service";
import useAuth from "@/stores/auth.store";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { useQuery } from "@tanstack/react-query";
import React from "react";
const columns = [
  {
    key: "image",
    label: "IMAGE",
  },
  {
    key: "firstName",
    label: "firstName",
  },
  {
    key: "lastName",
    label: "lasstName",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "country",
    label: "Country",
  },
  {
    key: "role",
    label: "Role",
  },
];
export default function DashboardUsersPage() {
  const { token } = useAuth();
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => await fetchAllUser(token as string),
  });
  const { mutateAsync, isPending } = useUserRoleUpdate();
  const users =
    data?.data.map((user) => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      country: user.country,
      email: user.email,
      image: user.image,
      role: user.role,
    })) || [];

  const handleRoleChange = async (role: string, userId: string) => {
    await mutateAsync({ role, userId });
  };

  return (
    <DefaultLayout>
      <div className="min-h-screen">
        <div className="mx-auto max-w-270">
          <Breadcrumb pageName="Users" />
        </div>
        {isLoading ? (
          <TableLoadingSkeleton />
        ) : (
          <Table aria-label="Example table with dynamic content ">
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              )}
            </TableHeader>
            <TableBody>
              {users?.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">
                    <UserAvatar image={user.image} firstName={user.firstName} />
                  </TableCell>
                  <TableCell className="font-medium">
                    {user.firstName}
                  </TableCell>
                  <TableCell className="font-medium">{user.lastName}</TableCell>
                  <TableCell className="font-medium">{user.email}</TableCell>
                  <TableCell className="font-medium">
                    {user.country || "N/A"}
                  </TableCell>
                  <TableCell className="font-medium">
                    <Select
                      defaultSelectedKeys={[user.role]}
                      onChange={(event) =>
                        handleRoleChange(event.target.value, user.id)
                      }
                      isDisabled={isPending}
                    >
                      <SelectItem key="user">user</SelectItem>
                      <SelectItem key="admin">admin</SelectItem>
                    </Select>

                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </DefaultLayout>
  );
}
