import { FaTrashAlt } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import "./style/cartItem.css";

export default function CartItem({ item }) {
  const price = item.post.price * item.quantity;

  console.log(item);
  return (
    <div className="cartItem">
      <img src={item.post.image_url} />
      <div className="cartItemContent">
        <header className="cartItemHeader">
          <h1>{item.post.title}</h1>
          <h3>{"$" + price.toFixed(2)}</h3>
        </header>

        <div className="cartItemDetails">
          <h2>{item.post.date}</h2>
        </div>

        <div className="cartItemFooter">
          <span>
            {item.quantity} Couple(s)
            <LuPencil />
          </span>
          <button>
            Delete <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
}
