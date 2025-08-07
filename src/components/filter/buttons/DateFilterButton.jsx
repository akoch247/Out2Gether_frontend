import { useState } from "react";
import { useFilter } from "../../../context/FilterContext";
import BlueRoundedButton from "../../BlueRoundedButton";
import { LuCalendarHeart } from "react-icons/lu";
import DropdownFilter from "../DropdownFilter";
import { filter } from "framer-motion/client";

export default function DateFilterButton() {
  const [viewing, setViewing] = useState(false);
  const [selected, setSelected] = useState({
    dateMin: filter.dateMin,
    dateMax: filter.dateMax,
  });

  const { setFilter } = useFilter();

  const handleClick = () => {
    setViewing((prev) => !prev);
  };

  const handleMin = (event) => {
    const value = event.target.value;

    setSelected((prev) => {
      return { ...prev, dateMin: value };
    });
  };

  const handleMax = (event) => {
    const value = event.target.value;

    setSelected((prev) => {
      return { ...prev, dateMax: value };
    });
  };

  const handleApply = () => {
    setFilter((prev) => {
      return { ...prev, ...selected };
    });
  };

  return (
    <div>
      <BlueRoundedButton onClick={handleClick}>
        <LuCalendarHeart className="me-2" />
        Date
      </BlueRoundedButton>
      {viewing && (
        <DropdownFilter>
          <label>Minimum</label>
          <input
            name="min"
            type="date"
            defaultValue={filter.dateMin}
            onChange={handleMin}
          />
          <label>Maximum</label>
          <input
            name="max"
            type="date"
            defaultValue={filter.dateMax}
            onChange={handleMax}
          />
          <BlueRoundedButton onClick={handleApply}>Apply</BlueRoundedButton>
        </DropdownFilter>
      )}
    </div>
  );
}
