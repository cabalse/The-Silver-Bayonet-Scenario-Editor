import MENU_ITEMS from "../../constants/menu-items";
import { AppReducerActionTypes } from "../../context/reducers/appstatereducers";
import useAppContext from "../../context/useappcontext";
import PageTitle from "../atoms/page-title";
import PageMenu from "./page-menu";

const PageHeader = ({ title }) => {
  const context = useAppContext();

  const handleMenuItemSelected = (menuItem) => {
    switch (menuItem) {
      case MENU_ITEMS.LOAD:
        context.appStateDispatch({
          type: AppReducerActionTypes.CHANGE_LOAD_DIALOG_STATE,
          payload: true,
        });
        break;
      case MENU_ITEMS.SAVE:
        console.log("Save menu item selected");
        break;
      default:
        console.log("Unknown menu item selected", menuItem);
    }
  };

  return (
    <header className="w-full flex flex-col p-2 border-2 border-slate-200">
      <PageTitle title={title} />
      <PageMenu
        onSelectedMenuItem={handleMenuItemSelected}
        disabledMenuItems={context.appState.disabledMenuItems}
      />
    </header>
  );
};

export default PageHeader;
