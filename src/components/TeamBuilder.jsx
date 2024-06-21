import React from "react";
import "../shared/container.css";
import teamBuilderImg from "/icon-team-builder.svg";

export default function TeamBuilder() {
  return (
    <div className="box red">
      <h2>Team Builderr</h2>
      <p>
        Scans our talent network to create the optimal team for your project
      </p>
      <img src={teamBuilderImg} alt="Team builder icon" />
    </div>
  );
}
