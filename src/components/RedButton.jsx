// A consistent-looking rectangular red button that is clickable

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
