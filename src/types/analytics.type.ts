
export interface IAnalyticOverview {
    totalBookings: number
    totalUsers: number
    totalRevenue: number
    totalHotels: number
  }

  export interface  IRevenueAnalytics {
    monthly: Monthly[] | [] ;
    yearly: Yearly[] | [] ;
  }
  
  export interface Monthly {
    year: string
    amount: number
    monthName: string
  }
  
  export interface Yearly {
    year: string
    amount: number
  }

  export interface IBookingAnalytics {
    monthly: Monthly[]
    yearly: Yearly[]
  }
  
  export interface Monthly {
    monthName: string
    amount: number
    year: string
  }
  
  export interface Yearly {
    year: string
    amount: number
  }