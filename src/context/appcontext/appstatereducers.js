import addToArray from "../../utilities/add-to-array";
import removeFromArray from "../../utilities/remove-from-array";

const AppReducerActionTypes = Object.freeze({
  CHANGE_LOAD_DIALOG_STATE: "CHANGE_LOAD_DIALOG_STATE",
  CHANGE_ADD_ITEM_DIALOG_STATE: "CHANGE_ADD_ITEM_DIALOG_STATE",
  REMOVE_ACTIVE_MENU_ITEM: "REMOVE_ACTIVE_MENU_ITEM",
  ADD_ACTIVE_MENU_ITEM: "ADD_ACTIVE_MENU_ITEM",
  SET_ACTIVE_MENU_ITEM: "SET_ACTIVE_MENU_ITEM",
  SET_SCENARIO_DATA: "SET_SCENARIO_DATA",
  UPDATE_SCENARIO_TERRAIN_PIECE: "UPDATE_SCENARIO_TERRAIN_PIECE",
  SWITCH_PAGE: "SWITCH_PAGE",
});

const appStateReducer = (state, action) => {
  const { type, payload } = action;
  const activeMenuItems = [...state.activeMenuItems];

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

    case AppReducerActionTypes.SET_ACTIVE_MENU_ITEM:
      return {
        ...state,
        activeMenuItems: payload,
      };

    case AppReducerActionTypes.ADD_ACTIVE_MENU_ITEM:
      console.log("Reducer ADD_ACTIVE_MENU_ITEM", payload);
      if (Array.isArray(payload))
        payload.forEach((item) => addToArray(activeMenuItems, item));
      else addToArray(activeMenuItems, payload);
      return {
        ...state,
        activeMenuItems: activeMenuItems,
      };

    case AppReducerActionTypes.REMOVE_ACTIVE_MENU_ITEM:
      if (Array.isArray(payload))
        payload.forEach((item) => removeFromArray(activeMenuItems, item));
      else removeFromArray(activeMenuItems, payload);
      return {
        ...state,
        activeMenuItems: activeMenuItems,
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
      console.log("Unknown action type: ", type);
      return state;
  }
};

export default appStateReducer;
export { AppReducerActionTypes };
