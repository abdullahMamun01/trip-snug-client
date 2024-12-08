import React from "react";
import {
  FaWifi,
  FaSwimmingPool,
  FaParking,
  FaUtensils,
  FaDumbbell,
  FaBed,
  FaCoffee,
  FaTv,
  FaShower,
  FaSun,
  FaSnowflake,
  FaShieldAlt,
  FaGlobe,
  FaConciergeBell,
  FaLaptop,
  FaSpa,
  FaLightbulb,
  FaPhone,
  FaBroom,
  FaCar,
  FaBus,
  FaPlane,
  FaMusic,
  FaHeart,
  FaQuestionCircle,
  FaIceCream,
} from "react-icons/fa";

/**
 * Utility to map amenities to icons.
 */
export const getAmenityIcon = (amenity: string): JSX.Element => {
  const amenitiesMap: Record<string, JSX.Element> = {
    wifi: <FaWifi title="WiFi" />,
    pool: <FaSwimmingPool title="Swimming Pool" />,
    parking: <FaParking title="Parking" />,
    restaurant: <FaUtensils title="Restaurant" />,
    gym: <FaDumbbell title="Gym" />,
    bed: <FaBed title="Comfortable Bed" />,
    coffee: <FaCoffee title="Coffee Maker" />,
    tv: <FaTv title="Television" />,
    shower: <FaShower title="Hot Shower" />,
    outdoor: <FaSun title="Outdoor Seating" />,
    ac: <FaSnowflake title="Air Conditioning" />,
    security: <FaShieldAlt title="24/7 Security" />,
    concierge: <FaConciergeBell title="Concierge Service" />,
    international: <FaGlobe title="International Travelers Friendly" />,
    spa: <FaSpa title="Spa Services" />,
    lighting: <FaLightbulb title="Ambient Lighting" />,
    phone: <FaPhone title="Phone Facility" />,
    cleaning: <FaBroom title="Daily Housekeeping" />,
    transport: <FaCar title="Transport Service" />,
    public_transport: <FaBus title="Near Public Transport" />,
    airport_shuttle: <FaPlane title="Airport Shuttle" />,
    music: <FaMusic title="Live Music" />,
    romantic: <FaHeart title="Romantic Setting" />,
    workspace: <FaLaptop title="Workspace Facilities" />,
    ice_cream: <FaIceCream title="Ice Cream Machine" />,
  };

  // Return the corresponding icon or fallback
  return amenitiesMap[amenity.toLowerCase()] || (
    <FaQuestionCircle title="Unknown Amenity" />
  );
};
