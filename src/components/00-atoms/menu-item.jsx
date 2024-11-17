import BUTTON_TYPES from "../../constants/button-types";
import Button from "./button";

const MenuItem = ({
  onClick,
  highlighted = false,
  enabled = true,
  children,
}) => {
  const buttonType = highlighted
    ? BUTTON_TYPES.HIGHLIGHTED
    : BUTTON_TYPES.PRIMARY;

  return (
    <Button type={buttonType} onClick={onClick} enabled={enabled}>
      {children}
    </Button>
  );
};

export default MenuItem;
