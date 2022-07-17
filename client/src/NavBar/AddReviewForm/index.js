import { Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { forwardRef } from "react";
import { Controller, useForm } from "react-hook-form";
import FormInputRating from "./formInputRating";
import FormInputRadio from "./formInputRadio";

// TODO prefill location input based on location in search bar
// TODO validate form before submission
// TODO hook up review adding with redux
const AddReviewForm = forwardRef((props, ref) => {
  const { handleSubmit, reset, control } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Paper
      sx={{
        width: "50%",
        backgroundColor: (theme) => theme.palette.background.paper,
        padding: (theme) => theme.spacing(3, 4, 3),
        boxShadow: (theme) => theme.shadows[5],
        border: "2px solid gray",
      }}
    >
      <form>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant="h4">Add a Location Review</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={2}>
              <Typography variant="h6">Location: </Typography>
            </Grid>
            <Grid item xs={10}>
              <Controller
                name={"locationInput"}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    onChange={onChange}
                    value={value || ""}
                    label={"review location..."}
                    fullWidth
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={4}>
            <Grid item xs={4} sx={{ textAlign: "center" }}>
              <FormInputRating name="safety" control={control} />
            </Grid>
            <Grid item xs={4} sx={{ textAlign: "center" }}>
              <FormInputRating name="transportation" control={control} />
            </Grid>
            <Grid item xs={4} sx={{ textAlign: "center" }}>
              <FormInputRating name="infrastructure" control={control} />
            </Grid>
            <Grid item xs={4} sx={{ textAlign: "center" }}>
              <FormInputRating name="entertainment" control={control} />
            </Grid>
            <Grid item xs={4} sx={{ textAlign: "center" }}>
              <FormInputRating name="food" control={control} />
            </Grid>
            <Grid item xs={4} sx={{ textAlign: "center" }}>
              <FormInputRating name="overall" control={control} />
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={5}>
            <Grid item xs={6}>
              <FormInputRadio
                heading="are you a resident? "
                name="reviewType"
                control={control}
                options={[
                  {
                    label: "Yes",
                    value: "Resident",
                  },
                  {
                    label: "No",
                    value: "Visitor",
                  },
                ]}
              />
            </Grid>
            <Grid item xs={6}>
              <FormInputRadio
                heading="would you live here? "
                name="wouldStay"
                control={control}
                options={[
                  {
                    label: "Yes",
                    value: true,
                  },
                  {
                    label: "No",
                    value: false,
                  },
                ]}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" marginBottom={"1rem"}>
              summary:{" "}
            </Typography>
            <Controller
              name={"summaryInput"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  onChange={onChange}
                  value={value || ""}
                  label={"a short summary review of the location..."}
                  fullWidth
                  multiline
                  rows={4}
                />
              )}
            />
          </Grid>
          <Grid
            item
            xs={12}
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={6} sx={{ textAlign: "center" }}>
              <Button onClick={() => reset()} variant="outlined">
                Reset
              </Button>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "center" }}>
              <Button onClick={handleSubmit(onSubmit)} variant="contained">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
});

export default AddReviewForm;
