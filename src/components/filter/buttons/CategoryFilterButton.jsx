import BlueRoundedButton from "../../BlueRoundedButton";
import { BiCategory } from "react-icons/bi";

export default function CategoryFilterButton() {
  return (
    <BlueRoundedButton>
      <BiCategory className="me-2" />
      Category
    </BlueRoundedButton>
  );
}
