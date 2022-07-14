import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Review from "./review";

export default function ReviewResult(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h5">Location Reviews</Typography>
      <Box
        sx={{
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
          maxHeight: "70vh",
          gap: "1rem",
        }}
      >
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </Box>
    </Box>
  );
}
