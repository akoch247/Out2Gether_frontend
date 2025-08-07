import { Link } from "react-router-dom";
import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";
import { useCart } from "./CartContext";

export default function CartLayout() {
  const { items } = useCart();

  return (
    <div className="cartPageContainer bg-white rounded p-4">
      <header className="cartPageHeader">
        <h1>Checkout</h1>
      </header>
      <div className="cartPageContent">
        <div className="cartItems">
          {items.length > 0 ? (
            items.map((item) => {
              return <CartItem key={item.post_id} post_id={item.post_id} />;
            })
          ) : (
            <h6>
              Your cart is empty! Explore some posts nearby{" "}
              <Link to={"/"}>here</Link>.
            </h6>
          )}
        </div>
        <CartSummary />
      </div>
    </div>
  );
}
