// The nav bar on the top that will have the Account and Cart buttons
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import CartButton from "./components/CartButton";

export default function Topbar() {
  const { token } = useAuth();

  return (
    <div
      className="d-flex justify-content-end align-items-center py-4 py-3 border-bottom"
      style={{ backgroundColor: "#EBEBEB" }}
    >
      <div className="d-flex gap-4 align-items-center me-5">
        {token && (
          <>
            <Link
              to="/account"
              className="d-flex align-items-center text-dark text-decoration-none fs-5"
            >
              <CgProfile size={30} className="me-2" />
              Account
            </Link>
            <CartButton />
          </>
        )}
      </div>
    </div>
  );
}
