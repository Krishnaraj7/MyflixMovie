import { Pagination } from "@mui/material";
import React from "react";
import { blue } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: blue[900],
    },
  },
});

const CustomPagination = ({ totalPages, setPage }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div>
      <div className="flex justify-center mt-10 ">
        <ThemeProvider theme={theme}>
          <Pagination
            count={500}
            color="primary"
            onChange={(e) => handlePageChange(e.target.textContent)}
            hideNextButton
            hidePrevButton
          />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default CustomPagination;
