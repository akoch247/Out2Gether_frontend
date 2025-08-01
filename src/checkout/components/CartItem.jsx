import "../style/cartItem.css";
import DeleteButton from "./DeleteButton";
import CartEditButton from "./CartEditButton";

export default function CartItem({ item }) {
  const price = item.post.price * item.quantity;

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
          <CartEditButton item={item}/>
          <DeleteButton item={item}/>
        </div>
      </div>
    </div>
  );
}
