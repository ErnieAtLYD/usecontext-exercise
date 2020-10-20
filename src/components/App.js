import React from "react";
import FirstComponent from "./FirstComponent";
import "./App.css";

/**
 * Your goal: This code as-is, is wrong. Edit this
 * code so that when when it's run, the content
 * variable's value is rendered, BUT IT'S RENDERED
 * FROM the <ComponentNeedingProps /> component.
 * It means that we'll have to pass the values of
 * a prop from one component to another via
 * its props.
 */
function App() {
  const content = "Who needs me?";
  return (
    <div className="App">
      <FirstComponent content={content} />
    </div>
  );
}

export default App;
