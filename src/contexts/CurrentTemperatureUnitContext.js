import React from "react";

const CurrentTempUnitContext = React.createContext({
  currentTempUnit: "",
  handleToggleSwitchChange: () => {},
});

export { CurrentTempUnitContext };
