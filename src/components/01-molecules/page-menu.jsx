import SETTINGS from "../../settings";
import inArray from "../../utilities/in-array";
import MenuItem from "../00-atoms/menu-item";

const PageMenu = ({ onSelectedMenuItem, disabledMenuItems = [] }) => {
  return (
    <div className="w-full mt-2">
      {Object.entries(SETTINGS.MENU_ITEMS).map(([, v], i) => (
        <MenuItem
          key={i}
          disabled={inArray(disabledMenuItems, v)}
          onClick={() => onSelectedMenuItem(v)}
        >
          {v}
        </MenuItem>
      ))}
    </div>
  );
};

export default PageMenu;
