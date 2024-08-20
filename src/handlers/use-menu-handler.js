import MENU_ITEMS from "../constants/menu-items";
import PAGES from "../constants/pages";
import { AppReducerActionTypes } from "../context/appcontext/appstatereducers";
import useAppContext from "../context/appcontext/useappcontext";

const useMenuHandler = () => {
  const context = useAppContext();

  const handleMenuItemSelected = (menuItem) => {
    switch (menuItem) {
      case MENU_ITEMS.LOAD:
        context.appStateDispatch({
          type: AppReducerActionTypes.CHANGE_LOAD_DIALOG_STATE,
          payload: true,
        });
        break;

      case MENU_ITEMS.DATA:
        context.appStateDispatch({
          type: AppReducerActionTypes.SWITCH_PAGE,
          payload: PAGES.DATA,
        });
        break;

      case MENU_ITEMS.SAVE:
        console.log("Save menu item selected");
        break;

      case MENU_ITEMS.EDIT:
        context.appStateDispatch({
          type: AppReducerActionTypes.SWITCH_PAGE,
          payload: PAGES.EDIT,
        });
        context.appStateDispatch({
          type: AppReducerActionTypes.ADD_ACTIVE_MENU_ITEM,
          payload: MENU_ITEMS.ADD,
        });
        break;

      case MENU_ITEMS.ADD:
        context.appStateDispatch({
          type: AppReducerActionTypes.CHANGE_ADD_ITEM_DIALOG_STATE,
          payload: true,
        });
        break;

      default:
        console.log("Unknown menu item selected", menuItem);
    }
  };

  return handleMenuItemSelected;
};

export default useMenuHandler;
