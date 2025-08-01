import { useCart } from "../context/CartContext";
import "../style/cartSummary.css";
import { FaArrowRightLong } from "react-icons/fa6";

export default function CartSummary() {
  const { items } = useCart();
  const subTotal = items
    .map((item) => item.post.price * item.quantity)
    .reduce((count, price) => count + price, 0)
    .toFixed(2);
  const tax = 0;
  const total = new Number(subTotal + tax);

  return (
    <div className="cartSummaryContainer">
      <header className="cartSummaryHeader">
        <h1>Order Summary</h1>
      </header>
      <div className="cartSummaryDetails">
        <div className="subTotal">
          <p>Subtotal</p>
          <span>${subTotal}</span>
        </div>
        <div className="subTotal">
          <p>Tax</p>
          <span>${tax}</span>
        </div>
        <div className="total">
          <p>Total</p>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <button className="paymentBtn">
        Continue to Payment <FaArrowRightLong />
      </button>
    </div>
  );
}
