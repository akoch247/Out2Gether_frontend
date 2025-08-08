import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";
import { useCart } from "./CartContext";

export default function CartLayout() {
  const { items } = useCart();

  return (
    <div className="container bg-white rounded p-4">
      <header className="mb-4">
        <h1>Checkout</h1>
      </header>
      <div className="row g-4">
        <div className="col-lg-8">
          {items && items.length > 0 ? (
            <div className="vstack gap-3">
              {items.map((item) => (
                <CartItem key={item.post_id} item={item} />
              ))}
            </div>
          ) : (
            <div className="alert alert-info">
              Your cart is empty! Explore some posts nearby{" "}
              <Link to={"/"}>here</Link>.
            </div>
          )}
        </div>
        <div className="col-lg-4">
          <CartSummary />
        </div>
      </div>
    </div>
  );
}
