import React from "react";
import { Navbar } from "./Navbar/Navbar";
import "./App.scss";
import { Grid } from "./Grid/Grid";
import { Title } from "./Title/Title";
import { Description } from "./Decription/Description";
import { Footer } from "./Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Grid />
      <Description />
      <Footer />
    </div>
  );
};

export default App;
