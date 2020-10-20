import React from "react";
import SecondComponent from "./SecondComponent";
import "./FirstComponent.css";

function FirstComponent() {
  return (
    <div>
      <h3>I am the first component</h3>
      <SecondComponent />
    </div>
  );
}

export default FirstComponent;
