import { React } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleReview } from "./reviewSlice";
import { setLocation } from "../Map/mapSlice";

const Review = ({ reviewData, reviewIdx }) => {
  const isSelected = useSelector(
    (state) => state.review.isSelected[reviewData.id]
  );
  const dispatch = useDispatch();

  const expandReview = () => {
    // Toggle review modal
    dispatch(toggleReview(reviewData.id));
    // Center the map on the clicked review location/marker
    dispatch(setLocation(reviewData.coords));
  };

  // const minimizeReview = () => {
  //   setSelectedReview((prevState) => ({
  //     ...prevState,
  //     [reviewData.id]: false,
  //   }));
  // };

  return (
    <div>
      <Paper
        onClick={expandReview}
        sx={{
          padding: (theme) => theme.spacing(1.5, 3.5, 1.5),
          minWidth: "100%",
          margin: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#f2f2f2",
          border: isSelected ? "2px solid gray" : "none",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Typography variant="h6">
              {reviewIdx} | {reviewData.location}
            </Typography>
            <Typography variant="body2" marginTop="0.5rem">
              {reviewData.summary}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5">{reviewData.overall}</Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* OnClick Modal to view more review details */}
      <Modal
        open={isSelected}
        onClose={() => dispatch(toggleReview(reviewData.id))}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ReviewModal reviewData={reviewData} />
      </Modal>
    </div>
  );
};

const ReviewModal = forwardRef(({ reviewData }, ref) => {
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
              <Typography variant="body1">{reviewData.wouldStay}</Typography>
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
              {reviewData.overall}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">{reviewData.summary}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
});

export default Review;
