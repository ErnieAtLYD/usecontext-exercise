import React from "react";
import ComponentNeedingProps from "./ComponentNeedingProps";
import "./ThirdComponent.css";

function ThirdComponent() {
  return (
    <div>
      <h3>I am the third component</h3>
      <ComponentNeedingProps />
    </div>
  );
}

export default ThirdComponent;
