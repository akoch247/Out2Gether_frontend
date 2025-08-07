import "../style/DropdownFilter.css";

// The smart component that creates a dropdown menu and uses Button.jsx as the clickable part

export default function DropdownFilter({ children }) {
  return <div className="filterMenu">{children}</div>;
}
