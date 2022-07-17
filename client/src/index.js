import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./App/store.js";

const root = createRoot(document.getElementById("root"));

root.render(
  // Removed React.StrictMode() so markers will be rendered (google maps api issue)
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
