import MENU_ITEMS from "./constants/menu-items";
import PAGES from "./constants/pages";

const SETTINGS = Object.freeze({
  TITLE: "The Silver Bayonet - Scenario Editor",
  START_PAGE: PAGES.INDEX,
  MENU_ITEMS: [
    MENU_ITEMS.LOAD,
    MENU_ITEMS.DATA,
    MENU_ITEMS.SAVE,
    MENU_ITEMS.EDIT,
    MENU_ITEMS.ADD,
    MENU_ITEMS.REMOVE,
  ],
  MENU_ITEMS_INIT_DISABLED: [
    MENU_ITEMS.DATA,
    MENU_ITEMS.SAVE,
    MENU_ITEMS.EDIT,
    MENU_ITEMS.ADD,
    MENU_ITEMS.REMOVE,
  ],
  MARKED_BORDER_COLOR: "blue",
});

export default SETTINGS;
