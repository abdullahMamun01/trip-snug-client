import { setBearerToken } from "@/lib/setBearerToken"
import apiClient from "./axios"
import ApiResponse from "@/types/apiResponse.types"
import { IBookings, IBookingsList, ICancelBookings } from "@/types/booking.type"


const fetchBookings  = async ( query:string ,token:string) :Promise<ApiResponse<IBookingsList>>=> {
    const response = await apiClient.get(`/bookings?${query}&limit=5` , setBearerToken(token))
    return response.data
}

const cancelBooking  = async (bookingId:string , token:string) :Promise<ApiResponse<IBookings>>=> {
    const response = await apiClient.patch(`/bookings/${bookingId}/cancel`, {} , setBearerToken(token))
    return response.data
}

const fetchCancelBookings  =async (query:string ,token:string) : Promise<ApiResponse<ICancelBookings>> => {
    const response = await apiClient.get(`/bookings/cancel?${query}` , setBearerToken(token))
    return response.data
}
export {
    fetchBookings,
    cancelBooking,
    fetchCancelBookings
}