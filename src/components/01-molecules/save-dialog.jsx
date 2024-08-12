// import { useState } from "react";
import BUTTON_TYPES from "../../constants/button-types";
import Button from "../00-atoms/button";
// import useAppContext from "../../context/appcontext/useappcontext";
// import { AppReducerActionTypes } from "../../context/appcontext/appstatereducers";
import DialogLayout from "../03-templates/dialog-layout";

const SaveDialog = ({ displayDialog, closeDialog }) => {
  // const context = useAppContext();

  const handleSave = async () => {
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
                Save Scenario File
              </h3>
            </div>
          </div>
          <div className="sm:flex sm:flex-row-reverse sm:px-6">
            <Button type={BUTTON_TYPES.NEGATIVE} onClick={closeDialog}>
              Cancel
            </Button>
            <Button type={BUTTON_TYPES.PRIMARY} onClick={handleSave}>
              Save
            </Button>
          </div>
        </>
      </DialogLayout>
    );
  } else {
    return null;
  }
};

export default SaveDialog;
