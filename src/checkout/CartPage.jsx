import CartLayout from "./CartLayout";
import { CartProvider } from "./context/CartContext";
import "./style/cartPage.css";

export default function CartPage() {
  return (
    <CartProvider>
      <CartLayout />
    </CartProvider>
  );
}
