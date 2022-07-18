import { useState } from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { Autocomplete } from "@react-google-maps/api";
import { useSelector } from "react-redux";

const FormInputLocation = ({ control, error }) => {
  const isLoaded = useSelector((state) => state.map.isLoaded);
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autocompleteObj) => {
    setAutocomplete(autocompleteObj);
  };

  // const onEnterPressed = (e) => {
  //   if (e.code === "Enter") {
  //     console.log("Enter pressed");
  //   }
  // };

  const getShortLoc = () => {
    let location = "";

    const placeAddressComponents = autocomplete.getPlace().address_components;
    for (let i = 0; i < placeAddressComponents.length; i++) {
      if (
        placeAddressComponents[i].types[0] === "locality" ||
        placeAddressComponents[i].types[0] === "administrative_area_level_1"
      ) {
        if (location) {
          location = location.concat(
            ", ",
            placeAddressComponents[i].short_name
          );
        } else {
          location = placeAddressComponents[i].short_name;
        }
      }
    }

    return location;
  };

  return (
    <Controller
      name={"location"}
      control={control}
      defaultValue=""
      render={({ field }) =>
        isLoaded ? (
          <Autocomplete
            onLoad={onLoad}
            onPlaceChanged={(_, data) => {
              field.onChange(getShortLoc());
            }}
            autoHighlight={true}
            {...field}
          >
            <TextField
              name="location"
              error={error ? true : false}
              label={"enter review location..."}
              fullWidth
              helperText={error?.message}
            />
          </Autocomplete>
        ) : (
          <TextField
            name="location"
            error={error ? true : false}
            label={"enter review location..."}
            fullWidth
            helperText={error?.message}
            {...field}
          />
        )
      }
    />
  );
};

export default FormInputLocation;
