// The nav bar on the top that will have the Account and Cart buttons
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Topbar() {
  const { token } = useAuth();

  return (
    //topbar container for top of page
    <div className="d-flex justify-content-end align-items-center py-4 py-3 border-bottom bg-light">
      <div className="d-flex gap-4 align-items-center">
        {/*Account Styling*/}
        {token && (
          <Link
            to="/account"
            className="d-flex align-items-center text-dark text-decoration-none fs-5"
          >
            <CgProfile size={30} className="me-2" />
            Account
          </Link>
        )}
        {/* Cart Button Styling */}
        <Link
          to="/cart"
          className="btn btn-danger d-flex align-items-center fw-semibold mx-5 fs-5"
          style={{
            backgroundColor: "#F35242",
            borderColor: "#F35242",
            paddingLeft: "30px",
            paddingRight: "30px",
          }}
        >
          Cart
        </Link>
      </div>
    </div>
  );
}
