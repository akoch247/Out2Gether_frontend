import CartLayout from "./CartLayout";
import { CartProvider } from "./CartContext";
import "./style/cartPage.css";

export default function CartPage() {
  return (
    <CartProvider>
      <CartLayout />
    </CartProvider>
  );
}
