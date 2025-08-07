import { IoMdPricetag } from "react-icons/io";
import BlueRoundedButton from "../../BlueRoundedButton";

export default function PriceFilterButton() {
  return (
    <BlueRoundedButton>
      <IoMdPricetag className="me-2" />
      Price
    </BlueRoundedButton>
  );
}
