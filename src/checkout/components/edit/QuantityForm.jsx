import useMutation from "../../../api/UseMutation";

export default function QuantityForm({ item }) {
  const { mutate, loading } = useMutation("PUT", "/cart/" + item.post_id, [
    "cart",
    "cartButton",
  ]);

  const handleSubmit = (formData) => {
    if (loading) return;

    const quantity = formData.get("quantity");

    mutate({
      quantity,
    });
  };

  return (
    <form action={handleSubmit}>
      <input name="quantity" type="number" defaultValue={item.quantity} />
    </form>
  );
}