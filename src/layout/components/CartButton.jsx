import useQuery from "../../hooks/useQuery";
import { Link } from "react-router-dom";
import RedButton from "../../components/RedButton";
import { FaCartShopping } from "react-icons/fa6";

export default function CartButton() {
  const { data: cart } = useQuery("/cart", "cartButton");

  if (!cart) return <></>;

  const cartItemCount =
    cart.reduce((total, item) => total + item.quantity, 0) || 0;

  return (
    <RedButton
      as={Link}
      to="/cart"
      className="btn cart text-decoration-none fw-semibold fs-5"
    >
      <FaCartShopping />
      <span className="hide-on-mobile">
        {" Cart "}
        {cartItemCount > 0 && `(${cartItemCount})`}
      </span>
    </RedButton>
  );
}
