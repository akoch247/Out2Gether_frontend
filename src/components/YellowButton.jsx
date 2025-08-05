// A consistent-looking rectangular yellow button that is clickable

export default function YellowButton({ children, ...props }) {
  return (
    <button
      type="button"
      className="btn"
      style={{
        backgroundColor: "#FFC244",
        color: "black",
        borderColor: "#FFC244",
        fontWeight: "bold",
      }}
      {...props}
    >
      {children}
    </button>
  );
}
