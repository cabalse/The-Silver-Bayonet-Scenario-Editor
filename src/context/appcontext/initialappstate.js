import ACTIVE_MENUS from "../../constants/active-menus";
import SETTINGS from "../../settings";

const initialAppState = {
  title: SETTINGS.TITLE,
  page: SETTINGS.START_PAGE,
  displayLoadDialog: false,
  displayAddItemDialog: false,
  activeMenuItems: ACTIVE_MENUS[SETTINGS.STARTUP_ACTIVE_MENUS],
  disabledMenuItems: SETTINGS.MENU_ITEMS_INIT_DISABLED,
  scenarioData: {},
};

export default initialAppState;
