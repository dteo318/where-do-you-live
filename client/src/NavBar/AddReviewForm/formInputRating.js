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
        name={`${name}Input`}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Rating
            name={name}
            precision={0.5}
            value={Number(value) || 0}
            onChange={onChange}
          />
        )}
      />
    </div>
  );
};

export default FormInputRating;
