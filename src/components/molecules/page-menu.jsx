import MENU_ITEMS from "../../constants/menu-items";
import inArray from "../../utilities/in-array";
import MenuItem from "../atoms/menu-item";

const PageMenu = ({ onSelectedMenuItem, disabledMenuItems = [] }) => {
  return (
    <div className="w-full mt-2">
      {Object.entries(MENU_ITEMS).map(([, v], i) =>
        v !== "" ? (
          <MenuItem
            key={i}
            disabled={inArray(disabledMenuItems, v)}
            onClick={() => onSelectedMenuItem(v)}
          >
            {v}
          </MenuItem>
        ) : null
      )}
    </div>
  );
};

export default PageMenu;
