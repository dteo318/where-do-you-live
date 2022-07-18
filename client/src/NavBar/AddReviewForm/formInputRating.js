import { Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Controller } from "react-hook-form";

const FormInputRating = ({ control, name }) => {
  return (
    <div>
      <Typography component="legend" variant="h6">
        {name}
      </Typography>
      <Controller
        name={`${name}`}
        control={control}
        defaultValue={2.5}
        render={({ field }) => (
          <Rating
            {...field}
            name={name}
            precision={0.5}
            value={Number(field.value)}
          />
        )}
      />
    </div>
  );
};

export default FormInputRating;
