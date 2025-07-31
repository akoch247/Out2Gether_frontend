// This page will show the events that a user has added to their cart as well as the total calculated price
import useQuery from "../api/useQuery";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import "./style/cartPage.css";

export default function CartPage() {
  const { data: items, loading, error } = useQuery("/cart", "cart");

  if (loading || !items) return <>Loading...</>;
  if (error) return <>{error}</>;

  return (
    <div className="cartPageContainer">
      <header className="cartPageHeader">
        <h1>CartPage</h1>
      </header>
      <div className="cartPageContent">
        <div className="cartItems">
          {items.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </div>
        <CartSummary items={items} />
      </div>
    </div>
  );
}
