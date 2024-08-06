import DialogLayout from "../03-templates/dialog-layout";

const AddItemDialog = ({ displayDialog, closeDialog }) => {
  if (displayDialog) {
    return (
      <DialogLayout>
        <p>Add Item</p>
      </DialogLayout>
    );
  } else {
    return null;
  }
};

export default AddItemDialog;
