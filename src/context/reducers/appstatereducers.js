import addToArray from "../../utilities/add-to-array";
import removeFromArray from "../../utilities/remove-from-array";

const AppReducerActionTypes = Object.freeze({
  CHANGE_LOAD_DIALOG_STATE: "CHANGE_LOAD_DIALOG_STATE",
  ADD_DISABLED_MENU_ITEM: "ADD_DISABLED_MENU_ITEM",
  REMOVE_DISABLED_MENU_ITEM: "REMOVE_DISABLED_MENU_ITEM",
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
    case AppReducerActionTypes.ADD_DISABLED_MENU_ITEM:
      addToArray(disabledMenuItems, payload);
      return {
        ...state,
        disabledMenuItems: disabledMenuItems,
      };
    case AppReducerActionTypes.REMOVE_DISABLED_MENU_ITEM:
      removeFromArray(disabledMenuItems, payload);
      return {
        ...state,
        disabledMenuItems: disabledMenuItems,
      };
    default:
      return state;
  }
};

export default appStateReducer;
export { AppReducerActionTypes };
