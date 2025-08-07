import BlueRoundedButton from "../../BlueRoundedButton";
import { LuCalendarHeart } from "react-icons/lu";

export default function DateFilterButton() {
  return (
        <BlueRoundedButton>
          <LuCalendarHeart className="me-2" />
          Date
        </BlueRoundedButton>

  );
}
