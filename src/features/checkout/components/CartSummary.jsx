import React from "react";
import { useCart } from "../CartContext";
import BlueButton from "../../../components/BlueButton";
import { FaArrowRightLong } from "react-icons/fa6";

export default function CartSummary() {
  const { items } = useCart();

  const subTotal = items.reduce(
    (count, item) => count + item.post.price * item.quantity,
    0
  );
  const tax = 0;
  const total = subTotal + tax;

  return (
    <div
      className="card shadow-sm rounded-4"
      style={{ backgroundColor: "#EBEBEB", borderColor: "#EBEBEB" }}
    >
      <div className="card-body">
        <h5 className="card-title mb-3">Order Summary</h5>
        <ul className="list-group list-group-flush">
          <li
            className="list-group-item d-flex justify-content-between"
            style={{ backgroundColor: "#EBEBEB", borderColor: "#EBEBEB" }}
          >
            <span>Subtotal</span>
            <span>${subTotal.toFixed(2)}</span>
          </li>
          <li
            className="list-group-item d-flex justify-content-between"
            style={{ backgroundColor: "#EBEBEB", borderColor: "#EBEBEB" }}
          >
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </li>
          <li
            className="list-group-item d-flex justify-content-between fw-bold"
            style={{ backgroundColor: "#EBEBEB", borderColor: "#EBEBEB" }}
          >
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </li>
        </ul>
        <div className="text-center mt-4">
          <BlueButton type="button" className="btn py-2 px-4">
            Continue to Payment <FaArrowRightLong className="ms-2" />
          </BlueButton>
        </div>
      </div>
    </div>
  );
}
