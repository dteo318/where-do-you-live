import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button, Typography } from "@mui/material";
import { Autocomplete } from "@react-google-maps/api";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#f2f2f2",
  width: "80%",
  height: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  padding: theme.spacing(1.5, 1, 1, 0),
  // vertical padding + font size from searchIcon
  paddingLeft: `calc(1em + ${theme.spacing(5)})`,
}));

export default function SearchBar({ isLoaded }) {
  const [autocomplete, setAutocomplete] = React.useState(null);

  const onLoad = (autocompleteObj) => {
    console.log("Autocomplete loaded: ", autocompleteObj);
    setAutocomplete(autocompleteObj);
  };

  const onPlaceChanged = () => {
    const place = autocomplete.getPlace();
    console.log("Place changed: ", place);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Search>
        <SearchIconWrapper>
          <LocationOnIcon />
        </SearchIconWrapper>
        {isLoaded ? (
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <StyledInputBase
              placeholder="Search for a location…"
              inputProps={{ "aria-label": "search" }}
            />
          </Autocomplete>
        ) : (
          <StyledInputBase
            placeholder="Search for a location…"
            inputProps={{ "aria-label": "search" }}
          />
        )}
      </Search>
      <Button variant="outlined">
        <Typography variant="button">GO</Typography>
      </Button>
    </Box>
  );
}
