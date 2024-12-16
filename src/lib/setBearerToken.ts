export function setBearerToken(token: string) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}
