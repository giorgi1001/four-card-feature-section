import React from "react";
import "../shared/container.css";
import karmaImg from "/icon-karma.svg";

export default function Karma() {
  return (
    <div className="box yellow">
      <h2>Karma</h2>
      <p>Regularly evaluates our talent to ensure quality</p>
      <img src={karmaImg} alt="karma icon" />
    </div>
  );
}
