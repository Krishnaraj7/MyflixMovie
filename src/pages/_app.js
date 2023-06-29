import "@/styles/globals.css";

import React from "react";
import { WatchlistProvider } from "../../components/Pages/Watchlistcontext";

const MyApp = ({ Component, pageProps }) => {
  return (
    <WatchlistProvider>
      <Component {...pageProps} />
    </WatchlistProvider>
  );
};

export default MyApp;
