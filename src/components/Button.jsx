// A consistent-looking button that is clickable

import React from "react";

export default function Button({ children, ...props }) {
  return (
    <button
      type="button"
      className="btn btn-primary rounded-pill"
      style={{
        backgroundColor: "#28BCB3",
        color: "white",
        borderColor: "#28BCB3",
        fontWeight: "bold",
      }}
      {...props}
    >
      {children}
    </button>
  );
}
