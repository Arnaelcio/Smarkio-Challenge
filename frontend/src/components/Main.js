import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";

function Main() {
  return (
    <main>
      <Route exact path="/" component={Home} />
    </main>
  );
}

export default Main;
