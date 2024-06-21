import React from "react";
import "../shared/container.css";
import calculatorImg from "/icon-calculator.svg";

export default function Calculator() {
  return (
    <div className="box blue">
      <h2>Calculator</h2>
      <p>Uses data from past projects to provide better delivery estimates</p>
      <img src={calculatorImg} alt="calculator icon" />
    </div>
  );
}
