import { useContext, createContext, useState, useRef, useEffect } from "react";
import useQuery from "../../hooks/useQuery";

const CartContext = createContext();

export function CartProvider({ children }) {
  const { data: items, loading, error } = useQuery("/cart", "cart");
  const [showingItem, setShowingItem] = useState(null);
  const editMenuRef = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (editMenuRef.current && editMenuRef.current.contains(event.target))
        return;

      setShowingItem(null);
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  if (loading || !items) return <>Loading...</>;
  if (error) return <>{error}</>;

  const exports = {
    editMenuRef,
    showingItem,
    setShowingItem,
    items,
  };

  return (
    <CartContext.Provider value={exports}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) throw new Error("useCart must be used within the CartContext");

  return context;
}
