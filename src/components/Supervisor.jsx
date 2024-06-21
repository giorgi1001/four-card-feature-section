import React from "react";
import "../shared/container.css";
import supervisorImg from "/icon-supervisor.svg";

export default function Supervisor() {
  return (
    <div className="box cyan">
      <h2>Supervisor</h2>
      <p>Monitors activity to identify project roadblocks</p>
      <img src={supervisorImg} alt="supervisor icon" />
    </div>
  );
}
