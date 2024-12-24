import ApiResponse from "@/types/apiResponse.types";
import apiClient from "./axios";
import { IAnalyticOverview, IBookingAnalytics, IRevenueAnalytics } from "@/types/analytics.type";
;


const fetchAnalyticsOverview = async () : Promise<ApiResponse<IAnalyticOverview>> => {
    const response = await apiClient.get("/analytics/overview");
    return response.data;
};


const fetchRevenueAnalytics = async () : Promise<ApiResponse<IRevenueAnalytics>> => {
    const response = await apiClient.get("/analytics/revenue");
    return response.data;
};


const fetchBookingAnalytics = async () : Promise<ApiResponse<IBookingAnalytics>> => {
    const response = await apiClient.get("/analytics/bookings");
    return response.data;
};


export { fetchAnalyticsOverview,fetchRevenueAnalytics ,fetchBookingAnalytics};