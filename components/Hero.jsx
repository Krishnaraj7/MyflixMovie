import React, { useEffect, useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import ReactPlayer from "react-player";

import MovieDetails from "./MovieDetails";
import SimpleBottomNavigation from "./BottomNav";

const Hero = ({ movieposter }) => {
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);

  const fetchTrailer = async (movieId) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTczNDlhMDRkNzE2ZWRhZGM2ZDk4OTRiY2Y4ZTUzMiIsInN1YiI6IjY0MGQ4ZjI0ZTE4ZTNmMDg0MDNhMzg3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iFAFJTiKlBfyiftvzqG6AD3kKL5r1gn0qmG3bgWr7ro",
      },
    };

    const mediaType = movie?.media_type === "movie" ? "movie" : "tv";
    const response = await fetch(
      `https://api.themoviedb.org/3/${mediaType}/${movieId}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      options
    );
    const data = await response.json();

    const trailerIndex = data.results.findIndex(
      (element) => element.type === "Trailer"
    );
    const trailerKey = data.results[trailerIndex]?.key;
    setTrailerKey(trailerKey);
  };

  useEffect(() => {
    const mov = movieposter[Math.floor(Math.random() * movieposter.length)];
    setMovie(mov);

    const interval = setInterval(() => {
      const mov = movieposter[Math.floor(Math.random() * movieposter.length)];
      setMovie(mov);
    }, 10000);

    return () => clearInterval(interval);
  }, [movieposter]);

  return (
    <>
      <MovieDetails movie={movie} fetchTrailer={fetchTrailer} />
      {trailerKey && (
        <div className="fixed inset-0 z-50 flex justify-center items-center w-full">
          <div className="absolute top-[8%] md:w-[1100px] w-[350px] md:h-[500px] h-[200px] ">
            <div className="flex items-center justify-between bg-black text-gray-400 ">
              <span className="font-semibold">Trailer</span>
              <div
                className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]"
                onClick={() => setTrailerKey(null)}
              >
                <AiOutlineClose className="h-5" />
              </div>
            </div>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${trailerKey}`}
              width="100%"
              height="100%"
              controls
              className=" object-cover"
            />
          </div>
        </div>
      )}
      <div className="mt-16">
        <SimpleBottomNavigation />
      </div>
    </>
  );
};

export default Hero;
