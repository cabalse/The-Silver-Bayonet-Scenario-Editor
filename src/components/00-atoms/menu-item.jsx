import Button from "./button";

const MenuItem = ({ onClick, disabled = false, children }) => (
  <Button onClick={onClick} disabled={disabled}>
    {children}
  </Button>
);

export default MenuItem;
