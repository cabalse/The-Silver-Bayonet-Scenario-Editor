import BUTTON_TYPES from "../../constants/button-types";
import Button from "./button";

const MenuItem = ({
  onClick,
  highlighted = false,
  disabled = false,
  children,
}) => {
  const buttonType = highlighted
    ? BUTTON_TYPES.HIGHLIGHTED
    : BUTTON_TYPES.PRIMARY;

  return (
    <Button type={buttonType} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};

export default MenuItem;
