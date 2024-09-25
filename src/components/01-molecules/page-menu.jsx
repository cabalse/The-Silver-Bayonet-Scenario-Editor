import useAppContext from "../../context/appcontext/useappcontext";
import SETTINGS from "../../settings";
import inArray from "../../utilities/in-array";
import MenuItem from "../00-atoms/menu-item";

const PageMenu = ({ onSelectedMenuItem, activeMenuItems = [] }) => {
  const context = useAppContext();

  return (
    <div className="w-full mt-2">
      {Object.entries(SETTINGS.MENU_ITEMS).map(([, v], i) => (
        <MenuItem
          key={i}
          disabled={!inArray(activeMenuItems, v)}
          onClick={() => onSelectedMenuItem(v)}
          highlighted={context.appState.page.toLowerCase() === v.toLowerCase()}
        >
          {v}
        </MenuItem>
      ))}
    </div>
  );
};

export default PageMenu;
