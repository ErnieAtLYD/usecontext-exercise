import React from "react";
import FirstComponent from "./FirstComponent";
import "./App.css";

// [x] Create a new component file called
//     AppContextProvider, in a directory called
//     providers.We did this for you.
// [ ] Import AppContextProvider using the import
//     statement. (Don't forget: different directory!)
//     NOTE: we may need to import things a little different,
//     since we're not using export default in AppContextProvider.js.
// [ ] Follow any instructions in ../providers/AppContextProvider.

function App() {
  const content = "Who needs me?";
  return (
    <div className="App">
      {/* [ ] Wrap the line below with the
              AppContextProvider component.
          [ ] You'll want to pass a prop named "value"
              in that component as well with the
              data that you want your components
              to have access to.
          [ ] Go to your ComponentNeedingProps
              component and follow the instructions
              there.
      */}
      <FirstComponent />
    </div>
  );
}

export default App;
