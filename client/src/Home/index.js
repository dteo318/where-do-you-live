import React from "react";
import Box from "@mui/material/Box";
import SearchBar from "./SearchBar";
import Results from "./Results";

const testCenter = {
  lat: 33.71740163743674,
  lng: -117.78066009721049,
};

const testData = [
  {
    id: 10001,
    coords: {
      lat: 33.71893894786393,
      lng: -117.78470183068126,
    },
    location: "Irvine, CA",
    rating: 9.0,
    reviewType: "Resident",
    safety: 9.5,
    transportation: 5.0,
    infrastructure: 9.5,
    entertainment: 6.5,
    food: 7.5,
    wouldStay: true,
    summary:
      "Great place to raise a family! A safe and clean place to stay. Very organized with multiple villages which are basically planned areas with homes and amenities.",
  },
];

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
      <Results resultsData={testData} center={testCenter} />
    </Box>
  );
};

export default Home;
