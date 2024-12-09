
export type TUser = {
    id: string ,
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    isOAuthUser?: boolean;
    role: 'user' | 'admin';
    oauthProvider?: string;
    address?: string;
    image?: string;
    city?: string; // New field
    country?: string; // New field
    dateOfBirth?: Date; // New field
    currency?:string 
  };


  