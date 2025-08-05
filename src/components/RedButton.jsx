// A consistent-looking rectangular red button that is clickable

export default function RedButton({ children, ...props }) {
  return (
    <button
      type="button"
      className="btn"
      style={{
        backgroundColor: "#F35242",
        color: "white",
        borderColor: "#F35242",
        fontWeight: "bold",
      }}
      {...props}
    >
      {children}
    </button>
  );
}
