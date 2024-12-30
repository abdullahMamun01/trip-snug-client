import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "24/7 Support",
      content: "+1 (555) 123-4567",
      description: "Available round the clock"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "support@tripsnug.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Main Office",
      content: "123 Travel Plaza, Suite 100",
      description: "New York, NY 10001"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat",
      content: "Available 9 AM - 10 PM",
      description: "Quick responses guaranteed"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {contactDetails.map((item, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="text-blue-600 mb-4">{item.icon}</div>
          <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
          <p className="text-gray-800 mb-1">{item.content}</p>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ContactInfo;