import React, { useContext, useEffect } from "react";
import { WatchlistContext } from "../../components/Pages/Watchlistcontext";
import Navbar from "../../components/Navbar";
import Watchlist from "../../components/Pages/Watchlist";
import SimpleBottomNavigation from "../../components/BottomNav";

const WatchlistPage = () => {
  const { watchlist } = useContext(WatchlistContext);

  return (
    <>
      <Navbar />
      <div className="space-y-10 md:space-y-10 mb-7  ">
        <h1 className=" text-center mt-20 text-[23px] ">Watchlist</h1>

        {watchlist.length === 0 ? (
          <p className=" text-center">Your watchlist is empty.</p>
        ) : (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  items-center mt-20 lg:px-5 px-5  ">
            {watchlist.map((item) => (
              <div>
                <Watchlist
                  key={item.id}
                  movieid={item.id}
                  title={item.title || item.name}
                  name={item.title}
                  poster={item.poster_path || item.backdrop_path}
                  mediaType={item.media_type}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-16">
        <SimpleBottomNavigation />
      </div>
    </>
  );
};

export default WatchlistPage;
