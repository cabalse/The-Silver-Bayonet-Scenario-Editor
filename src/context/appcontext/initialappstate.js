import SETTINGS from "../../settings";

const initialAppState = {
  title: SETTINGS.TITLE,
  page: SETTINGS.START_PAGE,
  displayLoadDialog: false,
  displayAddItemDialog: false,
  disabledMenuItems: SETTINGS.MENU_ITEMS_INIT_DISABLED,
  scenarioData: {},
};

export default initialAppState;
