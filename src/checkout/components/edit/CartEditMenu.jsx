import { useCart } from "../../context/CartContext";
import DecreaseButton from "./DecreaseButton";
import IncreaseButton from "./IncreaseButton";
import QuantityForm from "./QuantityForm";

export default function CartEditMenu({ item }) {
  const { showingItem } = useCart();

  if (!showingItem || showingItem.post_id !== item.post_id) return <></>;

  return (
    <div className="cartEditorMenu">
      <DecreaseButton item={item} />
      <QuantityForm item={item} />
      <IncreaseButton item={item} />
    </div>
  );
}
