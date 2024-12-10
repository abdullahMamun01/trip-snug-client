'use client'

import { useState } from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/popover"
import {Avatar} from "@nextui-org/avatar";

import { User, Calendar, Award, Wallet, Star, Bookmark, LogOut } from 'lucide-react'
import { Button } from '@nextui-org/button';

export default function UserNav() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      <Popover 
        isOpen={isOpen} 
        onOpenChange={(open) => setIsOpen(open)}
        placement="bottom-end"
      >
        <PopoverTrigger>
        <Button
          className="min-w-[auto] px-2 h-12"
          variant="light"
          radius="full"
        >
          <Avatar
            name="M"
            className="bg-blue-600 text-white"
            size="sm"
          />
          <div className="flex flex-col items-start ml-2 text-left">
            <span className="text-sm font-medium">Md Abdullah Mamun</span>
            <span className="text-xs text-blue-600">Genius Level 1</span>
          </div>
        </Button>
        </PopoverTrigger>
        <PopoverContent >
          <div className="flex flex-col py-2 px-1 w-56">
            <Button
              variant="light" 
             className="flex items-center justify-start h-12 px-4 gap-3 rounded-none hover:bg-gray-100"
              startContent={<User className="w-4 h-4" />}
            >
              My account
            </Button>
            <Button
              variant="light"
              className="flex items-center justify-start h-12 px-4 gap-3 rounded-none hover:bg-gray-100"
              startContent={<Calendar className="w-4 h-4" />}
            >
              Bookings & Trips
            </Button>
            
            <Button
              variant="light"
              className="flex items-center justify-start h-12 px-4 gap-3 rounded-none hover:bg-gray-100"
              startContent={<Star className="w-4 h-4" />}
            >
              Reviews
            </Button>
            <Button
              variant="light"
              className="flex items-center justify-start h-12 px-4 gap-3 rounded-none hover:bg-gray-100"
              startContent={<Bookmark className="w-4 h-4" />}
            >
              Saved
            </Button>
            <hr className="my-2" />
            <Button
              variant="light"
              className="flex items-center justify-start h-12 px-4 gap-3 rounded-none hover:bg-gray-100 text-red-500"
              startContent={<LogOut className="w-4 h-4" />}
            >
              Sign out
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

