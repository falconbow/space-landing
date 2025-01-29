import React from "react";
import { Navbar } from "./Navbar/Navbar";
import { Description } from "./Description/Description";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Description />
    </div>
  );
};

export default App;
