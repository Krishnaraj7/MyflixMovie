import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { baseUrl } from "@/utils/requests";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import SimpleBottomNavigation from "../../components/BottomNav";

export default function SearchResultPage() {
  const router = useRouter();
  const { query } = router.query; // Get the query parameter from the URL

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTczNDlhMDRkNzE2ZWRhZGM2ZDk4OTRiY2Y4ZTUzMiIsInN1YiI6IjY0MGQ4ZjI0ZTE4ZTNmMDg0MDNhMzg3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iFAFJTiKlBfyiftvzqG6AD3kKL5r1gn0qmG3bgWr7ro",
          },
        };
        const res = await fetch(
          `https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${query}&page=1&include_adult=false`,
          options
        );
        const data = await res.json();

        setSearchResults(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  return (
    <>
      <Navbar />
      <div className="pt-24">
        <h1 className=" text-xl  font-bold mb-4">
          Search Results for "{query}"
        </h1>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  items-center mt-10 lg:px-5 px-5 ">
          {searchResults &&
            searchResults.map((result) => (
              <Link
                href={
                  result?.title
                    ? `/movie/${result?.id}`
                    : `/series/${result?.id}`
                }
              >
                <div key={result.id}>
                  <Image
                    src={`${baseUrl}${result.poster_path}`}
                    alt={result.title || result.name}
                    width={200}
                    height={250}
                    className="object-cover rounded transition duration-300 ease-in-out transform group-hover:scale-105 hover:scale-105  "
                  />
                  <p
                    className="text-[11px] font-medium
  
  md:hidden text-center "
                  >
                    {result.title || result.name}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
      <div className="mt-16">
        <SimpleBottomNavigation />
      </div>
    </>
  );
}
