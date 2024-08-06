import addToArray from "../../utilities/add-to-array";
import removeFromArray from "../../utilities/remove-from-array";

const AppReducerActionTypes = Object.freeze({
  CHANGE_LOAD_DIALOG_STATE: "CHANGE_LOAD_DIALOG_STATE",
  CHANGE_ADD_ITEM_DIALOG_STATE: "CHANGE_ADD_ITEM_DIALOG_STATE",
  ADD_DISABLED_MENU_ITEM: "ADD_DISABLED_MENU_ITEM",
  REMOVE_DISABLED_MENU_ITEM: "REMOVE_DISABLED_MENU_ITEM",
  SET_SCENARIO_DATA: "SET_SCENARIO_DATA",
  SWITCH_PAGE: "SWITCH_PAGE",
});

const appStateReducer = (state, action) => {
  const { type, payload } = action;
  const disabledMenuItems = [...state.disabledMenuItems];

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
