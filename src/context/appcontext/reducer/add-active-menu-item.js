import addToArray from "../../../utilities/add-to-array";

const addActiveMenuItem = (state, payload) => {
  const activeMenuItems = [...state.activeMenuItems];

  if (Array.isArray(payload))
    payload.forEach((item) => addToArray(activeMenuItems, item));
  else addToArray(activeMenuItems, payload);
  return {
    ...state,
    activeMenuItems: activeMenuItems,
  };
};

export default addActiveMenuItem;
