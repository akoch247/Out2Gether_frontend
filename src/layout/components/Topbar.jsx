// The nav bar on the top that will have the Account and Cart buttons
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import CartButton from "./CartButton";
import SearchForm from "./SearchForm";
import BurgerButton from "./BurgerButton";
import "../style/Topbar.css";

export default function Topbar() {
  const { token } = useAuth();

  return (
    <div
      className="topbar d-flex gap-3 align-items-center py-4 py-3 border-bottom"
      style={{ backgroundColor: "#EBEBEB" }}
    >
      <SearchForm />

      <div className="items d-flex gap-4 align-items-center me-md-5">
        {token && (
          <>
            <Link
              to="/account"
              className="d-flex align-items-center text-dark text-decoration-none fs-5"
            >
              <CgProfile size={30} className="me-2" />
              <span className="hide-on-mobile">Account</span>
            </Link>
            <CartButton />
          </>
        )}
        <BurgerButton />
      </div>
    </div>
  );
}
