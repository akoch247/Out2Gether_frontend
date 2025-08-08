import { useCart } from "../../CartContext";
import QuantityForm from "./QuantityForm";

export default function CartEditMenu({ item }) {
  const { showingItem, editMenuRef } = useCart();

  if (!showingItem || showingItem.post_id !== item.post_id) return <></>;

  return (
    <div className="cartEditorMenu" ref={editMenuRef}>
      <QuantityForm item={item} />
    </div>
  );
}
