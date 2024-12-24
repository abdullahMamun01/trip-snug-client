"use client";

import getDateWithOffset from '@/lib/date';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { use, useEffect } from 'react'
interface IProps {
    children: React.ReactNode
}
export default function QueryValidator({children} : IProps) {
    const router  = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    console.log(searchParams.get("checkIn") , 'checkIn')
    useEffect(() => {
        if(!searchParams.get("checkIn") || !searchParams.get("checkOut")) {
            const queryParams = new URLSearchParams(searchParams);
            queryParams.append("checkIn", getDateWithOffset());
            queryParams.append("checkOut", getDateWithOffset(1));
            router.push(`${pathname}?${queryParams.toString()}`);
            console.log(pathname, "pathname");
        }
    } , [searchParams,pathname,router])

  return children
}