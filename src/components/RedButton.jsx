// A consistent-looking rectangular red button that is clickable
import React from "react";
import { Link } from "react-router-dom";

export default function RedButton({
  as: Component = "button",
  children,
  className,
  style,
  ...props
}) {
  return (
    <Component
      className={`btn ${className || ""}`}
      style={{
        backgroundColor: "#F35242",
        color: "white",
        borderColor: "#F35242",
        fontWeight: "bold",
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
