import React from "react";
import FirstComponent from "./FirstComponent";
import { AppContextProvider } from "./AppContextProvider";
import "./App.css";

// [x] Create a new component file called
//     AppContextProvider. We did this for you.
// [ ] Import AppContextProvider using the import
//     statement.
// [ ] Follow any instructions in AppContextProvider.

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
      <AppContextProvider value={content}>
        <FirstComponent />
      </AppContextProvider>
    </div>
  );
}

export default App;
