import MENU_ITEMS from "../../../constants/menu-items";

const setActiveMenuItems = (state, payload) => {
  let activeMenuItems = payload;

  // If the scenario has changed, add the save and export menu items
  if (state.scenarioChanged) {
    if (!activeMenuItems.includes(MENU_ITEMS.SAVE)) {
      activeMenuItems = [...payload, MENU_ITEMS.SAVE, MENU_ITEMS.EXPORT];
    }
  }

  return {
    ...state,
    activeMenuItems: activeMenuItems,
  };
};

export default setActiveMenuItems;
