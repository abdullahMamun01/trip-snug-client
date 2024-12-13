export type TUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  isOAuthUser?: boolean;
  role: "user" | "admin";
  oauthProvider?: string;
  address?: string;
  image?: string;
  city?: string; // New field
  country?: string; // New field
  dateOfBirth?: Date; // New field
  currency?: string;
  gender?: string;
};

export type TProfile = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  address?: string;
  image?: string;
  city?: string; // New field
  country?: string; // New field
  dateOfBirth?: Date; // New field
  currency?: string;
  gender?: string;
};
