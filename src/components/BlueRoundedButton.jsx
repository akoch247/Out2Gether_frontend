// A consistent-looking pill-shaped blue button that is clickable

import BlueButton from "./BlueButton";

export default function BlueRoundedButton({ children, ...props }) {
  return (
    <BlueButton
      className="btn-info text-white fm-semibold px-3 py-2 rounded-pill border-0"
      {...props}
    >
      {children}
    </BlueButton>
  );
}
