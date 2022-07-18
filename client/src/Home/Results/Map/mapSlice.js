import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoaded: false,
  location: {
    lat: 33.71740163743674,
    lng: -117.78066009721049,
  },
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setIsLoaded: (state, action) => {
      state.isLoaded = action.payload;
    },
  },
});

export const { setLocation, setIsLoaded } = mapSlice.actions;

export default mapSlice.reducer;
