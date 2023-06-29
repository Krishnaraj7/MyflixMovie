import React, { useRef } from "react";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import Thumbnail from "./Thumbnail";

const Row = ({ title, movies }) => {
  const rowRef = useRef(null);

  const handleClick = (direction) => {
    const scrollAmount = rowRef.current.clientWidth / 2;
    if (direction === "left") {
      rowRef.current.scrollLeft -= scrollAmount;
    } else if (direction === "right") {
      rowRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="space-y-0.5 md:space-y-2">
      <h2 className="w-56 font-semibold cursor-pointer text-[15px] text-[#e5e5e5] transition duration-200 hover:text-white md:text-[20px]">
        {title}
      </h2>

      <div className="group relative md:ml-2">
        <BiChevronsLeft
          className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick("left")}
        />

        <div
          className="flex items-center space-x-0.5 scrollbar-hide overflow-x-scroll md:space-x-2.5 md:p-3"
          ref={rowRef}
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <BiChevronsRight
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default Row;
