import React from "react";

// [ ] Create the context using React.createContext().
//     Call it AppContext. You'll want to preface
//     it with the "export" keyword.

export const AppContext = React.createContext();

// Create an AppContextProvider component that does
// the following:
// [ ] Render your context Provider -
//     AppContext.Provider - with the value
//     assigned, and forward all the other props.
//     NOTE: Specficially, we'll need to also forward
//     the children prop.
// [ ] Preface the function with the export keyword,
//     just like you did with AppContext

export function AppContextProvider(props) {
  // you can also do the following
  // return <AppContext.Provider {...props} />;
  return (
    <AppContext.Provider value={props.value}>
      {props.children}
    </AppContext.Provider>
  );
}

// NOTE: We won't be using export default this time
// around, because we'll want to export two things;
// AppContext and AppContextProvider.
