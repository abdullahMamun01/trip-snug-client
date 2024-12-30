import React from 'react';
import { Target, Heart, Shield, Globe } from 'lucide-react';

const Mission = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description: "To make luxury travel accessible and hassle-free for everyone through innovative booking solutions."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Our Vision",
      description: "To become the world's most trusted and preferred platform for premium travel experiences."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Security",
      description: "Ensuring safe, secure, and transparent booking processes for all our customers."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Connecting travelers with premium accommodations across 190+ countries."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {values.map((item, index) => (
        <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
          <div className="text-blue-600 mb-4 flex justify-center">{item.icon}</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Mission;