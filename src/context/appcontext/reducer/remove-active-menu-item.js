import removeFromArray from "../../../utilities/remove-from-array";

const removeActiveMenuItem = (state, payload) => {
  const activeMenuItems = [...state.activeMenuItems];

  if (Array.isArray(payload))
    payload.forEach((item) => removeFromArray(activeMenuItems, item));
  else removeFromArray(activeMenuItems, payload);
  return {
    ...state,
    activeMenuItems: activeMenuItems,
  };
};

export default removeActiveMenuItem;
