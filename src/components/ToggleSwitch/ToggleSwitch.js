import React from "react";
import "./ToggleSwitch.css";

function ToggleSwitch() {
  const [currentTempUnit, changeTempUnit] = React.useState("F");

  function handleChange() {
    if (currentTempUnit === "F") {
      changeTempUnit("C");
    } else if (currentTempUnit === "C") {
      changeTempUnit("F");
    }
  }

  return (
    <label className="toggleswitch">
      <input
        className="toggleswitch__checkbox"
        type="checkbox"
        onClick={handleChange}
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
