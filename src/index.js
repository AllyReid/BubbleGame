import React from "react";
import ReactDOM from "react-dom";
import Stage from "./stage";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Stage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
