import React, { useEffect, useState, useContext } from "react";
import { baseUrl } from "@/utils/requests";
import { useRouter } from "next/router";
import Navbar from "../Navbar";
import { IoMdPlay } from "react-icons/io";
import { RiAddLine } from "react-icons/ri";
import { WatchlistContext } from "./Watchlistcontext";
import SimpleBottomNavigation from "../BottomNav";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieInfo = ({ media, similiar, fetchTrailer, cast }) => {
  console.log(cast);
  const { addToWatchlist, removeFromWatchlist, watchlist } =
    useContext(WatchlistContext);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    // Check if the media is in the watchlist on component mount
    const isMediaAdded = watchlist.some((item) => item.id === media.id);
    setIsAdded(isMediaAdded);
  }, []);

  const handleWatchlistClick = () => {
    if (isAdded) {
      removeFromWatchlist(media.id);
    } else {
      addToWatchlist(media);
    }
    setIsAdded(!isAdded);
  };

  const mediaType = media.title ? "movie" : "series";

  const Seasons =
    mediaType === "series" ? `Seasons : ${media.number_of_seasons}` : " ";
  const Episodes =
    mediaType === "series" ? ` | Episodes : ${media.number_of_episodes}` : " ";
  const runTime = mediaType === "series" ? " " : `| ${media.runtime} min`;
  const episodeNseasons = `${Seasons}  ${Episodes}`;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handlePlayTrailer = () => {
    fetchTrailer(media.id);
  };
  const castSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Display 6 slides at a time
    slidesToScroll: 4, // Scroll 6 slides at a time
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint according to your needs
        settings: {
          slidesToShow: 2, // Display 4 slides at a time on smaller screens
          slidesToScroll: 2, // Scroll 4 slides at a time on smaller screens
        },
      },
    ],
  };
  return (
    <>
      <Navbar />

      <div className="flex-1">
        <div className="container mx-auto flex flex-col lg:flex-row">
          <div className="w-full h-[450px] relative">
            <Image
              src={`${baseUrl}${media.backdrop_path || media.poster_path}`}
              className="object-cover opacity-30"
              alt={media.name}
              layout="fill"
            />

            <div className="flex-1 overflow-y-auto pt-16 md:pl-28 absolute">
              <div className="container mx-auto px-6 py-6 md:py-12 flex flex-col lg:flex-row">
                <div className="lg:w-[300px] lg:pr-16 md:w-[500px] flex lg:hidden justify-center">
                  <Image
                    src={`${baseUrl}${media.poster_path}`}
                    alt={media.title}
                    className="rounded-lg shadow-lg object-cover object-center"
                    width={400}
                    height={600}
                  />
                </div>

                <div className="lg:w-[360px] lg:pr-12 hidden lg:flex justify-center">
                  <Image
                    src={`${baseUrl}${media.poster_path}`}
                    alt={media.title}
                    className="w-full h-auto rounded-lg shadow-lg object-cover object-center"
                    style={{ maxHeight: "80vh" }}
                    width={400}
                    height={600}
                  />
                </div>
                <div className="lg:w-1/2 lg:pt-[10px]">
                  <h1 className="text-4xl lg:text-5xl font-bold py-3">
                    {media.title || media.name}
                  </h1>

                  <div className="flex items-center ">
                    <span className="text-yellow-500 text-2xl ml-2">
                      &#x2605;
                    </span>
                    <span>{media.vote_average}</span>
                  </div>

                  <div className="text-lg text-gray-200 mb-1">
                    {media.release_date} {runTime}
                  </div>
                  <div className=" "> {episodeNseasons}</div>

                  <div className="flex flex-wrap gap-3 py-3">
                    {media.genres &&
                      media.genres.map((genre) => (
                        <span
                          key={genre.id}
                          className="px-3 py-1 bg-gray-200 text-black rounded-full"
                        >
                          {genre.name}
                        </span>
                      ))}
                  </div>

                  <p className="text-[14px] md:text-[16px] lg:text-lg text-gray-200 mb-3">
                    {media.overview}
                  </p>
                  <div className="text-white flex mt-5">
                    <IoMdPlay
                      size={30}
                      className="cursor-pointer"
                      onClick={handlePlayTrailer}
                    />
                    <span className="px-3 py-1 text-[15px]">Watch</span>
                    <RiAddLine
                      size={30}
                      className={`cursor-pointer ${
                        isAdded ? "text-red-500" : ""
                      }`}
                      onClick={handleWatchlistClick}
                    />
                    <span className="px-3 py-1 text-[15px]">
                      {isAdded ? "Remove from Watchlist" : "Add to Watchlist"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="container mx-auto py-5 pt-8">
                {cast.cast && cast.cast.length > 0 && (
                  <div className="mb-6">
                    <h1 className="text-[20px] font-medium text-white mb-4">
                      Cast
                    </h1>
                    <div className="overflow-x-auto space-x-2">
                      <div className="w-fit grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 md:gap-3 lg:gap-4 mb-4 px-5 items-center">
                        {cast.cast &&
                          cast.cast.slice(0, 10).map((castItems) => (
                            <div key={castItems?.id}>
                              <Image
                                src={`${baseUrl}${castItems?.profile_path}`}
                                width={400}
                                height={300}
                                className="w-full
                 md:h-56 h-52 md:w-[150px] object-cover object-center rounded-md sm:hover:scale-105"
                              />
                              <div className="text-center mt-2">
                                <p className="text-sm md:text-base text-gray-200">
                                  {castItems.name}
                                </p>
                                <p className="text-xs md:text-sm text-gray-400">
                                  {castItems.character}
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {similiar.results && similiar.results.length > 0 && (
                <h1 className="text-[17px] md:text-[20px] font-medium mb-6">
                  More like this
                </h1>
              )}

              <div className="w-fit grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 md:gap-3 lg:gap-4 mb-4 px-5 items-center">
                {similiar.results &&
                  similiar?.results.map((result) => (
                    <div key={result?.id}>
                      <Link
                        href={
                          result?.title
                            ? `/movie/${result?.id}`
                            : `/series/${result?.id}`
                        }
                      >
                        <Image
                          src={`${baseUrl}${result?.poster_path}`}
                          width={400}
                          height={300}
                          className="w-full md:h-56 h-52 md:w-[150px] object-cover object-center rounded-md sm:hover:scale-105"
                        />
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <SimpleBottomNavigation />
      </div>
    </>
  );
};

export default MovieInfo;
