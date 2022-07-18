import { Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { forwardRef } from "react";
import { Controller, useForm } from "react-hook-form";
import FormInputRating from "./formInputRating";
import FormInputRadio from "./formInputRadio";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import FormInputLocation from "./formInputLocation";

// TODO prefill location input based on location in search bar

const AddReviewForm = forwardRef(({ closeModal }, ref) => {
  const validationSchema = Yup.object().shape({
    location: Yup.string().required("Location is required"),
    summary: Yup.string()
      .required("Summary is required")
      .min(10, "Summary must be at least 10 characters")
      .max(200, "Summary must be at most 200 characters"),
    overall: Yup.number().required("Rating is required"),
    reviewType: Yup.string().required(
      "You are required to indicate if you are a resident or visitor"
    ),
    safety: Yup.number().required("Safety rating is required"),
    transportation: Yup.number().required("Transportation rating is required"),
    infrastructure: Yup.number().required("Infrastructure rating is required"),
    entertainment: Yup.number().required("Entertainment rating is required"),
    food: Yup.number().required("Food and groceries rating is required"),
    wouldStay: Yup.string().required("You need to indicate if you would stay"),
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    // TODO hook up review adding with redux (need to add coords and ID before dispatch)
    console.log("DATA");
    console.log(JSON.stringify(data, null, 2));
    reset();
    closeModal();
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
              <FormInputLocation control={control} error={errors.location} />
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={4}>
            <Grid item xs={4} sx={{ textAlign: "center" }}>
              <FormInputRating
                name="safety"
                control={control}
                // error={errors.safety}
              />
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
                    value: "Yes",
                  },
                  {
                    label: "No",
                    value: "No",
                  },
                ]}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" marginBottom={"1rem"}>
              summary:{" "}
            </Typography>
            <TextField
              name={"summary"}
              label={"a short summary review of the location..."}
              fullWidth
              multiline
              rows={4}
              {...register("summary")}
              error={errors.summary ? true : false}
              helperText={errors.summary?.message}
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
