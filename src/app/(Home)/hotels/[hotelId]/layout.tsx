import HotelSearchForm from '@/components/form/HotelSearchForm'
import React, { ReactNode } from 'react'

export default function HotelDetailsLayout({children} : {children:ReactNode}) {
  return (
    <div className='w-full bg-white border-b shadow-b-md py-6'>
        {children}
    </div>
  )
}
