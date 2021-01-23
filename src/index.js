import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./pages/ScrollToTop";

ReactDOM.render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>,
  document.getElementById("root")
);
