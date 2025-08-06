import { GiHamburgerMenu } from "react-icons/gi";
import { useLayout } from "../LayoutContext";

export default function BurgerButton() {
  const { toggleSidebar } = useLayout();

  return (
    <button className="btn burger" onClick={toggleSidebar}>
      <GiHamburgerMenu />
    </button>
  );
}
