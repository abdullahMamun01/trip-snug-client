import React from 'react';
import { Tag, Clock, Percent } from 'lucide-react';
import { PromotionCard } from './PromotionCard';


export function Promotions() {
  const promotions = [
    {
      title: "Summer Special",
      description: "Get up to 30% off on luxury beach resorts",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
      discount: "30% OFF",
      validUntil: "Aug 31, 2024",
      code: "SUMMER30"
    },
    {
      title: "Early Bird Discount",
      description: "Book 60 days in advance and save 25%",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80",
      discount: "25% OFF",
      validUntil: "Limited time offer",
      code: "EARLY25"
    },

    {
      title: "Family Package",
      description: "Kids stay and eat free with two paying adults",
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80",
      discount: "KIDS FREE",
      validUntil: "Dec 31, 2024",
      code: "FAMILY24"
    },
    {
      title: "Honeymoon Suite",
      description: "Complimentary spa treatment and romantic dinner",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80",
      discount: "15% OFF",
      validUntil: "Ongoing",
      code: "ROMANCE15"
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Special Offers</h2>
          <p className="text-gray-600">Exclusive deals and discounts for your next stay</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {promotions.map((promo, index) => (
            <PromotionCard key={index} {...promo} />
          ))}
        </div>
      </div>
    </div>
  );
}