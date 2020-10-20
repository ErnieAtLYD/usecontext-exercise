import React from "react";
import ThirdComponent from "./ThirdComponent";
import "./SecondComponent.css";

function SecondComponent() {
  return (
    <div>
      <h3>I am the second component</h3>
      <ThirdComponent />
    </div>
  );
}

export default SecondComponent;
