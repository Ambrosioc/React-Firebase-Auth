import React from "react";
import giphy from "./giphy.gif";

export default function PrivateHome() {
  return (
    <div className="container p-5">
      <h1 className="display-3 text-light mb-4">Home Sweet Private Home</h1>

      <img src={giphy} alt="" />
    </div>
  );
}
