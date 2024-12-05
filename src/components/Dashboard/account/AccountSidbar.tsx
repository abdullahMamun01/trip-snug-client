import React from 'react'
import {
    Camera,
    ChevronDown,
    ChevronRight,
    CreditCard,
    Globe,
    HelpCircle,
    Mail,
    MessageSquare,
    Settings,
    Tag,
    User,
    Wallet,
  } from "lucide-react";
  import Link from "next/link";
import AccountHeader from './AccountHeader';
export default function AccountSidbar() {
  return (
    <div className='w-full'>
        <div className='my-6'>
        <AccountHeader/>
        </div>
        <nav className="space-y-2">
          <Link
            href="#"
            className="flex items-center justify-between rounded-lg border p-4 hover:bg-gray-50 bg-white"
          >
            <div className="flex gap-3 ">
              <User className="h-5 w-5" />
              <div>
                <div className="font-medium">Profile</div>
                <div className="text-sm text-gray-600 flex flex-wrap pr-4 pt-1">
                  Provide your personal details and travel documents
                </div>
              </div>
            </div>
            <ChevronRight className="h-4 w-4" />
          </Link>

          <Link
            href="#"
            className="flex items-center justify-between rounded-lg border p-6 hover:bg-gray-50 bg-white "
          >
            <div className="flex gap-3">
              <Mail className="h-5 w-5" />
              <div>
                <div className="font-medium">Communications</div>
                <div className="text-sm text-gray-600 pr-4 pt-1">
                  Control which notifications you get
                </div>
              </div>
6           </div> 
            <ChevronRight className="h-4 w-4" />
          </Link>

          <Link
            href="#"
            className="flex items-center justify-between rounded-lg border p-6 hover:bg-gray-50 bg-white "
          >
            <div className="flex gap-3">
              <CreditCard className="h-5 w-5" />
              <div>
                <div className="font-medium">Payment methods</div>
                <div className="text-sm text-gray-600 ">
                  View saved payment methods
                </div>
              </div>
            </div>
            <ChevronRight className="h-4 w-4" />
          </Link>

          <Link
            href="#"
            className="flex items-center justify-between rounded-lg border p-6 hover:bg-gray-50 bg-white "
          >
            <div className="flex gap-3">
              <Tag className="h-5 w-5" />
              <div>
                <div className="font-medium">Coupons</div>
                <div className="text-sm text-gray-600">
                  View your available coupons
                </div>
              </div>
            </div>
            <ChevronRight className="h-4 w-4" />
          </Link>

          <Link
            href="#"
            className="flex items-center justify-between rounded-lg border p-6 hover:bg-gray-50 bg-white "
          >
            <div className="flex gap-3">
              <Wallet className="h-5 w-5" />
              <div>
                <div className="font-medium">Credits</div>
                <div className="text-sm text-gray-600">
                  View your active airline credits
                </div>
              </div>
            </div>
            <ChevronRight className="h-4 w-4" />
          </Link>

          <Link
            href="#"
            className="flex items-center justify-between rounded-lg border p-6 hover:bg-gray-50 bg-white "
          >
            <div className="flex gap-3">
              <MessageSquare className="h-5 w-5" />
              <div>
                <div className="font-medium">Reviews</div>
                <div className="text-sm text-gray-600">
                  Read reviews you have shared
                </div>
              </div>
            </div>
            <ChevronRight className="h-4 w-4" />
          </Link>

          <Link
            href="#"
            className="flex items-center justify-between rounded-lg border p-6 hover:bg-gray-50 bg-white "
          >
            <div className="flex gap-3">
              <Settings className="h-5 w-5" />
              <div>
                <div className="font-medium">Security and settings</div>
                <div className="text-sm text-gray-600">
                  Update your email or password
                </div>
              </div>
            </div>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </nav>
    </div>
  )
}
