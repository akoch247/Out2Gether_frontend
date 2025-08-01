import { Link } from "react-router-dom";
import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";
import { useCart } from "./context/CartContext";

export default function CartLayout() {
  const { items } = useCart();

  return (
    <div className="cartPageContainer">
      <header className="cartPageHeader">
        <h1>Checkout</h1>
      </header>
      <div className="cartPageContent">
        <div className="cartItems">
          {items.length > 0 ? (
            items.map((item) => {
              return <CartItem key={item.post_id} item={item} />;
            })
          ) : (
            <h6>Your cart is empty! Explore some posts nearby <Link to={"/"}>here</Link>.</h6>
          )}
        </div>
        <CartSummary />
      </div>
    </div>
  );
}
