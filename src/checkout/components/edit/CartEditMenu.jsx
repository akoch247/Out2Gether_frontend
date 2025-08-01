import { useCart } from "../../context/CartContext";
import DecreaseButton from "./DecreaseButton";
import IncreaseButton from "./IncreaseButton";
import QuantityForm from "./QuantityForm";

export default function CartEditMenu({ item }) {
  const { showingItem } = useCart();

  return (
    <>
      {showingItem && showingItem.post_id === item.post_id && (
        <>
          <div className="cartEditorMenu">
            <DecreaseButton item={item} />
            <QuantityForm item={item} />
            <IncreaseButton item={item} />
          </div>
        </>
      )}
    </>
  );
}
