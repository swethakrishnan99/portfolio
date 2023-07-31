import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="App relative">
      {/* <CustomCursor /> */}
      <Home />
    </div>
  );
}

export default App;
