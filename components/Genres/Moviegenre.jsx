import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import requests from "@/utils/requests";

const Moviegenre = ({ handleGenreChange }) => {
  const router = useRouter();
  const [selectedGenre, setSelectedGenre] = useState(null);
  const scrollContainerRef = useRef(null);

  const handleGenreClick = (genre) => {
    handleGenreChange(genre);
    const mediaType = router.pathname.includes("movie") ? "movies" : "series";
    router.push(`/${mediaType}?genre=${genre}`);
    setSelectedGenre(genre);
  };

  const handleScrollLeft = () => {
    scrollContainerRef.current.scrollLeft -= 200; 
  };

  const handleScrollRight = () => {
    scrollContainerRef.current.scrollLeft += 200; 
  };

  return (
    <nav>
      <div className="relative">
        <div
          className="flex px-10 sm:px-20 space-x-10 sm:space-x-[70px] whitespace-nowrap overflow-x-scroll scrollbar-hide"
          ref={scrollContainerRef}
        >
          {Object.entries(requests).map(([key, { title }]) => (
            <h2
              key={key}
              onClick={() => handleGenreClick(key)}
              className={`last:pr-11 cursor-pointer transition duration-100 transform hover:scale-110 hover:text-white active:text-blue-300 ${
                selectedGenre === key ? "border-b-2 border-blue-300 w-28" : ""
              }`}
              style={{ userSelect: "none" }}
            >
              {title}
            </h2>
          ))}
        </div>
        <div className="absolute mt-10 top-0 left-0 bg-gradient-to-r from-[#011111] h-10 w-1/12" />
        <div className="absolute mt-10 top-0 right-0 bg-gradient-to-l from-[#011111] h-10 w-1/12" />
        <button
          className="absolute top-0 bottom-0 left-0 bg-gray-800 text-white flex items-center justify-center px-2 py-2 rounded-l-md"
          onClick={handleScrollLeft}
        >
          <BiChevronsLeft className="h-5 w-5" />
        </button>
        <button
          className="absolute top-0 bottom-0 right-0 bg-gray-800 text-white flex items-center justify-center px-2 py-2 rounded-r-md"
          onClick={handleScrollRight}
        >
          <BiChevronsRight className="h-5 w-5" />
        </button>
      </div>
    </nav>
  );
};

export default Moviegenre;
