import React, { useState } from "react";
import Box from "@mui/material/Box";
import SearchBar from "./SearchBar";
import Results from "./Results";
import { useJsApiLoader } from "@react-google-maps/api";

const Home = () => {
  // TODO - use useJsApiLoader to load the Google Maps API in Redux
  const [libraries] = useState(["places"]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDeH_zNnYAE6tXaWtsYFWBCH2UjTx-RTPw",
    libraries: libraries,
  });

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
      <SearchBar isLoaded={isLoaded} />
      <Results isLoaded={isLoaded} />
    </Box>
  );
};

export default Home;
