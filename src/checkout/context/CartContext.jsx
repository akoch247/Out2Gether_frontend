import { useContext, createContext, useState } from "react";
import useQuery from "../../api/useQuery";

const CartContext = createContext();

export function CartProvider({ children }) {
  const { data: items, loading, error } = useQuery("/cart", "cart");
  const [showingItem, setShowingItem] = useState(null);

  if (loading || !items) return <>Loading...</>;
  if (error) return <>{error}</>;

  const exports = {
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
