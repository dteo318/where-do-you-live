import React from "react";
import { Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import Navbar from "../NavBar";
import Home from "../Home";

import { useDispatch } from "react-redux";
import { useJsApiLoader } from "@react-google-maps/api";
import { useState, useEffect } from "react";
import { setIsLoaded } from "../Home/Results/Map/mapSlice";

import { ThemeProvider, createTheme } from "@mui/material/styles";

// Material UI Fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      .pac-container {
        z-index: 9999;
      }
      `,
    },
  },
});

export default function App() {
  // Loading Google Maps API with useJsApiLoader hook from react-google-maps
  const dispatch = useDispatch();
  const [libraries] = useState(["places"]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDeH_zNnYAE6tXaWtsYFWBCH2UjTx-RTPw",
    libraries: libraries,
  });

  useEffect(() => {
    dispatch(setIsLoaded(isLoaded));
  }, [isLoaded, dispatch]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Navbar />
          <Routes>
            <Route path="" element={<Home />} />
          </Routes>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}
