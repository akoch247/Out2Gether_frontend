import "./style/cartSummary.css";
import { FaArrowRightLong } from "react-icons/fa6";

export default function CartSummary({ items }) {
  const subTotal = items
    .map((item) => item.post.price * item.quantity)
    .reduce((count, price) => count + price)
    .toFixed(2);
  const tax = 0.0;

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
          <span>${subTotal + tax}</span>
        </div>
      </div>
      <button className="paymentBtn">Continue to Payment <FaArrowRightLong /></button>
    </div>
  );
}
