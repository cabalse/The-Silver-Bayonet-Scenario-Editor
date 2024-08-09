import addToArray from "../../utilities/add-to-array";
import removeFromArray from "../../utilities/remove-from-array";

const AppReducerActionTypes = Object.freeze({
  CHANGE_LOAD_DIALOG_STATE: "CHANGE_LOAD_DIALOG_STATE",
  CHANGE_ADD_ITEM_DIALOG_STATE: "CHANGE_ADD_ITEM_DIALOG_STATE",
  ADD_DISABLED_MENU_ITEM: "ADD_DISABLED_MENU_ITEM",
  REMOVE_DISABLED_MENU_ITEM: "REMOVE_DISABLED_MENU_ITEM",
  SET_SCENARIO_DATA: "SET_SCENARIO_DATA",
  UPDATE_SCENARIO_TERRAIN_PIECE: "UPDATE_SCENARIO_TERRAIN_PIECE",
  SWITCH_PAGE: "SWITCH_PAGE",
});

const appStateReducer = (state, action) => {
  const { type, payload } = action;
  const disabledMenuItems = [...state.disabledMenuItems];

  let terrain, terrain_id;

  switch (type) {
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
    case AppReducerActionTypes.ADD_DISABLED_MENU_ITEM:
      if (Array.isArray(payload))
        payload.forEach((item) => addToArray(disabledMenuItems, item));
      else addToArray(disabledMenuItems, payload);
      return {
        ...state,
        disabledMenuItems: disabledMenuItems,
      };
    case AppReducerActionTypes.REMOVE_DISABLED_MENU_ITEM:
      if (Array.isArray(payload))
        payload.forEach((item) => removeFromArray(disabledMenuItems, item));
      else removeFromArray(disabledMenuItems, payload);
      return {
        ...state,
        disabledMenuItems: disabledMenuItems,
      };
    case AppReducerActionTypes.SET_SCENARIO_DATA:
      return {
        ...state,
        scenarioData: payload,
      };
    case AppReducerActionTypes.UPDATE_SCENARIO_TERRAIN_PIECE:
      terrain = [...state.scenarioData.terrain];
      terrain_id = terrain.findIndex((tp) => tp.id === payload.id);

      terrain[terrain_id].position.x = Math.floor(payload.x);
      terrain[terrain_id].position.y = Math.floor(payload.y);
      if (payload.rot) terrain[terrain_id].rotation = Math.floor(payload.rot);

      return {
        ...state,
        scenarioData: {
          ...state.scenarioData,
          terrain: terrain,
        },
      };
    case AppReducerActionTypes.SWITCH_PAGE:
      return {
        ...state,
        page: payload,
      };
    default:
      return state;
  }
};

export default appStateReducer;
export { AppReducerActionTypes };
