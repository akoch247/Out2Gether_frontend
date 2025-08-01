import useMutation from "../../api/UseMutation";
import { FaTrashAlt } from "react-icons/fa";

export default function DeleteButton({ item }) {
  const { mutate, loading } = useMutation("DELETE", "/cart/" + item.post_id, [
    "cart",
  ]);

  const handleClick = (event) => {
    event.preventDefault();
    
    if (loading) return;

    mutate({});
  };

  return (
    <button className="cartBtn deleteBtn" onClick={handleClick}>
      Delete <FaTrashAlt />
    </button>
  );
}
