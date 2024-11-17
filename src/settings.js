import MENU_ITEMS from "./constants/menu-items";
import PAGES from "./constants/pages";

const SETTINGS = Object.freeze({
  TITLE: "The Silver Bayonet - Scenario Editor",
  START_PAGE: PAGES.INDEX,
  MENU_ITEMS: [
    MENU_ITEMS.NEW,
    MENU_ITEMS.LOAD,
    MENU_ITEMS.DATA,
    MENU_ITEMS.SAVE,
    MENU_ITEMS.EXPORT,
    MENU_ITEMS.EDIT,
    MENU_ITEMS.ADD,
    MENU_ITEMS.REMOVE,
    MENU_ITEMS.ROTATE90,
    MENU_ITEMS.ON_TOP,
  ],
  STARTUP_ACTIVE_MENUS: "INIT",
  MARKED_BORDER_COLOR: "blue",
  TERRAIN_IMAGE_SCALE: 0.3,
});

export default SETTINGS;
