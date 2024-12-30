import useSetQueryParams from "@/hooks/useSetQueryParams";
import { Pagination } from "@nextui-org/pagination";
import React, { useState } from "react";

interface PaginationComponentProps {
    totalPage: number;
}
export default function PaginationComponent({totalPage}:PaginationComponentProps) {
    const {setQueryParams , getQueryParams , removeQueryParams} = useSetQueryParams()
    const [pageNumber,setPageNumber] = useState(getQueryParams('page') ? Number(getQueryParams('page')) : 1)

    const handlePageChange  = (value:Number) => {
        setPageNumber(value as number)
        if(value === 1) {
            removeQueryParams('page') 
        }else{
            setQueryParams('page' , value.toString())
    
        }
    
        
      }
  return (
    <Pagination
      isCompact
      showControls
      total={totalPage || 1}
      initialPage={1}
      className="p-4"
      page={pageNumber}
      onChange={handlePageChange}
    />
  );
}
