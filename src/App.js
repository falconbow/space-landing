import React from "react";
import { Navbar } from "./Navbar/Navbar";
import { Description } from "./Description/Description";
import "./App.scss";
import { Grid } from "./Grid/Grid";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Description />
      <Grid />
    </div>
  );
};

export default App;
