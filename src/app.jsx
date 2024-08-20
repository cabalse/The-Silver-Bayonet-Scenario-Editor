import IndexPage from "./components/04-pages/index-page";
import LoadDialog from "./components/01-molecules/load-dialog";
import useAppContext from "./context/appcontext/useappcontext";
import { AppReducerActionTypes } from "./context/appcontext/appstatereducers";
import PAGES from "./constants/pages";
import JsonViewerPage from "./components/04-pages/json-viewer-page";
import MapEditPage from "./components/04-pages/map-edit-page";
import AddItemDialog from "./components/01-molecules/add-item-dialog";

import "./app.css";

function App() {
  const context = useAppContext();
  let page = null;

  switch (context.appState.page) {
    case PAGES.INDEX:
      page = <IndexPage />;
      break;
    case PAGES.JSON_VIEWER:
    case PAGES.DATA:
      page = <JsonViewerPage />;
      break;
    case PAGES.EDIT:
      page = <MapEditPage />;
      break;
    default:
      console.log("Unknown page: ", context.appState.page);
  }

  return (
    <>
      <LoadDialog
        displayDialog={context.appState.displayLoadDialog}
        closeDialog={() =>
          context.appStateDispatch({
            type: AppReducerActionTypes.CHANGE_LOAD_DIALOG_STATE,
            payload: false,
          })
        }
      />
      <AddItemDialog
        displayDialog={context.appState.displayAddItemDialog}
        closeDialog={() =>
          context.appStateDispatch({
            type: AppReducerActionTypes.CHANGE_ADD_ITEM_DIALOG_STATE,
            payload: false,
          })
        }
      />
      {page}
    </>
  );
}

export default App;
