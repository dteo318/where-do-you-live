import { React, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ReviewModal from "./reviewModal";

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

export default function Review() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const expandReview = () => {
    setIsOpenModal(true);
  };

  const minimizeReview = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      <Paper
        onClick={expandReview}
        sx={{
          p: 2,
          minWidth: "100%",
          margin: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#f2f2f2",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Typography variant="h5">{testData.location}</Typography>
            <Typography variant="body2" marginTop="0.5rem">
              {testData.summary}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h4">{testData.rating}</Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* OnClick Modal to view more review details */}
      <Modal
        open={isOpenModal}
        onClose={minimizeReview}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ReviewModal reviewData={testData} />
      </Modal>
    </div>
  );
}
