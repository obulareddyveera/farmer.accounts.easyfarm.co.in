import React from "react";

export default function Spinner({ width, height }) {
  console.log("--== Spinner ", width, height);

  return (
    <div className="spinner-border" style={{ width, height }} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}
