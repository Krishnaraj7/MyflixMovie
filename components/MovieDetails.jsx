import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { baseUrl } from "@/utils/requests";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";

const MovieDetails = ({ movie, fetchTrailer }) => {
  const handlePlayTrailer = () => {
    fetchTrailer(movie.id);
  };

  return (
    <>
      <Navbar />

      <div className="container ">
        <div className="flex flex-col space-y-2 pt-32 lg:pt-16 pb-12 md:space-y-4 lg:h-[65vh] lg:justify-end">
          <div className="absolute top-0 left-0 -z-10 h-[500px] w-full bg-gradient-to-b from-slate-900/5 to-[#050920] lg:w-[100%] lg:h-screen">
            <div className="relative w-full h-[100%]">
              <Image
                fill
                src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                className="object-cover w-full h-full opacity-50"
                alt="movie poster"
              />
            </div>
          </div>
          <div className="  lg:px-4 px-2   ">
            <h1 className="relative text-3xl font-bold md:text-4xl lg:text-5xl  ">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="  flex space-x-1 text-[13px] md:text-[20px] ">
              <p>
                <span className=" text-gray-200 ml-1">
                  {movie?.release_date} |
                </span>
                <span className=" text-yellow-500 text-2xl">&#x2605;</span>
                <span className="ml-1">
                  {movie?.vote_average}
                  {""}
                </span>
              </p>
            </div>
            <p className="   max-w-sm   text-[12px] md:max-w-lg md:text-[10px] lg:max-w-4xl lg:text-[17px] text-justify   ">
              {movie?.overview}
            </p>

            <div className="flex space-x-3 mt-3">
              <button
                className="heroButton bg-blue-600 text-white"
                onClick={handlePlayTrailer}
              >
                <FaPlay className="h-4 w-4 text-white md:h-7 md:w-7" />
                Play
              </button>
              <Link
                href={
                  movie?.media_type === "movie"
                    ? `/movie/${movie?.id}`
                    : `/series/${movie?.id}`
                }
              >
                <button className="heroButton bg-gray-500 bg-opacity-50  ">
                  More Info
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
