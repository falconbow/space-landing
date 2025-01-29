import React from "react";
import { Navbar } from "./Navbar/Navbar";
import "./App.scss";
import { Grid } from "./Grid/Grid";
import { Title } from "./Title/Title";
import { Description } from "./Decription/Description";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Grid />
      <Description />
    </div>
  );
};

export default App;
