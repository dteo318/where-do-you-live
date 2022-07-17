import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import Review from "./Review";
import Map from "./Map";

const Results = ({ isLoaded }) => {
  const reviewData = useSelector((state) => state.review.data);

  return (
    <Grid container spacing={3} marginTop={1}>
      <Grid item xs={12} sm={7} md={9}>
        <Map isLoaded={isLoaded} />
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
            {reviewData.map((data, idx) => (
              <Review reviewData={data} reviewIdx={idx + 1} key={data.id} />
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Results;
