import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const useSetQueryParams = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParms = useSearchParams();
  const queryParams = new URLSearchParams(searchParms);
  const setQueryParams = (key: string, value: string) => {
 
      queryParams.set(key, value);
      router.push(`${pathName}?${queryParams.toString()}`);

  };

  const getQueryParams = (key: string) => {
    return queryParams.get(key) || "";
  };
  const removeQueryParams = (key: string) => {
     queryParams.delete(key)
     router.push(`${pathName}?${queryParams.toString()}`);
  };

  return {
    setQueryParams,
    getQueryParams,
    removeQueryParams
  };
};

export default useSetQueryParams;
