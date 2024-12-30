'use server'
import { cancelBooking } from "@/services/booking.service";
import { getCurrentUser } from "./auth.action";


const cancelBookingAction = async (bookingId: string) => {
    const currectUser = await getCurrentUser();
    console.log(currectUser?.token)
    const response = await cancelBooking(bookingId, currectUser?.token as string);
    return response;
};  



export {
    cancelBookingAction
}