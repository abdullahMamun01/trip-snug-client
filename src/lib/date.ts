function getDateWithOffset(daysOffset = 0) {
    const today = new Date();
    today.setDate(today.getDate() + daysOffset); // Add or subtract days
  
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }

  export default getDateWithOffset