import { baseUrl } from "@/utils/requests";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MovieList = ({
  moviename,
  moviePost,
  movieoverview,
  movieDate,
  movieRating,
  movieid,
  mediaType,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const imageOpacity = isHovered ? "opacity-30" : "opacity-100";
  const textOpacity = isHovered ? "opacity-100" : "opacity-0";

  const getDynamicLink = () => {
    if (mediaType === "movie") {
      return `/movie/${movieid}`;
    } else if (mediaType === "tv") {
      return `/series/${movieid}`;
    }
    return "/";
  };

  return (
    <>
      <Link href={getDynamicLink()}>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative flex flex-col items-center w-[100%] hover:scale-105 cursor-pointer transition duration-300 ease-out"
        >
          <div className="relative">
            <Image
              src={`${baseUrl}${moviePost}`}
              width={200}
              height={250}
              className={`rounded-[5px] md:hover:opacity-50 ${imageOpacity}`}
            />
            <p className="text-[13px] md:hidden text-center py-2">
              {moviename}
            </p>

            <div className="absolute bottom-0 px-6 pt-3 md:px-5 xl:px-5 lg:py-4 pb-3 xl:py-10 hidden md:flex flex-col justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-out">
              <div className="text-[18px] lg:text-[15px] xl:text-[22px] font-bold overflow-hidden">
                {moviename}
              </div>
              <div className="text-[14px] lg:text-[10px] overflow-hidden">
                {movieDate}
                {"  "}
                <span className="ml-2 lg:ml-3">
                  {movieRating}
                  <span className="text-yellow-500">&#x2605;</span>
                </span>
              </div>
              <div className="text-[15px] lg:text-[14px] xl:text-[15px] overflow-hidden">
                {movieoverview.slice(0, 60) + "..."}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MovieList;
