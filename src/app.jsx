import IndexPage from "./components/pages/index-page";

import "./app.css";
import LoadDialog from "./components/molecules/load-dialog";
import useAppContext from "./context/useappcontext";
import { AppReducerActionTypes } from "./context/reducers/appstatereducers";

function App() {
  const context = useAppContext();

  return (
    <>
      <LoadDialog
        onSelectLoad={() => {
          context.appStateDispatch({
            type: AppReducerActionTypes.CHANGE_LOAD_DIALOG_STATE,
            payload: false,
          });
          context.appStateDispatch({
            type: AppReducerActionTypes.REMOVE_DISABLED_MENU_ITEM,
            payload: "Save",
          });
        }}
        displayDialog={context.appState.displayLoadDialog}
        closeDialog={() =>
          context.appStateDispatch({
            type: AppReducerActionTypes.CHANGE_LOAD_DIALOG_STATE,
            payload: false,
          })
        }
      />
      <IndexPage />
    </>
  );
}

export default App;
