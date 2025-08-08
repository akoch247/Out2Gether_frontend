import useMutation from "../../../hooks/useMutation";
import RedButton from "../../../components/RedButton";
import { FaRegTrashCan } from "react-icons/fa6";

export default function DeleteButton({ item }) {
  const { mutate, loading } = useMutation("DELETE", "/cart/" + item.post_id, [
    "cart",
    "cartButton",
  ]);

  const handleClick = (event) => {
    event.preventDefault();

    if (loading) return;

    mutate({});
  };

  return (
    <RedButton className="rounded-pill" onClick={handleClick}>
      Delete <FaRegTrashCan />
    </RedButton>
  );
}
