// A consistent-looking rectangular blue button that is clickable

export default function BlueButton({ children, ...props }) {
  return (
    <button
      type="button"
      className="btn"
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
