import { useFilter } from "../../../context/FilterContext";
import BlueRoundedButton from "../../BlueRoundedButton";
import { BiCategory } from "react-icons/bi";
import DropdownFilter from "../DropdownFilter";
import useQuery from "../../../hooks/useQuery";
import { useState } from "react";

export default function CategoryFilterButton() {
  const { data: categories } = useQuery("/categories", "categories");
  const [viewing, setViewing] = useState(false);
  const [selected, setSelected] = useState([]);
  const { setFilter } = useFilter();

  const handleClick = () => {
    setViewing((prev) => !prev);
  };

  const handleChange = (event) => {
    const value = event.target.value;

    setSelected((prev) => {
      const isSelected = prev.includes(value);

      if (isSelected) {
        return prev.filter((id) => id != value);
      }

      return [...prev, value];
    });
  };

  const handleApply = (event) => {
    event.preventDefault();

    setFilter((prev) => {
      return { ...prev, categories: selected };
    });
  };

  return (
    <div>
      <BlueRoundedButton onClick={handleClick}>
        <BiCategory className="me-2" />
        Category
      </BlueRoundedButton>
      {categories && viewing && (
        <DropdownFilter>
          {categories.map((category) => {
            return (
              <label key={category.id} className="category-option">
                <input
                  type="checkbox"
                  value={String(category.id)}
                  checked={selected.includes(String(category.id))}
                  onChange={handleChange}
                />
                {category.name}
              </label>
            );
          })}
          <BlueRoundedButton onClick={handleApply}>Apply</BlueRoundedButton>
        </DropdownFilter>
      )}
    </div>
  );
}
