// The nav bar on the top that will have the Account and Cart buttons
import React, { useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import useQuery from "../api/useQuery";
import RedButton from "../components/RedButton";

export default function Topbar() {
  const { token } = useAuth();
  const { data: cart } = useQuery("/cart", ["cart"]);

  useEffect(() => {
    console.log("Topbar detected a change in cart data:", cart);
  }, [cart]);

  const cartItemCount =
    cart?.reduce((total, item) => total + item.quantity, 0) || 0;

  return (
    <div
      className="d-flex justify-content-end align-items-center py-4 py-3 border-bottom"
      style={{ backgroundColor: "#EBEBEB" }}
    >
      <div className="d-flex gap-4 align-items-center me-5">
        {token && (
          <Link
            to="/account"
            className="d-flex align-items-center text-dark text-decoration-none fs-5"
          >
            <CgProfile size={30} className="me-2" />
            Account
          </Link>
        )}
        <RedButton
          as={Link}
          to="/cart"
          className="text-decoration-none fw-semibold fs-5"
          style={{ paddingLeft: "30px", paddingRight: "30px" }}
        >
          Cart {cartItemCount > 0 && `(${cartItemCount})`}
        </RedButton>
      </div>
    </div>
  );
}
