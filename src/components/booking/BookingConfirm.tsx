import React from 'react';
import { 
  CalendarCheck, 
  Users, 
  Clock, 
  CreditCard, 
  MapPin, 
  Phone, 
  Mail,
  CheckCircle 
} from 'lucide-react';

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
    email: "reservations@grandplaza.com"
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 px-6 py-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Booking Confirmed!</h1>
            <p className="text-indigo-100">Confirmation Number: {bookingDetails.confirmationNumber}</p>
          </div>

          {/* Hotel Info */}
          <div className="px-6 py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{bookingDetails.hotelName}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Stay Details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CalendarCheck className="h-5 w-5 text-indigo-600" />
                  <div>
                    <p className="text-sm text-gray-500">Check-in</p>
                    <p className="font-medium">{bookingDetails.checkIn}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-indigo-600" />
                  <div>
                    <p className="text-sm text-gray-500">Check-out</p>
                    <p className="font-medium">{bookingDetails.checkOut}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-indigo-600" />
                  <div>
                    <p className="text-sm text-gray-500">Guests</p>
                    <p className="font-medium">{bookingDetails.guests} Adults</p>
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CreditCard className="h-5 w-5 text-indigo-600" />
                  <div>
                    <p className="text-sm text-gray-500">Total Amount</p>
                    <p className="font-medium">{bookingDetails.totalAmount}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-indigo-600" />
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="font-medium">{bookingDetails.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-indigo-600" />
                  <p className="text-gray-600">{bookingDetails.phone}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-indigo-600" />
                  <p className="text-gray-600">{bookingDetails.email}</p>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-8 bg-indigo-50 rounded-lg p-4">
              <p className="text-sm text-indigo-800">
                A confirmation email has been sent to your email address. Please present your confirmation number upon check-in.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                Go To Home
              </button>
              <button className="flex-1 border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
                Check You Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;