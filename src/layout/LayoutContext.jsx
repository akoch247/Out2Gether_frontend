import { useContext, createContext, useState, useEffect, useRef } from "react";

const LayoutContext = createContext();

export function LayoutProvider({ children }) {
  const [sidebar, setSidebar] = useState(true);
  const sidebarRef = useRef();

  useEffect(() => {
    // Make sure we are always showing the sidebar to other than mobile
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSidebar(false);
        return;
      }

      setSidebar(true);
    };

    const handleClickOutside = (event) => {
      // Don't worry about people that aren't mobile
      if (!sidebar || window.innerWidth > 768) return;
      if (sidebarRef.current && sidebarRef.current.contains(event.target)) {
        return;
      }

      setSidebar(false);
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  const closeSidebar = () => {
    if (window.innerWidth > 768) return;

    setSidebar(false);
  };

  const exports = {
    sidebarRef,
    sidebar,
    toggleSidebar,
    closeSidebar,
  };

  return (
    <LayoutContext.Provider value={exports}>{children}</LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);

  if (!context)
    throw new Error("useLayout must be used within the LayoutContext");

  return context;
}
