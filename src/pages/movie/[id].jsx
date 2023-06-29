import React, {  useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import ReactPlayer from "react-player";

import MovieInfo from "../../../components/Pages/MovieInfo";

const MovieDetailPage = ({ movie, more, moviecast }) => {
  const media = { ...movie };
  const similiar = { ...more };
  const cast = { ...moviecast };
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
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      options
    );
    const data = await response.json();

    const trailerIndex = data.results.findIndex(
      (element) => element.type === "Trailer"
    );
    const trailerKey = data.results[trailerIndex]?.key;
    setTrailerKey(trailerKey);
  };

  return (
    <>
      <MovieInfo
        media={media}
        similiar={similiar}
        cast={cast}
        fetchTrailer={fetchTrailer}
      />
      {trailerKey && (
        <div className="fixed inset-0 z-50 flex justify-center items-center w-full">
          <div className="absolute top-[8%] md:w-[1100px] w-[350px] md:h-[500px] h-[200px] ">
            <div className="flex items-center justify-between bg-black text-gray-200 ">
              <span className="font-semibold">Play Trailer</span>
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
    </>
  );
};
export default MovieDetailPage;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTczNDlhMDRkNzE2ZWRhZGM2ZDk4OTRiY2Y4ZTUzMiIsInN1YiI6IjY0MGQ4ZjI0ZTE4ZTNmMDg0MDNhMzg3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iFAFJTiKlBfyiftvzqG6AD3kKL5r1gn0qmG3bgWr7ro",
    },
  };

  try {
    const movieResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      options
    );
    const similarResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      options
    );
    const castResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      options
    );

    if (!movieResponse.ok || !similarResponse.ok) {
      throw new Error("Failed to fetch movie details or similar movies");
    }

    const movie = await movieResponse.json();
    const more = await similarResponse.json();
    const moviecast = await castResponse.json();

    return {
      props: {
        movie,
        more,
        moviecast,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        movie: {},
        more: {},
        moviecast: {},
      },
    };
  }
}

