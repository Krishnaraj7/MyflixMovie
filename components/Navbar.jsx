import logo from "../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { baseUrl } from "@/utils/requests";
import Search from "./Search";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const inputRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowInput(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchClick = () => {
    setShowInput(!showInput);
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
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between transition-all">
      <div
        className={`container flex justify-between items-center w-full h-[78px] px-3 py-3 ${
          scroll &&
          "bg-gradient-to-b from-[#060911] to-[#121f3d] shadow-gray-800"
        }`}
      >
        <div className="relative flex items-center space-x-2 md:space-x-10">
          <Link href="/">
            <Image src={logo} className="h-auto md:w-[140px] w-[90px]" />
          </Link>
          <ul className="hidden space-x-4 md:flex">
            <Link href="/">
              <li className="headerLink cursor-pointer font-semibold">Home</li>
            </Link>
            <Link href="/movies">
              <li className="headerLink">Movies</li>
            </Link>
            <Link href="/series">
              <li className="headerLink">Series</li>
            </Link>
            <Link href="/new&popular">
              <li className="headerLink">New & Popular</li>
            </Link>
            <Link href="/watchlist">
              <li className="headerLink">Watchlist</li>
            </Link>
          </ul>
        </div>
        <div className="flex items-center space-x- pr-4 gap-4 ">
          <Search />
          <Link href="/login">
            <CiUser className="w-6 h-6  sm:inline hover:scale-110 duration-300" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
