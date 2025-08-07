import { IoMdPricetag } from "react-icons/io";
import BlueRoundedButton from "../../BlueRoundedButton";
import { useState } from "react";
import { useFilter } from "../../../context/FilterContext";
import DropdownFilter from "../DropdownFilter";

export default function PriceFilterButton() {
  const [viewing, setViewing] = useState(false);
  const { filter, setFilter } = useFilter();
  const [selected, setSelected] = useState({
    priceMin: filter.priceMin,
    priceMax: filter.priceMax,
  });

  const handleClick = () => {
    setViewing((prev) => !prev);
  };

  const handleMin = (event) => {
    const value = event.target.value;

    setSelected((prev) => {
      return { ...prev, priceMin: value };
    });
  };

  const handleMax = (event) => {
    const value = event.target.value;

    setSelected((prev) => {
      return { ...prev, priceMax: value };
    });
  };

  const handleApply = () => {
    setFilter((prev) => {
      return {
        ...prev,
        ...selected,
      };
    });
  };

  return (
    <div>
      <BlueRoundedButton onClick={handleClick}>
        <IoMdPricetag className="me-2" />
        Price
      </BlueRoundedButton>
      {viewing && (
        <DropdownFilter>
          <label>Minimum</label>
          <input
            name="min"
            type="number"
            defaultValue={filter.priceMin}
            onChange={handleMin}
          />
          <label>Maximum</label>
          <input
            name="max"
            type="number"
            defaultValue={filter.priceMax}
            onChange={handleMax}
          />
          <BlueRoundedButton onClick={handleApply}>Apply</BlueRoundedButton>
        </DropdownFilter>
      )}
    </div>
  );
}
