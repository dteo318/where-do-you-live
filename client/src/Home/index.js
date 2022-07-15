import React from "react";
import Box from "@mui/material/Box";
import SearchBar from "./SearchBar";
import Results from "./Results";

const Home = () => {
  return (
    <Box
      spacing={3}
      sx={{
        width: "100%",
        paddingLeft: "4rem",
        paddingRight: "4rem",
        paddingTop: "2rem",
      }}
    >
      <SearchBar />
      <Results />
    </Box>
  );
};

export default Home;
