import * as React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Autocomplete } from "@react-google-maps/api";
import { useDispatch } from "react-redux";
import { setLocation } from "../Results/Map/mapSlice";

const SearchBar = ({ isLoaded }) => {
  const dispatch = useDispatch();
  const [autocomplete, setAutocomplete] = React.useState(null);

  const onLoad = (autocompleteObj) => {
    setAutocomplete(autocompleteObj);
  };

  const onEnterPressed = (e) => {
    if (e.code === "Enter") {
      console.log("Enter pressed");
    }
  };

  const onPlaceChanged = () => {
    try {
      const place = autocomplete.getPlace();
      console.log("Place changed: ", place);
      dispatch(
        setLocation({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        })
      );
    } catch (e) {
      console.log("Invalid location");
      // TODO - get first suggestion on enter pressed
    }
  };

  return (
    <Search>
      <SearchIconWrapper>
        <LocationOnIcon />
      </SearchIconWrapper>
      {isLoaded ? (
        <Autocomplete
          onLoad={onLoad}
          onPlaceChanged={onPlaceChanged}
          autoHighlight={true}
        >
          <StyledInputBase
            placeholder="Search for a location…"
            inputProps={{ "aria-label": "search" }}
            autoFocus={true}
            onKeyPress={onEnterPressed}
          />
        </Autocomplete>
      ) : (
        <StyledInputBase
          placeholder="Search for a location…"
          inputProps={{ "aria-label": "search" }}
          autoFocus={true}
          onKeyPress={onEnterPressed}
        />
      )}
    </Search>
  );
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#f2f2f2",
  width: "100%",
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

export default SearchBar;
