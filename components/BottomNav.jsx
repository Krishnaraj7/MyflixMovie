import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { MdBookmarkAdd, MdMovie, MdLiveTv, MdWhatshot } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

export default function SimpleBottomNavigation() {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className=" mt-10">
      {isSmallScreen && ( // Render the bottom navigation only on small screens
        <Box>
          <BottomNavigation
            style={{ backgroundColor: "#0E1222" }}
            className="fixed bottom-0 z-50 w-full px-8  "
            showLabels
          >
            <BottomNavigationAction
              href="/"
              icon={<AiFillHome size={30} />}
              label="Home"
              style={{ color: "#FFFFFF" }}
              className=" hover:scale-110 text-sm"
            />
            <BottomNavigationAction
              href="/movies"
              icon={<MdMovie size={30} />}
              label="Movies"
              style={{ color: "#FFFFFF" }}
              className=" hover:scale-110"
            />
            <BottomNavigationAction
              href="/series"
              icon={<MdLiveTv size={30} />}
              label="Series"
              style={{ color: "#FFFFFF", size: "30" }}
              className=" hover:scale-110"
            />
            <BottomNavigationAction
              href="/new&popular"
              icon={<MdWhatshot size={30} />}
              label="New"
              style={{ color: "#FFFFFF", size: "30" }}
              className=" hover:scale-110"
            />
            <BottomNavigationAction
              href="/watchlist"
              icon={<MdBookmarkAdd size={30} />}
              label="Watchlist"
              style={{ color: "#FFFFFF" }}
              className=" hover:scale-110"
            />
          </BottomNavigation>
        </Box>
      )}
    </div>
  );
}
