import { configureStore } from "@reduxjs/toolkit";
import reviewReducer from "../Home/Results/Review/reviewSlice";
import mapReducer from "../Home/Results/Map/mapSlice";

export const store = configureStore({
  reducer: {
    review: reviewReducer,
    map: mapReducer,
  },
});
