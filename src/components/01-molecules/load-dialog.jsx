import { useState } from "react";
import BUTTON_TYPES from "../../constants/button-types";
import Button from "../00-atoms/button";
import useAppContext from "../../context/appcontext/useappcontext";
import { AppReducerActionTypes } from "../../context/appcontext/appstatereducers";
import PAGES from "../../constants/pages";
import MENU_ITEMS from "../../constants/menu-items";
import DialogLayout from "../03-templates/dialog-layout";

const LoadDialog = ({ displayDialog, closeDialog }) => {
  const context = useAppContext();
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      let reader = new FileReader();
      reader.onload = function () {
        if (reader.result) {
          const data = JSON.parse(reader.result.toString());
          context.appStateDispatch({
            type: AppReducerActionTypes.SET_SCENARIO_DATA,
            payload: data,
          });
          context.appStateDispatch({
            type: AppReducerActionTypes.SWITCH_PAGE,
            payload: PAGES.JSON_VIEWER,
          });
          context.appStateDispatch({
            type: AppReducerActionTypes.REMOVE_DISABLED_MENU_ITEM,
            payload: MENU_ITEMS.EDIT,
          });
        }
      };
      reader.onerror = function () {
        console.error(reader.error);
      };
      reader.readAsText(file);
    }
    closeDialog();
  };

  if (displayDialog) {
    return (
      <DialogLayout>
        <>
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"></div>
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3
                className="text-base font-semibold leading-6 text-gray-900"
                id="modal-title"
              >
                Load Scenario File
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Select a scenario file to load.
                </p>
                <input
                  type="file"
                  className="mt-4"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>
          <div className="sm:flex sm:flex-row-reverse sm:px-6">
            <Button type={BUTTON_TYPES.NEGATIVE} onClick={closeDialog}>
              Cancel
            </Button>
            <Button type={BUTTON_TYPES.PRIMARY} onClick={handleUpload}>
              Upload
            </Button>
          </div>
        </>
      </DialogLayout>
    );
  } else {
    return null;
  }
};

export default LoadDialog;
