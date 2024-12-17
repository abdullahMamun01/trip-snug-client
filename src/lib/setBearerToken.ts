export function setBearerToken(token: string, multipartForm?: boolean) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      ...(multipartForm ? { 'Content-Type': 'multipart/form-data' } : {}),
    },
  };
}
