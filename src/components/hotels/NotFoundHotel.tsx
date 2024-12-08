import React from "react";
import { SearchX, RefreshCw } from "lucide-react";

const NotFoundHotel = () => {
  return (
    <div className="mx-auto w-full  px-4 py-12">
      <div className="rounded-lg bg-white p-8 text-center">
        <div className="mb-6 flex justify-center">
          <SearchX className="h-20 w-20 text-gray-400" />
        </div>

        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          No hotels found
        </h2>

        <p className="mx-auto mb-8 max-w-md text-gray-600">
          We couldn not find any hotels matching your search criteria. Try
          adjusting your filters or search for a different location.
        </p>

        <div className="space-y-4">
          <div className="rounded-lg bg-gray-50 p-6">
            <h3 className="mb-2 font-semibold text-gray-700">Suggestions:</h3>
            <ul className="list-inside list-disc space-y-2 text-left text-gray-600">
              <li>Check if the spelling is correct</li>
              <li>Try using more general keywords</li>
              <li>Remove some filters to see more results</li>
              <li>Consider alternative dates or locations</li>
            </ul>
          </div>

          <button className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700">
            <RefreshCw className="mr-2 h-5 w-5" />
            Reset Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundHotel;
