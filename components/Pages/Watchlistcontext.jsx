import React, { createContext, useState, useEffect } from "react";

export const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    // Check if localStorage is available (client-side)
    if (typeof window !== "undefined") {
      const storedWatchlist = localStorage.getItem("watchlist");
      const parsedWatchlist = storedWatchlist
        ? JSON.parse(storedWatchlist)
        : [];
      setWatchlist(parsedWatchlist);
    }
  }, []);

  const addToWatchlist = (item) => {
    setWatchlist((prevWatchlist) => {
      const updatedWatchlist = [...prevWatchlist, item];
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
      return updatedWatchlist;
    });
  };

  const removeFromWatchlist = (itemId) => {
    setWatchlist((prevWatchlist) => {
      const updatedWatchlist = prevWatchlist.filter(
        (item) => item.id !== itemId
      );
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
      return updatedWatchlist;
    });
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlist, addToWatchlist, removeFromWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};
