import { forwardRef } from "react";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const ReviewModal = ({ reviewData }, ref) => {
  return (
    <Paper
      sx={{
        width: "50%",
        backgroundColor: (theme) => theme.palette.background.paper,
        padding: (theme) => theme.spacing(2, 4, 3),
        boxShadow: (theme) => theme.shadows[5],
        border: "2px solid gray",
      }}
    >
      <Grid container spacing={5}>
        <Grid item xs={8} container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h2">{reviewData.location}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">{reviewData.reviewType}</Typography>
          </Grid>
          <Grid item xs={12} container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h6">Safety:</Typography>
              <Typography variant="body1">{reviewData.safety}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Transportation:</Typography>
              <Typography variant="body1">
                {reviewData.transportation}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Infrastructure:</Typography>
              <Typography variant="body1">
                {reviewData.infrastructure}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Entertainment:</Typography>
              <Typography variant="body1">
                {reviewData.entertainment}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Food:</Typography>
              <Typography variant="body1">{reviewData.food}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Would you stay?:</Typography>
              <Typography variant="body1">
                {reviewData.wouldStay ? "Yes" : "No"}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={4}
          container
          spacing={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography variant="h1" align="center">
              {reviewData.rating}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">{reviewData.summary}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default forwardRef(ReviewModal);
