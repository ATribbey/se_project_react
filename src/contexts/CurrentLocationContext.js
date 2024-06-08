import React from "react";

const CurrentLocationContext = React.createContext({
  currentLocation: { lat: 26.2517, long: -80.1789 },
});

export { CurrentLocationContext };
