export const appendFormDataForZod = (
    formData: FormData,
    data: Record<string, any>,
    parentKey: string | null = null
  ): void => {
    Object.entries(data).forEach(([key, value]) => {
      const formKey = parentKey ? `${parentKey}.${key}` : key;
  
      if (value instanceof File || value instanceof Blob) {
        // Handle files directly
        formData.append(formKey, value);
      } else if (Array.isArray(value)) {
        // Handle arrays (e.g., amenities, tags, images)
        value.forEach((item) => formData.append(formKey, item));
      } else if (typeof value === 'object' && value !== null) {
        // Handle nested objects recursively
        appendFormDataForZod(formData, value, formKey);
      } else {
        // Handle primitive values
        formData.append(formKey, value.toString());
      }
    });
  };
  