import React from "react";
import "./ComponentNeedingProps.css";
// [ ] Import AppContext using the import
//     statement.
//     NOTE: Do you notice there are TWO
//     export statements AppContextProvider,
//     NO reference to export default? In
//     that case, if we're only getting
//     AppContext out of the two modules,
//     we can do this:
//     import { AppContext } from [some path]
import { AppContext } from "../providers/AppContextProvider";

function ComponentNeedingProps() {
  // [ ] Get the value of content from useContext with the AppContext.
  const content = React.useContext(AppContext);
  // const content = '';

  return <h3>{content}</h3>;
}

export default ComponentNeedingProps;
