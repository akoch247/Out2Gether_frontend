// The main component that reuses DropdownFilter.jsx multiple times to create the filter bar for date, category, and price
import React from "react";
import BlueRoundedButton from "./BlueRoundedButton";
import { LuCalendarHeart } from "react-icons/lu";
import { BiCategory } from "react-icons/bi";
import { IoMdPricetag } from "react-icons/io";

export default function FilterBar({ children, ...props }) {
  return (
    <div className="d-flex flex-wrap gap-1 mb-4">
      <BlueRoundedButton>
        <LuCalendarHeart className="me-2" />
        Date
      </BlueRoundedButton>
      <BlueRoundedButton>
        <BiCategory className="me-2" />
        Category
      </BlueRoundedButton>
      <BlueRoundedButton>
        <IoMdPricetag className="me-2" />
        Price
      </BlueRoundedButton>
    </div>
  );
}
