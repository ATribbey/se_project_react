import React, { useContext } from "react";
import "./ToggleSwitch.css";
import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext";

function ToggleSwitch() {
  const { currentTempUnit, handleSwitchChange } = useContext(
    CurrentTempUnitContext
  );

  return (
    <label className="toggleswitch">
      <input
        className="toggleswitch__checkbox"
        type="checkbox"
        onClick={handleSwitchChange}
      ></input>
      <span
        className={
          currentTempUnit === "F"
            ? "toggleswitch__slider toggleswitch__slider-F"
            : "toggleswitch__slider toggleswitch__slider-C"
        }
      ></span>
      <p
        className={`toggleswitch__unit toggleswitch__unit_F ${
          currentTempUnit === "F" && "toggleswitch__unit_active"
        }`}
      >
        F
      </p>
      <p
        className={`toggleswitch__unit toggleswitch__unit_C ${
          currentTempUnit === "C" && "toggleswitch__unit_active"
        }`}
      >
        C
      </p>
    </label>
  );
}

export default ToggleSwitch;
