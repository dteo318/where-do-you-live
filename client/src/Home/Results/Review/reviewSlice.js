import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSelected: {
    10001: false,
  },
  data: [
    {
      id: 10001,
      coords: {
        lat: 33.71893894786393,
        lng: -117.78470183068126,
      },
      location: "Irvine, CA",
      overall: 9.0,
      reviewType: "Resident",
      safety: 9.5,
      transportation: 5.0,
      infrastructure: 9.5,
      entertainment: 6.5,
      food: 7.5,
      wouldStay: "Yes",
      summary:
        "Great place to raise a family! A safe and clean place to stay. Very organized with multiple villages which are basically planned areas with homes and amenities.",
    },
  ],
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    addReview: (state, action) => {
      // Adding new review to data state
      state.data.push(action.payload);
      // Adding isSelected state for new review
      state.isSelected[action.payload.id] = false;
    },
    toggleReview: (state, action) => {
      // Toggling isSelected state for selected review
      state.isSelected[action.payload] = !state.isSelected[action.payload];
    },
    // TODO - add reducer for removing review
    // TODO - add reducer for updating review
  },
});

export const { addReview, toggleReview } = reviewSlice.actions;

export default reviewSlice.reducer;
