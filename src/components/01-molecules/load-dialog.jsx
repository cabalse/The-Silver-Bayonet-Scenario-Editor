import { useState } from "react";
import BUTTON_TYPES from "../../constants/button-types";
import Button from "../00-atoms/button";
import useAppContext from "../../context/appcontext/useappcontext";
import { AppReducerActionTypes } from "../../context/appcontext/appstatereducers";
import PAGES from "../../constants/pages";
import MENU_ITEMS from "../../constants/menu-items";

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
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
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
              </div>

              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <Button type={BUTTON_TYPES.NEGATIVE} onClick={closeDialog}>
                  Cancel
                </Button>
                <Button type={BUTTON_TYPES.PRIMARY} onClick={handleUpload}>
                  Upload
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default LoadDialog;
