function getDateWithOffset(daysOffset = 0) {
  const today = new Date();
  today.setDate(today.getDate() + daysOffset); // Add or subtract days

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function calculateDayDifference(
  checkInDate: Date,
  checkOutDate: Date,
): number {
  const checkInTimestamp = checkInDate.getTime();
  const checkOutTimestamp = checkOutDate.getTime();
  const timeDifference = checkOutTimestamp - checkInTimestamp;
  const dayDifference = timeDifference / (1000 * 60 * 60 * 24);

  return dayDifference;
}

export const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Utility function to check if the current time is over a specific time
export const isTimeOver = (time: string): boolean => {
  const currentDate = new Date();
  const currentTime = currentDate.getTime();
  
  const targetDate = new Date(time);
  targetDate.setHours(23, 59, 59, 999); // Set the end of the day for the target date
  const targetTime = targetDate.getTime();

  return currentTime > targetTime;
};

// Main function to determine booking status
export const bookingStatus = (checkin: string, checkOut: string) => {
  const currentDate = new Date();
  const currentTime = currentDate.getTime();
  
  const checkinTime = new Date(checkin).getTime();

  return (
    (currentTime < checkinTime && "upcoming") ||
    (isTimeOver(checkOut) && "completed") ||
    "running" // During the stay
  );
};


export default getDateWithOffset;
