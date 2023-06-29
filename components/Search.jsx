import { baseUrl } from "@/utils/requests";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useEffect } from "react";
import { useState } from "react";

export default function Search() {
  const [isHovered, setIsHovered] = useState(false);

  const imageOpacity = isHovered ? "opacity-70" : "opacity-100";
  const textOpacity = isHovered ? "opacity-100" : "opacity-0";

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowInput(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchClick = () => {
    if (query.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(query.trim())}`);
    } else {
      setShowInput(!showInput);
    }
  };

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${query}&page=1&include_adult=false`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };
  const handleMovieClick = (mediaType, id) => {
    setShowInput(false);
    router.push(mediaType === "movie" ? `/movie/${id}` : `/series/${id}`);
  };

  return (
    <>
      {showInput && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            searchMovies(e);
            router.push(`/search?query=${encodeURIComponent(query)}`);
          }}
        >
          <input
            type="text"
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search ..."
            className="border border-gray-300 bg-transparent p-1 outline-none w-[150px] sm:w-[300px] focus:border-gray-500 transition-all duration-300"
          />
        </form>
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 text-lg sm:inline hover:scale-110 duration-300 cursor-pointer "
        onClick={handleSearchClick}
        type="submit"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </>
  );
}
