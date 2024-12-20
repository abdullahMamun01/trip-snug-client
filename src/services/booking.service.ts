import { setBearerToken } from "@/lib/setBearerToken"
import apiClient from "./axios"
import ApiResponse from "@/types/apiResponse.types"
import { IBookings } from "@/types/booking.type"


const fetchBookings  = async (token:string) :Promise<ApiResponse<IBookings[]>>=> {
    const response = await apiClient.get('/bookings' , setBearerToken(token))
    return response.data
}


export {
    fetchBookings
}