import React, { useContext } from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className="toggleswitch">
      <input
        className="toggleswitch__checkbox"
        type="checkbox"
        onClick={handleToggleSwitchChange}
      ></input>
      <span
        className={
          currentTemperatureUnit === "°F"
            ? "toggleswitch__slider"
            : "toggleswitch__slider toggleswitch__slider-C"
        }
      ></span>
      <p
        className={`toggleswitch__unit toggleswitch__unit_F ${
          currentTemperatureUnit === "°F" && "toggleswitch__unit_active"
        }`}
      >
        °F
      </p>
      <p
        className={`toggleswitch__unit toggleswitch__unit_C ${
          currentTemperatureUnit === "°C" && "toggleswitch__unit_active"
        }`}
      >
        °C
      </p>
    </label>
  );
}

export default ToggleSwitch;
