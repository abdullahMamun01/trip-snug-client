import React from 'react';
import { Tag, Clock, Percent } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface PromotionCardProps {
  title: string;
  description: string;
  image: string;
  discount: string;
  validUntil: string;
  code: string;
}

export function PromotionCard({ 
  title, 
  description, 
  image, 
  discount, 
  validUntil, 
  code 
}: PromotionCardProps) {
  return (
    <div className="bg-white dark:border-boxdark-2 dark:bg-boxdark-2 rounded-xl overflow-hidden shadow-lg group">
      <div className="relative h-48">
        <Image
        width={1000}
        height={1000} 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {discount}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center text-gray-500">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm">{validUntil}</span>
          </div>
          {/* <div className="flex items-center text-gray-500">
            <Tag className="w-4 h-4 mr-2" />
            <span className="text-sm">Promo code: <span className="font-mono font-semibold">{code}</span></span>
          </div> */}
        </div>
        
        <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
          <Link href="/hotels" className="flex items-center space-x-2">
          <Percent className="w-4 h-4" />
          <span>Book Now</span>
          </Link>
        </button>
      </div>
    </div>
  );
}