import useQuery from "../../api/useQuery";
import { Link } from "react-router-dom";
import RedButton from "../../components/RedButton";

export default function CartButton() {
  const { data: cart } = useQuery("/cart", "cartButton");

  if (!cart) return <></>;

  const cartItemCount =
    cart.reduce((total, item) => total + item.quantity, 0) || 0;

  return (
    <RedButton
      as={Link}
      to="/cart"
      className="text-decoration-none fw-semibold fs-5"
      style={{ paddingLeft: "30px", paddingRight: "30px" }}
    >
      Cart {cartItemCount > 0 && `(${cartItemCount})`}
    </RedButton>
  );
}
