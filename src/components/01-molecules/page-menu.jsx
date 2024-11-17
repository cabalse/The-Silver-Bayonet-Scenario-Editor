import EDIT_MENUS from "../../constants/edit-menus";
import useAppContext from "../../context/appcontext/useappcontext";
import SETTINGS from "../../settings";
import inArray from "../../utilities/in-array";
import MenuItem from "../00-atoms/menu-item";
import MENU_ITEMS from "../../constants/menu-items";

const PageMenu = ({ onSelectedMenuItem, activeMenuItems = [] }) => {
  const context = useAppContext();
  const currentPage = context.appState.page
    ? context.appState.page?.toLowerCase()
    : "";

  const menuItemEnabled = (menuItem) => {
    // If a terrain piece is selected and current page is edit, show edit menus
    if (
      context.appState.selectedTerrainPiece != null &&
      currentPage === MENU_ITEMS.EDIT.toLowerCase() &&
      inArray(EDIT_MENUS, menuItem)
    ) {
      return true;
    }

    // If menu item is in active menu items, return true (useMenuHandler hook, called from Index Page)
    return inArray(activeMenuItems, menuItem);
  };

  return (
    <div className="w-full mt-2">
      {Object.entries(SETTINGS.MENU_ITEMS).map(([, menuItem], i) => (
        <MenuItem
          key={i}
          enabled={menuItemEnabled(menuItem)}
          onClick={() => {
            onSelectedMenuItem(menuItem);
          }}
          highlighted={currentPage === menuItem.toLowerCase()}
        >
          {menuItem}
        </MenuItem>
      ))}
    </div>
  );
};

export default PageMenu;
