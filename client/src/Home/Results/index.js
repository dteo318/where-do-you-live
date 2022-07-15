import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Review from "./review";
import Map from "./map";

let testData = {
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
};

const Results = () => {
  return (
    <Grid container spacing={3} marginTop={1}>
      <Grid item xs={12} sm={7} md={9}>
        <Map />
      </Grid>
      <Grid item xs={12} sm={5} md={3}>
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
            <Review reviewData={testData} />
            <Review reviewData={testData} />
            <Review reviewData={testData} />
            <Review reviewData={testData} />
            <Review reviewData={testData} />
            <Review reviewData={testData} />
            <Review reviewData={testData} />
            <Review reviewData={testData} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Results;
