import React from "react";

const CurrentUserContext = React.createContext({
  currentUser: "",
  handleUserChange: () => {},
});

export { CurrentUserContext };
