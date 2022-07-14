import React from "react";
import { Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import Navbar from "./components/navbar";
import Map from "./components/map";

// Material UI Fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function App() {
  return (
    <div>
      <CssBaseline>
        <Navbar />
        <Routes>
          <Route path="/map" element={<Map />} />
        </Routes>
      </CssBaseline>
    </div>
  );
}
