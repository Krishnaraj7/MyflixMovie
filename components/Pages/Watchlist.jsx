import React, { useContext } from "react";
import { baseUrl } from "@/utils/requests";
import Image from "next/image";
import Link from "next/link";
import { WatchlistContext } from "./Watchlistcontext";
import { FiX } from "react-icons/fi";

const Watchlist = ({ title, name, poster, mediaType, movieid }) => {
  const { removeFromWatchlist } = useContext(WatchlistContext);
  const handleRemoveFromWatchlist = (event, id) => {
    event.preventDefault(); // Prevent the default link navigation behavior
    removeFromWatchlist(id);
  };
  return (
    <>
      <Link href={name ? `/movie/${movieid}` : `/series/${movieid}`}>
        <div className="relative flex flex-col items-center  w-[100%] cursor-pointer transition duration-300 ease-out">
          <Image
            src={`${baseUrl}${poster}`}
            alt="image"
            width={200}
            height={250}
            className={`rounded-[5px] hover:scale-105 `}
          />
          <p className="text-[12px] py-2 px-3">{title}</p>
          <button
            className="absolute top-0 right-4 transform translate-x-2/4 -translate-y-2/4 bg-white text-black rounded-full p-2 hover:bg-red-600 focus:outline-none"
            onClick={(event) => handleRemoveFromWatchlist(event, movieid)} // Call handleRemoveFromWatchlist function on button click
          >
            <FiX size={10} /> 
          </button>
        </div>
      </Link>
    </>
  );
};

export default Watchlist;
