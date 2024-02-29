import React from "react";

const CurrentTemperatureUnitContext = React.createContext({
  currentTempUnit: "",
  handleToggleSwitchChange: () => {},
});

export { CurrentTemperatureUnitContext };
