import { LuPencil } from "react-icons/lu";
import { GiCancel } from "react-icons/gi";
import { useCart } from "../CartContext";
import CartEditMenu from "./edit/CartEditMenu";

export default function CartEditButton({ item }) {
  const { showingItem, setShowingItem } = useCart();

  const handleClick = (event) => {
    event.preventDefault();

    setShowingItem((prev) => (prev === null ? item : null));
  };

  const isEditingThisItem = showingItem && showingItem.post_id === item.post_id;

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={handleClick}
        className="btn bg-white rounded-pill d-flex align-items-center"
        style={{ borderColor: "white" }}
      >
        {item.quantity} Couple(s)
        {isEditingThisItem ? (
          <GiCancel className="ms-2" />
        ) : (
          <LuPencil className="ms-2" />
        )}
      </button>

      {isEditingThisItem && (
        <div
          style={{
            position: "absolute",
            bottom: "100%",
            left: 0,
            zIndex: 10,
            marginBottom: "5px",
          }}
        >
          <CartEditMenu item={item} />
        </div>
      )}
    </div>
  );
}
