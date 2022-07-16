import { Controller } from "react-hook-form";
import { FormControlLabel, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

const FormInputRadio = ({ heading, name, control, options }) => {
  const generateRadioOptions = () => {
    return options.map((singleOption, idx) => (
      <FormControlLabel
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
        key={idx}
      />
    ));
  };

  return (
    <div>
      <Typography variant="h6" align="center">
        {heading}
      </Typography>
      <Controller
        name={`${name}Input`}
        control={control}
        render={({ field: { onChange, value } }) => (
          <RadioGroup
            value={value || ""}
            onChange={onChange}
            row
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            {generateRadioOptions()}
          </RadioGroup>
        )}
      />
    </div>
  );
};

export default FormInputRadio;
