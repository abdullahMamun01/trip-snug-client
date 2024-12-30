import React from "react";
import {
  CalendarCheck,
  Users,
  Clock,
  CreditCard,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Calendar,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const BookingConfirmation = () => {
  const bookingDetails = {
    confirmationNumber: "BK-2024-3856",
    hotelName: "Grand Plaza Hotel & Spa",
    checkIn: "March 25, 2024",
    checkOut: "March 28, 2024",
    roomType: "Deluxe Ocean View Suite",
    guests: 2,
    totalAmount: "$789.00",
    address: "123 Oceanfront Drive, Miami Beach, FL 33139",
    phone: "+1 (555) 123-4567",
    email: "reservations@grandplaza.com",
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="text-center">
          <div className="flex justify-center">
            <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
          </div>
          <h1 className="mb-2 text-2xl font-bold text-gray-900">
            Booking Confirmed!
          </h1>
          <p className="mb-8 text-gray-600">
            Your reservation has been successfully processed
          </p>

          <div className="space-y-4">
            <button className="w-full rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-700">
              <Link href="/account/bookings">View Booking Details</Link>
            </button>

            <button className="flex w-full items-center justify-center rounded-lg border border-gray-200 px-6 py-3 font-medium text-gray-600 transition-colors hover:bg-gray-50">
              <Link href="/" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Homepage
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
