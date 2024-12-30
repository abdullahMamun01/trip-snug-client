import React from 'react';
import { Mail, Phone, MapPin, Building, Globe } from 'lucide-react';
import Image from 'next/image';

interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  avatarUrl: string;
}

const mockProfile: ProfileData = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  country: "United States",
  city: "San Francisco",
  address: "123 Tech Street",
  avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
};

const ProfileCard: React.FC = () => {
  const profile = mockProfile;

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32"></div>
        <div className="px-8 pb-8">
          <div className="relative flex items-center justify-between">
            <div className="absolute -top-16">
              <Image
              width={200}
              height={200}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                src={profile.avatarUrl}
                alt="Profile"
              />
            </div>
            <div className="ml-36 mt-4">
              <h1 className="text-3xl font-bold text-gray-900">
                {profile.firstName} {profile.lastName}
              </h1>
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Edit Profile
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-900">{profile.email}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-gray-900">{profile.phone}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Country</p>
                  <p className="text-gray-900">{profile.country}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Building className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">City</p>
                  <p className="text-gray-900">{profile.city}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="text-gray-900">{profile.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;