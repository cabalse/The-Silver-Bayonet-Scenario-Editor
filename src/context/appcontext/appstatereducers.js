import addActiveMenuItem from "./reducer/add-active-menu-item";
import addTerrainPiece from "./reducer/add-terrain-piece";
import removeActiveMenuItem from "./reducer/remove-active-menu-item";
import setActiveMenuItems from "./reducer/set-active-menu-items";
import setSelectedPieceOnTop from "./reducer/set-selected-piece-on-top";
import updateScenarioTerrainPiece from "./reducer/update-scenario-terrain-piece";

const AppReducerActionTypes = Object.freeze({
  CHANGE_LOAD_DIALOG_STATE: "CHANGE_LOAD_DIALOG_STATE",
  CHANGE_ADD_ITEM_DIALOG_STATE: "CHANGE_ADD_ITEM_DIALOG_STATE",
  REMOVE_ACTIVE_MENU_ITEM: "REMOVE_ACTIVE_MENU_ITEM",
  ADD_ACTIVE_MENU_ITEM: "ADD_ACTIVE_MENU_ITEM",
  SET_ACTIVE_MENU_ITEM: "SET_ACTIVE_MENU_ITEM",
  SET_SCENARIO_DATA: "SET_SCENARIO_DATA",
  UPDATE_SCENARIO_TERRAIN_PIECE: "UPDATE_SCENARIO_TERRAIN_PIECE",
  SWITCH_PAGE_TO: "SWITCH_PAGE_TO",
  SCENARIO_DATA_CHANGE: "SCENARIO_DATA_CHANGE",
  ADD_TERRAIN_PIECE: "ADD_TERRAIN_PIECE",
  REGISTER_MAP: "REGISTER_MAP",
  SELECT_TERRAIN_PIECE: "SELECT_TERRAIN_PIECE",
  TERRAIN_PIECE_DESELECTED: "TERRAIN_PIECE_DESELECTED",
  SET_SELECTED_PIECE_ON_TOP: "SET_SELECTED_PIECE_ON_TOP",
});

const appStateReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case AppReducerActionTypes.REGISTER_MAP:
      return {
        ...state,
        mapRef: payload,
      };

    case AppReducerActionTypes.CHANGE_LOAD_DIALOG_STATE:
      return {
        ...state,
        displayLoadDialog: payload,
      };

    case AppReducerActionTypes.CHANGE_ADD_ITEM_DIALOG_STATE:
      return {
        ...state,
        displayAddItemDialog: payload,
      };

    case AppReducerActionTypes.SET_ACTIVE_MENU_ITEM:
      return setActiveMenuItems(state, payload);

    case AppReducerActionTypes.ADD_ACTIVE_MENU_ITEM:
      return addActiveMenuItem(state, payload);

    case AppReducerActionTypes.REMOVE_ACTIVE_MENU_ITEM:
      return removeActiveMenuItem(state, payload);

    case AppReducerActionTypes.SET_SCENARIO_DATA:
      return {
        ...state,
        scenarioData: payload,
      };

    case AppReducerActionTypes.SCENARIO_DATA_CHANGE:
      return {
        ...state,
        scenarioChanged: true,
      };

    case AppReducerActionTypes.UPDATE_SCENARIO_TERRAIN_PIECE:
      return updateScenarioTerrainPiece(state, payload);

    case AppReducerActionTypes.SWITCH_PAGE_TO:
      return {
        ...state,
        page: payload,
      };

    case AppReducerActionTypes.ADD_TERRAIN_PIECE:
      return addTerrainPiece(state, payload);

    case AppReducerActionTypes.TERRAIN_PIECE_DESELECTED:
      return {
        ...state,
        selectedTerrainPiece: null,
      };

    case AppReducerActionTypes.SELECT_TERRAIN_PIECE:
      console.log("Selecting terrain piece: ", payload);
      return {
        ...state,
        selectedTerrainPiece: payload,
      };

    case AppReducerActionTypes.SET_SELECTED_PIECE_ON_TOP:
      return setSelectedPieceOnTop(state);

    default:
      console.log("Unknown action type: ", type);
      return state;
  }
};

export default appStateReducer;
export { AppReducerActionTypes };
