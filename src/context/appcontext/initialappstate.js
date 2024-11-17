import ACTIVE_MENUS from "../../constants/active-menus";
import SETTINGS from "../../settings";

const initialAppState = {
  title: SETTINGS.TITLE,
  page: SETTINGS.START_PAGE,
  displayLoadDialog: false,
  displaySaveDialog: false,
  displayAddItemDialog: false,
  activeMenuItems: ACTIVE_MENUS[SETTINGS.STARTUP_ACTIVE_MENUS],
  scenarioData: {},
  scenarioChanged: false,
  mapRef: null,
  selectedTerrainPiece: null,
};

export default initialAppState;
