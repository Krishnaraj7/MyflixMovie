import { baseUrl } from "@/utils/requests";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Thumbnail = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  const imageOpacity = isHovered ? "opacity-70" : "opacity-100";
  const textOpacity = isHovered ? "opacity-100" : "opacity-0";

  const mediaType = movie.title ? "movie" : "series";

  const linkUrl =
    mediaType === "movie" ? `/movie/${movie.id}` : `/series/${movie.id}`;

  return (
    <>
      <Link href={linkUrl}>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative flex flex-col items-center space-x-3 lg:space-x-0 h-[170px] min-w-[120px] cursor-pointer transition duration-300 ease-out md:h-[250px] md:min-w-[180px] md:hover:scale-105"
        >
          <Image
            src={`${baseUrl}${movie.backdrop_path || movie.poster_path}`}
            fill
            alt="movie poster"
            className={`object-cover rounded ${imageOpacity}`}
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-out">
            <h1 className="text-[18px] font-bold text-[#f1fffc]">
              {movie.title || movie.name}
            </h1>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Thumbnail;
