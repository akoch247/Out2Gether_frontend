import useMutation from "../../hooks/useMutation";


export default function PostButton({ item }) {
  const { mutate, loading } = useMutation("POST", "/posts/",  [
    "posts",
  ]);

  const handleClick = (event) => {
    event.preventDefault();

    if (loading) return;

    mutate(item);
  };

  return (
    <button className="postBtn" onClick={handleClick}>
      Post an Event
    </button>
  );
}