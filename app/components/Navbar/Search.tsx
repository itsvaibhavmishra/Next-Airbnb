"use client";

import { FaSearch } from "react-icons/fa";

// components
import IconButton from "../UIElements/Buttons/IconButton";

const Search = () => {
  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-md hover:shadow-lg transition cursor-pointer">
      {/* filters & search */}
      <div className="flex flex-row items-center justify-between md:justify-center">
        {/* navigation buttons */}
        <button className="font-semibold text-sm px-5">Anywhere</button>
        <button className="hidden md:block font-semibold text-sm px-5 border-x-[1px] border-[#6A6A6A60]">
          Any week
        </button>

        {/* guests & search icon */}
        <div className="pl-5 pr-3 text-gray-600 flex flex-row items-center gap-3">
          <button className="hidden text-sm md:block">Add guests</button>

          <IconButton>
            <FaSearch size={12} className="text-white" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
export default Search;
