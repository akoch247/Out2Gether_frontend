import React from "react";
import DeleteButton from "./DeleteButton";
import CartEditButton from "./CartEditButton";

export default function CartItem({ item }) {
  if (!item || !item.post) return null;

  const { post, quantity } = item;
  const price = post.price * quantity;
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <div
      className="card shadow-sm rounded-4"
      style={{ backgroundColor: "#EBEBEB", borderColor: "#EBEBEB" }}
    >
      <div className="row g-0">
        <div className="col-4 col-sm-3">
          <img
            src={post.image_url}
            alt={post.title}
            className="img-fluid rounded start"
            style={{ height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="col-8 col-sm-9">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h4 className="card-title mb-1">{post.title.toUpperCase()}</h4>
              <span className="fw-bold fs-5">{"$" + price.toFixed(2)}</span>
            </div>

            <p className="card-text">
              <h5>{formattedDate}</h5>
            </p>

            <div className="d-flex align-items-center gap-2">
              <CartEditButton item={item} />
              <DeleteButton item={item} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
