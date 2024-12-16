'use client'
import { Button } from '@nextui-org/button'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { AlertCircle, ArrowLeft, CheckCircle, Home } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'


export default function ErrorPaymentCard() {
    const querySearch = useSearchParams()
  return (
    <div className="flex items-center h-auto justify-center  bg-gradient-to-br from-red-50 to-red-100 py-8">
    <Card className="w-full max-w-2xl shadow-lg">
      <CardHeader className="space-y-1">
        <div className="flex flex-col items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-red-100">
          <AlertCircle className="w-8 h-8 text-red-600" />
        </div>
        <h1 className="text-2xl font-bold text-center text-red-700 ">Payment Error</h1>
        <CardBody className="text-center text-red-600">No payment session found</CardBody>
      </CardHeader>
      <CardBody className="space-y-4">
        <p className="text-gray-600 text-center">
          We couldn not find any active payment session. This could be because:
        </p>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-center">
            <span className="mr-2">•</span>
            The payment session has expired
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span>
            You have accessed this page directly without initiating a payment
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span>
            There was an error in the payment process
          </li>
        </ul>
      </CardBody>
      <CardFooter className="flex justify-between">
        <Button  >
          <Link href="/" className="flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Link>
        </Button>
        <Button >
          <Link href="/" className="flex items-center">
            <Home className="w-4 h-4 mr-2" />
            Homepage
          </Link>
        </Button>
      </CardFooter>
    </Card>
  </div>
  )
}
