import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

import Home from "./Home";
import Blog from "./Blog";
import About from "./About";
import DetailBlog from "./DetailBlog";
import Error from "./Error";
import ProfileDetail from "./ProfileDetail";

function App() {
  return (
    <>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Blog} path="/artikel/:blogId" />
        <Route component={ProfileDetail} path="/profile-pengajar/:profile" />
        <Route component={DetailBlog} path="/:artikel/:detailArtikel" />
        <Route component={About} path="/about" />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
