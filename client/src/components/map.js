import React from "react";
import { Grid } from "@mui/material";
import SearchBar from "./searchBar";
import MapResults from "./mapResults";
import ReviewResult from "./reviewResult";

export default function Map() {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        width: "100%",
        paddingLeft: "4rem",
        paddingRight: "4rem",
        paddingTop: "2rem",
      }}
    >
      <Grid item xs={12}>
        <SearchBar />
      </Grid>
      <Grid item xs={12} sm={7} md={9}>
        <MapResults />
      </Grid>
      <Grid item xs={12} sm={5} md={3}>
        <ReviewResult />
      </Grid>
    </Grid>
  );
}
